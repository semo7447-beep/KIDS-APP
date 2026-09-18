import React, { useRef, useState } from 'react';
import { Animated, Image, LayoutChangeEvent, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { ROBOT_MISSIONS, Dir } from '../data/robotMissions';
import { Zone } from '../types/mission';

function zoneStyle(zone: Zone) {
  return {
    left: `${zone.left}%` as const,
    top: `${zone.top}%` as const,
    width: `${zone.width}%` as const,
    height: `${zone.height}%` as const,
  };
}

const DIR_ICON: Record<Dir, string> = { forward: '⬆️', left: '⬅️', right: '➡️' };

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
  const wrapHeight = wrapWidth ? wrapWidth / mission?.imageRatio : 0;

  const onWrapLayout = (e: LayoutChangeEvent) => setWrapWidth(e.nativeEvent.layout.width);

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  const pointToPx = (p: { left: number; top: number }) => ({
    x: (p.left / 100) * wrapWidth,
    y: (p.top / 100) * wrapHeight,
  });

  const addCommand = (dir: Dir) => {
    if (running || sequence.length >= mission.slotCount) return;
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

    setRunning(true);
    setFeedback(null);
    const start = pointToPx(mission.startPoint);
    spritePos.setValue({ x: start.x, y: start.y });
    spriteVisible.current = true;
    forceRender((n) => n + 1);

    if (isCorrect) {
      const goal = pointToPx(mission.goalPoint);
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

  const slotCells = mission
    ? Array.from({ length: mission.slotCount }, (_, i) => {
        const cellWidth = mission.slotsZone.width / mission.slotCount;
        return { left: mission.slotsZone.left + cellWidth * i, top: mission.slotsZone.top, width: cellWidth, height: mission.slotsZone.height };
      })
    : [];

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
            style={[styles.imageWrap, { width: '100%', height: wrapHeight || 1 }]}
            onLayout={onWrapLayout}
          >
            {wrapWidth ? (
              <>
                <Image source={mission.image} style={styles.missionImage} resizeMode="cover" />

                <Pressable style={[styles.hitZone, zoneStyle(mission.forwardZone)]} onPress={() => addCommand('forward')} />
                <Pressable style={[styles.hitZone, zoneStyle(mission.leftZone)]} onPress={() => addCommand('left')} />
                <Pressable style={[styles.hitZone, zoneStyle(mission.rightZone)]} onPress={() => addCommand('right')} />
                <Pressable style={[styles.hitZone, zoneStyle(mission.clearZone)]} onPress={clearSequence} />
                <Pressable style={[styles.hitZone, zoneStyle(mission.playZone)]} onPress={play} />
                <Pressable style={[styles.hitZone, zoneStyle(mission.backZone)]} onPress={goBack} />

                {slotCells.map((cell, i) => (
                  <View key={i} pointerEvents="none" style={[styles.slotCell, zoneStyle(cell)]}>
                    {sequence[i] ? <Text style={styles.slotIcon}>{DIR_ICON[sequence[i]]}</Text> : null}
                  </View>
                ))}

                {spriteVisible.current ? (
                  <Animated.View
                    pointerEvents="none"
                    style={[styles.sprite, { transform: spritePos.getTranslateTransform() }]}
                  >
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
  failText: { color: palette.white, fontWeight: '900', fontSize: 16 },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.white, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
