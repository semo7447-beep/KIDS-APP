import React, { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette } from '../theme/colors';

export default function DialLock({ digits, target, onSolved }: { digits: number; target: number[]; onSolved: () => void }) {
  const [values, setValues] = useState<number[]>(() => Array.from({ length: digits }, () => 0));
  const solvedRef = useRef(false);

  useEffect(() => {
    setValues(Array.from({ length: digits }, () => 0));
    solvedRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.join(',')]);

  useEffect(() => {
    const allMatch = values.length === target.length && values.every((v, i) => v === target[i]);
    if (allMatch && !solvedRef.current) {
      solvedRef.current = true;
      setTimeout(onSolved, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const bump = (index: number, delta: number) => {
    if (solvedRef.current) return;
    setValues((prev) => prev.map((v, i) => (i === index ? (v + delta + 10) % 10 : v)));
  };

  return (
    <View style={styles.row}>
      {values.map((v, i) => {
        const isCorrect = v === target[i];
        return (
          <View key={i} style={styles.digitCol}>
            <Pressable style={styles.arrowBtn} onPress={() => bump(i, 1)}>
              <Text style={styles.arrowText}>▲</Text>
            </Pressable>
            <View style={[styles.digitBox, isCorrect ? styles.digitBoxLocked : null]}>
              <Text style={styles.digitText}>{v}</Text>
              {isCorrect ? <Text style={styles.digitCheck}>✓</Text> : null}
            </View>
            <Pressable style={styles.arrowBtn} onPress={() => bump(i, -1)}>
              <Text style={styles.arrowText}>▼</Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'center', gap: 14 },
  digitCol: { alignItems: 'center', gap: 6 },
  arrowBtn: {
    width: 40,
    height: 32,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: { fontSize: 16, fontWeight: '900', color: palette.dark },
  digitBox: {
    width: 52,
    height: 64,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  digitBoxLocked: { borderColor: palette.green, backgroundColor: 'rgba(63,214,141,0.35)' },
  digitText: { fontSize: 30, fontWeight: '900', color: palette.white },
  digitCheck: { position: 'absolute', top: -6, right: -6, fontSize: 16, color: palette.green, backgroundColor: palette.white, borderRadius: 8, width: 18, height: 18, textAlign: 'center', overflow: 'hidden' },
});
