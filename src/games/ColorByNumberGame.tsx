import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Ellipse, Polygon, Rect, Text as SvgText } from 'react-native-svg';
import { useLanguage } from '../context/LanguageContext';
import { LevelGameProps } from '../components/LevelGame';
import { COLORING_TEMPLATES } from '../data/coloringTemplates';
import { ColoringRegion } from '../types/coloringTemplate';

const COLORS = ['#8FB8F0', '#B5652D', '#E3B78A', '#E03B3B', '#F5C542', '#5DBB63'];
export const COLOR_BY_NUMBER_LEVELS = COLORING_TEMPLATES.length;

function centroid(r: ColoringRegion): [number, number] {
  if (r.shape === 'rect') return [r.x + r.width / 2, r.y + r.height / 2];
  if (r.shape === 'circle' || r.shape === 'ellipse') return [r.cx, r.cy];
  const pts = r.points.trim().split(/\s+/).map((p) => p.split(',').map(Number));
  return [pts.reduce((s, p) => s + p[0], 0) / pts.length, pts.reduce((s, p) => s + p[1], 0) / pts.length];
}

function area(r: ColoringRegion) {
  if (r.shape === 'rect') return r.width * r.height;
  if (r.shape === 'circle') return Math.PI * r.r * r.r;
  if (r.shape === 'ellipse') return Math.PI * r.rx * r.ry;
  const pts = r.points.trim().split(/\s+/).map((p) => p.split(',').map(Number));
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[(i + 1) % pts.length];
    a += x1 * y2 - x2 * y1;
  }
  return Math.abs(a) / 2;
}

function labelSize(r: ColoringRegion) {
  if (r.shape === 'rect') return Math.max(9, Math.min(22, Math.min(r.width, r.height) * 0.7));
  if (r.shape === 'circle') return Math.max(9, Math.min(22, r.r));
  if (r.shape === 'ellipse') return Math.max(9, Math.min(22, Math.min(r.rx, r.ry)));
  return 14;
}

type ShapeProps = {
  region: ColoringRegion;
  fill: string;
  onPress: () => void;
  fillOpacity?: number;
  stroke?: string;
  strokeOpacity?: number;
  strokeWidth?: number;
};

function Shape({ region, fill, onPress, fillOpacity = 1, stroke = '#241B3A', strokeOpacity = 1, strokeWidth = 3 }: ShapeProps) {
  const common = { fill, fillOpacity, stroke, strokeOpacity, strokeWidth, onPress };
  if (region.shape === 'rect') return <Rect x={region.x} y={region.y} width={region.width} height={region.height} rx={region.rx ?? 0} {...common} />;
  if (region.shape === 'circle') return <Circle cx={region.cx} cy={region.cy} r={region.r} {...common} />;
  if (region.shape === 'ellipse') return <Ellipse cx={region.cx} cy={region.cy} rx={region.rx} ry={region.ry} {...common} />;
  return <Polygon points={region.points} {...common} />;
}

export default function ColorByNumberGame({ level, finish }: LevelGameProps) {
  const { lang } = useLanguage();
  const template = COLORING_TEMPLATES[(level - 1) % COLORING_TEMPLATES.length];
  const kinds = Math.min(template.regions.length, 5);
  const numbers = useMemo(() => template.regions.map((_, i) => i % kinds), [template, kinds]);
  const [filled, setFilled] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState(0);
  const [miss, setMiss] = useState<string | null>(null);

  const remaining = (n: number) => template.regions.filter((r, i) => numbers[i] === n && !filled.has(r.id)).length;

  const onRegion = (id: string, n: number) => {
    if (filled.has(id)) return;
    if (n !== selected) {
      setMiss(id);
      setTimeout(() => setMiss(null), 300);
      return;
    }
    const next = new Set(filled).add(id);
    setFilled(next);
    if (next.size === template.regions.length) finish('win');
    else if (template.regions.every((r, i) => numbers[i] !== selected || next.has(r.id))) {
      const nextNum = Array.from({ length: kinds }, (_, k) => k).find((k) => template.regions.some((r, i) => numbers[i] === k && !next.has(r.id)));
      if (nextNum !== undefined) setSelected(nextNum);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.paper}>
        <Svg viewBox={template.viewBox} style={styles.svg}>
          {template.regions.map((r, i) => {
            const n = numbers[i];
            const isFilled = filled.has(r.id);
            const fill = isFilled ? COLORS[n] : miss === r.id ? '#FFB3B3' : n === selected ? '#D6D6D6' : '#FFFFFF';
            return <Shape key={r.id} region={r} fill={fill} onPress={() => onRegion(r.id, n)} />;
          })}
          {template.regions.map((r, i) => {
            if (filled.has(r.id)) return null;
            const [x, y] = centroid(r);
            const fs = labelSize(r);
            return (
              <SvgText key={`t-${r.id}`} x={x} y={y + fs * 0.35} fontSize={fs} fontWeight="bold" fill="#241B3A" textAnchor="middle">
                {numbers[i] + 1}
              </SvgText>
            );
          })}
          {/* Invisible copies on top so taps on a number label still reach its region. */}
          {/* Smallest regions go last (on top) and get a thick invisible border, so thin parts stay tappable. */}
          {template.regions
            .map((r, i) => ({ r, i }))
            .filter(({ r }) => !filled.has(r.id))
            .sort((a, b) => area(b.r) - area(a.r))
            .map(({ r, i }) => (
              <Shape key={`hit-${r.id}`} region={r} fill="#000000" fillOpacity={0.001} stroke="#000000" strokeOpacity={0.001} strokeWidth={area(r) < 1500 ? 16 : 3} onPress={() => onRegion(r.id, numbers[i])} />
            ))}
        </Svg>
      </View>

      <View style={styles.palette}>
        {Array.from({ length: kinds }, (_, n) => {
          const left = remaining(n);
          return (
            <Pressable key={n} onPress={() => setSelected(n)} style={[styles.swatch, { backgroundColor: COLORS[n] }, selected === n ? styles.swatchActive : null]}>
              <Text style={styles.swatchNum}>{left === 0 ? '✓' : n + 1}</Text>
              {selected === n && left > 0 ? <Text style={styles.left}>{lang === 'ar' ? `باقي ${left}` : `${left} left`}</Text> : null}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 18 },
  paper: { flex: 1, margin: 14, backgroundColor: '#FFFFFF', borderRadius: 12, padding: 8, shadowColor: '#000', shadowOpacity: 0.35, shadowRadius: 8, elevation: 6 },
  svg: { flex: 1 },
  palette: { flexDirection: 'row', justifyContent: 'center', gap: 12, paddingVertical: 12, backgroundColor: 'rgba(255,255,255,0.92)' },
  swatch: { width: 52, height: 52, borderRadius: 26, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'rgba(0,0,0,0.15)' },
  swatchActive: { transform: [{ scale: 1.15 }], borderColor: '#241B3A', borderWidth: 3 },
  swatchNum: { fontSize: 20, fontWeight: '900', color: '#241B3A' },
  left: { position: 'absolute', bottom: -16, fontSize: 10, fontWeight: '800', color: '#241B3A' },
});
