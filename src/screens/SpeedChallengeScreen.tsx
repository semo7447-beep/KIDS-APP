import React, { useEffect, useRef, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { palette } from '../theme/colors';
import { MEMORY_EMOJIS } from '../data/content';
import BackBar from '../components/BackBar';

const TOTAL_ROUNDS = 6;
const OPTIONS_COUNT = 7;
const TIME_MS = 5000;
const TICK_MS = 100;

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildRound() {
  const pool = shuffle(MEMORY_EMOJIS);
  const options = pool.slice(0, OPTIONS_COUNT);
  const target = options[Math.floor(Math.random() * options.length)];
  return { options: shuffle(options), target };
}

export default function SpeedChallengeScreen() {
  const { t, lang } = useLanguage();
  const { markVisited } = useProgress();
  const [roundIndex, setRoundIndex] = useState(0);
  const [round, setRound] = useState(() => buildRound());
  const [timeLeft, setTimeLeft] = useState(TIME_MS);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | 'timeout' | null>(null);
  const finished = roundIndex >= TOTAL_ROUNDS;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    markVisited('speed');
  }, []);

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  useEffect(() => {
    if (finished) {
      speak(t.wellDone);
      return;
    }
    setTimeLeft(TIME_MS);
    speak(t.findTarget);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= TICK_MS) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setFeedback('timeout');
          speak(t.timeUp);
          setTimeout(() => {
            setFeedback(null);
            setRound(buildRound());
          }, 900);
          return 0;
        }
        return prev - TICK_MS;
      });
    }, TICK_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [roundIndex, finished]);

  const onChoose = (emoji: string) => {
    if (feedback || !round) return;
    if (emoji === round.target) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setFeedback('correct');
      speak(lang === 'ar' ? 'صحيح!' : 'Correct!');
      setTimeout(() => {
        setFeedback(null);
        setRoundIndex((r) => r + 1);
        setRound(buildRound());
      }, 700);
    } else {
      setFeedback('wrong');
      setTimeout(() => setFeedback((f) => (f === 'wrong' ? null : f)), 400);
    }
  };

  const restart = () => {
    setRoundIndex(0);
    setRound(buildRound());
    setFeedback(null);
  };

  const timePercent = Math.max(0, Math.min(100, (timeLeft / TIME_MS) * 100));

  return (
    <SafeAreaView style={styles.container}>
      <BackBar title={t.speedChallenge} />
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
          <View style={styles.timerTrack}>
            <View style={[styles.timerFill, { width: `${timePercent}%` }]} />
          </View>
          <View style={styles.targetRow}>
            <Text style={styles.targetLabel}>{t.findTarget}</Text>
            <Text style={styles.targetEmoji}>{round.target}</Text>
          </View>
          {feedback === 'timeout' ? <Text style={styles.feedbackText}>{t.timeUp}</Text> : null}
          <View style={styles.grid}>
            {round.options.map((emoji, i) => (
              <Pressable key={i} onPress={() => onChoose(emoji)}>
                <View style={[styles.tile, feedback === 'wrong' ? styles.shakeHint : null]}>
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
  progress: { fontSize: 16, fontWeight: '700', color: palette.dark, marginBottom: 8 },
  timerTrack: {
    width: 220,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#E0D7C6',
    overflow: 'hidden',
    marginBottom: 14,
  },
  timerFill: { height: '100%', backgroundColor: palette.orange },
  targetRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  targetLabel: { fontSize: 18, fontWeight: '800', color: palette.dark, marginHorizontal: 8 },
  targetEmoji: { fontSize: 44 },
  feedbackText: { fontSize: 16, fontWeight: '800', color: palette.red, marginBottom: 8 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: 260 },
  tile: {
    width: 74,
    height: 74,
    margin: 6,
    borderRadius: 16,
    backgroundColor: palette.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: palette.blue,
  },
  shakeHint: { borderColor: palette.red },
  tileEmoji: { fontSize: 36 },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.dark, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
