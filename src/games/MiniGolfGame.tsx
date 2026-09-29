import React, { useMemo, useRef, useState } from 'react';
import { LayoutChangeEvent, PanResponder, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { LevelGameProps } from '../components/LevelGame';
import { useFrameLoop } from '../utils/gameLoop';

type Box = { x: number; y: number; w: number; h: number };
type Course = { start: [number, number]; hole: [number, number]; blocks: Box[]; par: number };

// Positions are fractions of the green (0..1).
export const COURSES: Course[] = [
  { start: [0.5, 0.85], hole: [0.5, 0.15], blocks: [], par: 1 },
  { start: [0.5, 0.85], hole: [0.2, 0.12], blocks: [{ x: 0.4, y: 0.4, w: 0.2, h: 0.12 }], par: 2 },
  { start: [0.8, 0.88], hole: [0.2, 0.12], blocks: [{ x: 0, y: 0.55, w: 0.65, h: 0.05 }], par: 2 },
  { start: [0.2, 0.88], hole: [0.8, 0.12], blocks: [{ x: 0.35, y: 0.62, w: 0.65, h: 0.05 }, { x: 0, y: 0.35, w: 0.65, h: 0.05 }], par: 3 },
  { start: [0.5, 0.88], hole: [0.5, 0.1], blocks: [{ x: 0.2, y: 0.45, w: 0.14, h: 0.1 }, { x: 0.66, y: 0.45, w: 0.14, h: 0.1 }, { x: 0.43, y: 0.28, w: 0.14, h: 0.08 }], par: 2 },
  { start: [0.15, 0.9], hole: [0.85, 0.1], blocks: [{ x: 0.3, y: 0.2, w: 0.06, h: 0.8 }, { x: 0.64, y: 0, w: 0.06, h: 0.75 }], par: 3 },
];

const FRICTION = 0.985;
const RESTITUTION = 0.75;

export default function MiniGolfGame({ level, finish }: LevelGameProps) {
  const { lang } = useLanguage();
  const course = COURSES[(level - 1) % COURSES.length];
  const [size, setSize] = useState({ w: 0, h: 0 });
  const ball = useRef({ x: 0, y: 0, vx: 0, vy: 0, sunk: false, sinkT: 0 });
  const [aim, setAim] = useState<{ x: number; y: number } | null>(null);
  const [strokes, setStrokes] = useState(0);
  const strokesRef = useRef(0);

  const W = size.w;
  const H = size.h;
  const r = W * 0.028;
  const holeR = r * 1.6;
  const blocks = course.blocks.map((b) => ({ x: b.x * W, y: b.y * H, w: b.w * W, h: b.h * H }));
  const hole = { x: course.hole[0] * W, y: course.hole[1] * H };
  const maxPower = H * 2.4;

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setSize({ w: width, h: height });
    ball.current = { x: course.start[0] * width, y: course.start[1] * height, vx: 0, vy: 0, sunk: false, sinkT: 0 };
  };

  const moving = () => Math.hypot(ball.current.vx, ball.current.vy) > 4;

  useFrameLoop((dt) => {
    const b = ball.current;
    if (b.sunk) return;
    const steps = 4;
    for (let k = 0; k < steps; k++) {
      b.x += (b.vx * dt) / steps;
      b.y += (b.vy * dt) / steps;
      if (b.x < r) (b.x = r), (b.vx = Math.abs(b.vx) * RESTITUTION);
      if (b.x > W - r) (b.x = W - r), (b.vx = -Math.abs(b.vx) * RESTITUTION);
      if (b.y < r) (b.y = r), (b.vy = Math.abs(b.vy) * RESTITUTION);
      if (b.y > H - r) (b.y = H - r), (b.vy = -Math.abs(b.vy) * RESTITUTION);
      for (const bl of blocks) {
        const cx = Math.max(bl.x, Math.min(b.x, bl.x + bl.w));
        const cy = Math.max(bl.y, Math.min(b.y, bl.y + bl.h));
        const dx = b.x - cx;
        const dy = b.y - cy;
        const d = Math.hypot(dx, dy);
        if (d < r && d > 0) {
          const nx = dx / d;
          const ny = dy / d;
          b.x = cx + nx * r;
          b.y = cy + ny * r;
          const dot = b.vx * nx + b.vy * ny;
          if (dot < 0) {
            b.vx -= (1 + RESTITUTION) * dot * nx;
            b.vy -= (1 + RESTITUTION) * dot * ny;
          }
        }
      }
    }
    const f = Math.pow(FRICTION, dt * 60);
    b.vx *= f;
    b.vy *= f;
    if (!moving()) (b.vx = 0), (b.vy = 0);

    const dh = Math.hypot(b.x - hole.x, b.y - hole.y);
    const speed = Math.hypot(b.vx, b.vy);
    if (dh < holeR && speed < H * 1.1) {
      b.sunk = true;
      b.x = hole.x;
      b.y = hole.y;
      const n = strokesRef.current;
      const ar = lang === 'ar';
      finish('win', ar ? `عدد الضربات ${n} (المطلوب ${course.par})` : `${n} strokes (par ${course.par})`);
    } else if (dh < holeR * 2.2 && speed > 0) {
      // Slight pull toward the hole so near misses feel fair.
      b.vx += ((hole.x - b.x) / dh) * H * 0.6 * dt;
      b.vy += ((hole.y - b.y) / dh) * H * 0.6 * dt;
    }
  }, W > 0);

  const responder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => !moving() && !ball.current.sunk,
        onMoveShouldSetPanResponder: () => !moving() && !ball.current.sunk,
        onPanResponderGrant: (e) => setAim({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY }),
        onPanResponderMove: (e) => setAim({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY }),
        onPanResponderRelease: (e) => {
          const b = ball.current;
          const dx = b.x - e.nativeEvent.locationX;
          const dy = b.y - e.nativeEvent.locationY;
          const len = Math.hypot(dx, dy);
          setAim(null);
          if (len < 10) return;
          const power = Math.min(len * 6, maxPower);
          b.vx = (dx / len) * power;
          b.vy = (dy / len) * power;
          strokesRef.current += 1;
          setStrokes(strokesRef.current);
        },
        onPanResponderTerminate: () => setAim(null),
      }),
    [maxPower]
  );

  const b = ball.current;
  const aimDots = (() => {
    if (!aim) return [];
    const dx = b.x - aim.x;
    const dy = b.y - aim.y;
    const len = Math.min(Math.hypot(dx, dy), maxPower / 6);
    if (len < 10) return [];
    const ang = Math.atan2(dy, dx);
    return Array.from({ length: 8 }, (_, i) => {
      const t = ((i + 1) / 8) * len * 1.3;
      return { x: b.x + Math.cos(ang) * t, y: b.y + Math.sin(ang) * t };
    });
  })();

  return (
    <View style={styles.outer}>
      <View style={styles.green} onLayout={onLayout} {...responder.panHandlers}>
        {W ? (
          <View style={StyleSheet.absoluteFill} pointerEvents="none">
            {blocks.map((bl, i) => (
              <View key={i} style={[styles.block, { left: bl.x, top: bl.y, width: bl.w, height: bl.h }]} />
            ))}
            <View style={[styles.hole, { left: hole.x - holeR, top: hole.y - holeR, width: holeR * 2, height: holeR * 2, borderRadius: holeR }]} />
            {aimDots.map((d, i) => (
              <View key={i} style={[styles.dot, { left: d.x - 3, top: d.y - 3, opacity: 1 - i / 9 }]} />
            ))}
            <View style={[styles.ball, { left: b.x - r, top: b.y - r, width: r * 2, height: r * 2, borderRadius: r }]} />
          </View>
        ) : null}
      </View>
      <Text style={styles.strokes}>
        {lang === 'ar' ? `الضربات: ${strokes}   ·   المطلوب: ${course.par}` : `Strokes: ${strokes}   ·   Par: ${course.par}`}
      </Text>
      <Text style={styles.hint}>{lang === 'ar' ? 'اسحب للخلف من الكرة واتركها' : 'Pull back from the ball and release'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: { flex: 1, padding: 14, paddingBottom: 20 },
  green: { flex: 1, backgroundColor: '#E9604F', borderRadius: 16, borderWidth: 10, borderColor: '#DDF3DC', overflow: 'hidden' },
  block: { position: 'absolute', backgroundColor: '#DDF3DC', borderRadius: 6, borderBottomWidth: 4, borderBottomColor: '#A8C9A7' },
  hole: { position: 'absolute', backgroundColor: '#2A0E0B' },
  dot: { position: 'absolute', width: 6, height: 6, borderRadius: 3, backgroundColor: '#FFFFFF' },
  ball: { position: 'absolute', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#DDD' },
  strokes: { color: '#FFFFFF', fontSize: 18, fontWeight: '900', textAlign: 'center', marginTop: 10 },
  hint: { color: '#FFFFFF', fontSize: 12, fontWeight: '700', textAlign: 'center', opacity: 0.85 },
});
