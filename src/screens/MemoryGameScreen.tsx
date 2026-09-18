import React, { useEffect, useMemo, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { palette } from '../theme/colors';
import { MEMORY_EMOJIS } from '../data/content';
import BackBar from '../components/BackBar';

type Card = {
  id: number;
  emoji: string;
  matched: boolean;
};

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildDeck(): Card[] {
  const chosen = shuffle(MEMORY_EMOJIS).slice(0, 4);
  const pairs = shuffle([...chosen, ...chosen]);
  return pairs.map((emoji, id) => ({ id, emoji, matched: false }));
}

export default function MemoryGameScreen() {
  const { t, lang } = useLanguage();
  const { markVisited } = useProgress();
  const [deck, setDeck] = useState<Card[]>(() => buildDeck());
  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    markVisited('memory');
  }, []);

  const won = deck.every((c) => c.matched);

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  const onCardPress = (id: number) => {
    if (busy || flipped.includes(id)) return;
    const card = deck.find((c) => c.id === id);
    if (!card || card.matched) return;

    const nextFlipped = [...flipped, id];
    setFlipped(nextFlipped);

    if (nextFlipped.length === 2) {
      setBusy(true);
      setMoves((m) => m + 1);
      const [a, b] = nextFlipped;
      const cardA = deck.find((c) => c.id === a)!;
      const cardB = deck.find((c) => c.id === b)!;
      if (cardA.emoji === cardB.emoji) {
        setTimeout(() => {
          setDeck((prev) => prev.map((c) => (c.id === a || c.id === b ? { ...c, matched: true } : c)));
          setFlipped([]);
          setBusy(false);
          speak(lang === 'ar' ? 'رائع!' : 'Great!');
        }, 400);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setBusy(false);
        }, 800);
      }
    }
  };

  const restart = () => {
    setDeck(buildDeck());
    setFlipped([]);
    setMoves(0);
    setBusy(false);
  };

  useEffect(() => {
    if (won) speak(t.wellDone);
  }, [won]);

  return (
    <SafeAreaView style={styles.container}>
      <BackBar title={t.memoryGame} />
      <Text style={styles.moves}>{t.moves}: {moves}</Text>
      {won ? (
        <View style={styles.center}>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.grid}>
          {deck.map((card) => {
            const isFaceUp = card.matched || flipped.includes(card.id);
            return (
              <Pressable key={card.id} onPress={() => onCardPress(card.id)}>
                <View style={[styles.card, isFaceUp ? styles.cardFaceUp : styles.cardFaceDown]}>
                  <Text style={styles.cardText}>{isFaceUp ? card.emoji : '❓'}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  moves: { textAlign: 'center', fontSize: 16, fontWeight: '700', color: palette.dark, marginBottom: 4 },
  grid: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' },
  card: {
    width: 78,
    height: 78,
    margin: 6,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFaceDown: { backgroundColor: palette.purple },
  cardFaceUp: { backgroundColor: palette.white, borderWidth: 3, borderColor: palette.green },
  cardText: { fontSize: 34 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.dark, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
