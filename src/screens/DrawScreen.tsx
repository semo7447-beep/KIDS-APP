import React, { useRef, useState } from 'react';
import { Image, LayoutChangeEvent, PanResponder, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { DRAW_MISSIONS } from '../data/drawMissions';
import { Zone } from '../types/mission';

function zoneStyle(zone: Zone) {
  return {
    left: `${zone.left}%` as const,
    top: `${zone.top}%` as const,
    width: `${zone.width}%` as const,
    height: `${zone.height}%` as const,
  };
}

type Stroke = { color: string; points: { x: number; y: number }[] };

function pointsToPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return '';
  return points.reduce((acc, p, i) => acc + `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y} `, '');
}

export default function DrawScreen() {
  const { t } = useLanguage();
  const navigation = useNavigation();
  const [missionIndex, setMissionIndex] = useState(0);
  const [wrapWidth, setWrapWidth] = useState(0);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [color, setColor] = useState('#4A6CF7');
  const currentStroke = useRef<Stroke | null>(null);
  const [, forceRender] = useState(0);

  const mission = DRAW_MISSIONS[missionIndex];
  const finished = missionIndex >= DRAW_MISSIONS.length;

  const onWrapLayout = (e: LayoutChangeEvent) => setWrapWidth(e.nativeEvent.layout.width);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => {
        const { locationX, locationY } = evt.nativeEvent;
        currentStroke.current = { color, points: [{ x: locationX, y: locationY }] };
        forceRender((n) => n + 1);
      },
      onPanResponderMove: (evt) => {
        const { locationX, locationY } = evt.nativeEvent;
        if (currentStroke.current) {
          currentStroke.current.points.push({ x: locationX, y: locationY });
          forceRender((n) => n + 1);
        }
      },
      onPanResponderRelease: () => {
        const finishedStroke = currentStroke.current;
        if (finishedStroke && finishedStroke.points.length > 0) {
          setStrokes((prev) => [...prev, finishedStroke]);
        }
        currentStroke.current = null;
        forceRender((n) => n + 1);
      },
    })
  ).current;

  const eraseAll = () => setStrokes([]);

  const goPrevious = () => {
    if (missionIndex === 0) {
      navigation.goBack();
      return;
    }
    setMissionIndex((i) => i - 1);
    setStrokes([]);
  };

  const finishMission = () => {
    if (strokes.length === 0) return;
    setMissionIndex((i) => i + 1);
    setStrokes([]);
  };

  const restart = () => {
    setMissionIndex(0);
    setStrokes([]);
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

                <View style={[styles.canvas, zoneStyle(mission.canvasZone)]} {...panResponder.panHandlers}>
                  <Svg style={StyleSheet.absoluteFill}>
                    {strokes.map((s, i) => (
                      <Path key={i} d={pointsToPath(s.points)} stroke={s.color} strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    ))}
                    {currentStroke.current ? (
                      <Path
                        d={pointsToPath(currentStroke.current.points)}
                        stroke={currentStroke.current.color}
                        strokeWidth={5}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ) : null}
                  </Svg>
                </View>

                {mission.colorZones.map((c, i) => (
                  <Pressable key={i} style={[styles.hitZone, zoneStyle(c)]} onPress={() => setColor(c.color)} />
                ))}

                <Pressable style={[styles.hitZone, zoneStyle(mission.eraserZone)]} onPress={eraseAll} />
                <Pressable style={[styles.hitZone, zoneStyle(mission.confirmZone)]} onPress={finishMission} />
                <Pressable style={[styles.hitZone, zoneStyle(mission.previousZone)]} onPress={goPrevious} />
                <Pressable style={[styles.hitZone, zoneStyle(mission.nextZone)]} onPress={finishMission} />
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
  canvas: { position: 'absolute' },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.white, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
