import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { palette } from '../theme/colors';
import { MEMORY_EMOJIS } from '../data/content';
import BackBar from '../components/BackBar';

const TOTAL_ROUNDS = 6;
const GRID_SIZE = 6;

function buildRound() {
  const shuffled = [...MEMORY_EMOJIS].sort(() => Math.random() - 0.5);
  const common = shuffled[0];
  const odd = shuffled[1];
  const oddIndex = Math.floor(Math.random() * GRID_SIZE);
  const items = Array.from({ length: GRID_SIZE }, (_, i) => (i === oddIndex ? odd : common));
  return { items, oddIndex };
}

export default function OddOneOutScreen() {
  const { t, lang } = useLanguage();
  const { markVisited } = useProgress();
  const [round, setRound] = useState(() => buildRound());
  const [roundIndex, setRoundIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const finished = roundIndex >= TOTAL_ROUNDS;

  useEffect(() => {
    markVisited('oddoneout');
  }, []);

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  useEffect(() => {
    if (finished) speak(t.wellDone);
  }, [finished]);

  const onChoose = (index: number) => {
    if (feedback) return;
    if (index === round.oddIndex) {
      setFeedback('correct');
      speak(lang === 'ar' ? 'صحيح!' : 'Correct!');
      setTimeout(() => {
        setFeedback(null);
        setRoundIndex((r) => r + 1);
        setRound(buildRound());
      }, 700);
    } else {
      setFeedback('wrong');
      setTimeout(() => setFeedback(null), 500);
    }
  };

  const restart = () => {
    setRoundIndex(0);
    setRound(buildRound());
    setFeedback(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackBar title={t.oddOneOut} />
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
          <Text style={styles.instruction}>{t.findDifferent}</Text>
          <View style={styles.grid}>
            {round.items.map((emoji, i) => (
              <Pressable key={i} onPress={() => onChoose(i)}>
                <View style={styles.tile}>
                  <Text style={styles.tileEmoji}>{emoji}</Text>
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
  progress: { fontSize: 16, fontWeight: '700', color: palette.dark, marginBottom: 4 },
  instruction: { fontSize: 18, fontWeight: '800', color: palette.dark, marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: 324 },
  tile: {
    width: 96,
    height: 96,
    margin: 6,
    borderRadius: 20,
    backgroundColor: palette.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: palette.blue,
  },
  tileEmoji: { fontSize: 44 },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.dark, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
