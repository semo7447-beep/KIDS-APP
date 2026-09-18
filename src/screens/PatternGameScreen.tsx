import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { palette } from '../theme/colors';
import BackBar from '../components/BackBar';

const SHAPE_COLORS = [palette.red, palette.blue, palette.yellow, palette.green, palette.purple];
const TOTAL_ROUNDS = 5;
const SEQUENCE_LENGTH = 4;

function buildRound() {
  const [colorA, colorB] = shuffleTwo(SHAPE_COLORS);
  const sequence = Array.from({ length: SEQUENCE_LENGTH }, (_, i) => (i % 2 === 0 ? colorA : colorB));
  const answer = SEQUENCE_LENGTH % 2 === 0 ? colorA : colorB;
  const wrongOptions = SHAPE_COLORS.filter((c) => c !== answer);
  const distractor = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
  const options = Math.random() > 0.5 ? [answer, distractor] : [distractor, answer];
  return { sequence, answer, options };
}

function shuffleTwo(colors: string[]): [string, string] {
  const copy = [...colors];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return [copy[0], copy[1]];
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
  sequenceRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 40 },
  shape: { width: 50, height: 50, borderRadius: 12, marginHorizontal: 6 },
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
    width: 90,
    height: 90,
    borderRadius: 20,
    marginHorizontal: 16,
    borderWidth: 4,
    borderColor: palette.white,
  },
  shakeHint: { borderColor: palette.red },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.dark, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
