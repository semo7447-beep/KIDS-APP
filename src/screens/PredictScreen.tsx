import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { palette } from '../theme/colors';
import BackBar from '../components/BackBar';

type Scenario = { prompt: string; correct: string; wrong: string };

const SCENARIOS: Scenario[] = [
  { prompt: '🍦☀️', correct: '💧', wrong: '❄️' },
  { prompt: '🎈📌', correct: '💥', wrong: '🎁' },
  { prompt: '🥚🐔', correct: '🐣', wrong: '🐟' },
  { prompt: '🌧️🌱', correct: '🌻', wrong: '🚗' },
  { prompt: '🐛', correct: '🦋', wrong: '🐘' },
  { prompt: '🎂🕯️', correct: '🎉', wrong: '🌧️' },
];

const TOTAL_ROUNDS = 5;

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildOrder(): Scenario[] {
  return shuffle(SCENARIOS).slice(0, TOTAL_ROUNDS);
}

export default function PredictScreen() {
  const { t, lang } = useLanguage();
  const { markVisited } = useProgress();
  const [order, setOrder] = useState<Scenario[]>(() => buildOrder());
  const [roundIndex, setRoundIndex] = useState(0);
  const [options, setOptions] = useState<string[]>(() => shuffle([order[0].correct, order[0].wrong]));
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const finished = roundIndex >= order.length;

  useEffect(() => {
    markVisited('predict');
  }, []);

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  useEffect(() => {
    if (finished) speak(t.wellDone);
  }, [finished]);

  const current = order[roundIndex];

  const onChoose = (option: string) => {
    if (feedback || !current) return;
    if (option === current.correct) {
      setFeedback('correct');
      speak(lang === 'ar' ? 'صحيح!' : 'Correct!');
      setTimeout(() => {
        setFeedback(null);
        const nextIndex = roundIndex + 1;
        setRoundIndex(nextIndex);
        if (order[nextIndex]) setOptions(shuffle([order[nextIndex].correct, order[nextIndex].wrong]));
      }, 700);
    } else {
      setFeedback('wrong');
      setTimeout(() => setFeedback(null), 500);
    }
  };

  const restart = () => {
    const fresh = buildOrder();
    setOrder(fresh);
    setRoundIndex(0);
    setOptions(shuffle([fresh[0].correct, fresh[0].wrong]));
    setFeedback(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackBar title={t.predictGame} />
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.center}>
          <Text style={styles.progress}>{roundIndex + 1} / {order.length}</Text>
          <Text style={styles.prompt}>{current?.prompt}</Text>
          <Text style={styles.questionMark}>؟</Text>
          <View style={styles.optionsRow}>
            {options.map((option, i) => (
              <Pressable key={i} onPress={() => onChoose(option)}>
                <View style={[styles.optionTile, feedback === 'wrong' ? styles.shakeHint : null]}>
                  <Text style={styles.optionEmoji}>{option}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  progress: { fontSize: 16, fontWeight: '700', color: palette.dark, marginBottom: 8 },
  prompt: { fontSize: 60, marginBottom: 4 },
  questionMark: { fontSize: 30, fontWeight: '900', color: palette.dark, marginBottom: 30 },
  optionsRow: { flexDirection: 'row' },
  optionTile: {
    width: 100,
    height: 100,
    borderRadius: 22,
    marginHorizontal: 14,
    backgroundColor: palette.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: palette.green,
  },
  optionEmoji: { fontSize: 50 },
  shakeHint: { borderColor: palette.red },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.dark, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
