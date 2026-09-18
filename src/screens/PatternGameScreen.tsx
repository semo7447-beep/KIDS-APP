import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { palette } from '../theme/colors';
import BackBar from '../components/BackBar';

const SHAPE_COLORS = [palette.red, palette.blue, palette.yellow, palette.green, palette.purple, palette.orange];
const TOTAL_ROUNDS = 6;
const SEQUENCE_LENGTH = 6;

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildRound() {
  const groupSize = Math.random() > 0.5 ? 3 : 2;
  const cycle = shuffle(SHAPE_COLORS).slice(0, groupSize);
  const sequence = Array.from({ length: SEQUENCE_LENGTH }, (_, i) => cycle[i % cycle.length]);
  const answer = cycle[SEQUENCE_LENGTH % cycle.length];
  const wrongPool = SHAPE_COLORS.filter((c) => !cycle.includes(c));
  const distractors = shuffle(wrongPool).slice(0, 2);
  const options = shuffle([answer, ...distractors]);
  return { sequence, answer, options };
}

export default function PatternGameScreen() {
  const { t, lang } = useLanguage();
  const { markVisited } = useProgress();
  const [round, setRound] = useState(() => buildRound());
  const [roundIndex, setRoundIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const finished = roundIndex >= TOTAL_ROUNDS;

  useEffect(() => {
    markVisited('pattern');
  }, []);

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  useEffect(() => {
    if (finished) speak(t.wellDone);
  }, [finished]);

  const onChoose = (color: string) => {
    if (feedback) return;
    if (color === round.answer) {
      setFeedback('correct');
      speak(lang === 'ar' ? 'صحيح!' : 'Correct!');
      setTimeout(() => {
        setFeedback(null);
        setRoundIndex((r) => r + 1);
        setRound(buildRound());
      }, 700);
    } else {
      setFeedback('wrong');
      setTimeout(() => setFeedback(null), 600);
    }
  };

  const restart = () => {
    setRoundIndex(0);
    setRound(buildRound());
    setFeedback(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackBar title={t.pattern} />
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.center}>
          <Text style={styles.progress}>{roundIndex + 1} / {TOTAL_ROUNDS}</Text>
          <View style={styles.sequenceRow}>
            {round.sequence.map((color, i) => (
              <View key={i} style={[styles.shape, { backgroundColor: color }]} />
            ))}
            <View style={[styles.shape, styles.questionShape]}>
              <Text style={styles.questionMark}>؟</Text>
            </View>
          </View>
          <View style={styles.optionsRow}>
            {round.options.map((color, i) => (
              <Pressable key={i} onPress={() => onChoose(color)}>
                <View
                  style={[
                    styles.optionShape,
                    { backgroundColor: color },
                    feedback === 'wrong' ? styles.shakeHint : null,
                  ]}
                />
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
  progress: { fontSize: 16, fontWeight: '700', color: palette.dark, marginBottom: 16 },
  sequenceRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 40, flexWrap: 'wrap', justifyContent: 'center', width: 320 },
  shape: { width: 36, height: 36, borderRadius: 10, marginHorizontal: 4, marginVertical: 4 },
  questionShape: {
    backgroundColor: palette.white,
    borderWidth: 3,
    borderColor: palette.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionMark: { fontSize: 24, fontWeight: '900', color: palette.dark },
  optionsRow: { flexDirection: 'row' },
  optionShape: {
    width: 82,
    height: 82,
    borderRadius: 18,
    marginHorizontal: 10,
    borderWidth: 4,
    borderColor: palette.white,
  },
  shakeHint: { borderColor: palette.red },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.dark, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
