import React, { useState } from 'react';
import { Image, LayoutChangeEvent, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { COOP_MISSIONS } from '../data/coopMissions';
import { Zone } from '../types/mission';
import { GAME_CARDS } from '../data/games';
import CharacterBubble from '../components/CharacterBubble';

function zoneStyle(zone: Zone) {
  return {
    left: `${zone.left}%` as const,
    top: `${zone.top}%` as const,
    width: `${zone.width}%` as const,
    height: `${zone.height}%` as const,
  };
}

const world = GAME_CARDS.find((c) => c.id === 'coop');

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
  const template = mission?.template;
  const pieceCount = template ? template.pieceEmojis.length : mission?.pieceZones?.length ?? 0;

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
    if (next.size === pieceCount) {
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

  const renderImageMode = () => (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View
        style={[styles.imageWrap, { width: '100%', height: wrapWidth ? wrapWidth / (mission.imageRatio ?? 1) : 1 }]}
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

            {mission.pieceZones!.map((zone, i) => (
              <Pressable key={i} style={[styles.hitZone, zoneStyle(zone)]} onPress={() => onTapPiece(i)} />
            ))}
            {mission.pieceZones!.map((zone, i) =>
              collected.has(i) ? (
                <View key={i} pointerEvents="none" style={[styles.pieceDone, zoneStyle(zone)]}>
                  <Text style={styles.checkmark}>✓</Text>
                </View>
              ) : null
            )}

            {!active ? <Pressable style={[styles.hitZone, zoneStyle(mission.startZone!)]} onPress={start} /> : null}
            <Pressable style={[styles.hitZone, zoneStyle(mission.previousZone!)]} onPress={goBack} />
          </>
        ) : null}
      </View>
    </ScrollView>
  );

  const renderTemplateMode = () => {
    if (!template) return null;
    return (
      <ScrollView contentContainerStyle={styles.templateScroll}>
        <View style={styles.templateTopRow}>
          <Pressable style={styles.templateBackBtn} onPress={goBack}>
            <Text style={styles.backIcon}>{lang === 'ar' ? '▶' : '◀'}</Text>
          </Pressable>
          <Text style={styles.templateMissionLabel}>
            {t.missionLabel} {mission.number}
          </Text>
          <View style={{ width: 36 }} />
        </View>

        <CharacterBubble
          characterId={template.characterId}
          text={lang === 'ar' ? template.themeAr : template.themeEn}
        />

        {active ? (
          <View style={styles.turnBadgeTemplate}>
            <Text style={styles.turnText}>
              {t.yourTurn} — {lang === 'ar' ? `اللاعب ${player}` : `Player ${player}`}
            </Text>
          </View>
        ) : null}

        <View style={styles.pieceGrid}>
          {template.pieceEmojis.map((emoji, i) => {
            const isDone = collected.has(i);
            return (
              <Pressable
                key={i}
                style={[styles.pieceCard, isDone ? styles.pieceCardDone : null]}
                onPress={() => onTapPiece(i)}
              >
                <Text style={styles.pieceEmoji}>{emoji}</Text>
                {isDone ? <Text style={styles.checkmarkBadge}>✓</Text> : null}
              </Pressable>
            );
          })}
        </View>

        {!active ? (
          <Pressable style={styles.startBtn} onPress={start}>
            <Text style={styles.startBtnText}>▶ {t.startRobot}</Text>
          </Pressable>
        ) : null}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={[styles.container, template ? { backgroundColor: world?.color ?? styles.container.backgroundColor } : null]}>
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : template ? (
        renderTemplateMode()
      ) : (
        renderImageMode()
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

  templateScroll: { flexGrow: 1, padding: 20, paddingTop: 24 },
  templateTopRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
  templateBackBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: { fontSize: 15, fontWeight: '900', color: palette.dark },
  templateMissionLabel: { fontSize: 16, fontWeight: '900', color: palette.white },
  turnBadgeTemplate: {
    alignSelf: 'center',
    backgroundColor: palette.green,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 18,
    marginBottom: 8,
  },
  pieceGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginTop: 12 },
  pieceCard: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.95)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  pieceCardDone: { borderColor: palette.green, backgroundColor: 'rgba(63,214,141,0.35)' },
  pieceEmoji: { fontSize: 44 },
  checkmarkBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: palette.green,
    color: palette.white,
    fontWeight: '900',
    fontSize: 12,
    width: 20,
    height: 20,
    textAlign: 'center',
    lineHeight: 20,
    borderRadius: 10,
  },
  startBtn: { marginTop: 24, backgroundColor: palette.green, paddingVertical: 16, borderRadius: 20, alignItems: 'center' },
  startBtnText: { color: palette.white, fontSize: 18, fontWeight: '900' },
});
