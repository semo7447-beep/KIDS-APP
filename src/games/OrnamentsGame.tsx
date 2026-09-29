import React, { useMemo, useState } from 'react';
import { LayoutChangeEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { LevelGameProps } from '../components/LevelGame';
import { seededRandom } from '../utils/gameLoop';

const COLS = 7;
const ROWS = 8;
const ORNAMENTS = [
  { base: '#7B2B8C', band: '#B04CC4' },
  { base: '#8C9A2C', band: '#C8D24E' },
  { base: '#C0392B', band: '#F1C40F' },
  { base: '#1F6FB2', band: '#8FD3FF' },
  { base: '#D9822B', band: '#FFE0A8' },
];

// columns[c][r] with r = 0 at the bottom; null = empty.
type Board = (number | null)[][];

function makeBoard(level: number): Board {
  const rand = seededRandom(level * 31337 + 5);
  const kinds = Math.min(ORNAMENTS.length, 3 + Math.floor((level - 1) / 2));
  return Array.from({ length: COLS }, () => Array.from({ length: ROWS }, () => Math.floor(rand() * kinds)));
}

function groupAt(board: Board, c: number, r: number) {
  const color = board[c][r];
  if (color === null) return [];
  const seen = new Set<string>();
  const out: [number, number][] = [];
  const stack: [number, number][] = [[c, r]];
  while (stack.length) {
    const [x, y] = stack.pop()!;
    const key = `${x},${y}`;
    if (seen.has(key) || x < 0 || y < 0 || x >= COLS || y >= ROWS || board[x][y] !== color) continue;
    seen.add(key);
    out.push([x, y]);
    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }
  return out;
}

function hasMoves(board: Board) {
  for (let c = 0; c < COLS; c++)
    for (let r = 0; r < ROWS; r++) {
      const v = board[c][r];
      if (v === null) continue;
      if ((c + 1 < COLS && board[c + 1][r] === v) || (r + 1 < ROWS && board[c][r + 1] === v)) return true;
    }
  return false;
}

export default function OrnamentsGame({ level, finish }: LevelGameProps) {
  const { lang } = useLanguage();
  const [board, setBoard] = useState<Board>(() => makeBoard(level));
  const [score, setScore] = useState(0);
  const [pop, setPop] = useState<{ text: string; key: number } | null>(null);
  const [width, setWidth] = useState(0);
  const target = useMemo(() => 300 + level * 150, [level]);

  const cell = width / COLS;

  const onTap = (c: number, r: number) => {
    const group = groupAt(board, c, r);
    if (group.length < 2) return;
    const gained = group.length * group.length * 10;
    const next: Board = board.map((col) => [...col]);
    group.forEach(([x, y]) => (next[x][y] = null));
    let compacted = next.map((col) => {
      const kept = col.filter((v) => v !== null);
      return [...kept, ...Array(ROWS - kept.length).fill(null)];
    });
    compacted = [...compacted.filter((col) => col[0] !== null), ...compacted.filter((col) => col[0] === null)];
    const total = score + gained;
    setBoard(compacted);
    setScore(total);
    setPop({ text: `+${gained}`, key: Date.now() });
    if (!hasMoves(compacted)) {
      const cleared = compacted.every((col) => col[0] === null);
      const final = cleared ? total + 500 : total;
      if (cleared) setScore(final);
      finish(final >= target ? 'win' : 'lose', lang === 'ar' ? `النقاط ${final} / ${target}` : `Score ${final} / ${target}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoreRow}>
        <View style={styles.bar}>
          <View style={[styles.barFill, { width: `${Math.min(100, (score / target) * 100)}%` }]} />
          <Text style={styles.barText}>
            {score} / {target}
          </Text>
        </View>
        {pop ? (
          <Text key={pop.key} style={styles.pop}>
            {pop.text}
          </Text>
        ) : null}
      </View>

      <View style={styles.shelfArea} onLayout={(e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width)}>
        {width ? (
          <View style={{ width, height: cell * ROWS }}>
            {board.map((col, c) =>
              col.map((v, r) => {
                if (v === null) return null;
                const o = ORNAMENTS[v];
                const d = cell * 0.9;
                return (
                  <Pressable
                    key={`${c}-${r}`}
                    onPress={() => onTap(c, r)}
                    style={{ position: 'absolute', left: c * cell + cell * 0.05, top: (ROWS - 1 - r) * cell + cell * 0.05, width: d, height: d }}
                  >
                    <View style={[styles.ball, { backgroundColor: o.base, borderRadius: d / 2 }]}>
                      <View style={[styles.band, { backgroundColor: o.band, top: d * 0.42, height: d * 0.16 }]} />
                      <View style={[styles.shine, { width: d * 0.28, height: d * 0.2, borderRadius: d, top: d * 0.14, left: d * 0.2 }]} />
                    </View>
                    <View style={[styles.cap, { left: d * 0.4, width: d * 0.2, height: d * 0.12, top: -d * 0.06 }]} />
                  </Pressable>
                );
              })
            )}
          </View>
        ) : null}
      </View>
      <View style={styles.shelf} />
      <Text style={styles.hint}>
        {lang === 'ar' ? 'اضغط على كرتين أو أكثر من نفس اللون جنب بعض' : 'Tap 2+ touching ornaments of the same color'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-end', paddingHorizontal: 10, paddingBottom: 18 },
  scoreRow: { position: 'absolute', top: 6, left: 20, right: 20, alignItems: 'center' },
  bar: { width: '100%', height: 26, borderRadius: 13, backgroundColor: 'rgba(255,255,255,0.9)', overflow: 'hidden', justifyContent: 'center' },
  barFill: { position: 'absolute', left: 0, top: 0, bottom: 0, backgroundColor: '#E0413A' },
  barText: { textAlign: 'center', fontWeight: '900', color: '#241B3A' },
  pop: { marginTop: 8, fontSize: 28, fontWeight: '900', color: '#FFF3B0' },
  shelfArea: { width: '100%' },
  ball: { flex: 1, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(0,0,0,0.25)' },
  band: { position: 'absolute', left: 0, right: 0, opacity: 0.85 },
  shine: { position: 'absolute', backgroundColor: 'rgba(255,255,255,0.55)' },
  cap: { position: 'absolute', backgroundColor: '#D4AF37', borderRadius: 2 },
  shelf: { height: 14, backgroundColor: '#5A2E1A', borderRadius: 4, marginTop: 2 },
  hint: { color: '#FFFFFF', fontSize: 12, fontWeight: '700', textAlign: 'center', marginTop: 8, opacity: 0.85 },
});
