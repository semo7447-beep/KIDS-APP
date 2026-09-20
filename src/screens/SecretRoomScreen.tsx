import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { SECRETROOM_LOCKS } from '../data/secretRoomLocks';
import { GAME_CARDS } from '../data/games';
import CharacterBubble from '../components/CharacterBubble';
import GearLock from '../components/GearLock';
import SliderLock from '../components/SliderLock';
import DialLock from '../components/DialLock';

const world = GAME_CARDS.find((c) => c.id === 'secretroom');

const CONTAINER_EMOJI: Record<string, string> = { chest: '📦', door: '🚪', drawer: '🗄️', safe: '🔐' };
const CONTAINER_EMOJI_OPEN: Record<string, string> = { chest: '🎁', door: '🏛️', drawer: '💎', safe: '✨' };

export default function SecretRoomScreen() {
  const { t, lang } = useLanguage();
  const [levelIndex, setLevelIndex] = useState(0);
  const [revealedCodes, setRevealedCodes] = useState<Record<string, number[]>>({});
  const [pairOpen, setPairOpen] = useState(false);

  const finished = levelIndex >= SECRETROOM_LOCKS.length;
  const level = finished ? null : SECRETROOM_LOCKS[levelIndex];
  const isSecondOfPair = level ? level.puzzle.kind === 'dial' && !!level.puzzle.chainedFrom : false;

  const restart = () => {
    setLevelIndex(0);
    setRevealedCodes({});
    setPairOpen(false);
  };

  const onLevelSolved = () => {
    if (!level) return;
    if (level.revealCode) {
      setRevealedCodes((prev) => ({ ...prev, [level.id]: level.revealCode! }));
    }
    if (isSecondOfPair) {
      setPairOpen(true);
      setTimeout(() => {
        setPairOpen(false);
        setLevelIndex((i) => i + 1);
      }, 1200);
    } else {
      setLevelIndex((i) => i + 1);
    }
  };

  const chainedTarget = level && level.puzzle.kind === 'dial' && level.puzzle.chainedFrom ? revealedCodes[level.puzzle.chainedFrom] : undefined;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: world?.color ?? styles.container.backgroundColor }]}>
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.topRow}>
            <Text style={styles.missionLabel}>
              {t.missionLabel} {level!.number} / {SECRETROOM_LOCKS.length}
            </Text>
          </View>

          <CharacterBubble characterId="murad" text={lang === 'ar' ? level!.promptAr : level!.promptEn} />

          <View style={styles.containerBox}>
            <Text style={styles.containerEmoji}>
              {pairOpen ? CONTAINER_EMOJI_OPEN[level!.containerType] : CONTAINER_EMOJI[level!.containerType]}
            </Text>
          </View>

          {chainedTarget ? (
            <View style={styles.codeBanner}>
              <Text style={styles.codeBannerText}>
                🔑 {lang === 'ar' ? 'الرمز' : 'Code'}: {chainedTarget.join(' - ')}
              </Text>
            </View>
          ) : null}

          <View style={styles.puzzleArea}>
            {level!.puzzle.kind === 'gears' ? (
              <GearLock key={level!.id} gears={level!.puzzle.gears} onSolved={onLevelSolved} />
            ) : level!.puzzle.kind === 'slider' ? (
              <SliderLock key={level!.id} bolts={level!.puzzle.bolts} onSolved={onLevelSolved} />
            ) : (
              <DialLock key={level!.id} digits={level!.puzzle.digits} target={chainedTarget ?? []} onSolved={onLevelSolved} />
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#3A2A4D' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  scroll: { flexGrow: 1, padding: 20, paddingTop: 24, alignItems: 'stretch' },
  topRow: { alignItems: 'center', marginBottom: 10 },
  missionLabel: { fontSize: 15, fontWeight: '900', color: palette.white },
  containerBox: { alignItems: 'center', justifyContent: 'center', marginVertical: 18 },
  containerEmoji: { fontSize: 90 },
  codeBanner: {
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 16,
    marginBottom: 18,
  },
  codeBannerText: { fontSize: 18, fontWeight: '900', color: palette.dark },
  puzzleArea: { alignItems: 'center', justifyContent: 'center', paddingVertical: 10 },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.white, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
