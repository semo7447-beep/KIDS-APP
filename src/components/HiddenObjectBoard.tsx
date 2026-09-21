import React, { useRef, useState } from 'react';
import { Animated, Easing, Image, LayoutChangeEvent, PanResponder, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { HiddenObjectItem, HiddenObjectMission } from '../types/hiddenObject';
import { Zone } from '../types/mission';
import CharacterBubble from './CharacterBubble';

const ZOOM_MIN = 1;
const ZOOM_MAX = 2.2;
const GLASS_SIZE = 96;

function zoneStyle(zone: Zone) {
  return {
    left: `${zone.left}%` as const,
    top: `${zone.top}%` as const,
    width: `${zone.width}%` as const,
    height: `${zone.height}%` as const,
  };
}

// Positions a full source image (via percentage-based zone coords) so that only the
// zone's region fills a boxSize x boxSize square, cropped/centered like resizeMode="cover".
// Avoids needing any pre-cropped per-object icon file.
function spriteCoverStyle(zone: Zone, imageRatio: number, boxSize: number) {
  const natW = 1000;
  const natH = natW / imageRatio;
  const zoneWpx = (zone.width / 100) * natW;
  const zoneHpx = (zone.height / 100) * natH;
  const scale = Math.max(boxSize / zoneWpx, boxSize / zoneHpx);
  const imgW = natW * scale;
  const imgH = natH * scale;
  const zoneCenterXpx = (zone.left / 100) * natW * scale + (zoneWpx * scale) / 2;
  const zoneCenterYpx = (zone.top / 100) * natH * scale + (zoneHpx * scale) / 2;
  return {
    position: 'absolute' as const,
    width: imgW,
    height: imgH,
    left: boxSize / 2 - zoneCenterXpx,
    top: boxSize / 2 - zoneCenterYpx,
  };
}

type Props = {
  mission: HiddenObjectMission;
  onSolved: () => void;
  onPrevious: () => void;
};

type PopMark = { objId: string; x: number; y: number; key: number };
type WrongMarkEntry = { key: number; x: number; y: number; scale: Animated.Value; opacity: Animated.Value };
type SparkleEntry = { key: number; x: number; y: number; dx: number; dy: number; opacity: Animated.Value; scale: Animated.Value };
type FoundTextEntry = { key: number; x: number; y: number; msg: string };

const FOUND_MESSAGES_AR = ['نعم! 🎉', 'أخيراً!! ', 'رائع!', 'لقيتها!'];
const FOUND_MESSAGES_EN = ['Yes!', 'Finally!!!', 'Great!', 'Found it!'];

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
  const [showWin, setShowWin] = useState(false);
  const [showLose, setShowLose] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [pop, setPop] = useState<PopMark | null>(null);
  const [wrongMarks, setWrongMarks] = useState<WrongMarkEntry[]>([]);
  const [sparkles, setSparkles] = useState<SparkleEntry[]>([]);
  const [foundText, setFoundText] = useState<FoundTextEntry | null>(null);
  const [hintSequenceActive, setHintSequenceActive] = useState(false);
  const [hintAutoTargetId, setHintAutoTargetId] = useState<string | null>(null);
  const startTimeRef = useRef(Date.now());

  const popScale = useRef(new Animated.Value(0.5)).current;
  const popOpacity = useRef(new Animated.Value(1)).current;
  const foundTextScale = useRef(new Animated.Value(0.6)).current;
  const foundTextOpacity = useRef(new Animated.Value(1)).current;
  const foundTextTranslateY = useRef(new Animated.Value(0)).current;
  const hintDarkOpacity = useRef(new Animated.Value(0)).current;
  const hintGlassOpacity = useRef(new Animated.Value(0)).current;
  const hintGlassX = useRef(new Animated.Value(0)).current;
  const hintGlassY = useRef(new Animated.Value(0)).current;
  const hintSequenceActiveRef = useRef(false);

  const baseHeight = baseWidth ? baseWidth / mission.imageRatio : 0;
  const displayWidth = baseWidth * scale;
  const displayHeight = baseHeight * scale;

  const baseWidthRef = useRef(0);
  const viewportHRef = useRef(0);
  const onSceneOuterLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    if (!baseWidth) {
      setBaseWidth(width);
      baseWidthRef.current = width;
    }
    setViewportH(height);
    viewportHRef.current = height;
  };

  const scaleRef = useRef(1);
  const pinchBaseScale = useRef(1);
  const setScaleBoth = (v: number) => {
    scaleRef.current = v;
    setScale(v);
  };

  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const panXRef = useRef(0);
  const panYRef = useRef(0);
  const setPanBoth = (x: number, y: number) => {
    panXRef.current = x;
    panYRef.current = y;
    setPanX(x);
    setPanY(y);
  };

  const clampPan = (x: number, y: number, s: number) => {
    const dW = baseWidthRef.current * s;
    const dH = (baseWidthRef.current / mission.imageRatio) * s;
    const minX = Math.min(0, baseWidthRef.current - dW);
    const minY = Math.min(0, viewportHRef.current - dH);
    return { x: Math.max(minX, Math.min(0, x)), y: Math.max(minY, Math.min(0, y)) };
  };

  // Panning is impossible in either axis at the current scale, so a full-cover
  // background Pressable (for empty-space wrong taps) is safe to render without
  // ever stealing a drag gesture from the pinch/pan responder.
  const noPanPossible = displayWidth <= baseWidth + 0.5 && displayHeight <= viewportH + 0.5;

  const pinchStartDist = useRef<number | null>(null);
  const gestureStartPan = useRef({ x: 0, y: 0 });
  const gestureStartTouch = useRef({ x: 0, y: 0 });
  const touchDist = (touches: { pageX: number; pageY: number }[]) => {
    const dx = touches[0].pageX - touches[1].pageX;
    const dy = touches[0].pageY - touches[1].pageY;
    return Math.sqrt(dx * dx + dy * dy);
  };
  const touchMid = (touches: { pageX: number; pageY: number }[]) => ({
    x: (touches[0].pageX + touches[1].pageX) / 2,
    y: (touches[0].pageY + touches[1].pageY) / 2,
  });
  const pinchResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: (evt) =>
        !hintSequenceActiveRef.current && evt.nativeEvent.touches.length === 2,
      onMoveShouldSetPanResponderCapture: (evt) =>
        !hintSequenceActiveRef.current && evt.nativeEvent.touches.length === 2,
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (evt, gesture) => {
        if (hintSequenceActiveRef.current) return false;
        if (evt.nativeEvent.touches.length === 2) return true;
        return scaleRef.current > 1 && (Math.abs(gesture.dx) > 8 || Math.abs(gesture.dy) > 8);
      },
      onPanResponderGrant: (evt) => {
        const touches = evt.nativeEvent.touches;
        gestureStartPan.current = { x: panXRef.current, y: panYRef.current };
        if (touches.length === 2) {
          pinchStartDist.current = touchDist(touches as any);
          pinchBaseScale.current = scaleRef.current;
          gestureStartTouch.current = touchMid(touches as any);
        }
      },
      onPanResponderMove: (evt, gesture) => {
        const touches = evt.nativeEvent.touches;
        if (touches.length === 2 && pinchStartDist.current) {
          const ratio = touchDist(touches as any) / pinchStartDist.current;
          const nextScale = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, pinchBaseScale.current * ratio));
          const mid = touchMid(touches as any);
          const dx = mid.x - gestureStartTouch.current.x;
          const dy = mid.y - gestureStartTouch.current.y;
          const { x, y } = clampPan(gestureStartPan.current.x + dx, gestureStartPan.current.y + dy, nextScale);
          setScaleBoth(nextScale);
          setPanBoth(x, y);
        } else if (touches.length === 1 && scaleRef.current > 1) {
          const { x, y } = clampPan(gestureStartPan.current.x + gesture.dx, gestureStartPan.current.y + gesture.dy, scaleRef.current);
          setPanBoth(x, y);
        }
      },
      onPanResponderRelease: () => {
        pinchStartDist.current = null;
        pinchBaseScale.current = scaleRef.current;
      },
      onPanResponderTerminate: () => {
        pinchStartDist.current = null;
        pinchBaseScale.current = scaleRef.current;
      },
    })
  ).current;

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

  const playFoundText = (x: number, y: number) => {
    const pool = lang === 'ar' ? FOUND_MESSAGES_AR : FOUND_MESSAGES_EN;
    const msg = pool[Math.floor(Math.random() * pool.length)];
    const key = Date.now() + Math.random();
    foundTextScale.setValue(0.6);
    foundTextOpacity.setValue(1);
    foundTextTranslateY.setValue(0);
    setFoundText({ x, y, msg, key });
    Animated.sequence([
      Animated.timing(foundTextScale, { toValue: 1, duration: 180, useNativeDriver: true }),
      Animated.delay(650),
      Animated.parallel([
        Animated.timing(foundTextOpacity, { toValue: 0, duration: 400, useNativeDriver: true }),
        Animated.timing(foundTextTranslateY, { toValue: -22, duration: 400, useNativeDriver: true }),
      ]),
    ]).start(() => setFoundText(null));
  };

  const playSparkles = (cx: number, cy: number) => {
    const count = 6;
    const entries: SparkleEntry[] = Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      return {
        key: Date.now() + i + Math.random(),
        x: cx,
        y: cy,
        dx: Math.cos(angle) * 42,
        dy: Math.sin(angle) * 42,
        opacity: new Animated.Value(1),
        scale: new Animated.Value(0.3),
      };
    });
    setSparkles((prev) => [...prev, ...entries]);
    entries.forEach((s) => {
      Animated.parallel([
        Animated.timing(s.scale, { toValue: 1, duration: 400, useNativeDriver: true }),
        Animated.timing(s.opacity, { toValue: 0, duration: 550, useNativeDriver: true }),
      ]).start(() => setSparkles((prev) => prev.filter((p) => p.key !== s.key)));
    });
  };

  const registerWrongTap = (x: number, y: number) => {
    const key = Date.now() + Math.random();
    const scaleV = new Animated.Value(0.55);
    const opacityV = new Animated.Value(1);
    const entry: WrongMarkEntry = { key, x, y, scale: scaleV, opacity: opacityV };
    setWrongMarks((prev) => [...prev, entry]);
    Animated.sequence([
      Animated.timing(scaleV, { toValue: 1.15, duration: 120, useNativeDriver: true }),
      Animated.timing(scaleV, { toValue: 1, duration: 100, useNativeDriver: true }),
      Animated.delay(680),
      Animated.timing(opacityV, { toValue: 0, duration: 450, useNativeDriver: true }),
    ]).start(() => setWrongMarks((prev) => prev.filter((m) => m.key !== key)));

    setMistakes((m) => m + 1);
    setLives((prevLives) => {
      const remaining = prevLives - 1;
      if (remaining <= 0) {
        setShowLose(true);
        return 0;
      }
      return remaining;
    });
  };

  const completeFound = (id: string, zoneCenterX: number, zoneCenterY: number) => {
    setFoundIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      if (next.size === mission.targetIds.length) {
        setTimeout(() => {
          setElapsed(Math.round((Date.now() - startTimeRef.current) / 1000));
          setShowWin(true);
        }, 900);
      }
      return next;
    });
    setPop({ objId: id, x: zoneCenterX, y: zoneCenterY, key: Date.now() });
    playPop();
    playFoundText(zoneCenterX, zoneCenterY - 30);
    playSparkles(zoneCenterX, zoneCenterY);
  };

  const onTapObject = (obj: HiddenObjectItem) => {
    if (foundIds.has(obj.id) || showWin || showLose || !displayWidth || hintSequenceActive) return;

    const zoneLeft = (obj.left / 100) * displayWidth;
    const zoneTop = (obj.top / 100) * displayHeight;
    const zoneW = (obj.width / 100) * displayWidth;
    const zoneH = (obj.height / 100) * displayHeight;
    const cx = zoneLeft + zoneW / 2;
    const cy = zoneTop + zoneH / 2;

    if (mission.targetIds.includes(obj.id)) {
      completeFound(obj.id, cx, cy);
    } else {
      registerWrongTap(cx, cy);
    }
  };

  const onBackgroundPress = (e: any) => {
    if (hintSequenceActive || showWin || showLose || !displayWidth) return;
    const x = e?.nativeEvent?.locationX ?? displayWidth / 2;
    const y = e?.nativeEvent?.locationY ?? displayHeight / 2;
    registerWrongTap(x, y);
  };

  const runHintSequence = async () => {
    if (hintsLeft <= 0 || showWin || showLose || hintSequenceActiveRef.current || !baseWidth) return;
    const nextTarget = mission.targetIds.find((id) => !foundIds.has(id));
    if (!nextTarget) return;
    const targetObj = mission.objects.find((o) => o.id === nextTarget)!;

    hintSequenceActiveRef.current = true;
    setHintSequenceActive(true);
    setHintAutoTargetId(nextTarget);
    setHintsLeft((h) => h - 1);

    // Reset to the full board so the target is guaranteed on-screen for the glass to travel to.
    pinchBaseScale.current = 1;
    setScaleBoth(1);
    setPanBoth(0, 0);
    await new Promise((r) => setTimeout(r, 60));

    const bw = baseWidthRef.current;
    const bh = bw / mission.imageRatio;
    const tx = (targetObj.left / 100) * bw + ((targetObj.width / 100) * bw) / 2;
    const ty = (targetObj.top / 100) * bh + ((targetObj.height / 100) * bh) / 2;
    const startX = bw * (0.3 + Math.random() * 0.4);
    const startY = viewportHRef.current * (0.35 + Math.random() * 0.3);

    hintGlassX.setValue(startX - GLASS_SIZE / 2);
    hintGlassY.setValue(startY - GLASS_SIZE / 2);
    hintGlassOpacity.setValue(1);

    await new Promise<void>((resolve) => {
      Animated.timing(hintDarkOpacity, { toValue: 0.72, duration: 200, useNativeDriver: true }).start(() => resolve());
    });

    await new Promise<void>((resolve) => {
      const progress = new Animated.Value(0);
      const midX = (startX + tx) / 2;
      const midY = (startY + ty) / 2;
      const listenerId = progress.addListener(({ value: t }) => {
        const curveMidX = midX + Math.sin(t * Math.PI * 2) * 50;
        const curveMidY = midY + Math.sin(t * Math.PI) * 70;
        const ax = startX + (curveMidX - startX) * t;
        const ay = startY + (curveMidY - startY) * t;
        const bx = curveMidX + (tx - curveMidX) * t;
        const by = curveMidY + (ty - curveMidY) * t;
        hintGlassX.setValue(ax + (bx - ax) * t - GLASS_SIZE / 2);
        hintGlassY.setValue(ay + (by - ay) * t - GLASS_SIZE / 2);
      });
      Animated.timing(progress, {
        toValue: 1,
        duration: 2800,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: false,
      }).start(() => {
        progress.removeListener(listenerId);
        resolve();
      });
    });

    await new Promise((r) => setTimeout(r, 450));

    await new Promise<void>((resolve) => {
      Animated.parallel([
        Animated.timing(hintDarkOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
        Animated.timing(hintGlassOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
      ]).start(() => resolve());
    });

    completeFound(nextTarget, tx, ty);

    setHintAutoTargetId(null);
    setHintSequenceActive(false);
    hintSequenceActiveRef.current = false;
  };

  const resetBoardState = () => {
    setFoundIds(new Set());
    setLives(mission.lives);
    setHintsLeft(mission.hints);
    setMistakes(0);
    setScaleBoth(1);
    pinchBaseScale.current = 1;
    setPanBoth(0, 0);
    setWrongMarks([]);
    setSparkles([]);
    setFoundText(null);
    setHintAutoTargetId(null);
    setHintSequenceActive(false);
    hintSequenceActiveRef.current = false;
    hintDarkOpacity.setValue(0);
    hintGlassOpacity.setValue(0);
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
        <Pressable style={styles.hintBtn} onPress={runHintSequence} disabled={hintsLeft <= 0 || hintSequenceActive}>
          <Text style={styles.hintBtnText}>💡 {hintsLeft}</Text>
        </Pressable>
      </View>

      <CharacterBubble characterId={mission.characterId} text={lang === 'ar' ? mission.promptAr : mission.promptEn} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.checklistRow} contentContainerStyle={styles.checklistContent}>
        {mission.targetIds.map((id) => {
          const obj = mission.objects.find((o) => o.id === id)!;
          const isFound = foundIds.has(id);
          const isHintTarget = hintSequenceActive && hintAutoTargetId === id;
          const isDimmed = hintSequenceActive && hintAutoTargetId !== null && hintAutoTargetId !== id;
          return (
            <View
              key={id}
              style={[
                styles.checklistItem,
                isFound ? styles.checklistItemFound : null,
                isDimmed ? styles.checklistItemDimmed : null,
                isHintTarget ? styles.checklistItemHintTarget : null,
              ]}
            >
              {mission.emptyImage ? (
                <Image source={mission.image} style={spriteCoverStyle(obj, mission.imageRatio, 56)} resizeMode="stretch" />
              ) : (
                <Image source={obj.icon} style={styles.checklistIcon} resizeMode="contain" />
              )}
              {isFound ? (
                <View style={styles.checklistCheckOverlay}>
                  <Text style={styles.checklistCheck}>✓</Text>
                </View>
              ) : null}
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.sceneOuter} onLayout={onSceneOuterLayout} {...pinchResponder.panHandlers}>
        <View style={{ transform: [{ translateX: panX }, { translateY: panY }] }}>
          <View style={[styles.imageWrap, { width: displayWidth || '100%', height: displayHeight || 1 }]}>
            {baseWidth ? (
              <>
                <Image source={mission.image} style={styles.missionImage} resizeMode="cover" />

                {noPanPossible ? <Pressable style={styles.fullCover} onPress={onBackgroundPress} /> : null}

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

                {mission.objects.map((obj) =>
                  foundIds.has(obj.id) ? (
                    <View key={'found-' + obj.id} pointerEvents="none" style={[styles.foundOverlay, zoneStyle(obj)]}>
                      {mission.emptyImage && displayWidth ? (
                        <Image
                          source={mission.emptyImage}
                          resizeMode="cover"
                          style={{
                            position: 'absolute',
                            width: displayWidth,
                            height: displayHeight,
                            left: -(obj.left / 100) * displayWidth,
                            top: -(obj.top / 100) * displayHeight,
                          }}
                        />
                      ) : obj.cover ? (
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

                {wrongMarks.map((m) => (
                  <Animated.View
                    key={m.key}
                    pointerEvents="none"
                    style={[
                      styles.wrongMark,
                      { left: m.x - 22, top: m.y - 22, opacity: m.opacity, transform: [{ scale: m.scale }] },
                    ]}
                  >
                    <Text style={styles.wrongMarkText}>✕</Text>
                  </Animated.View>
                ))}

                {sparkles.map((s) => (
                  <Animated.Text
                    key={s.key}
                    pointerEvents="none"
                    style={[
                      styles.sparkleText,
                      { left: s.x + s.dx - 10, top: s.y + s.dy - 10, opacity: s.opacity, transform: [{ scale: s.scale }] },
                    ]}
                  >
                    ✨
                  </Animated.Text>
                ))}

                {foundText ? (
                  <Animated.View
                    key={foundText.key}
                    pointerEvents="none"
                    style={[
                      styles.foundTextWrap,
                      {
                        left: foundText.x - 60,
                        top: foundText.y - 20,
                        opacity: foundTextOpacity,
                        transform: [{ scale: foundTextScale }, { translateY: foundTextTranslateY }],
                      },
                    ]}
                  >
                    <Text style={styles.foundTextLabel}>{foundText.msg}</Text>
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
                    {mission.emptyImage ? (
                      <View style={styles.popIconClip}>
                        <Image source={mission.image} style={spriteCoverStyle(popObj, mission.imageRatio, 76)} resizeMode="stretch" />
                      </View>
                    ) : (
                      <Image source={popObj.icon} style={styles.popIcon} resizeMode="contain" />
                    )}
                  </Animated.View>
                ) : null}

                {hintSequenceActive ? (
                  <Animated.View pointerEvents="none" style={[styles.hintDarkOverlay, { opacity: hintDarkOpacity }]} />
                ) : null}

                {hintSequenceActive ? (
                  <Animated.View
                    pointerEvents="none"
                    style={[
                      styles.magnifyWrap,
                      { opacity: hintGlassOpacity, transform: [{ translateX: hintGlassX }, { translateY: hintGlassY }] },
                    ]}
                  >
                    <View style={styles.magnifyHandle} />
                    <View style={styles.magnifyRing}>
                      <View style={styles.magnifyGlow} />
                    </View>
                  </Animated.View>
                ) : null}
              </>
            ) : null}
          </View>
        </View>
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
  checklistItemDimmed: { opacity: 0.35 },
  checklistItemHintTarget: { borderColor: '#FFD24C', borderWidth: 3 },
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
  sceneOuter: { flex: 1, position: 'relative', overflow: 'hidden', borderRadius: 16 },
  imageWrap: { position: 'relative', overflow: 'hidden', borderRadius: 16 },
  missionImage: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
  fullCover: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  hitZone: { position: 'absolute' },
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
  sparkleText: { position: 'absolute', fontSize: 20 },
  foundTextWrap: { position: 'absolute', width: 120, alignItems: 'center' },
  foundTextLabel: {
    color: '#3FD68D',
    fontWeight: '900',
    fontSize: 22,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
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
  popIconClip: { width: 76, height: 76, borderRadius: 16, overflow: 'hidden' },
  hintDarkOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#0A0614', borderRadius: 16 },
  magnifyWrap: { position: 'absolute', width: GLASS_SIZE, height: GLASS_SIZE + 34, alignItems: 'center' },
  magnifyHandle: {
    position: 'absolute',
    bottom: -30,
    right: 4,
    width: 14,
    height: 46,
    borderRadius: 7,
    backgroundColor: '#8B5CF6',
    transform: [{ rotate: '45deg' }],
  },
  magnifyRing: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 8,
    borderColor: '#FFD24C',
    backgroundColor: 'rgba(255,255,255,0.18)',
    shadowColor: '#FFD24C',
    shadowOpacity: 0.8,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 0 },
    elevation: 12,
  },
  magnifyGlow: {
    position: 'absolute',
    top: 6,
    left: 6,
    right: 6,
    bottom: 6,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
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
