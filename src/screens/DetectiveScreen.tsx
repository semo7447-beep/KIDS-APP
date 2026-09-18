import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { GAME_CARDS } from '../data/games';
import WorldHeader from '../components/WorldHeader';

const CARD = GAME_CARDS.find((c) => c.id === 'detective')!;

const CLUE_COLORS = [palette.red, palette.blue, palette.green, palette.yellow];
const CLUE_OBJECTS = ['👟', '🎩', '⌚', '🎒'];
const TOTAL_ROUNDS = 6;

type Suspect = { color: string; object: string };

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildRound() {
  const target: Suspect = {
    color: CLUE_COLORS[Math.floor(Math.random() * CLUE_COLORS.length)],
    object: CLUE_OBJECTS[Math.floor(Math.random() * CLUE_OBJECTS.length)],
  };
  const suspects: Suspect[] = [target];
  let guard = 0;
  while (suspects.length < 4 && guard < 50) {
    const candidate: Suspect = {
      color: CLUE_COLORS[Math.floor(Math.random() * CLUE_COLORS.length)],
      object: CLUE_OBJECTS[Math.floor(Math.random() * CLUE_OBJECTS.length)],
    };
    const matchesBoth = candidate.color === target.color && candidate.object === target.object;
    const dup = suspects.some((s) => s.color === candidate.color && s.object === candidate.object);
    if (!matchesBoth && !dup) suspects.push(candidate);
    guard++;
  }
  return { target, suspects: shuffle(suspects) };
}

export default function DetectiveScreen() {
  const { t, lang } = useLanguage();
  const [roundIndex, setRoundIndex] = useState(0);
  const [round, setRound] = useState(() => buildRound());
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const finished = roundIndex >= TOTAL_ROUNDS;

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  useEffect(() => {
    if (finished) speak(t.wellDone);
  }, [finished]);

  const onChoose = (suspect: Suspect) => {
    if (feedback) return;
    if (suspect.color === round.target.color && suspect.object === round.target.object) {
      setFeedback('correct');
      speak(lang === 'ar' ? 'وجدته!' : 'Found them!');
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
      <WorldHeader title={lang === 'ar' ? CARD.titleAr : CARD.titleEn} image={CARD.worldImage} />
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
          <Text style={styles.clueLabel}>{lang === 'ar' ? 'الأدلة' : 'Clues'}</Text>
          <View style={styles.clueRow}>
            <View style={[styles.clueSwatch, { backgroundColor: round.target.color }]} />
            <Text style={styles.clueObject}>{round.target.object}</Text>
          </View>
          <View style={styles.suspectsGrid}>
            {round.suspects.map((s, i) => (
              <Pressable key={i} onPress={() => onChoose(s)}>
                <View
                  style={[
                    styles.suspectCard,
                    { backgroundColor: s.color },
                    feedback === 'wrong' ? styles.shakeHint : null,
                  ]}
                >
                  <Text style={styles.suspectPerson}>🧍</Text>
                  <Text style={styles.suspectObject}>{s.object}</Text>
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
  progress: { fontSize: 16, fontWeight: '700', color: palette.dark, marginTop: 8, marginBottom: 6 },
  clueLabel: { fontSize: 16, fontWeight: '800', color: palette.dark, marginBottom: 8 },
  clueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.white,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: palette.dark,
  },
  clueSwatch: { width: 36, height: 36, borderRadius: 8, marginHorizontal: 10 },
  clueObject: { fontSize: 32, marginHorizontal: 10 },
  suspectsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: 280 },
  suspectCard: {
    width: 120,
    height: 120,
    margin: 8,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: palette.white,
  },
  shakeHint: { borderColor: palette.dark },
  suspectPerson: { fontSize: 40 },
  suspectObject: { fontSize: 24, marginTop: 2 },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.dark, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
