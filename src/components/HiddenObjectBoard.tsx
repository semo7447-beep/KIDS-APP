import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, LayoutChangeEvent, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { HiddenObjectItem, HiddenObjectMission } from '../types/hiddenObject';
import { Zone } from '../types/mission';
import CharacterBubble from './CharacterBubble';

function zoneStyle(zone: Zone) {
  return {
    left: `${zone.left}%` as const,
    top: `${zone.top}%` as const,
    width: `${zone.width}%` as const,
    height: `${zone.height}%` as const,
  };
}

type Props = {
  mission: HiddenObjectMission;
  onSolved: () => void;
  onPrevious: () => void;
};

export default function HiddenObjectBoard({ mission, onSolved, onPrevious }: Props) {
  const { t, lang } = useLanguage();
  const [wrapWidth, setWrapWidth] = useState(0);
  const [foundIds, setFoundIds] = useState<Set<string>>(new Set());
  const [lives, setLives] = useState(mission.lives);
  const [hintsLeft, setHintsLeft] = useState(mission.hints);
  const [wrongId, setWrongId] = useState<string | null>(null);
  const [hintedId, setHintedId] = useState<string | null>(null);
  const [failedMessage, setFailedMessage] = useState(false);
  const sparkleAnim = useRef(new Animated.Value(0)).current;
  const hintPulse = useRef(new Animated.Value(0)).current;
  const hintLoopRef = useRef<Animated.CompositeAnimation | null>(null);
  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const wrapHeight = wrapWidth ? wrapWidth / mission.imageRatio : 0;
  const onWrapLayout = (e: LayoutChangeEvent) => setWrapWidth(e.nativeEvent.layout.width);

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  useEffect(() => {
    return () => {
      hintLoopRef.current?.stop();
      if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
    };
  }, []);

  const resetBoard = () => {
    setFoundIds(new Set());
    setLives(mission.lives);
    setHintsLeft(mission.hints);
    setFailedMessage(false);
    setHintedId(null);
    hintLoopRef.current?.stop();
  };

  const onTapObject = (obj: HiddenObjectItem) => {
    if (foundIds.has(obj.id) || failedMessage) return;

    if (mission.targetIds.includes(obj.id)) {
      const next = new Set(foundIds);
      next.add(obj.id);
      setFoundIds(next);
      sparkleAnim.setValue(0);
      Animated.timing(sparkleAnim, { toValue: 1, duration: 500, useNativeDriver: false }).start();
      if (hintedId === obj.id) setHintedId(null);

      if (next.size === mission.targetIds.length) {
        speak(lang === 'ar' ? 'أحسنت! لقيت كل الأدلة!' : 'Great job! You found all the clues!');
        setTimeout(onSolved, 900);
      }
    } else {
      setWrongId(obj.id);
      setTimeout(() => setWrongId(null), 400);
      const remaining = lives - 1;
      setLives(remaining);
      if (remaining <= 0) {
        speak(t.wrongTryAgain);
        setFailedMessage(true);
        setTimeout(resetBoard, 1600);
      }
    }
  };

  const onHint = () => {
    if (hintsLeft <= 0 || failedMessage) return;
    const nextTarget = mission.targetIds.find((id) => !foundIds.has(id));
    if (!nextTarget) return;
    setHintsLeft((h) => h - 1);
    setHintedId(nextTarget);
    hintPulse.setValue(0);
    hintLoopRef.current?.stop();
    hintLoopRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(hintPulse, { toValue: 1, duration: 450, useNativeDriver: false }),
        Animated.timing(hintPulse, { toValue: 0, duration: 450, useNativeDriver: false }),
      ])
    );
    hintLoopRef.current.start();
    if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
    hintTimerRef.current = setTimeout(() => {
      hintLoopRef.current?.stop();
      setHintedId(null);
    }, 3000);
  };

  const hintOpacity = hintPulse.interpolate({ inputRange: [0, 1], outputRange: [0.2, 0.65] });
  const sparkleScale = sparkleAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.8] });
  const sparkleOpacity = sparkleAnim.interpolate({ inputRange: [0, 0.7, 1], outputRange: [0.9, 0.4, 0] });

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Pressable style={styles.iconBtn} onPress={onPrevious}>
          <Text style={styles.iconBtnText}>{lang === 'ar' ? '▶' : '◀'}</Text>
        </Pressable>
        <View style={styles.heartsRow}>
          {Array.from({ length: mission.lives }, (_, i) => (
            <Text key={i} style={styles.heart}>
              {i < lives ? '❤️' : '🖤'}
            </Text>
          ))}
        </View>
        <Pressable style={styles.hintBtn} onPress={onHint} disabled={hintsLeft <= 0}>
          <Text style={styles.hintBtnText}>💡 {hintsLeft}</Text>
        </Pressable>
      </View>

      <CharacterBubble characterId={mission.characterId} text={lang === 'ar' ? mission.promptAr : mission.promptEn} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.checklistRow} contentContainerStyle={styles.checklistContent}>
        {mission.targetIds.map((id) => {
          const obj = mission.objects.find((o) => o.id === id)!;
          const isFound = foundIds.has(id);
          return (
            <View key={id} style={[styles.checklistItem, isFound ? styles.checklistItemFound : null]}>
              <Image source={obj.icon} style={styles.checklistIcon} />
              {isFound ? (
                <View style={styles.checklistCheckOverlay}>
                  <Text style={styles.checklistCheck}>✓</Text>
                </View>
              ) : null}
            </View>
          );
        })}
      </ScrollView>

      <ScrollView contentContainerStyle={styles.sceneScroll}>
        <View style={[styles.imageWrap, { width: '100%', height: wrapHeight || 1 }]} onLayout={onWrapLayout}>
          {wrapWidth ? (
            <>
              <Image source={mission.image} style={styles.missionImage} resizeMode="cover" />

              {mission.objects.map((obj) => {
                if (foundIds.has(obj.id)) return null;
                return <Pressable key={obj.id} style={[styles.hitZone, zoneStyle(obj)]} onPress={() => onTapObject(obj)} />;
              })}

              {hintedId ? (
                <Animated.View
                  pointerEvents="none"
                  style={[styles.hintOverlay, zoneStyle(mission.objects.find((o) => o.id === hintedId)!), { opacity: hintOpacity }]}
                />
              ) : null}

              {wrongId ? (
                <View pointerEvents="none" style={[styles.wrongOverlay, zoneStyle(mission.objects.find((o) => o.id === wrongId)!)]} />
              ) : null}

              {mission.objects.map((obj) =>
                foundIds.has(obj.id) ? (
                  <Animated.View
                    key={'sparkle-' + obj.id}
                    pointerEvents="none"
                    style={[
                      styles.sparkleOverlay,
                      zoneStyle(obj),
                      { opacity: sparkleOpacity, transform: [{ scale: sparkleScale }] },
                    ]}
                  >
                    <Text style={styles.sparkleText}>✨</Text>
                  </Animated.View>
                ) : null
              )}
            </>
          ) : null}
        </View>
      </ScrollView>

      {failedMessage ? (
        <View style={styles.failBanner} pointerEvents="none">
          <Text style={styles.failBannerText}>{t.wrongTryAgain}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 20 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtnText: { fontSize: 15, fontWeight: '900', color: palette.dark },
  heartsRow: { flexDirection: 'row', gap: 2 },
  heart: { fontSize: 20 },
  hintBtn: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  hintBtnText: { fontSize: 14, fontWeight: '900', color: palette.dark },
  checklistRow: { flexGrow: 0, marginTop: 4, marginBottom: 4 },
  checklistContent: { gap: 8, paddingVertical: 4 },
  checklistItem: {
    width: 56,
    height: 56,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.6)',
  },
  checklistItemFound: { opacity: 0.35, borderColor: palette.green },
  checklistIcon: { width: '100%', height: '100%' },
  checklistCheckOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(63,214,141,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checklistCheck: { color: palette.white, fontWeight: '900', fontSize: 22 },
  sceneScroll: { flexGrow: 1 },
  imageWrap: { position: 'relative', overflow: 'hidden', borderRadius: 16 },
  missionImage: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
  hitZone: { position: 'absolute' },
  hintOverlay: {
    position: 'absolute',
    backgroundColor: palette.yellow,
    borderRadius: 14,
    borderWidth: 3,
    borderColor: palette.yellow,
  },
  wrongOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(255,94,94,0.45)',
    borderRadius: 14,
    borderWidth: 3,
    borderColor: palette.red,
  },
  sparkleOverlay: { position: 'absolute', alignItems: 'center', justifyContent: 'center' },
  sparkleText: { fontSize: 30 },
  failBanner: {
    position: 'absolute',
    top: '45%',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,94,94,0.92)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 16,
  },
  failBannerText: { color: palette.white, fontWeight: '900', fontSize: 18 },
});
