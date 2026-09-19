import React, { useRef, useState } from 'react';
import { Image, LayoutChangeEvent, PanResponder, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { DRAW_MISSIONS } from '../data/drawMissions';
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

type Stroke = { color: string; points: { x: number; y: number }[] };

function pointsToPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return '';
  return points.reduce((acc, p, i) => acc + `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y} `, '');
}

const TEMPLATE_COLORS = ['#FF5E5E', '#4A6CF7', '#FFC93D', '#3FD68D', '#9B5DE5'];
const world = GAME_CARDS.find((c) => c.id === 'drawguess');

export default function DrawScreen() {
  const { t, lang } = useLanguage();
  const navigation = useNavigation();
  const [missionIndex, setMissionIndex] = useState(0);
  const [wrapWidth, setWrapWidth] = useState(0);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [color, setColor] = useState('#4A6CF7');
  const currentStroke = useRef<Stroke | null>(null);
  const [, forceRender] = useState(0);

  const mission = DRAW_MISSIONS[missionIndex];
  const finished = missionIndex >= DRAW_MISSIONS.length;
  const template = mission?.template;

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

  const renderStrokesSvg = () => (
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
  );

  const renderImageMode = () => (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View
        style={[styles.imageWrap, { width: '100%', height: wrapWidth ? wrapWidth / (mission.imageRatio ?? 1) : 1 }]}
        onLayout={onWrapLayout}
      >
        {wrapWidth ? (
          <>
            <Image source={mission.image} style={styles.missionImage} resizeMode="cover" />

            <View style={[styles.canvas, zoneStyle(mission.canvasZone!)]} {...panResponder.panHandlers}>
              {renderStrokesSvg()}
            </View>

            {mission.colorZones!.map((c, i) => (
              <Pressable key={i} style={[styles.hitZone, zoneStyle(c)]} onPress={() => setColor(c.color)} />
            ))}

            <Pressable style={[styles.hitZone, zoneStyle(mission.eraserZone!)]} onPress={eraseAll} />
            <Pressable style={[styles.hitZone, zoneStyle(mission.confirmZone!)]} onPress={finishMission} />
            <Pressable style={[styles.hitZone, zoneStyle(mission.previousZone!)]} onPress={goPrevious} />
            <Pressable style={[styles.hitZone, zoneStyle(mission.nextZone!)]} onPress={finishMission} />
          </>
        ) : null}
      </View>
    </ScrollView>
  );

  const renderTemplateMode = () => {
    if (!template) return null;
    return (
      <ScrollView contentContainerStyle={styles.templateScroll}>
        <View style={styles.templateTopRow}>
          <Pressable style={styles.templateBackBtn} onPress={goPrevious}>
            <Text style={styles.backIcon}>{lang === 'ar' ? '▶' : '◀'}</Text>
          </Pressable>
          <Text style={styles.templateMissionLabel}>
            {t.missionLabel} {mission.number}
          </Text>
          <View style={{ width: 36 }} />
        </View>

        <CharacterBubble
          characterId={template.characterId}
          text={lang === 'ar' ? `ارسم: ${template.targetAr} ${template.targetEmoji}` : `Draw: ${template.targetEn} ${template.targetEmoji}`}
        />

        <View style={styles.templateCanvas} {...panResponder.panHandlers}>
          {renderStrokesSvg()}
        </View>

        <View style={styles.colorRow}>
          {TEMPLATE_COLORS.map((c) => (
            <Pressable
              key={c}
              style={[styles.colorSwatch, { backgroundColor: c }, color === c ? styles.colorSwatchActive : null]}
              onPress={() => setColor(c)}
            />
          ))}
          <Pressable style={styles.eraserBtn} onPress={eraseAll}>
            <Text style={styles.eraserIcon}>🧽</Text>
          </Pressable>
        </View>

        <View style={styles.templateFooter}>
          <Pressable style={[styles.footerBtn, styles.previousBtn]} onPress={goPrevious}>
            <Text style={styles.footerBtnText}>{t.previous}</Text>
          </Pressable>
          <Pressable
            style={[styles.footerBtn, styles.confirmBtn, strokes.length === 0 ? styles.footerBtnDisabled : null]}
            onPress={finishMission}
            disabled={strokes.length === 0}
          >
            <Text style={styles.footerBtnText}>{t.confirm}</Text>
          </Pressable>
        </View>
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
  canvas: { position: 'absolute' },
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
  backIcon: { fontSize: 15, fontWeight: '900', color: palette.dark },
  templateMissionLabel: { fontSize: 16, fontWeight: '900', color: palette.white },
  templateCanvas: {
    position: 'relative',
    width: '100%',
    aspectRatio: 1.3,
    backgroundColor: palette.white,
    borderRadius: 20,
    marginTop: 8,
    overflow: 'hidden',
  },
  colorRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 16 },
  colorSwatch: { width: 36, height: 36, borderRadius: 18, borderWidth: 3, borderColor: 'transparent' },
  colorSwatchActive: { borderColor: palette.white },
  eraserBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eraserIcon: { fontSize: 18 },
  templateFooter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, gap: 12 },
  footerBtn: { flex: 1, paddingVertical: 16, borderRadius: 20, alignItems: 'center' },
  previousBtn: { backgroundColor: 'rgba(255,255,255,0.25)' },
  confirmBtn: { backgroundColor: palette.green },
  footerBtnDisabled: { opacity: 0.5 },
  footerBtnText: { color: palette.white, fontSize: 16, fontWeight: '900' },
});
