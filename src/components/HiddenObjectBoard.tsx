import React, { useRef, useState } from 'react';
import { Animated, Image, LayoutChangeEvent, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { HiddenObjectItem, HiddenObjectMission } from '../types/hiddenObject';
import { Zone } from '../types/mission';
import CharacterBubble from './CharacterBubble';

const ZOOM_MIN = 1;
const ZOOM_MAX = 2.2;
const ZOOM_STEP = 0.4;

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

export default function HiddenObjectBoard({ mission, onSolved, onPrevious }: Props) {
  const { t, lang } = useLanguage();
  const [baseWidth, setBaseWidth] = useState(0);
  const [scale, setScale] = useState(1);
  const [foundIds, setFoundIds] = useState<Set<string>>(new Set());
  const [lives, setLives] = useState(mission.lives);
  const [hintsLeft, setHintsLeft] = useState(mission.hints);
  const [hintedId, setHintedId] = useState<string | null>(null);
  const [failedMessage, setFailedMessage] = useState(false);
  const [pop, setPop] = useState<PopMark | null>(null);
  const [wrongMark, setWrongMark] = useState<WrongMark | null>(null);

  const popScale = useRef(new Animated.Value(0.5)).current;
  const popOpacity = useRef(new Animated.Value(1)).current;
  const wrongScale = useRef(new Animated.Value(0)).current;
  const wrongOpacity = useRef(new Animated.Value(1)).current;
  const hintPulse = useRef(new Animated.Value(0)).current;
  const hintLoopRef = useRef<Animated.CompositeAnimation | null>(null);
  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const baseHeight = baseWidth ? baseWidth / mission.imageRatio : 0;
  const displayWidth = baseWidth * scale;
  const displayHeight = baseHeight * scale;

  const onSceneOuterLayout = (e: LayoutChangeEvent) => {
    if (!baseWidth) setBaseWidth(e.nativeEvent.layout.width);
  };

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  const zoomIn = () => setScale((s) => Math.min(ZOOM_MAX, +(s + ZOOM_STEP).toFixed(2)));
  const zoomOut = () => setScale((s) => Math.max(ZOOM_MIN, +(s - ZOOM_STEP).toFixed(2)));

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
    if (foundIds.has(obj.id) || failedMessage || !displayWidth) return;

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
        setTimeout(onSolved, 900);
      }
    } else {
      setWrongMark({ x: zoneLeft + zoneW / 2, y: zoneTop + zoneH / 2, key: Date.now() });
      playWrongMark();
      const remaining = lives - 1;
      if (remaining <= 0) {
        setLives(mission.lives);
        speak(t.wrongTryAgain);
        setFailedMessage(true);
        setTimeout(() => setFailedMessage(false), 1300);
      } else {
        setLives(remaining);
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
        <ScrollView contentContainerStyle={styles.sceneScrollV}>
          <ScrollView horizontal scrollEnabled={scale > 1} contentContainerStyle={displayWidth ? { width: displayWidth } : styles.sceneScrollH}>
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
          </ScrollView>
        </ScrollView>

        <View style={styles.zoomControls} pointerEvents="box-none">
          <Pressable style={styles.zoomBtn} onPress={zoomIn}>
            <Text style={styles.zoomBtnText}>＋</Text>
          </Pressable>
          <Pressable style={styles.zoomBtn} onPress={zoomOut}>
            <Text style={styles.zoomBtnText}>－</Text>
          </Pressable>
        </View>
      </View>

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
    backgroundColor: 'rgba(15,15,25,0.4)',
    borderRadius: 12,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: 2,
  },
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
  zoomControls: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    gap: 8,
  },
  zoomBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  zoomBtnText: { fontSize: 20, fontWeight: '900', color: palette.dark },
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
