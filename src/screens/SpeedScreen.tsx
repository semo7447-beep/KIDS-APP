import React, { useEffect, useRef, useState } from 'react';
import { Image, LayoutChangeEvent, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { SPEED_MISSIONS } from '../data/speedMissions';
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

type Phase = 'idle' | 'running' | 'success' | 'fail';
const world = GAME_CARDS.find((c) => c.id === 'speed');

export default function SpeedScreen() {
  const { t, lang } = useLanguage();
  const navigation = useNavigation();
  const [missionIndex, setMissionIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(0);
  const [wrapWidth, setWrapWidth] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const mission = SPEED_MISSIONS[missionIndex];
  const finished = missionIndex >= SPEED_MISSIONS.length;
  const template = mission?.template;
  const templateItems = template?.items ?? [];
  const targetCount = template
    ? templateItems.filter((i) => i.isTarget).length
    : mission
    ? mission.items!.filter((i) => i.isTarget).length
    : 0;

  const onWrapLayout = (e: LayoutChangeEvent) => setWrapWidth(e.nativeEvent.layout.width);

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startRun = () => {
    if (phase === 'running') return;
    setSelected(new Set());
    setPhase('running');
    setTimeLeft(mission.timeSeconds);
    speak(lang === 'ar' ? 'هيا!' : 'Go!');
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setPhase('fail');
          speak(t.wrongTryAgain);
          setTimeout(() => setPhase('idle'), 1200);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const onTapItemId = (id: string, isTarget: boolean) => {
    if (phase !== 'running' || !isTarget || selected.has(id)) return;
    const next = new Set(selected);
    next.add(id);
    setSelected(next);
    if (next.size === targetCount) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setPhase('success');
      speak(lang === 'ar' ? 'أحسنت!' : 'Well done!');
      setTimeout(() => {
        setPhase('idle');
        setSelected(new Set());
        setMissionIndex((i) => i + 1);
      }, 1000);
    }
  };

  const goBack = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    navigation.goBack();
  };

  const restart = () => {
    setMissionIndex(0);
    setPhase('idle');
    setSelected(new Set());
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

            <Pressable style={styles.backBtn} onPress={goBack}>
              <Text style={styles.backIcon}>{lang === 'ar' ? '▶' : '◀'}</Text>
            </Pressable>

            {mission.items!.map((item) => (
              <Pressable key={item.id} style={[styles.hitZone, zoneStyle(item)]} onPress={() => onTapItemId(item.id, item.isTarget)} />
            ))}

            {mission.items!.map((item) =>
              selected.has(item.id) ? (
                <View key={item.id} pointerEvents="none" style={[styles.selectionBox, zoneStyle(item)]}>
                  <Text style={styles.checkmark}>✓</Text>
                </View>
              ) : null
            )}

            {phase === 'running' ? (
              <View pointerEvents="none" style={styles.timerBadge}>
                <Text style={styles.timerText}>{timeLeft}</Text>
              </View>
            ) : null}

            {phase === 'fail' ? (
              <View pointerEvents="none" style={styles.failBanner}>
                <Text style={styles.failText}>{t.timeUp}</Text>
              </View>
            ) : null}

            {phase === 'idle' || phase === 'fail' ? (
              <Pressable style={[styles.hitZone, zoneStyle(mission.startZone!)]} onPress={startRun} />
            ) : null}
          </>
        ) : null}
      </View>
    </ScrollView>
  );

  const renderTemplateMode = () => {
    if (!template) return null;
    const prompt = lang === 'ar' ? template.promptAr : template.promptEn;
    return (
      <ScrollView contentContainerStyle={styles.templateScroll}>
        <View style={styles.templateTopRow}>
          <Pressable style={styles.templateBackBtn} onPress={goBack}>
            <Text style={styles.backIcon}>{lang === 'ar' ? '▶' : '◀'}</Text>
          </Pressable>
          <Text style={styles.templateMissionLabel}>
            {t.missionLabel} {mission.number}
          </Text>
          {phase === 'running' ? (
            <View style={styles.timerBadgeTemplate}>
              <Text style={styles.timerText}>{timeLeft}</Text>
            </View>
          ) : (
            <View style={{ width: 54 }} />
          )}
        </View>

        <CharacterBubble characterId={template.characterId} text={prompt} />

        <View style={styles.templateGrid}>
          {templateItems.map((item) => {
            const isSelected = selected.has(item.id);
            return (
              <Pressable
                key={item.id}
                style={[styles.templateItemCard, isSelected ? styles.templateItemSelected : null]}
                onPress={() => onTapItemId(item.id, item.isTarget)}
              >
                <Text style={styles.templateItemEmoji}>{item.emoji}</Text>
                {isSelected ? <Text style={styles.checkmarkBadge}>✓</Text> : null}
              </Pressable>
            );
          })}
        </View>

        {phase === 'fail' ? (
          <View style={styles.failBannerInline}>
            <Text style={styles.failText}>{t.timeUp}</Text>
          </View>
        ) : null}

        {phase === 'idle' || phase === 'fail' ? (
          <Pressable style={styles.startBtn} onPress={startRun}>
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
  backBtn: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: { fontSize: 15, fontWeight: '900', color: palette.dark },
  selectionBox: {
    position: 'absolute',
    borderWidth: 4,
    borderColor: palette.green,
    borderRadius: 14,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  checkmark: {
    backgroundColor: palette.green,
    color: palette.white,
    fontWeight: '900',
    fontSize: 14,
    width: 22,
    height: 22,
    textAlign: 'center',
    lineHeight: 22,
    borderRadius: 11,
    margin: 3,
  },
  timerBadge: {
    position: 'absolute',
    top: '24%',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,94,94,0.92)',
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: { color: palette.white, fontWeight: '900', fontSize: 24 },
  failBanner: {
    position: 'absolute',
    top: '46%',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,94,94,0.9)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
  },
  failText: { color: palette.white, fontWeight: '900', fontSize: 16 },
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
  templateMissionLabel: { fontSize: 16, fontWeight: '900', color: palette.white },
  timerBadgeTemplate: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,94,94,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  templateGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginTop: 12 },
  templateItemCard: {
    width: 90,
    height: 90,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.95)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  templateItemSelected: { borderColor: palette.green, backgroundColor: 'rgba(63,214,141,0.35)' },
  templateItemEmoji: { fontSize: 40 },
  checkmarkBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
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
  failBannerInline: {
    alignSelf: 'center',
    marginTop: 16,
    backgroundColor: 'rgba(255,94,94,0.9)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
  },
  startBtn: { marginTop: 24, backgroundColor: palette.green, paddingVertical: 16, borderRadius: 20, alignItems: 'center' },
  startBtnText: { color: palette.white, fontSize: 18, fontWeight: '900' },
});
