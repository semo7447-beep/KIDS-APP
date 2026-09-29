import React, { useMemo, useRef, useState } from 'react';
import { LayoutChangeEvent, PanResponder, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { LevelGameProps } from '../components/LevelGame';
import { seededRandom, shuffle, useFrameLoop } from '../utils/gameLoop';

// Returns a (2c+1)x(2r+1) block grid: true = wall. Carved with a seeded depth-first search.
function buildMaze(cols: number, rows: number, seed: number) {
  const rand = seededRandom(seed);
  const W = cols * 2 + 1;
  const H = rows * 2 + 1;
  const grid = Array.from({ length: H }, () => Array(W).fill(true));
  const seen = Array.from({ length: rows }, () => Array(cols).fill(false));
  const stack: [number, number][] = [[0, 0]];
  seen[0][0] = true;
  grid[1][1] = false;
  while (stack.length) {
    const [c, r] = stack[stack.length - 1];
    const next = shuffle(
      [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ],
      rand
    )
      .map(([dc, dr]) => [c + dc, r + dr, dc, dr])
      .find(([nc, nr]) => nc >= 0 && nr >= 0 && nc < cols && nr < rows && !seen[nr][nc]);
    if (!next) {
      stack.pop();
      continue;
    }
    const [nc, nr, dc, dr] = next;
    seen[nr][nc] = true;
    grid[r * 2 + 1 + dr][c * 2 + 1 + dc] = false;
    grid[nr * 2 + 1][nc * 2 + 1] = false;
    stack.push([nc, nr]);
  }
  return grid;
}

export default function MazeGame({ level, finish }: LevelGameProps) {
  const { lang } = useLanguage();
  const cols = Math.min(4 + level, 9);
  const rows = Math.min(6 + level, 13);
  const grid = useMemo(() => buildMaze(cols, rows, level * 104729 + 7), [cols, rows, level]);
  const gw = grid[0].length;
  const gh = grid.length;

  const [size, setSize] = useState({ w: 0, h: 0 });
  const cell = size.w ? Math.min(size.w / gw, size.h / gh) : 0;
  const r = cell * 0.36;
  const ball = useRef({ x: 0, y: 0, vx: 0, vy: 0, done: false });
  const tilt = useRef<{ sx: number; sy: number; x: number; y: number } | null>(null);

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setSize({ w: width, h: height });
    const c = Math.min(width / gw, height / gh);
    ball.current = { x: c * 1.5, y: c * 1.5, vx: 0, vy: 0, done: false };
  };

  const hole = { x: (gw - 1.5) * cell, y: (gh - 1.5) * cell };

  const blocked = (x: number, y: number) => {
    const minC = Math.floor((x - r) / cell);
    const maxC = Math.floor((x + r - 0.001) / cell);
    const minR = Math.floor((y - r) / cell);
    const maxR = Math.floor((y + r - 0.001) / cell);
    for (let gy = minR; gy <= maxR; gy++)
      for (let gx = minC; gx <= maxC; gx++) if (gy < 0 || gx < 0 || gy >= gh || gx >= gw || grid[gy][gx]) return true;
    return false;
  };

  useFrameLoop((dt) => {
    const b = ball.current;
    if (b.done) return;
    const t = tilt.current;
    if (t) {
      const dx = t.x - t.sx;
      const dy = t.y - t.sy;
      const len = Math.hypot(dx, dy);
      if (len > 4) {
        const g = cell * 30 * Math.min(1, len / 60);
        b.vx += (dx / len) * g * dt;
        b.vy += (dy / len) * g * dt;
      }
    }
    const damp = Math.pow(0.92, dt * 60);
    b.vx *= damp;
    b.vy *= damp;
    const maxV = cell * 9;
    b.vx = Math.max(-maxV, Math.min(maxV, b.vx));
    b.vy = Math.max(-maxV, Math.min(maxV, b.vy));

    const steps = 4;
    for (let k = 0; k < steps; k++) {
      const nx = b.x + (b.vx * dt) / steps;
      if (blocked(nx, b.y)) b.vx *= -0.2;
      else b.x = nx;
      const ny = b.y + (b.vy * dt) / steps;
      if (blocked(b.x, ny)) b.vy *= -0.2;
      else b.y = ny;
    }

    if (Math.hypot(b.x - hole.x, b.y - hole.y) < cell * 0.35) {
      b.done = true;
      b.x = hole.x;
      b.y = hole.y;
      finish('win');
    }
  }, cell > 0);

  const responder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (e) => {
          const { pageX, pageY } = e.nativeEvent;
          tilt.current = { sx: pageX, sy: pageY, x: pageX, y: pageY };
        },
        onPanResponderMove: (e) => {
          if (!tilt.current) return;
          tilt.current.x = e.nativeEvent.pageX;
          tilt.current.y = e.nativeEvent.pageY;
        },
        onPanResponderRelease: () => (tilt.current = null),
        onPanResponderTerminate: () => (tilt.current = null),
      }),
    []
  );

  const b = ball.current;

  return (
    <View style={styles.container} {...responder.panHandlers}>
      <View style={styles.boardWrap} onLayout={onLayout}>
        {cell ? (
          <View style={{ width: gw * cell, height: gh * cell }} pointerEvents="none">
            <View style={[StyleSheet.absoluteFill, styles.floor]} />
            {grid.map((row, y) =>
              row.map((wall, x) =>
                wall ? <View key={`${x}-${y}`} style={[styles.wall, { left: x * cell, top: y * cell, width: cell + 0.5, height: cell + 0.5 }]} /> : null
              )
            )}
            <View style={[styles.hole, { left: hole.x - cell * 0.38, top: hole.y - cell * 0.38, width: cell * 0.76, height: cell * 0.76, borderRadius: cell }]} />
            <View style={[styles.ball, { left: b.x - r, top: b.y - r, width: r * 2, height: r * 2, borderRadius: r }]}>
              <View style={[styles.shine, { width: r * 0.7, height: r * 0.7, borderRadius: r, top: r * 0.25, left: r * 0.3 }]} />
            </View>
          </View>
        ) : null}
      </View>
      <Text style={styles.hint}>{lang === 'ar' ? 'اسحب إصبعك باتجاه ما تبي الكرة تتدحرج' : 'Drag in the direction you want the ball to roll'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 16 },
  boardWrap: { flex: 1, margin: 10, alignItems: 'center', justifyContent: 'center' },
  floor: { backgroundColor: '#7A2E14' },
  wall: { position: 'absolute', backgroundColor: '#DDBB82', borderBottomWidth: 2, borderBottomColor: '#B08A52' },
  hole: { position: 'absolute', backgroundColor: '#140603' },
  ball: { position: 'absolute', backgroundColor: '#6E7883', borderWidth: 1, borderColor: '#3C434B' },
  shine: { position: 'absolute', backgroundColor: 'rgba(255,255,255,0.75)' },
  hint: { color: '#4A2A10', fontSize: 13, fontWeight: '800', textAlign: 'center' },
});
