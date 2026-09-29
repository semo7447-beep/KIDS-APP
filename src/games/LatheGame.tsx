import React, { useMemo, useRef, useState } from 'react';
import { LayoutChangeEvent, PanResponder, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';
import { useLanguage } from '../context/LanguageContext';
import { LevelGameProps } from '../components/LevelGame';

const SAMPLES = 60;
const PASS = 70;
type Tool = 'circle' | 'square' | 'triangle';

// Target silhouettes as radius fractions (0..1) along the log, left to right.
const SHAPES: number[][] = [
  [0.55, 0.8, 0.95, 0.8, 0.5, 0.4, 0.6],
  [0.4, 0.9, 1, 0.85, 0.45, 0.35, 0.7],
  [0.9, 0.95, 0.9, 0.6, 0.35, 0.35, 0.5],
  [0.7, 0.45, 0.9, 1, 0.9, 0.45, 0.7],
  [0.35, 0.6, 0.85, 0.95, 0.85, 0.6, 0.35],
  [0.8, 0.4, 0.4, 0.95, 0.4, 0.4, 0.8],
  [0.5, 1, 0.5, 0.9, 0.5, 0.8, 0.5],
  [0.95, 0.7, 0.5, 0.4, 0.5, 0.7, 0.95],
];
const COLORS = ['#E74C3C', '#3498DB', '#F1C40F', '#2ECC71', '#9B59B6', '#E67E22'];

function profile(level: number) {
  const pts = SHAPES[(level - 1) % SHAPES.length];
  return Array.from({ length: SAMPLES }, (_, i) => {
    const t = (i / (SAMPLES - 1)) * (pts.length - 1);
    const k = Math.min(pts.length - 2, Math.floor(t));
    const f = (1 - Math.cos((t - k) * Math.PI)) / 2;
    return pts[k] * (1 - f) + pts[k + 1] * f;
  });
}

function outline(radii: number[], x0: number, step: number, cy: number) {
  const top = radii.map((r, i) => `${i ? 'L' : 'M'}${(x0 + i * step).toFixed(1)},${(cy - r).toFixed(1)}`).join(' ');
  const bottom = [...radii]
    .reverse()
    .map((r, i) => `L${(x0 + (SAMPLES - 1 - i) * step).toFixed(1)},${(cy + r).toFixed(1)}`)
    .join(' ');
  return `${top} ${bottom} Z`;
}

export default function LatheGame({ level, finish }: LevelGameProps) {
  const { lang } = useLanguage();
  const ar = lang === 'ar';
  const target = useMemo(() => profile(level), [level]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [radii, setRadii] = useState<number[] | null>(null);
  const [tool, setTool] = useState<Tool>('circle');
  const [touch, setTouch] = useState<{ x: number; y: number } | null>(null);
  const [phase, setPhase] = useState<'carve' | 'paint'>('carve');
  const [paint, setPaint] = useState<string | null>(null);
  const [accuracy, setAccuracy] = useState(0);

  const pad = 20;
  const maxR = Math.min(size.w * 0.2, size.h * 0.32);
  const minR = maxR * 0.12;
  const cy = size.h * 0.42;
  const step = (size.w - pad * 2) / (SAMPLES - 1);

  const geo = useRef({ pad, step, cy, maxR, minR });
  geo.current = { pad, step, cy, maxR, minR };
  const toolRef = useRef(tool);
  toolRef.current = tool;
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  const cut = (x: number, y: number) => {
    const g = geo.current;
    const d = Math.abs(y - g.cy);
    setRadii((prev) => {
      if (!prev) return prev;
      const next = [...prev];
      for (let i = 0; i < SAMPLES; i++) {
        const dx = Math.abs(g.pad + i * g.step - x);
        let limit = Infinity;
        if (toolRef.current === 'circle' && dx < 16) limit = d + 16 - Math.sqrt(256 - dx * dx);
        if (toolRef.current === 'square' && dx < 12) limit = d;
        if (toolRef.current === 'triangle' && dx < 18) limit = d + dx * 1.4;
        if (limit < next[i]) next[i] = Math.max(g.minR, limit);
      }
      return next;
    });
  };

  const responder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => phaseRef.current === 'carve',
        onMoveShouldSetPanResponder: () => phaseRef.current === 'carve',
        onPanResponderGrant: (e) => {
          const { locationX, locationY } = e.nativeEvent;
          setTouch({ x: locationX, y: locationY });
          cut(locationX, locationY);
        },
        onPanResponderMove: (e) => {
          const { locationX, locationY } = e.nativeEvent;
          setTouch({ x: locationX, y: locationY });
          cut(locationX, locationY);
        },
        onPanResponderRelease: () => setTouch(null),
        onPanResponderTerminate: () => setTouch(null),
      }),
    []
  );

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setSize({ w: width, h: height });
    const r = Math.min(width * 0.2, height * 0.32);
    setRadii(Array(SAMPLES).fill(r));
  };

  const done = () => {
    if (!radii) return;
    const range = maxR - minR;
    const err = radii.reduce((s, r, i) => s + Math.abs(r - (minR + target[i] * range)), 0) / SAMPLES / range;
    const acc = Math.max(0, Math.min(100, Math.round(100 * (1 - err * 2.2))));
    setAccuracy(acc);
    if (acc < PASS) {
      finish('lose', ar ? `الدقة ${acc}% — المطلوب ${PASS}%` : `Accuracy ${acc}% — need ${PASS}%`);
      return;
    }
    setPhase('paint');
  };

  const targetRadii = target.map((t) => minR + t * (maxR - minR));

  return (
    <View style={styles.container}>
      <View style={styles.stage} onLayout={onLayout} {...responder.panHandlers}>
        {radii && size.w ? (
          <Svg width={size.w} height={size.h} pointerEvents="none">
            <Defs>
              <LinearGradient id="wood" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0" stopColor="#E8C08A" />
                <Stop offset="0.5" stopColor="#F6DDB3" />
                <Stop offset="1" stopColor="#C8955A" />
              </LinearGradient>
            </Defs>
            <Rect x={0} y={cy - 3} width={pad} height={6} fill="#555" />
            <Rect x={size.w - pad} y={cy - 3} width={pad} height={6} fill="#555" />
            <Path d={outline(radii, pad, step, cy)} fill={paint ?? 'url(#wood)'} />
            {phase === 'carve'
              ? radii.map((r, i) =>
                  r >= maxR - 0.5 ? (
                    <Rect key={i} x={pad + i * step - step / 2} y={cy - r} width={step + 0.5} height={r * 2} fill="#7A4E2A" opacity={0.85} />
                  ) : null
                )
              : null}
            <Path d={outline(targetRadii, pad, step, cy)} fill="none" stroke="#1B1B1B" strokeWidth={2} strokeDasharray="6,5" />
            {touch && phase === 'carve' ? (
              <>
                <Rect x={touch.x - 5} y={touch.y + (touch.y > cy ? 6 : -70)} width={10} height={64} rx={3} fill="#C0C6CC" />
                <Rect x={touch.x - 8} y={touch.y + (touch.y > cy ? 40 : -110)} width={16} height={46} rx={7} fill="#1F5C8A" />
              </>
            ) : null}
          </Svg>
        ) : null}
        {phase === 'paint' ? (
          <View style={styles.accBadge} pointerEvents="none">
            <Text style={styles.accText}>{ar ? `الدقة ${accuracy}%` : `Accuracy ${accuracy}%`}</Text>
          </View>
        ) : null}
      </View>

      {phase === 'carve' ? (
        <View style={styles.bar}>
          {(['circle', 'square', 'triangle'] as Tool[]).map((t) => (
            <Pressable key={t} style={[styles.toolBtn, tool === t ? styles.toolActive : null]} onPress={() => setTool(t)}>
              <Text style={styles.toolIcon}>{t === 'circle' ? '●' : t === 'square' ? '■' : '▲'}</Text>
            </Pressable>
          ))}
          <Pressable style={styles.doneBtn} onPress={done}>
            <Text style={styles.doneText}>{ar ? 'تم ✓' : 'Done ✓'}</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.bar}>
          {COLORS.map((c) => (
            <Pressable key={c} style={[styles.swatch, { backgroundColor: c }, paint === c ? styles.swatchActive : null]} onPress={() => setPaint(c)} />
          ))}
          <Pressable style={[styles.doneBtn, !paint ? { opacity: 0.4 } : null]} disabled={!paint} onPress={() => finish('win', ar ? `الدقة ${accuracy}%` : `Accuracy ${accuracy}%`)}>
            <Text style={styles.doneText}>{ar ? 'إنهاء' : 'Finish'}</Text>
          </Pressable>
        </View>
      )}
      <Text style={styles.hint}>
        {phase === 'carve'
          ? ar
            ? 'اسحب الأزميل على الخشب حتى يطابق الخط المنقّط'
            : 'Drag the chisel over the wood to match the dotted outline'
          : ar
          ? 'اختر لون وبعدين إنهاء'
          : 'Pick a color, then Finish'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 18 },
  stage: { flex: 1 },
  bar: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12, paddingVertical: 10, backgroundColor: 'rgba(0,0,0,0.55)' },
  toolBtn: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.15)' },
  toolActive: { backgroundColor: '#FFFFFF' },
  toolIcon: { fontSize: 24, color: '#888' },
  doneBtn: { backgroundColor: '#3FD68D', paddingHorizontal: 18, paddingVertical: 12, borderRadius: 22, marginLeft: 8 },
  doneText: { color: '#FFFFFF', fontWeight: '900', fontSize: 16 },
  swatch: { width: 36, height: 36, borderRadius: 18, borderWidth: 2, borderColor: 'rgba(255,255,255,0.4)' },
  swatchActive: { borderColor: '#FFFFFF', borderWidth: 4 },
  accBadge: { position: 'absolute', bottom: 24, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: 18, paddingVertical: 8, borderRadius: 18 },
  accText: { color: '#FFFFFF', fontSize: 20, fontWeight: '900' },
  hint: { color: '#FFFFFF', textAlign: 'center', fontSize: 13, fontWeight: '700', marginTop: 8, opacity: 0.85 },
});
