import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { GAME_CARDS } from '../data/games';
import WorldHeader from '../components/WorldHeader';

const CARD = GAME_CARDS.find((c) => c.id === 'rescue')!;

type Scenario = {
  hazardAr: string;
  hazardEn: string;
  emoji: string;
  correct: { emoji: string; ar: string; en: string };
  wrong: { emoji: string; ar: string; en: string };
};

const SCENARIOS: Scenario[] = [
  {
    hazardAr: 'نهر عميق أمامك!',
    hazardEn: 'A deep river ahead!',
    emoji: '🌊',
    correct: { emoji: '🌉', ar: 'اعبر من الجسر', en: 'Cross the bridge' },
    wrong: { emoji: '🏊', ar: 'اسبح فيه', en: 'Swim across' },
  },
  {
    hazardAr: 'في طريقك نار!',
    hazardEn: 'Fire on the path!',
    emoji: '🔥',
    correct: { emoji: '💧', ar: 'استخدم الماء', en: 'Use water' },
    wrong: { emoji: '🏃', ar: 'اجري جواها', en: 'Run through it' },
  },
  {
    hazardAr: 'صخرة كبيرة تسد الطريق!',
    hazardEn: 'A big rock blocks the path!',
    emoji: '🪨',
    correct: { emoji: '🔄', ar: 'دور من حواليها', en: 'Go around it' },
    wrong: { emoji: '💪', ar: 'حاول تكسرها', en: 'Try to break it' },
  },
  {
    hazardAr: 'الطريق مظلم جدًا!',
    hazardEn: 'The path is very dark!',
    emoji: '🌙',
    correct: { emoji: '🔦', ar: 'استخدم الفانوس', en: 'Use a lantern' },
    wrong: { emoji: '🚶', ar: 'كمّل في الضلمة', en: 'Keep walking in the dark' },
  },
  {
    hazardAr: 'ثعبان في الطريق!',
    hazardEn: 'A snake on the path!',
    emoji: '🐍',
    correct: { emoji: '🛑', ar: 'قف بهدوء وانتظر', en: 'Stand calmly and wait' },
    wrong: { emoji: '😱', ar: 'اجري بسرعة', en: 'Run quickly' },
  },
];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function RescueScreen() {
  const { t, lang } = useLanguage();
  const [stepIndex, setStepIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [options, setOptions] = useState(() => shuffle(['correct', 'wrong'] as const));
  const finished = stepIndex >= SCENARIOS.length;

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  useEffect(() => {
    if (finished) speak(t.wellDone);
    else setOptions(shuffle(['correct', 'wrong'] as const));
  }, [stepIndex, finished]);

  const current = SCENARIOS[stepIndex];

  const onChoose = (kind: 'correct' | 'wrong') => {
    if (feedback) return;
    if (kind === 'correct') {
      setFeedback('correct');
      speak(lang === 'ar' ? 'أحسنت!' : 'Great!');
      setTimeout(() => {
        setFeedback(null);
        setStepIndex((i) => i + 1);
      }, 700);
    } else {
      setFeedback('wrong');
      setTimeout(() => setFeedback(null), 500);
    }
  };

  const restart = () => setStepIndex(0);

  return (
    <SafeAreaView style={styles.container}>
      <WorldHeader title={lang === 'ar' ? CARD.titleAr : CARD.titleEn} image={CARD.worldImage} />
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.rescuedEmoji}>🐉💚</Text>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.center}>
          <View style={styles.progressRow}>
            {SCENARIOS.map((_, i) => (
              <Text key={i} style={styles.progressDot}>
                {i < stepIndex ? '🐉' : i === stepIndex ? '📍' : '⬜'}
              </Text>
            ))}
          </View>
          <Text style={styles.hazardEmoji}>{current.emoji}</Text>
          <Text style={styles.hazardText}>{lang === 'ar' ? current.hazardAr : current.hazardEn}</Text>
          <Text style={styles.question}>{t.choosePath}</Text>
          <View style={styles.optionsRow}>
            {options.map((kind) => {
              const opt = current[kind];
              return (
                <Pressable key={kind} onPress={() => onChoose(kind)}>
                  <View style={[styles.optionCard, feedback === 'wrong' && kind === 'wrong' ? styles.shakeHint : null]}>
                    <Text style={styles.optionEmoji}>{opt.emoji}</Text>
                    <Text style={styles.optionText}>{lang === 'ar' ? opt.ar : opt.en}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16 },
  progressRow: { flexDirection: 'row', marginBottom: 20 },
  progressDot: { fontSize: 22, marginHorizontal: 3 },
  hazardEmoji: { fontSize: 60 },
  hazardText: { fontSize: 18, fontWeight: '800', color: palette.dark, marginTop: 8, marginBottom: 16, textAlign: 'center' },
  question: { fontSize: 15, fontWeight: '700', color: palette.dark, opacity: 0.7, marginBottom: 14 },
  optionsRow: { flexDirection: 'row' },
  optionCard: {
    width: 140,
    height: 130,
    marginHorizontal: 8,
    borderRadius: 18,
    backgroundColor: palette.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: palette.orange,
    padding: 8,
  },
  shakeHint: { borderColor: palette.red },
  optionEmoji: { fontSize: 40 },
  optionText: { fontSize: 13, fontWeight: '700', color: palette.dark, textAlign: 'center', marginTop: 6 },
  rescuedEmoji: { fontSize: 70, marginBottom: 10 },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.dark, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
