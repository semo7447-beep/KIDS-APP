import React, { useEffect, useRef, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';

export type GameResult = 'win' | 'lose';

// Each game gets its level number and a finish callback; it owns everything inside the play area.
export type LevelGameProps = { level: number; finish: (result: GameResult, detail?: string) => void };

type Props = {
  titleAr: string;
  titleEn: string;
  background: string;
  textColor?: string;
  maxLevel: number;
  Game: React.ComponentType<LevelGameProps>;
};

export default function LevelGame({ titleAr, titleEn, background, textColor = '#FFFFFF', maxLevel, Game }: Props) {
  const navigation = useNavigation();
  const { lang, isRTL } = useLanguage();
  const [level, setLevel] = useState(1);
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<{ kind: GameResult; detail?: string } | null>(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    finishedRef.current = false;
  }, [level, attempt]);

  const finish = (kind: GameResult, detail?: string) => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setTimeout(() => setResult({ kind, detail }), 450);
  };

  const next = () => {
    setResult(null);
    setLevel((l) => (l >= maxLevel ? 1 : l + 1));
  };
  const retry = () => {
    setResult(null);
    setAttempt((a) => a + 1);
  };

  const ar = lang === 'ar';
  const lastLevel = level >= maxLevel;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
      <View style={[styles.header, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
        <Pressable style={styles.iconBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.iconText}>{isRTL ? '▶' : '◀'}</Text>
        </Pressable>
        <View style={styles.titleWrap}>
          <Text style={[styles.title, { color: textColor }]}>{ar ? titleAr : titleEn}</Text>
          <Text style={[styles.levelText, { color: textColor }]}>{ar ? `المستوى ${level}` : `Level ${level}`}</Text>
        </View>
        <Pressable style={styles.iconBtn} onPress={retry}>
          <Text style={styles.iconText}>↻</Text>
        </Pressable>
      </View>

      <View style={styles.body}>
        <Game key={`${level}-${attempt}`} level={level} finish={finish} />
      </View>

      {result ? (
        <View style={styles.overlay}>
          <View style={styles.card}>
            <Text style={styles.cardEmoji}>{result.kind === 'win' ? '🎉' : '😅'}</Text>
            <Text style={styles.cardTitle}>
              {result.kind === 'win' ? (ar ? 'أحسنت! فزت بالمستوى' : 'Level solved!') : ar ? 'حاول مرة ثانية' : 'Try again'}
            </Text>
            {result.detail ? <Text style={styles.cardDetail}>{result.detail}</Text> : null}
            {result.kind === 'win' ? (
              <Pressable style={styles.cardBtn} onPress={next}>
                <Text style={styles.cardBtnText}>
                  {lastLevel ? (ar ? 'من البداية' : 'Play again') : ar ? `المستوى ${level + 1} ▶` : `Level ${level + 1} ▶`}
                </Text>
              </Pressable>
            ) : (
              <Pressable style={styles.cardBtn} onPress={retry}>
                <Text style={styles.cardBtnText}>{ar ? 'إعادة ↻' : 'Retry ↻'}</Text>
              </Pressable>
            )}
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12, paddingTop: 10, paddingBottom: 6 },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.28)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: { color: '#FFFFFF', fontSize: 18, fontWeight: '900' },
  titleWrap: { alignItems: 'center' },
  title: { fontSize: 18, fontWeight: '900' },
  levelText: { fontSize: 13, fontWeight: '700', opacity: 0.85 },
  body: { flex: 1 },
  overlay: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: { width: '78%', backgroundColor: '#FFFFFF', borderRadius: 22, padding: 22, alignItems: 'center' },
  cardEmoji: { fontSize: 48 },
  cardTitle: { fontSize: 20, fontWeight: '900', color: '#241B3A', marginTop: 8, textAlign: 'center' },
  cardDetail: { fontSize: 16, fontWeight: '700', color: '#5A4B7A', marginTop: 6, textAlign: 'center' },
  cardBtn: { marginTop: 18, backgroundColor: '#3FD68D', paddingHorizontal: 26, paddingVertical: 12, borderRadius: 24 },
  cardBtnText: { color: '#FFFFFF', fontSize: 17, fontWeight: '900' },
});
