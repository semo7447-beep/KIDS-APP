import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Image, LayoutChangeEvent, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { ROBOT_MISSIONS, Dir } from '../data/robotMissions';
import { Zone } from '../types/mission';
import { GAME_CARDS } from '../data/games';
import CharacterBubble from '../components/CharacterBubble';
import { facingAngle, shortestAngleTo, simulateRobot } from '../utils/robotSim';

function zoneStyle(zone: Zone) {
  return {
    left: `${zone.left}%` as const,
    top: `${zone.top}%` as const,
    width: `${zone.width}%` as const,
    height: `${zone.height}%` as const,
  };
}

function animateValue(anim: Animated.Value, toValue: number, duration: number, easing = Easing.out(Easing.cubic)): Promise<void> {
  return new Promise((resolve) => {
    Animated.timing(anim, { toValue, duration, easing, useNativeDriver: false }).start(() => resolve());
  });
}

function animateXY(anim: Animated.ValueXY, toValue: { x: number; y: number }, duration: number, easing = Easing.out(Easing.cubic)): Promise<void> {
  return new Promise((resolve) => {
    Animated.timing(anim, { toValue, duration, easing, useNativeDriver: false }).start(() => resolve());
  });
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function shakeOnce(anim: Animated.Value): Promise<void> {
  return new Promise((resolve) => {
    Animated.sequence([
      Animated.timing(anim, { toValue: 1, duration: 55, useNativeDriver: false }),
      Animated.timing(anim, { toValue: -1, duration: 55, useNativeDriver: false }),
      Animated.timing(anim, { toValue: 1, duration: 55, useNativeDriver: false }),
      Animated.timing(anim, { toValue: -1, duration: 55, useNativeDriver: false }),
      Animated.timing(anim, { toValue: 0, duration: 55, useNativeDriver: false }),
    ]).start(() => resolve());
  });
}

const DIR_ICON: Record<Dir, string> = { forward: '⬆️', left: '⬅️', right: '➡️' };
const world = GAME_CARDS.find((c) => c.id === 'robot');

export default function RobotScreen() {
  const { t, lang } = useLanguage();
  const navigation = useNavigation();
  const [missionIndex, setMissionIndex] = useState(0);
  const [sequence, setSequence] = useState<Dir[]>([]);
  const [running, setRunning] = useState(false);
  const [wrapWidth, setWrapWidth] = useState(0);
  const [feedback, setFeedback] = useState<'fail' | null>(null);
  const [hintDir, setHintDir] = useState<Dir | null>(null);

  const spritePos = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const spriteRotate = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const hintPulse = useRef(new Animated.Value(0)).current;
  const spriteVisible = useRef(false);
  const currentAngleRef = useRef(0);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hintLoopRef = useRef<Animated.CompositeAnimation | null>(null);
  const [, forceRender] = useState(0);

  const mission = ROBOT_MISSIONS[missionIndex];
  const finished = missionIndex >= ROBOT_MISSIONS.length;
  const template = mission?.template;
  const imageRatio = mission?.imageRatio ?? (template ? template.cols / template.rows : 1);
  const wrapHeight = wrapWidth ? wrapWidth / imageRatio : 0;
  const slotCount = template?.slotCount ?? mission?.slotCount ?? 0;
  const activeSolution = template?.solution ?? mission?.solution;

  const onWrapLayout = (e: LayoutChangeEvent) => setWrapWidth(e.nativeEvent.layout.width);

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  const pointToPx = (p: { left: number; top: number }) => ({
    x: (p.left / 100) * wrapWidth,
    y: (p.top / 100) * wrapHeight,
  });

  const cellCenter = (cell: { col: number; row: number }) => {
    if (!template) return { left: 0, top: 0 };
    return {
      left: ((cell.col + 0.5) / template.cols) * 100,
      top: ((cell.row + 0.5) / template.rows) * 100,
    };
  };

  // Snap the sprite to the mission's start cell/point whenever the mission changes.
  useEffect(() => {
    if (!wrapWidth) return;
    if (template) {
      const startPx = pointToPx(cellCenter(template.start));
      spritePos.setValue(startPx);
      const angle = facingAngle(template.startFacing);
      spriteRotate.setValue(angle);
      currentAngleRef.current = angle;
      spriteVisible.current = true;
    } else if (mission?.startPoint) {
      spritePos.setValue(pointToPx(mission.startPoint));
      spriteRotate.setValue(0);
      currentAngleRef.current = 0;
      spriteVisible.current = false;
    }
    forceRender((n) => n + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [missionIndex, wrapWidth]);

  // 7-second idle hint timer: re-arms every time the queue or mission changes.
  useEffect(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    setHintDir(null);
    if (running || finished || !activeSolution) return undefined;
    idleTimerRef.current = setTimeout(() => {
      const nextIndex = sequence.length;
      if (nextIndex < activeSolution.length) {
        setHintDir(activeSolution[nextIndex]);
      }
    }, 7000);
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sequence, missionIndex, running, finished]);

  // Pulse loop follows hintDir on/off.
  useEffect(() => {
    if (hintDir) {
      hintPulse.setValue(0);
      hintLoopRef.current = Animated.loop(
        Animated.sequence([
          Animated.timing(hintPulse, { toValue: 1, duration: 500, useNativeDriver: false }),
          Animated.timing(hintPulse, { toValue: 0, duration: 500, useNativeDriver: false }),
        ])
      );
      hintLoopRef.current.start();
    } else {
      hintLoopRef.current?.stop();
      hintPulse.setValue(0);
    }
    return () => hintLoopRef.current?.stop();
  }, [hintDir]);

  const addCommand = (dir: Dir) => {
    if (running || sequence.length >= slotCount) return;
    setSequence((prev) => [...prev, dir]);
  };

  const clearSequence = () => {
    if (running) return;
    setSequence([]);
    setFeedback(null);
  };

  const goBack = () => {
    if (running) return;
    if (missionIndex === 0) {
      navigation.goBack();
      return;
    }
    setMissionIndex((i) => i - 1);
    setSequence([]);
  };

  const restart = () => {
    setMissionIndex(0);
    setSequence([]);
  };

  const returnToStartTemplate = async () => {
    if (!template) return;
    const startPx = pointToPx(cellCenter(template.start));
    const targetAngle = shortestAngleTo(currentAngleRef.current, facingAngle(template.startFacing));
    await Promise.all([
      animateXY(spritePos, startPx, 450),
      animateValue(spriteRotate, targetAngle, 450),
    ]);
    currentAngleRef.current = facingAngle(template.startFacing);
    spriteRotate.setValue(currentAngleRef.current);
  };

  // Template mode: real cell-by-cell playback (turn, move, collide, or reach goal).
  const playTemplate = async () => {
    if (!template || running || sequence.length === 0 || !wrapWidth) return;
    setRunning(true);
    setFeedback(null);
    setHintDir(null);

    const steps = simulateRobot(sequence, template.start, template.startFacing, template.cols, template.rows, template.obstacles, template.goal);

    for (const step of steps) {
      if (step.outcome === 'turned') {
        const delta = step.command === 'right' ? 90 : -90;
        const toAngle = currentAngleRef.current + delta;
        await animateValue(spriteRotate, toAngle, 320, Easing.out(Easing.back(1.4)));
        currentAngleRef.current = toAngle;
      } else if (step.outcome === 'moved' || step.outcome === 'goal') {
        const px = pointToPx(cellCenter({ col: step.col, row: step.row }));
        await animateXY(spritePos, px, 420);

        if (step.outcome === 'goal') {
          speak(lang === 'ar' ? 'وصلنا للهدف! أحسنت!' : 'Reached the goal! Well done!');
          await wait(500);
          setRunning(false);
          setSequence([]);
          setMissionIndex((i) => i + 1);
          return;
        }
      } else if (step.outcome === 'blocked') {
        await shakeOnce(shakeAnim);
        await returnToStartTemplate();
        speak(t.wrongTryAgain);
        setFeedback('fail');
        setSequence([]);
        setRunning(false);
        setTimeout(() => setFeedback(null), 700);
        return;
      }
    }

    // Every command ran but the goal was never reached — a calm reset, no shake.
    await returnToStartTemplate();
    speak(t.wrongTryAgain);
    setFeedback('fail');
    setSequence([]);
    setRunning(false);
    setTimeout(() => setFeedback(null), 700);
  };

  // Image mode (mission 1): the original straight-line success path, now with a shake on failure.
  const playImage = () => {
    if (!mission || running || sequence.length === 0 || !wrapWidth || !mission.startPoint || !mission.goalPoint) return;
    const isCorrect = sequence.length === mission.solution.length && sequence.every((d, i) => d === mission.solution[i]);

    setRunning(true);
    setFeedback(null);
    setHintDir(null);
    spritePos.setValue(pointToPx(mission.startPoint));
    spriteVisible.current = true;
    forceRender((n) => n + 1);

    if (isCorrect) {
      speak(lang === 'ar' ? 'يلا نتحرك!' : "Let's go!");
      animateXY(spritePos, pointToPx(mission.goalPoint), 1400).then(() => {
        speak(lang === 'ar' ? 'وصلنا للهدف! أحسنت!' : 'Reached the goal! Well done!');
        setTimeout(() => {
          setRunning(false);
          setSequence([]);
          spriteVisible.current = false;
          setMissionIndex((i) => i + 1);
        }, 900);
      });
    } else {
      shakeOnce(shakeAnim).then(() => {
        speak(t.wrongTryAgain);
        setTimeout(() => {
          setRunning(false);
          setFeedback('fail');
          setSequence([]);
          spriteVisible.current = false;
          forceRender((n) => n + 1);
          setTimeout(() => setFeedback(null), 700);
        }, 300);
      });
    }
  };

  const rotateDeg = spriteRotate.interpolate({ inputRange: [-1000, 1000], outputRange: ['-1000deg', '1000deg'] });
  const shakeTranslate = shakeAnim.interpolate({ inputRange: [-1, 1], outputRange: [-8, 8] });
  const spriteTransform = [...spritePos.getTranslateTransform(), { translateX: shakeTranslate }, { rotate: rotateDeg }];

  const hintScale = hintPulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.18] });
  const hintOpacity = hintPulse.interpolate({ inputRange: [0, 1], outputRange: [0.25, 0.7] });

  const slotCells = mission && !template
    ? Array.from({ length: slotCount }, (_, i) => {
        const cellWidth = mission.slotsZone!.width / slotCount;
        return { left: mission.slotsZone!.left + cellWidth * i, top: mission.slotsZone!.top, width: cellWidth, height: mission.slotsZone!.height };
      })
    : [];

  const renderImageMode = () => (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={[styles.imageWrap, { width: '100%', height: wrapHeight || 1 }]} onLayout={onWrapLayout}>
        {wrapWidth ? (
          <>
            <Image source={mission.image} style={styles.missionImage} resizeMode="cover" />

            <Pressable style={[styles.hitZone, zoneStyle(mission.forwardZone!)]} onPress={() => addCommand('forward')} />
            <Pressable style={[styles.hitZone, zoneStyle(mission.leftZone!)]} onPress={() => addCommand('left')} />
            <Pressable style={[styles.hitZone, zoneStyle(mission.rightZone!)]} onPress={() => addCommand('right')} />
            <Pressable style={[styles.hitZone, zoneStyle(mission.clearZone!)]} onPress={clearSequence} />
            <Pressable style={[styles.hitZone, zoneStyle(mission.playZone!)]} onPress={playImage} />
            <Pressable style={[styles.hitZone, zoneStyle(mission.backZone!)]} onPress={goBack} />

            {hintDir === 'forward' ? (
              <Animated.View pointerEvents="none" style={[styles.hintOverlay, zoneStyle(mission.forwardZone!), { opacity: hintOpacity }]} />
            ) : null}
            {hintDir === 'left' ? (
              <Animated.View pointerEvents="none" style={[styles.hintOverlay, zoneStyle(mission.leftZone!), { opacity: hintOpacity }]} />
            ) : null}
            {hintDir === 'right' ? (
              <Animated.View pointerEvents="none" style={[styles.hintOverlay, zoneStyle(mission.rightZone!), { opacity: hintOpacity }]} />
            ) : null}

            {slotCells.map((cell, i) => (
              <View key={i} pointerEvents="none" style={[styles.slotCell, zoneStyle(cell)]}>
                {sequence[i] ? <Text style={styles.slotIcon}>{DIR_ICON[sequence[i]]}</Text> : null}
              </View>
            ))}

            {spriteVisible.current ? (
              <Animated.View pointerEvents="none" style={[styles.sprite, { transform: spriteTransform }]}>
                <Text style={styles.spriteEmoji}>🤖</Text>
              </Animated.View>
            ) : null}

            {feedback === 'fail' ? (
              <View pointerEvents="none" style={styles.failBanner}>
                <Text style={styles.failText}>{t.timeUp}</Text>
              </View>
            ) : null}
          </>
        ) : null}
      </View>
    </ScrollView>
  );

  const renderTemplateMode = () => {
    if (!template) return null;
    const gridCells: { col: number; row: number }[] = [];
    for (let r = 0; r < template.rows; r++) {
      for (let c = 0; c < template.cols; c++) gridCells.push({ col: c, row: r });
    }
    const isObstacle = (col: number, row: number) => template.obstacles.some((o) => o.col === col && o.row === row);
    const isGoal = (col: number, row: number) => template.goal.col === col && template.goal.row === row;

    return (
      <ScrollView contentContainerStyle={styles.templateScroll}>
        <View style={styles.templateTopRow}>
          <Pressable style={styles.templateBackBtn} onPress={goBack}>
            <Text style={styles.templateBackIcon}>{lang === 'ar' ? '▶' : '◀'}</Text>
          </Pressable>
          <Text style={styles.templateMissionLabel}>
            {t.missionLabel} {mission.number}
          </Text>
        </View>

        <CharacterBubble
          characterId={template.characterId}
          text={lang === 'ar' ? 'برمج روبو ليوصل للعلم! 🚩' : 'Program Robo to reach the flag! 🚩'}
        />

        <View style={[styles.gridWrap, { height: wrapHeight || undefined }]} onLayout={onWrapLayout}>
          {wrapWidth
            ? gridCells.map((cell) => (
                <View
                  key={`${cell.col}-${cell.row}`}
                  style={[
                    styles.gridCell,
                    { width: `${100 / template.cols}%`, height: `${100 / template.rows}%` },
                  ]}
                >
                  <View style={styles.gridCellInner}>
                    {isObstacle(cell.col, cell.row) ? <Text style={styles.gridCellEmoji}>🪨</Text> : null}
                    {isGoal(cell.col, cell.row) ? <Text style={styles.gridCellEmoji}>🚩</Text> : null}
                  </View>
                </View>
              ))
            : null}

          {wrapWidth && spriteVisible.current ? (
            <Animated.View pointerEvents="none" style={[styles.sprite, { transform: spriteTransform }]}>
              <Text style={styles.spriteEmoji}>🤖</Text>
            </Animated.View>
          ) : null}

          {feedback === 'fail' ? (
            <View pointerEvents="none" style={styles.failBannerTemplate}>
              <Text style={styles.failText}>{t.timeUp}</Text>
            </View>
          ) : null}
        </View>

        <View style={styles.slotsRow}>
          {Array.from({ length: slotCount }, (_, i) => (
            <View key={i} style={styles.templateSlot}>
              {sequence[i] ? <Text style={styles.slotIcon}>{DIR_ICON[sequence[i]]}</Text> : null}
            </View>
          ))}
        </View>

        <View style={styles.commandRow}>
          <Animated.View style={hintDir === 'forward' ? { transform: [{ scale: hintScale }] } : undefined}>
            <Pressable style={styles.commandBtn} onPress={() => addCommand('forward')}>
              <Text style={styles.commandIcon}>⬆️</Text>
            </Pressable>
          </Animated.View>
          <Animated.View style={hintDir === 'left' ? { transform: [{ scale: hintScale }] } : undefined}>
            <Pressable style={styles.commandBtn} onPress={() => addCommand('left')}>
              <Text style={styles.commandIcon}>⬅️</Text>
            </Pressable>
          </Animated.View>
          <Animated.View style={hintDir === 'right' ? { transform: [{ scale: hintScale }] } : undefined}>
            <Pressable style={styles.commandBtn} onPress={() => addCommand('right')}>
              <Text style={styles.commandIcon}>➡️</Text>
            </Pressable>
          </Animated.View>
          <Pressable style={styles.commandBtn} onPress={clearSequence}>
            <Text style={styles.commandIcon}>🗑️</Text>
          </Pressable>
        </View>

        <Pressable style={styles.playBtn} onPress={playTemplate}>
          <Text style={styles.playBtnText}>▶ {t.startRobot}</Text>
        </Pressable>
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
  hintOverlay: {
    position: 'absolute',
    backgroundColor: palette.yellow,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: palette.yellow,
  },
  slotCell: { position: 'absolute', alignItems: 'center', justifyContent: 'center' },
  slotIcon: { fontSize: 20 },
  sprite: {
    position: 'absolute',
    width: 46,
    height: 46,
    marginLeft: -23,
    marginTop: -23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spriteEmoji: { fontSize: 36 },
  failBanner: {
    position: 'absolute',
    top: '58%',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,94,94,0.9)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
  },
  failBannerTemplate: {
    position: 'absolute',
    top: '40%',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,94,94,0.92)',
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
  templateBackIcon: { fontSize: 15, fontWeight: '900', color: palette.dark },
  templateMissionLabel: { fontSize: 16, fontWeight: '900', color: palette.white },
  gridWrap: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 8,
  },
  gridCell: { padding: 2 },
  gridCellInner: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.65)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridCellEmoji: { fontSize: 22 },
  slotsRow: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginTop: 16 },
  templateSlot: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commandRow: { flexDirection: 'row', justifyContent: 'center', gap: 12, marginTop: 20 },
  commandBtn: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.95)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commandIcon: { fontSize: 26 },
  playBtn: {
    marginTop: 20,
    backgroundColor: palette.green,
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  playBtnText: { color: palette.white, fontSize: 18, fontWeight: '900' },
});
