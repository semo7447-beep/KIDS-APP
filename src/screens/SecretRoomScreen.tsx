import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { palette } from '../theme/colors';
import BackBar from '../components/BackBar';

const TOTAL_ROUNDS = 4;
const SEQUENCE_LENGTH = 5;
const SHOW_MS = 3500;
const GEM_COLORS = [palette.red, palette.blue, palette.yellow, palette.green];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildSequence(): string[] {
  return Array.from({ length: SEQUENCE_LENGTH }, () => GEM_COLORS[Math.floor(Math.random() * GEM_COLORS.length)]);
}

export default function SecretRoomScreen() {
  const { t, lang } = useLanguage();
  const { markVisited } = useProgress();
  const [roundIndex, setRoundIndex] = useState(0);
  const [sequence, setSequence] = useState<string[]>(() => buildSequence());
  const [phase, setPhase] = useState<'show' | 'input'>('show');
  const [input, setInput] = useState<string[]>([]);
  const [shake, setShake] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const finished = roundIndex >= TOTAL_ROUNDS;

  useEffect(() => {
    markVisited('secretroom');
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
    setInput([]);
    setUnlocked(false);
    speak(t.memorize);
    const timer = setTimeout(() => {
      setPhase('input');
      speak(t.repeatOrder);
    }, SHOW_MS);
    return () => clearTimeout(timer);
  }, [roundIndex, finished]);

  const onTapColor = (color: string) => {
    if (phase !== 'input' || unlocked) return;
    const nextIndex = input.length;
    if (sequence[nextIndex] === color) {
      const nextInput = [...input, color];
      setInput(nextInput);
      if (nextInput.length === sequence.length) {
        setUnlocked(true);
        speak(t.unlocked);
        setTimeout(() => setRoundIndex((r) => r + 1), 1100);
      }
    } else {
      setShake(true);
      setInput([]);
      setTimeout(() => setShake(false), 400);
    }
  };

  const restart = () => {
    setRoundIndex(0);
    setSequence(buildSequence());
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackBar title={t.secretRoom} />
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.center}>
          <Text style={styles.progressLight}>{roundIndex + 1} / {TOTAL_ROUNDS}</Text>
          <View style={styles.roomPanel}>
            <Text style={styles.doorEmoji}>{unlocked ? '🔓' : '🔒'}</Text>

            <Text style={styles.instruction}>{phase === 'show' ? t.memorize : t.repeatOrder}</Text>

            <View style={styles.slotsRow}>
              {sequence.map((color, i) => {
                const showColor = phase === 'show' || i < input.length;
                return (
                  <View
                    key={i}
                    style={[
                      styles.slot,
                      showColor ? { backgroundColor: color } : styles.slotEmpty,
                      shake ? styles.shakeHint : null,
                    ]}
                  />
                );
              })}
            </View>

            {phase === 'input' ? (
              <View style={styles.optionsRow}>
                {GEM_COLORS.map((color, i) => (
                  <Pressable key={i} onPress={() => onTapColor(color)}>
                    <View style={[styles.gemBtn, { backgroundColor: color }]} />
                  </Pressable>
                ))}
              </View>
            ) : null}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  progressLight: { fontSize: 16, fontWeight: '700', color: palette.dark, marginBottom: 12 },
  roomPanel: {
    backgroundColor: '#2B2140',
    borderRadius: 28,
    paddingVertical: 28,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  doorEmoji: { fontSize: 60, marginBottom: 10 },
  instruction: { fontSize: 18, fontWeight: '800', color: palette.white, marginBottom: 20 },
  slotsRow: { flexDirection: 'row', marginBottom: 30 },
  slot: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 8,
    borderWidth: 3,
    borderColor: palette.white,
  },
  slotEmpty: { backgroundColor: 'rgba(255,255,255,0.15)' },
  shakeHint: { borderColor: palette.red },
  optionsRow: { flexDirection: 'row' },
  gemBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginHorizontal: 10,
    borderWidth: 3,
    borderColor: palette.white,
  },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.dark, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
