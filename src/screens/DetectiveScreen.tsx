import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { GAME_CARDS } from '../data/games';
import { DETECTIVE_MISSIONS } from '../data/detectiveMissions';
import WorldHeader from '../components/WorldHeader';

const CARD = GAME_CARDS.find((c) => c.id === 'detective')!;

export default function DetectiveScreen() {
  const { t, lang } = useLanguage();
  const [missionIndex, setMissionIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const mission = DETECTIVE_MISSIONS[missionIndex];
  const finished = missionIndex >= DETECTIVE_MISSIONS.length;

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  const onConfirm = () => {
    if (!selectedId || feedback) return;
    const option = mission.options.find((o) => o.id === selectedId);
    if (option?.correct) {
      setFeedback('correct');
      speak(lang === 'ar' ? 'أحسنت! وجدتها!' : 'Great! You found it!');
      setTimeout(() => {
        setFeedback(null);
        setSelectedId(null);
        setMissionIndex((i) => i + 1);
      }, 900);
    } else {
      setFeedback('wrong');
      speak(t.wrongTryAgain);
      setTimeout(() => setFeedback(null), 600);
    }
  };

  const goPrevious = () => {
    if (missionIndex === 0) return;
    setMissionIndex((i) => i - 1);
    setSelectedId(null);
    setFeedback(null);
  };

  const restart = () => {
    setMissionIndex(0);
    setSelectedId(null);
    setFeedback(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <WorldHeader title={lang === 'ar' ? CARD.titleAr : CARD.titleEn} image={CARD.worldImage} />
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.missionBadge}>
            {t.missionLabel} {mission.number} — {lang === 'ar' ? mission.titleAr : mission.titleEn}
          </Text>
          <Text style={styles.question}>{lang === 'ar' ? mission.questionAr : mission.questionEn}</Text>
          <Text style={styles.instruction}>{lang === 'ar' ? mission.instructionAr : mission.instructionEn}</Text>

          <Image source={mission.sceneImage} style={styles.sceneImage} resizeMode="contain" />

          <View style={styles.optionsGrid}>
            {mission.options.map((opt) => {
              const isSelected = selectedId === opt.id;
              return (
                <Pressable key={opt.id} onPress={() => setSelectedId(opt.id)}>
                  <View
                    style={[
                      styles.optionCard,
                      isSelected ? styles.optionCardSelected : null,
                      feedback === 'wrong' && isSelected ? styles.optionCardWrong : null,
                    ]}
                  >
                    <Image source={opt.image} style={styles.optionImage} resizeMode="contain" />
                    <Text style={styles.optionLabel}>{lang === 'ar' ? opt.labelAr : opt.labelEn}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>

          <Text style={styles.hint}>💡 {lang === 'ar' ? mission.hintAr : mission.hintEn}</Text>

          <View style={styles.navRow}>
            <Pressable
              style={[styles.navBtn, missionIndex === 0 ? styles.navBtnDisabled : null]}
              onPress={goPrevious}
              disabled={missionIndex === 0}
            >
              <Text style={styles.navBtnText}>{t.previous}</Text>
            </Pressable>
            <Pressable
              style={[styles.confirmBtn, !selectedId ? styles.confirmBtnDisabled : null]}
              onPress={onConfirm}
              disabled={!selectedId}
            >
              <Text style={styles.confirmText}>✓ {t.confirm}</Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  scroll: { alignItems: 'center', paddingHorizontal: 16, paddingBottom: 24 },
  missionBadge: {
    fontSize: 13,
    fontWeight: '800',
    color: palette.white,
    backgroundColor: '#D4A017',
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 14,
    marginTop: 10,
    marginBottom: 6,
    overflow: 'hidden',
  },
  question: { fontSize: 20, fontWeight: '900', color: palette.dark, textAlign: 'center' },
  instruction: { fontSize: 14, color: palette.dark, opacity: 0.75, textAlign: 'center', marginTop: 4, marginBottom: 12 },
  sceneImage: { width: '100%', height: 320, marginBottom: 14 },
  optionsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  optionCard: {
    width: 84,
    margin: 6,
    borderRadius: 14,
    backgroundColor: palette.white,
    alignItems: 'center',
    padding: 6,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  optionCardSelected: { borderColor: palette.blue },
  optionCardWrong: { borderColor: palette.red },
  optionImage: { width: 60, height: 60 },
  optionLabel: { fontSize: 12, fontWeight: '700', color: palette.dark, marginTop: 4, textAlign: 'center' },
  hint: { fontSize: 13, color: palette.dark, opacity: 0.7, marginTop: 14, marginBottom: 6 },
  navRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 10 },
  navBtn: {
    backgroundColor: palette.purple,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 18,
    marginHorizontal: 8,
  },
  navBtnDisabled: { opacity: 0.4 },
  navBtnText: { color: palette.white, fontWeight: '800' },
  confirmBtn: {
    backgroundColor: palette.green,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 18,
    marginHorizontal: 8,
  },
  confirmBtnDisabled: { opacity: 0.4 },
  confirmText: { color: palette.white, fontWeight: '900', fontSize: 15 },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.dark, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
