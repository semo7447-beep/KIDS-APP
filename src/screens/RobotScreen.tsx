import React, { useRef, useState } from 'react';
import { Animated, Image, LayoutChangeEvent, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { ROBOT_MISSIONS, Dir } from '../data/robotMissions';
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
  const spritePos = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const spriteVisible = useRef(false);
  const [, forceRender] = useState(0);

  const mission = ROBOT_MISSIONS[missionIndex];
  const finished = missionIndex >= ROBOT_MISSIONS.length;
  const template = mission?.template;
  const imageRatio = mission?.imageRatio ?? (template ? template.cols / template.rows : 1);
  const wrapHeight = wrapWidth ? wrapWidth / imageRatio : 0;
  const slotCount = template?.slotCount ?? mission?.slotCount ?? 0;

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

  const addCommand = (dir: Dir) => {
    if (running || sequence.length >= slotCount) return;
    setSequence((prev) => [...prev, dir]);
  };

  const clearSequence = () => {
    if (running) return;
    setSequence([]);
    setFeedback(null);
    spriteVisible.current = false;
    forceRender((n) => n + 1);
  };

  const goBack = () => {
    if (missionIndex === 0) {
      navigation.goBack();
      return;
    }
    setMissionIndex((i) => i - 1);
    setSequence([]);
    spriteVisible.current = false;
  };

  const restart = () => {
    setMissionIndex(0);
    setSequence([]);
    spriteVisible.current = false;
  };

  const play = () => {
    if (running || sequence.length === 0 || !wrapWidth) return;
    const isCorrect =
      sequence.length === mission.solution.length && sequence.every((d, i) => d === mission.solution[i]);

    const startPoint = template ? cellCenter(template.start) : mission.startPoint!;
    const goalPoint = template ? cellCenter(template.goal) : mission.goalPoint!;

    setRunning(true);
    setFeedback(null);
    const start = pointToPx(startPoint);
    spritePos.setValue({ x: start.x, y: start.y });
    spriteVisible.current = true;
    forceRender((n) => n + 1);

    if (isCorrect) {
      const goal = pointToPx(goalPoint);
      speak(lang === 'ar' ? 'يلا نتحرك!' : "Let's go!");
      Animated.timing(spritePos, {
        toValue: { x: goal.x, y: goal.y },
        duration: 1400,
        useNativeDriver: false,
      }).start(() => {
        speak(lang === 'ar' ? 'وصلنا للهدف! أحسنت!' : 'Reached the goal! Well done!');
        setTimeout(() => {
          setRunning(false);
          setSequence([]);
          spriteVisible.current = false;
          setMissionIndex((i) => i + 1);
        }, 900);
      });
    } else {
      speak(t.wrongTryAgain);
      setTimeout(() => {
        setRunning(false);
        setFeedback('fail');
        setSequence([]);
        spriteVisible.current = false;
        forceRender((n) => n + 1);
        setTimeout(() => setFeedback(null), 700);
      }, 500);
    }
  };

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
            <Pressable style={[styles.hitZone, zoneStyle(mission.playZone!)]} onPress={play} />
            <Pressable style={[styles.hitZone, zoneStyle(mission.backZone!)]} onPress={goBack} />

            {slotCells.map((cell, i) => (
              <View key={i} pointerEvents="none" style={[styles.slotCell, zoneStyle(cell)]}>
                {sequence[i] ? <Text style={styles.slotIcon}>{DIR_ICON[sequence[i]]}</Text> : null}
              </View>
            ))}

            {spriteVisible.current ? (
              <Animated.View pointerEvents="none" style={[styles.sprite, { transform: spritePos.getTranslateTransform() }]}>
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
            <Animated.View pointerEvents="none" style={[styles.sprite, { transform: spritePos.getTranslateTransform() }]}>
              <Text style={styles.spriteEmoji}>🤖</Text>
            </Animated.View>
          ) : null}

          {wrapWidth && !spriteVisible.current
            ? (() => {
                const p = pointToPx(cellCenter(template.start));
                return (
                  <View pointerEvents="none" style={[styles.sprite, { left: p.x - 23, top: p.y - 23 }]}>
                    <Text style={styles.spriteEmoji}>🤖</Text>
                  </View>
                );
              })()
            : null}

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
          <Pressable style={styles.commandBtn} onPress={() => addCommand('forward')}>
            <Text style={styles.commandIcon}>⬆️</Text>
          </Pressable>
          <Pressable style={styles.commandBtn} onPress={() => addCommand('left')}>
            <Text style={styles.commandIcon}>⬅️</Text>
          </Pressable>
          <Pressable style={styles.commandBtn} onPress={() => addCommand('right')}>
            <Text style={styles.commandIcon}>➡️</Text>
          </Pressable>
          <Pressable style={styles.commandBtn} onPress={clearSequence}>
            <Text style={styles.commandIcon}>🗑️</Text>
          </Pressable>
        </View>

        <Pressable style={styles.playBtn} onPress={play}>
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
