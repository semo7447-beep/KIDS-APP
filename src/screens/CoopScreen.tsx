import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { GAME_CARDS } from '../data/games';
import WorldHeader from '../components/WorldHeader';

const CARD = GAME_CARDS.find((c) => c.id === 'coop')!;

const BUILD_SEQUENCE = ['🎈', '🎁', '🎂', '🕯️', '🎉'];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function CoopScreen() {
  const { t, lang } = useLanguage();
  const [placedCount, setPlacedCount] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);
  const [options, setOptions] = useState(() => shuffle(BUILD_SEQUENCE));
  const [feedback, setFeedback] = useState<'wrong' | null>(null);
  const finished = placedCount >= BUILD_SEQUENCE.length;

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  useEffect(() => {
    if (finished) speak(t.wellDone);
  }, [finished]);

  const onChoose = (piece: string) => {
    if (feedback || finished) return;
    const nextNeeded = BUILD_SEQUENCE[placedCount];
    if (piece === nextNeeded) {
      speak(lang === 'ar' ? 'رائع!' : 'Nice!');
      setPlacedCount((c) => c + 1);
      setCurrentPlayer((p) => (p === 1 ? 2 : 1));
      setOptions(shuffle(BUILD_SEQUENCE));
    } else {
      setFeedback('wrong');
      setTimeout(() => setFeedback(null), 500);
    }
  };

  const restart = () => {
    setPlacedCount(0);
    setCurrentPlayer(1);
    setOptions(shuffle(BUILD_SEQUENCE));
    setFeedback(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <WorldHeader title={lang === 'ar' ? CARD.titleAr : CARD.titleEn} image={CARD.worldImage} />
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.celebrateEmoji}>🎉🎊</Text>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.center}>
          <View style={styles.turnBadge}>
            <Text style={styles.turnText}>
              {t.yourTurn} — {lang === 'ar' ? `اللاعب ${currentPlayer}` : `Player ${currentPlayer}`}
            </Text>
          </View>
          <View style={styles.buildRow}>
            {BUILD_SEQUENCE.map((piece, i) => (
              <View key={i} style={styles.buildSlot}>
                <Text style={styles.buildEmoji}>{i < placedCount ? piece : ''}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.instruction}>{t.workTogether}</Text>
          <View style={styles.optionsRow}>
            {options.map((piece, i) => (
              <Pressable key={i} onPress={() => onChoose(piece)}>
                <View style={[styles.optionTile, feedback === 'wrong' ? styles.shakeHint : null]}>
                  <Text style={styles.optionEmoji}>{piece}</Text>
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
  turnBadge: {
    backgroundColor: palette.green,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 8,
    marginBottom: 20,
  },
  turnText: { color: palette.white, fontWeight: '900', fontSize: 16 },
  buildRow: { flexDirection: 'row', marginBottom: 20 },
  buildSlot: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginHorizontal: 5,
    backgroundColor: palette.white,
    borderWidth: 2,
    borderColor: palette.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buildEmoji: { fontSize: 28 },
  instruction: { fontSize: 15, fontWeight: '700', color: palette.dark, opacity: 0.7, marginBottom: 16 },
  optionsRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: 300 },
  optionTile: {
    width: 70,
    height: 70,
    margin: 6,
    borderRadius: 16,
    backgroundColor: palette.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: palette.orange,
  },
  shakeHint: { borderColor: palette.red },
  optionEmoji: { fontSize: 32 },
  celebrateEmoji: { fontSize: 60, marginBottom: 10 },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.dark, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
