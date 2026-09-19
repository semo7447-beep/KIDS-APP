import React, { useState } from 'react';
import { Image, LayoutChangeEvent, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { COOP_MISSIONS } from '../data/coopMissions';
import { Zone } from '../types/mission';

function zoneStyle(zone: Zone) {
  return {
    left: `${zone.left}%` as const,
    top: `${zone.top}%` as const,
    width: `${zone.width}%` as const,
    height: `${zone.height}%` as const,
  };
}

export default function CoopScreen() {
  const { t, lang } = useLanguage();
  const navigation = useNavigation();
  const [missionIndex, setMissionIndex] = useState(0);
  const [active, setActive] = useState(false);
  const [collected, setCollected] = useState<Set<number>>(new Set());
  const [player, setPlayer] = useState<1 | 2>(1);
  const [wrapWidth, setWrapWidth] = useState(0);

  const mission = COOP_MISSIONS[missionIndex];
  const finished = missionIndex >= COOP_MISSIONS.length;

  const onWrapLayout = (e: LayoutChangeEvent) => setWrapWidth(e.nativeEvent.layout.width);

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  const start = () => {
    setActive(true);
    setCollected(new Set());
    setPlayer(1);
    speak(t.workTogether);
  };

  const onTapPiece = (index: number) => {
    if (!active || collected.has(index)) return;
    const next = new Set(collected);
    next.add(index);
    setCollected(next);
    if (next.size === mission.pieceZones.length) {
      speak(lang === 'ar' ? 'أحسنتم!' : 'Great teamwork!');
      setTimeout(() => {
        setActive(false);
        setCollected(new Set());
        setMissionIndex((i) => i + 1);
      }, 900);
    } else {
      setPlayer((p) => (p === 1 ? 2 : 1));
    }
  };

  const goBack = () => {
    if (missionIndex === 0) {
      navigation.goBack();
      return;
    }
    setMissionIndex((i) => i - 1);
    setActive(false);
    setCollected(new Set());
  };

  const restart = () => {
    setMissionIndex(0);
    setActive(false);
    setCollected(new Set());
  };

  return (
    <SafeAreaView style={styles.container}>
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scroll}>
          <View
            style={[styles.imageWrap, { width: '100%', height: wrapWidth ? wrapWidth / mission.imageRatio : 1 }]}
            onLayout={onWrapLayout}
          >
            {wrapWidth ? (
              <>
                <Image source={mission.image} style={styles.missionImage} resizeMode="cover" />

                {active ? (
                  <View pointerEvents="none" style={styles.turnBadge}>
                    <Text style={styles.turnText}>
                      {t.yourTurn} — {lang === 'ar' ? `اللاعب ${player}` : `Player ${player}`}
                    </Text>
                  </View>
                ) : null}

                {mission.pieceZones.map((zone, i) => (
                  <Pressable key={i} style={[styles.hitZone, zoneStyle(zone)]} onPress={() => onTapPiece(i)} />
                ))}
                {mission.pieceZones.map((zone, i) =>
                  collected.has(i) ? (
                    <View key={i} pointerEvents="none" style={[styles.pieceDone, zoneStyle(zone)]}>
                      <Text style={styles.checkmark}>✓</Text>
                    </View>
                  ) : null
                )}

                {!active ? <Pressable style={[styles.hitZone, zoneStyle(mission.startZone)]} onPress={start} /> : null}
                <Pressable style={[styles.hitZone, zoneStyle(mission.previousZone)]} onPress={goBack} />
              </>
            ) : null}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#3A282D' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  scroll: { flexGrow: 1, justifyContent: 'center' },
  imageWrap: { position: 'relative', overflow: 'hidden' },
  missionImage: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
  hitZone: { position: 'absolute' },
  pieceDone: {
    position: 'absolute',
    borderWidth: 3,
    borderColor: palette.green,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(63,214,141,0.35)',
  },
  checkmark: { color: palette.white, fontWeight: '900', fontSize: 20 },
  turnBadge: {
    position: 'absolute',
    top: '58%',
    alignSelf: 'center',
    backgroundColor: palette.green,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 18,
  },
  turnText: { color: palette.white, fontWeight: '900', fontSize: 14 },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.white, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
