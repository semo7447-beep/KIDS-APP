import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { palette } from '../theme/colors';
import { MEMORY_EMOJIS } from '../data/content';
import BackBar from '../components/BackBar';

const TOTAL_ROUNDS = 6;
const SET_SIZE = 6;
const SHOW_MS = 2000;

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
  const items = pool.slice(0, SET_SIZE);
  const missing = items[Math.floor(Math.random() * items.length)];
  const remaining = items.filter((e) => e !== missing);
  const distractors = pool.slice(SET_SIZE, SET_SIZE + 3);
  const options = shuffle([missing, ...distractors]);
  return { items, missing, remaining, options };
}

export default function WhatsMissingScreen() {
  const { t, lang } = useLanguage();
  const { markVisited } = useProgress();
  const [round, setRound] = useState(() => buildRound());
  const [roundIndex, setRoundIndex] = useState(0);
  const [phase, setPhase] = useState<'show' | 'guess'>('show');
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const finished = roundIndex >= TOTAL_ROUNDS;

  useEffect(() => {
    markVisited('whatsmissing');
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
    setPhase('show');
    speak(t.memorize);
    const timer = setTimeout(() => setPhase('guess'), SHOW_MS);
    return () => clearTimeout(timer);
  }, [roundIndex, finished]);

  const onChoose = (emoji: string) => {
    if (feedback) return;
    if (emoji === round.missing) {
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
      <BackBar title={t.whatsMissing} />
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
          {phase === 'show' ? (
            <>
              <Text style={styles.instruction}>{t.memorize}</Text>
              <View style={styles.row}>
                {round.items.map((emoji, i) => (
                  <View key={i} style={styles.tile}>
                    <Text style={styles.tileEmoji}>{emoji}</Text>
                  </View>
                ))}
              </View>
            </>
          ) : (
            <>
              <Text style={styles.instruction}>{t.whatDisappeared}</Text>
              <View style={styles.row}>
                {round.remaining.map((emoji, i) => (
                  <View key={i} style={[styles.tile, styles.tileDim]}>
                    <Text style={styles.tileEmoji}>{emoji}</Text>
                  </View>
                ))}
              </View>
              <View style={[styles.row, { marginTop: 24 }]}>
                {round.options.map((emoji, i) => (
                  <Pressable key={i} onPress={() => onChoose(emoji)}>
                    <View
                      style={[
                        styles.optionTile,
                        feedback === 'wrong' ? styles.shakeHint : null,
                      ]}
                    >
                      <Text style={styles.tileEmoji}>{emoji}</Text>
                    </View>
                  </Pressable>
                ))}
              </View>
            </>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  progress: { fontSize: 16, fontWeight: '700', color: palette.dark, marginBottom: 4 },
  instruction: { fontSize: 20, fontWeight: '800', color: palette.dark, marginBottom: 16 },
  row: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
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
  tileDim: { opacity: 0.9 },
  tileEmoji: { fontSize: 36 },
  optionTile: {
    width: 74,
    height: 74,
    margin: 6,
    borderRadius: 16,
    backgroundColor: palette.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: palette.orange,
  },
  shakeHint: { borderColor: palette.red },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.dark, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
