import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { palette } from '../theme/colors';

type Gear = { teeth: number; target: number };

const GEAR_COLORS = [palette.yellow, palette.blue, palette.red, palette.green];

export default function GearLock({ gears, onSolved }: { gears: Gear[]; onSolved: () => void }) {
  const [positions, setPositions] = useState<number[]>(() =>
    gears.map((g) => {
      let start = Math.floor(Math.random() * g.teeth);
      if (start === g.target) start = (start + 1) % g.teeth;
      return start;
    })
  );
  const rotations = useRef(gears.map((_, i) => new Animated.Value((positions[i] / gears[i].teeth) * 360))).current;
  const solvedRef = useRef(false);

  useEffect(() => {
    const allMatch = positions.every((p, i) => p === gears[i].target);
    if (allMatch && !solvedRef.current) {
      solvedRef.current = true;
      setTimeout(onSolved, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positions]);

  const tapGear = (index: number) => {
    if (solvedRef.current) return;
    const teeth = gears[index].teeth;
    const next = (positions[index] + 1) % teeth;
    setPositions((prev) => prev.map((p, i) => (i === index ? next : p)));
    Animated.timing(rotations[index], {
      toValue: (next / teeth) * 360,
      duration: 320,
      easing: Easing.out(Easing.back(1.2)),
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.row}>
      {gears.map((gear, i) => {
        const isCorrect = positions[i] === gear.target;
        const spin = rotations[i].interpolate({ inputRange: [0, 360], outputRange: ['0deg', '360deg'] });
        return (
          <Pressable key={i} onPress={() => tapGear(i)} style={styles.gearWrap}>
            <View style={[styles.gearOuter, isCorrect ? styles.gearOuterLocked : null]}>
              <Animated.View style={[styles.gearInner, { backgroundColor: GEAR_COLORS[i % GEAR_COLORS.length], transform: [{ rotate: spin }] }]}>
                <View style={styles.gearSpoke} />
                <View style={[styles.gearSpoke, { transform: [{ rotate: '90deg' }] }]} />
              </Animated.View>
              <Text style={styles.gearEmoji}>⚙️</Text>
            </View>
            {isCorrect ? <Text style={styles.lockedCheck}>✓</Text> : null}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 18, flexWrap: 'wrap' },
  gearWrap: { alignItems: 'center' },
  gearOuter: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gearOuterLocked: { borderColor: palette.green, borderWidth: 4 },
  gearInner: { position: 'absolute', width: 70, height: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center', opacity: 0.35 },
  gearSpoke: { position: 'absolute', width: 70, height: 6, backgroundColor: 'rgba(0,0,0,0.25)', borderRadius: 3 },
  gearEmoji: { fontSize: 34 },
  lockedCheck: { color: palette.green, fontWeight: '900', fontSize: 20, marginTop: 4 },
});
