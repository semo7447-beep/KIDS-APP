import React, { useRef, useState } from 'react';
import { PanResponder, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { COLORS } from '../data/content';
import { GAME_CARDS } from '../data/games';
import WorldHeader from '../components/WorldHeader';

const CARD = GAME_CARDS.find((c) => c.id === 'drawguess')!;

const PROMPTS = ['🐳', '🐱', '🚀', '🌸', '🏠', '🦁', '🍕', '⚽', '🌈', '🦋', '🐢', '🚗'];

type Stroke = { color: string; points: { x: number; y: number }[] };

function pointsToPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return '';
  return points.reduce((acc, p, i) => acc + `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y} `, '');
}

export default function DrawScreen() {
  const { t, lang } = useLanguage();
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [color, setColor] = useState<string>(palette.purple);
  const [prompt, setPrompt] = useState(() => PROMPTS[Math.floor(Math.random() * PROMPTS.length)]);
  const currentStroke = useRef<Stroke | null>(null);
  const [, forceRender] = useState(0);

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
        if (currentStroke.current && currentStroke.current.points.length > 0) {
          setStrokes((prev) => [...prev, currentStroke.current as Stroke]);
        }
        currentStroke.current = null;
        forceRender((n) => n + 1);
      },
    })
  ).current;

  const clear = () => setStrokes([]);
  const undo = () => setStrokes((prev) => prev.slice(0, -1));
  const newDrawing = () => {
    setStrokes([]);
    setPrompt(PROMPTS[Math.floor(Math.random() * PROMPTS.length)]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <WorldHeader title={lang === 'ar' ? CARD.titleAr : CARD.titleEn} image={CARD.worldImage} />
      <View style={styles.promptRow}>
        <Text style={styles.promptLabel}>{t.drawPrompt}</Text>
        <Text style={styles.promptEmoji}>{prompt}</Text>
      </View>
      <View style={styles.canvasWrap} {...panResponder.panHandlers}>
        <Svg style={StyleSheet.absoluteFill}>
          {strokes.map((s, i) => (
            <Path key={i} d={pointsToPath(s.points)} stroke={s.color} strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          ))}
          {currentStroke.current ? (
            <Path
              d={pointsToPath(currentStroke.current.points)}
              stroke={currentStroke.current.color}
              strokeWidth={8}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null}
        </Svg>
      </View>
      <View style={styles.toolbar}>
        <View style={styles.palette}>
          {COLORS.map((c) => (
            <Pressable key={c.hex} onPress={() => setColor(c.hex)}>
              <View
                style={[styles.swatch, { backgroundColor: c.hex }, color === c.hex ? styles.swatchSelected : null]}
              />
            </Pressable>
          ))}
        </View>
        <View style={styles.actions}>
          <Pressable style={styles.actionBtn} onPress={undo}>
            <Text style={styles.actionText}>{t.undo}</Text>
          </Pressable>
          <Pressable style={[styles.actionBtn, { backgroundColor: palette.red }]} onPress={clear}>
            <Text style={styles.actionText}>{t.clear}</Text>
          </Pressable>
          <Pressable style={[styles.actionBtn, { backgroundColor: palette.orange }]} onPress={newDrawing}>
            <Text style={styles.actionText}>{t.newDrawing}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  promptRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 8, marginBottom: 4 },
  promptLabel: { fontSize: 16, fontWeight: '800', color: palette.dark, marginHorizontal: 8 },
  promptEmoji: { fontSize: 32 },
  canvasWrap: {
    flex: 1,
    marginHorizontal: 12,
    marginBottom: 8,
    backgroundColor: palette.white,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: palette.dark,
  },
  toolbar: { paddingHorizontal: 12, paddingBottom: 16 },
  palette: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 10 },
  swatch: { width: 32, height: 32, borderRadius: 16, margin: 4, borderWidth: 2, borderColor: palette.white },
  swatchSelected: { borderColor: palette.dark, borderWidth: 3 },
  actions: { flexDirection: 'row', justifyContent: 'center' },
  actionBtn: {
    backgroundColor: palette.blue,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
    marginHorizontal: 6,
  },
  actionText: { color: palette.white, fontWeight: '800', fontSize: 13 },
});
