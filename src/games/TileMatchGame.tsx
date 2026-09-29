import React, { useMemo, useState } from 'react';
import { LayoutChangeEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import { LevelGameProps } from '../components/LevelGame';
import { seededRandom, shuffle } from '../utils/gameLoop';

const FRUITS = ['🍌', '🍓', '🥝', '🍎', '🍒', '🍇', '🍊', '🍑', '🍋', '🍉'];
const TRAY_SIZE = 7;
const GRID = 6; // board is 6 tiles wide; coordinates are in half-tile units

type Tile = { id: number; layer: number; x: number; y: number; type: number };

function overlaps(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.abs(a.x - b.x) < 2 && Math.abs(a.y - b.y) < 2;
}

function isFree(t: Tile, tiles: Tile[]) {
  return !tiles.some((u) => u.layer > t.layer && overlaps(u, t));
}

// Builds a stacked layout, then assigns fruit types by peeling free tiles three at a time.
// That peel order is itself a valid solution, so every generated level is solvable.
function buildLevel(level: number): Tile[] {
  const rand = seededRandom(level * 7919 + 13);
  const triples = Math.min(22, 6 + level * 2);
  const want = triples * 3;

  const grid = (offset: number, n: number) => {
    const out: { x: number; y: number }[] = [];
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) out.push({ x: c * 2 + offset, y: r * 2 + offset });
    return out;
  };

  const chosen: { layer: number; x: number; y: number }[] = [];
  const base = shuffle(grid(0, GRID), rand).slice(0, Math.min(36, Math.ceil(want * 0.6)));
  base.forEach((p) => chosen.push({ layer: 0, ...p }));
  for (let layer = 1; layer <= 3 && chosen.length < want; layer++) {
    const offset = layer % 2 === 1 ? 1 : 0;
    const size = offset ? GRID - 1 : GRID;
    const below = chosen.filter((p) => p.layer === layer - 1);
    const candidates = shuffle(grid(offset, size), rand).filter(
      (p) => below.filter((b) => overlaps(b, p)).length >= (offset ? 2 : 1)
    );
    for (const p of candidates) {
      if (chosen.length >= want) break;
      chosen.push({ layer, ...p });
    }
  }

  const count = chosen.length - (chosen.length % 3);
  const tiles: Tile[] = chosen.slice(0, count).map((p, i) => ({ id: i, ...p, type: -1 }));

  const kinds = Math.min(FRUITS.length, 3 + level);
  let remaining = [...tiles];
  while (remaining.length) {
    const free = shuffle(remaining.filter((t) => isFree(t, remaining)), rand);
    const pick = (free.length >= 3 ? free : shuffle(remaining, rand)).slice(0, 3);
    const type = Math.floor(rand() * kinds);
    pick.forEach((t) => (t.type = type));
    remaining = remaining.filter((t) => !pick.includes(t));
  }
  return tiles;
}

export default function TileMatchGame({ level, finish }: LevelGameProps) {
  const initial = useMemo(() => buildLevel(level), [level]);
  const [board, setBoard] = useState<Tile[]>(initial);
  const [tray, setTray] = useState<Tile[]>([]);
  const [width, setWidth] = useState(0);

  const tile = width ? (width * 2) / (GRID * 2 + 1) : 0;
  const maxY = Math.max(...initial.map((t) => t.y)) + 2;

  const onTap = (t: Tile) => {
    if (!isFree(t, board) || tray.length >= TRAY_SIZE) return;
    const nextBoard = board.filter((b) => b.id !== t.id);
    let nextTray = [...tray];
    const lastSame = nextTray.map((x) => x.type).lastIndexOf(t.type);
    nextTray.splice(lastSame >= 0 ? lastSame + 1 : nextTray.length, 0, t);
    const matched = nextTray.filter((x) => x.type === t.type).length >= 3;
    if (matched) nextTray = nextTray.filter((x) => x.type !== t.type);
    setBoard(nextBoard);
    setTray(nextTray);
    if (nextBoard.length === 0 && nextTray.length === 0) finish('win');
    else if (!matched && nextTray.length >= TRAY_SIZE) finish('lose');
  };

  const sorted = [...board].sort((a, b) => a.layer - b.layer || a.y - b.y);

  return (
    <View style={styles.container}>
      <View style={styles.boardArea} onLayout={(e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width - 24)}>
        {tile ? (
          <View style={{ width: width, height: (maxY / 2) * tile + tile * 0.2 }}>
            {sorted.map((t) => {
              const free = isFree(t, board);
              return (
                <Pressable
                  key={t.id}
                  onPress={() => onTap(t)}
                  style={[
                    styles.tile,
                    {
                      left: (t.x / 2) * tile,
                      top: (t.y / 2) * tile - t.layer * tile * 0.08,
                      width: tile - 4,
                      height: tile - 4,
                    },
                  ]}
                >
                  <Text style={{ fontSize: tile * 0.55 }}>{FRUITS[t.type]}</Text>
                  {!free ? <View style={styles.shade} /> : null}
                </Pressable>
              );
            })}
          </View>
        ) : null}
      </View>

      <View style={styles.tray}>
        {Array.from({ length: TRAY_SIZE }, (_, i) => {
          const t = tray[i];
          return (
            <View key={i} style={[styles.slot, t ? styles.slotFilled : null]}>
              {t ? <Text style={styles.slotFruit}>{FRUITS[t.type]}</Text> : null}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', paddingBottom: 24 },
  boardArea: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12 },
  tile: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#C9C2B8',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  shade: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(40,20,30,0.45)', borderRadius: 8 },
  tray: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 12,
    padding: 6,
    gap: 4,
  },
  slot: { width: 42, height: 42, borderRadius: 8, backgroundColor: 'rgba(255,255,255,0.12)', alignItems: 'center', justifyContent: 'center' },
  slotFilled: { backgroundColor: '#FFFFFF' },
  slotFruit: { fontSize: 24 },
});
