import React, { useMemo, useRef, useState } from 'react';
import { Animated, Easing, GestureResponderEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { LevelGameProps } from '../components/LevelGame';
import { seededRandom } from '../utils/gameLoop';

const PICKAXES = [
  { cost: 0, power: 1, color: '#8A6B3E' },
  { cost: 20, power: 2, color: '#C9A227' },
  { cost: 120, power: 4, color: '#3F7FD9' },
  { cost: 400, power: 8, color: '#8E5DF2' },
  { cost: 1200, power: 15, color: '#E0413A' },
];
const COMBO_WINDOW = 400;

type Floater = { id: number; x: number; y: number; text: string; color: string; anim: Animated.Value };

export default function MiningGame({ level, finish }: LevelGameProps) {
  const { lang } = useLanguage();
  const goal = level * 10;
  const [gems, setGems] = useState(0);
  const [depth, setDepth] = useState(0);
  const [pick, setPick] = useState(0);
  const [combo, setCombo] = useState(1);
  const [wallHp, setWallHp] = useState(8);
  const [floaters, setFloaters] = useState<Floater[]>([]);
  const lastTap = useRef(0);
  const nextId = useRef(0);
  const swing = useRef(new Animated.Value(0)).current;
  const shake = useRef(new Animated.Value(0)).current;
  const doneRef = useRef(false);

  const maxHp = 8 + depth * 2;
  const decor = useMemo(() => {
    const rand = seededRandom(depth * 97 + level);
    return Array.from({ length: 9 }, () => ({ x: rand() * 85 + 5, y: rand() * 70 + 5, red: rand() < 0.2, rot: rand() * 40 - 20 }));
  }, [depth, level]);

  const float = (x: number, y: number, text: string, color: string) => {
    const f: Floater = { id: nextId.current++, x, y, text, color, anim: new Animated.Value(0) };
    setFloaters((prev) => [...prev.slice(-10), f]);
    Animated.timing(f.anim, { toValue: 1, duration: 800, easing: Easing.out(Easing.quad), useNativeDriver: true }).start(() =>
      setFloaters((prev) => prev.filter((p) => p.id !== f.id))
    );
  };

  const onTap = (e: GestureResponderEvent) => {
    if (doneRef.current) return;
    const { locationX, locationY } = e.nativeEvent;
    const now = Date.now();
    const nextCombo = now - lastTap.current < COMBO_WINDOW ? Math.min(3, combo + 0.25) : 1;
    lastTap.current = now;
    setCombo(nextCombo);
    const mult = Math.floor(nextCombo);
    const power = PICKAXES[pick].power;

    swing.setValue(0);
    Animated.sequence([
      Animated.timing(swing, { toValue: 1, duration: 70, useNativeDriver: true }),
      Animated.timing(swing, { toValue: 0, duration: 110, useNativeDriver: true }),
    ]).start();

    const red = Math.random() < 0.12;
    const gain = (red ? 5 : 1) * power * mult;
    setGems((g) => g + gain);
    float(locationX, locationY, `+${gain}`, red ? '#FF6B8A' : '#B9A4FF');

    const hp = wallHp - power * mult;
    if (hp <= 0) {
      const nd = depth + 2;
      setDepth(nd);
      setWallHp(8 + nd * 2);
      shake.setValue(0);
      Animated.sequence([
        Animated.timing(shake, { toValue: 1, duration: 60, useNativeDriver: true }),
        Animated.timing(shake, { toValue: -1, duration: 60, useNativeDriver: true }),
        Animated.timing(shake, { toValue: 0, duration: 60, useNativeDriver: true }),
      ]).start();
      if (nd >= goal) {
        doneRef.current = true;
        finish('win', lang === 'ar' ? `وصلت عمق ${nd} م` : `Reached ${nd} m`);
      }
    } else {
      setWallHp(hp);
    }
  };

  const buy = (i: number) => {
    const p = PICKAXES[i];
    if (i <= pick || gems < p.cost) return;
    setGems((g) => g - p.cost);
    setPick(i);
  };

  const rotate = swing.interpolate({ inputRange: [0, 1], outputRange: ['-25deg', '35deg'] });
  const shakeX = shake.interpolate({ inputRange: [-1, 1], outputRange: [-8, 8] });

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.gemPill}>
          <Text style={styles.gemIcon}>💎</Text>
          <Text style={styles.gemText}>{gems}</Text>
        </View>
        {combo >= 2 ? <Text style={styles.combo}>x{Math.floor(combo)}</Text> : null}
        <Text style={styles.depth}>
          {depth} / {goal} {lang === 'ar' ? 'م' : 'm'}
        </Text>
      </View>

      <Animated.View style={[styles.wallWrap, { transform: [{ translateX: shakeX }] }]}>
        <Pressable style={styles.wall} onPress={onTap}>
          <View style={StyleSheet.absoluteFill} pointerEvents="none">
          {decor.map((d, i) => (
            <Text key={i} style={[styles.crystal, { left: `${d.x}%`, top: `${d.y}%`, transform: [{ rotate: `${d.rot}deg` }] }]}>
              {d.red ? '🔴' : '💎'}
            </Text>
          ))}
          <View style={styles.hpBar}>
            <View style={[styles.hpFill, { width: `${(wallHp / maxHp) * 100}%` }]} />
          </View>
          <Animated.Text style={[styles.pickaxe, { transform: [{ rotate }] }]}>⛏️</Animated.Text>
          <Text style={styles.lantern}>🏮</Text>
          {floaters.map((f) => (
            <Animated.Text
              key={f.id}
              style={[
                styles.floater,
                {
                  left: f.x - 20,
                  top: f.y - 20,
                  color: f.color,
                  opacity: f.anim.interpolate({ inputRange: [0, 1], outputRange: [1, 0] }),
                  transform: [{ translateY: f.anim.interpolate({ inputRange: [0, 1], outputRange: [0, -60] }) }],
                },
              ]}
            >
              {f.text}
            </Animated.Text>
          ))}
          </View>
        </Pressable>
      </Animated.View>

      <View style={styles.shop}>
        {PICKAXES.map((p, i) => {
          const owned = i <= pick;
          const affordable = !owned && gems >= p.cost;
          return (
            <Pressable key={i} onPress={() => buy(i)} style={[styles.shopItem, { borderColor: p.color }, owned ? styles.owned : null, affordable ? styles.affordable : null]}>
              <Text style={styles.shopIcon}>⛏️</Text>
              <Text style={styles.shopText}>{owned ? (i === pick ? '✓' : '•') : `💎${p.cost}`}</Text>
            </Pressable>
          );
        })}
      </View>
      <Text style={styles.hint}>{lang === 'ar' ? 'اضغط على الصخر بسرعة للحفر، واشترِ فأس أقوى' : 'Tap the rock fast to dig, and buy stronger pickaxes'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 12, paddingBottom: 16 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
  gemPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#2F2A7A', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 18, gap: 6 },
  gemIcon: { fontSize: 18 },
  gemText: { color: '#FFFFFF', fontSize: 18, fontWeight: '900' },
  combo: { color: '#FFE27A', fontSize: 26, fontWeight: '900' },
  depth: { color: '#FFFFFF', fontSize: 18, fontWeight: '900' },
  wallWrap: { flex: 1 },
  wall: { flex: 1, borderRadius: 18, backgroundColor: '#3A2F55', borderWidth: 6, borderColor: '#6B5A3A', overflow: 'hidden' },
  crystal: { position: 'absolute', fontSize: 30, opacity: 0.9 },
  hpBar: { position: 'absolute', top: 10, left: 16, right: 16, height: 8, borderRadius: 4, backgroundColor: 'rgba(0,0,0,0.4)', overflow: 'hidden' },
  hpFill: { height: '100%', backgroundColor: '#C9A227' },
  pickaxe: { position: 'absolute', bottom: 20, left: 18, fontSize: 64 },
  lantern: { position: 'absolute', top: 30, right: 16, fontSize: 40 },
  floater: { position: 'absolute', width: 60, fontSize: 22, fontWeight: '900' },
  shop: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  shopItem: { width: '18%', aspectRatio: 1, borderRadius: 40, borderWidth: 3, backgroundColor: 'rgba(0,0,0,0.45)', alignItems: 'center', justifyContent: 'center', opacity: 0.55 },
  owned: { opacity: 1, backgroundColor: 'rgba(255,255,255,0.18)' },
  affordable: { opacity: 1, backgroundColor: '#3FD68D' },
  shopIcon: { fontSize: 20 },
  shopText: { color: '#FFFFFF', fontSize: 11, fontWeight: '900' },
  hint: { color: '#FFFFFF', fontSize: 12, fontWeight: '700', textAlign: 'center', marginTop: 8, opacity: 0.85 },
});
