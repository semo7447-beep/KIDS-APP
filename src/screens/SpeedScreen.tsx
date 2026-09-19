import React, { useEffect, useRef, useState } from 'react';
import { Image, LayoutChangeEvent, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { SPEED_MISSIONS } from '../data/speedMissions';
import { Zone } from '../types/mission';

function zoneStyle(zone: Zone) {
  return {
    left: `${zone.left}%` as const,
    top: `${zone.top}%` as const,
    width: `${zone.width}%` as const,
    height: `${zone.height}%` as const,
  };
}

type Phase = 'idle' | 'running' | 'success' | 'fail';

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
  const targetCount = mission ? mission.items.filter((i) => i.isTarget).length : 0;

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

  const onTapItem = (item: (typeof mission.items)[number]) => {
    if (phase !== 'running' || !item.isTarget || selected.has(item.id)) return;
    const next = new Set(selected);
    next.add(item.id);
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

                <Pressable style={styles.backBtn} onPress={goBack}>
                  <Text style={styles.backIcon}>{lang === 'ar' ? '▶' : '◀'}</Text>
                </Pressable>

                {mission.items.map((item) => (
                  <Pressable key={item.id} style={[styles.hitZone, zoneStyle(item)]} onPress={() => onTapItem(item)} />
                ))}

                {mission.items.map((item) =>
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
                  <Pressable style={[styles.hitZone, zoneStyle(mission.startZone)]} onPress={startRun} />
                ) : null}
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
});
