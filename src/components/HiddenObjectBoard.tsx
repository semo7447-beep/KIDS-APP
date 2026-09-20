import React, { useRef, useState } from 'react';
import { Animated, Image, LayoutChangeEvent, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PinchGestureHandler, PinchGestureHandlerGestureEvent, PinchGestureHandlerStateChangeEvent, State } from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { HiddenObjectItem, HiddenObjectMission } from '../types/hiddenObject';
import { Zone } from '../types/mission';
import CharacterBubble from './CharacterBubble';

const ZOOM_MIN = 1;
const ZOOM_MAX = 2.2;

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

type PopMark = { objId: string; x: number; y: number; key: number };
type WrongMark = { x: number; y: number; key: number };

const HINT_ZOOM = 1.8;

function fmtTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export default function HiddenObjectBoard({ mission, onSolved, onPrevious }: Props) {
  const { lang } = useLanguage();
  const [baseWidth, setBaseWidth] = useState(0);
  const [viewportH, setViewportH] = useState(0);
  const [scale, setScale] = useState(1);
  const [foundIds, setFoundIds] = useState<Set<string>>(new Set());
  const [lives, setLives] = useState(mission.lives);
  const [hintsLeft, setHintsLeft] = useState(mission.hints);
  const [mistakes, setMistakes] = useState(0);
  const [hintedId, setHintedId] = useState<string | null>(null);
  const [showWin, setShowWin] = useState(false);
  const [showLose, setShowLose] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [pop, setPop] = useState<PopMark | null>(null);
  const [wrongMark, setWrongMark] = useState<WrongMark | null>(null);
  const startTimeRef = useRef(Date.now());

  const popScale = useRef(new Animated.Value(0.5)).current;
  const popOpacity = useRef(new Animated.Value(1)).current;
  const wrongScale = useRef(new Animated.Value(0)).current;
  const wrongOpacity = useRef(new Animated.Value(1)).current;
  const hintPulse = useRef(new Animated.Value(0)).current;
  const hintLoopRef = useRef<Animated.CompositeAnimation | null>(null);
  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const verticalScrollRef = useRef<ScrollView>(null);
  const horizontalScrollRef = useRef<ScrollView>(null);

  const baseHeight = baseWidth ? baseWidth / mission.imageRatio : 0;
  const displayWidth = baseWidth * scale;
  const displayHeight = baseHeight * scale;

  const onSceneOuterLayout = (e: LayoutChangeEvent) => {
    if (!baseWidth) setBaseWidth(e.nativeEvent.layout.width);
    setViewportH(e.nativeEvent.layout.height);
  };

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  const scaleRef = useRef(1);
  const pinchBaseScale = useRef(1);
  const setScaleBoth = (v: number) => {
    scaleRef.current = v;
    setScale(v);
  };
  const onPinchEvent = (evt: PinchGestureHandlerGestureEvent) => {
    const next = pinchBaseScale.current * evt.nativeEvent.scale;
    setScaleBoth(Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, next)));
  };
  const onPinchStateChange = (evt: PinchGestureHandlerStateChangeEvent) => {
    if (evt.nativeEvent.oldState === State.ACTIVE) {
      pinchBaseScale.current = scaleRef.current;
    }
  };

  const playPop = () => {
    popScale.setValue(0.5);
    popOpacity.setValue(1);
    Animated.sequence([
      Animated.spring(popScale, { toValue: 1.35, friction: 5, useNativeDriver: true }),
      Animated.delay(180),
      Animated.parallel([
        Animated.timing(popScale, { toValue: 2.1, duration: 650, useNativeDriver: true }),
        Animated.timing(popOpacity, { toValue: 0, duration: 650, useNativeDriver: true }),
      ]),
    ]).start(() => setPop(null));
  };

  const playWrongMark = () => {
    wrongScale.setValue(0);
    wrongOpacity.setValue(1);
    Animated.sequence([
      Animated.spring(wrongScale, { toValue: 1, friction: 4, useNativeDriver: true }),
      Animated.delay(250),
      Animated.timing(wrongOpacity, { toValue: 0, duration: 300, useNativeDriver: true }),
    ]).start(() => setWrongMark(null));
  };

  const onTapObject = (obj: HiddenObjectItem) => {
    if (foundIds.has(obj.id) || showWin || showLose || !displayWidth) return;

    const zoneLeft = (obj.left / 100) * displayWidth;
    const zoneTop = (obj.top / 100) * displayHeight;
    const zoneW = (obj.width / 100) * displayWidth;
    const zoneH = (obj.height / 100) * displayHeight;

    if (mission.targetIds.includes(obj.id)) {
      const next = new Set(foundIds);
      next.add(obj.id);
      setFoundIds(next);
      if (hintedId === obj.id) setHintedId(null);
      setPop({ objId: obj.id, x: zoneLeft + zoneW / 2, y: zoneTop + zoneH / 2, key: Date.now() });
      playPop();

      if (next.size === mission.targetIds.length) {
        speak(lang === 'ar' ? 'أحسنت! لقيت كل الأدلة!' : 'Great job! You found all the clues!');
        setTimeout(() => {
          setElapsed(Math.round((Date.now() - startTimeRef.current) / 1000));
          setShowWin(true);
        }, 900);
      }
    } else {
      setWrongMark({ x: zoneLeft + zoneW / 2, y: zoneTop + zoneH / 2, key: Date.now() });
      playWrongMark();
      setMistakes((m) => m + 1);
      const remaining = lives - 1;
      if (remaining <= 0) {
        setLives(0);
        setShowLose(true);
      } else {
        setLives(remaining);
      }
    }
  };

  const onHint = () => {
    if (hintsLeft <= 0 || showWin || showLose) return;
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

    if (baseWidth && viewportH) {
      const targetScale = Math.max(scaleRef.current, HINT_ZOOM);
      const obj = mission.objects.find((o) => o.id === nextTarget)!;
      const dW = baseWidth * targetScale;
      const dH = baseHeight * targetScale;
      const cx = (obj.left / 100) * dW + ((obj.width / 100) * dW) / 2;
      const cy = (obj.top / 100) * dH + ((obj.height / 100) * dH) / 2;
      const scrollX = Math.max(0, Math.min(dW - baseWidth, cx - baseWidth / 2));
      const scrollY = Math.max(0, Math.min(dH - viewportH, cy - viewportH / 2));
      if (targetScale !== scaleRef.current) {
        pinchBaseScale.current = targetScale;
        setScaleBoth(targetScale);
      }
      setTimeout(() => {
        horizontalScrollRef.current?.scrollTo({ x: scrollX, animated: true });
        verticalScrollRef.current?.scrollTo({ y: scrollY, animated: true });
      }, 80);
    }
  };

  const resetBoardState = () => {
    setFoundIds(new Set());
    setLives(mission.lives);
    setHintsLeft(mission.hints);
    setMistakes(0);
    setHintedId(null);
    setScaleBoth(1);
    pinchBaseScale.current = 1;
    startTimeRef.current = Date.now();
    setShowWin(false);
    setShowLose(false);
  };

  const handleRetry = () => {
    setLives(mission.lives);
    setShowLose(false);
  };

  const hintsUsed = mission.hints - hintsLeft;
  const stars = mistakes + hintsUsed === 0 ? 3 : mistakes + hintsUsed <= 2 ? 2 : 1;

  const hintOpacity = hintPulse.interpolate({ inputRange: [0, 1], outputRange: [0.2, 0.65] });
  const popObj = pop ? mission.objects.find((o) => o.id === pop.objId) : null;

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
              <Image source={obj.icon} style={styles.checklistIcon} resizeMode="contain" />
              {isFound ? (
                <View style={styles.checklistCheckOverlay}>
                  <Text style={styles.checklistCheck}>✓</Text>
                </View>
              ) : null}
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.sceneOuter} onLayout={onSceneOuterLayout}>
        <ScrollView ref={verticalScrollRef} contentContainerStyle={styles.sceneScrollV}>
          <ScrollView
            ref={horizontalScrollRef}
            horizontal
            scrollEnabled={scale > 1}
            contentContainerStyle={displayWidth ? { width: displayWidth } : styles.sceneScrollH}
          >
            <PinchGestureHandler onGestureEvent={onPinchEvent} onHandlerStateChange={onPinchStateChange}>
              <View style={[styles.imageWrap, { width: displayWidth || '100%', height: displayHeight || 1 }]}>
                {baseWidth ? (
                  <>
                    <Image source={mission.image} style={styles.missionImage} resizeMode="cover" />

                    {mission.objects.map((obj) => {
                      if (foundIds.has(obj.id)) return null;
                      return (
                        <Pressable
                          key={obj.id}
                          style={[styles.hitZone, zoneStyle(obj)]}
                          onPress={() => onTapObject(obj)}
                        />
                      );
                    })}

                    {hintedId ? (
                      <Animated.View
                        pointerEvents="none"
                        style={[styles.hintOverlay, zoneStyle(mission.objects.find((o) => o.id === hintedId)!), { opacity: hintOpacity }]}
                      />
                    ) : null}

                    {mission.objects.map((obj) =>
                      foundIds.has(obj.id) ? (
                        <View key={'found-' + obj.id} pointerEvents="none" style={[styles.foundOverlay, zoneStyle(obj)]}>
                          {obj.cover ? (
                            <Image source={obj.cover} style={styles.foundCoverImage} resizeMode="cover" />
                          ) : (
                            <View style={styles.foundTint} />
                          )}
                          <View style={styles.foundBadge}>
                            <Text style={styles.foundBadgeText}>✓</Text>
                          </View>
                        </View>
                      ) : null
                    )}

                    {wrongMark ? (
                      <Animated.View
                        key={wrongMark.key}
                        pointerEvents="none"
                        style={[
                          styles.wrongMark,
                          { left: wrongMark.x - 22, top: wrongMark.y - 22, opacity: wrongOpacity, transform: [{ scale: wrongScale }] },
                        ]}
                      >
                        <Text style={styles.wrongMarkText}>✕</Text>
                      </Animated.View>
                    ) : null}

                    {pop && popObj ? (
                      <Animated.View
                        key={pop.key}
                        pointerEvents="none"
                        style={[
                          styles.popWrap,
                          { left: pop.x - 48, top: pop.y - 48, opacity: popOpacity, transform: [{ scale: popScale }] },
                        ]}
                      >
                        <Image source={popObj.icon} style={styles.popIcon} resizeMode="contain" />
                      </Animated.View>
                    ) : null}
                  </>
                ) : null}
              </View>
            </PinchGestureHandler>
          </ScrollView>
        </ScrollView>
      </View>

      {showWin ? (
        <View style={styles.resultOverlay}>
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>{lang === 'ar' ? 'القضية انحلّت! 🎉' : 'Case Solved! 🎉'}</Text>
            <View style={styles.starsRow}>
              {[1, 2, 3].map((i) => (
                <Text key={i} style={styles.starText}>
                  {i <= stars ? '⭐' : '☆'}
                </Text>
              ))}
            </View>
            <View style={styles.statsRow}>
              <Text style={styles.statText}>⏱ {fmtTime(elapsed)}</Text>
              <Text style={styles.statText}>❌ {mistakes}</Text>
              <Text style={styles.statText}>💡 {hintsUsed}</Text>
            </View>
            <Pressable style={styles.primaryBtn} onPress={onSolved}>
              <Text style={styles.primaryBtnText}>{lang === 'ar' ? 'المستوى التالي ▶' : 'Next Level ▶'}</Text>
            </Pressable>
            <Pressable style={styles.secondaryBtn} onPress={resetBoardState}>
              <Text style={styles.secondaryBtnText}>{lang === 'ar' ? 'إعادة 🔁' : 'Replay 🔁'}</Text>
            </Pressable>
          </View>
        </View>
      ) : null}

      {showLose ? (
        <View style={styles.resultOverlay}>
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>{lang === 'ar' ? 'خلصت القلوب! 💔' : 'Out of Lives! 💔'}</Text>
            <Text style={styles.resultSubtitle}>{lang === 'ar' ? 'حظ أوفر المرة الجاية!' : 'Better luck next time!'}</Text>
            <Pressable style={styles.primaryBtn} onPress={handleRetry}>
              <Text style={styles.primaryBtnText}>{lang === 'ar' ? 'إعادة المحاولة 🔁' : 'Retry 🔁'}</Text>
            </Pressable>
            <Pressable style={styles.secondaryBtn} onPress={onPrevious}>
              <Text style={styles.secondaryBtnText}>{lang === 'ar' ? 'الرئيسية 🏠' : 'Home 🏠'}</Text>
            </Pressable>
          </View>
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
    backgroundColor: palette.white,
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
  sceneOuter: { flex: 1, position: 'relative' },
  sceneScrollV: { flexGrow: 1 },
  sceneScrollH: { flexGrow: 1, width: '100%' },
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
  foundOverlay: {
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: 2,
  },
  foundCoverImage: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
  foundTint: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(15,15,25,0.4)' },
  foundBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: palette.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foundBadgeText: { color: palette.white, fontWeight: '900', fontSize: 12 },
  wrongMark: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,94,94,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrongMarkText: { color: palette.white, fontWeight: '900', fontSize: 24 },
  popWrap: {
    position: 'absolute',
    width: 96,
    height: 96,
    borderRadius: 22,
    backgroundColor: palette.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  popIcon: { width: '100%', height: '100%' },
  resultOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(20,15,30,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  resultCard: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: palette.white,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },
  resultTitle: { fontSize: 22, fontWeight: '900', color: palette.dark, textAlign: 'center', marginBottom: 8 },
  resultSubtitle: { fontSize: 15, color: palette.dark, opacity: 0.7, textAlign: 'center', marginBottom: 16 },
  starsRow: { flexDirection: 'row', gap: 6, marginBottom: 16 },
  starText: { fontSize: 34 },
  statsRow: { flexDirection: 'row', gap: 18, marginBottom: 20 },
  statText: { fontSize: 15, fontWeight: '700', color: palette.dark },
  primaryBtn: {
    backgroundColor: palette.green,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryBtnText: { color: palette.white, fontWeight: '900', fontSize: 16 },
  secondaryBtn: {
    backgroundColor: 'rgba(0,0,0,0.06)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  secondaryBtnText: { color: palette.dark, fontWeight: '800', fontSize: 15 },
});
