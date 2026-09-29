import React, { useMemo, useRef, useState } from 'react';
import { LayoutChangeEvent, PanResponder, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { LevelGameProps } from '../components/LevelGame';
import { useFrameLoop } from '../utils/gameLoop';

const WIN_POINTS = 5;

type State = {
  bx: number;
  by: number;
  vx: number;
  vy: number;
  px: number;
  py: number;
  ax: number;
  serveIn: number;
  player: number;
  ai: number;
  over: boolean;
};

export default function TableTennisGame({ level, finish }: LevelGameProps) {
  const { lang } = useLanguage();
  const [size, setSize] = useState({ w: 0, h: 0 });
  const s = useRef<State | null>(null);
  const target = useRef<{ x: number; y: number } | null>(null);

  const W = size.w;
  const H = size.h;
  const table = { x: W * 0.08, y: H * 0.06, w: W * 0.84, h: H * 0.82 };
  const paddleR = W * 0.075;
  const ballR = W * 0.022;
  const baseSpeed = H * (0.55 + level * 0.04);
  const aiSpeed = W * (0.45 + level * 0.12);

  const serve = (st: State, towardPlayer: boolean) => {
    st.bx = W / 2;
    st.by = table.y + table.h / 2;
    const angle = (Math.random() - 0.5) * 0.8;
    st.vx = Math.sin(angle) * baseSpeed;
    st.vy = (towardPlayer ? 1 : -1) * Math.cos(angle) * baseSpeed;
    st.serveIn = 0.9;
  };

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setSize({ w: width, h: height });
    s.current = null;
  };

  if (W && !s.current) {
    s.current = { bx: 0, by: 0, vx: 0, vy: 0, px: W / 2, py: table.y + table.h * 0.9, ax: W / 2, serveIn: 0, player: 0, ai: 0, over: false };
    serve(s.current, true);
  }

  const hitPaddle = (st: State, cx: number, cy: number, dirUp: boolean) => {
    const dx = st.bx - cx;
    const dy = st.by - cy;
    if (dx * dx + dy * dy > (paddleR + ballR) ** 2) return;
    if (dirUp ? st.vy < 0 : st.vy > 0) return;
    const speed = Math.min(Math.hypot(st.vx, st.vy) * 1.04, baseSpeed * 1.8);
    const off = Math.max(-1, Math.min(1, dx / paddleR));
    const angle = off * 0.9;
    st.vx = Math.sin(angle) * speed;
    st.vy = (dirUp ? -1 : 1) * Math.cos(angle) * speed;
  };

  useFrameLoop((dt) => {
    const st = s.current;
    if (!st || st.over) return;

    if (target.current) {
      st.px += (target.current.x - st.px) * Math.min(1, dt * 20);
      const minY = table.y + table.h * 0.62;
      const maxY = table.y + table.h + paddleR * 0.6;
      st.py += (Math.max(minY, Math.min(maxY, target.current.y)) - st.py) * Math.min(1, dt * 20);
    }
    const aiTarget = st.vy < 0 ? st.bx : W / 2;
    const move = Math.max(-aiSpeed * dt, Math.min(aiSpeed * dt, aiTarget - st.ax));
    st.ax += move;

    if (st.serveIn > 0) {
      st.serveIn -= dt;
      return;
    }
    st.bx += st.vx * dt;
    st.by += st.vy * dt;

    if (st.bx < table.x + ballR) {
      st.bx = table.x + ballR;
      st.vx = Math.abs(st.vx);
    }
    if (st.bx > table.x + table.w - ballR) {
      st.bx = table.x + table.w - ballR;
      st.vx = -Math.abs(st.vx);
    }

    hitPaddle(st, st.px, st.py, true);
    hitPaddle(st, st.ax, table.y + table.h * 0.05, false);

    if (st.by > H + ballR) {
      st.ai += 1;
      serve(st, true);
    } else if (st.by < -ballR) {
      st.player += 1;
      serve(st, false);
    }
    if (st.player >= WIN_POINTS || st.ai >= WIN_POINTS) {
      st.over = true;
      finish(st.player >= WIN_POINTS ? 'win' : 'lose', `${st.player} - ${st.ai}`);
    }
  }, W > 0);

  const responder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (e) => (target.current = { x: e.nativeEvent.locationX, y: e.nativeEvent.locationY }),
        onPanResponderMove: (e) => (target.current = { x: e.nativeEvent.locationX, y: e.nativeEvent.locationY }),
      }),
    []
  );

  const st = s.current;

  return (
    <View style={styles.container} onLayout={onLayout} {...responder.panHandlers}>
      {st ? (
        <View style={StyleSheet.absoluteFill} pointerEvents="none">
          <View style={[styles.table, { left: table.x, top: table.y, width: table.w, height: table.h }]}>
            <View style={styles.centerLine} />
            <View style={[styles.net, { top: table.h / 2 - 4 }]} />
          </View>
          <Paddle x={st.ax} y={table.y + table.h * 0.05} r={paddleR} flip />
          <Paddle x={st.px} y={st.py} r={paddleR} />
          <View
            style={[
              styles.ball,
              { left: st.bx - ballR, top: st.by - ballR, width: ballR * 2, height: ballR * 2, borderRadius: ballR },
            ]}
          />
          <Text style={styles.score}>
            {st.player} - {st.ai}
          </Text>
          <Text style={styles.hint}>{lang === 'ar' ? 'حرّك إصبعك تحت لتحريك المضرب' : 'Move your finger to steer the paddle'}</Text>
        </View>
      ) : null}
    </View>
  );
}

function Paddle({ x, y, r, flip }: { x: number; y: number; r: number; flip?: boolean }) {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          left: x - r * 0.18,
          top: flip ? y - r * 1.9 : y + r * 0.7,
          width: r * 0.36,
          height: r * 1.2,
          backgroundColor: '#8B4A2B',
          borderRadius: 4,
        }}
      />
      <View
        style={{
          position: 'absolute',
          left: x - r,
          top: y - r,
          width: r * 2,
          height: r * 2,
          borderRadius: r,
          backgroundColor: '#E0413A',
          borderWidth: 2,
          borderColor: '#A92D28',
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  table: { position: 'absolute', backgroundColor: '#3D6FD6', borderWidth: 4, borderColor: '#FFFFFF', borderRadius: 4 },
  centerLine: { position: 'absolute', left: '50%', marginLeft: -1.5, top: 0, bottom: 0, width: 3, backgroundColor: '#FFFFFF' },
  net: { position: 'absolute', left: -8, right: -8, height: 8, backgroundColor: '#DDE3F0', borderWidth: 1, borderColor: '#9AA6C2' },
  ball: { position: 'absolute', backgroundColor: '#FFF6C8', borderWidth: 1, borderColor: '#D9C77A' },
  score: { position: 'absolute', bottom: 4, alignSelf: 'center', color: '#FFFFFF', fontSize: 22, fontWeight: '900' },
  hint: { position: 'absolute', top: 2, alignSelf: 'center', color: '#FFFFFF', fontSize: 12, fontWeight: '700', opacity: 0.8 },
});
