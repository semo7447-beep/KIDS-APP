import React, { useState } from 'react';
import { Image, LayoutChangeEvent, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { Mission, Zone } from '../types/mission';
import { GAME_CARDS } from '../data/games';
import CharacterBubble from './CharacterBubble';

function zoneStyle(zone: Zone) {
  return {
    left: `${zone.left}%` as const,
    top: `${zone.top}%` as const,
    width: `${zone.width}%` as const,
    height: `${zone.height}%` as const,
  };
}

export default function MissionScreen({ missions, worldId }: { missions: Mission[]; worldId?: string }) {
  const { t, lang } = useLanguage();
  const navigation = useNavigation();
  const [missionIndex, setMissionIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [wrapWidth, setWrapWidth] = useState(0);
  const mission = missions[missionIndex];
  const finished = missionIndex >= missions.length;
  const world = GAME_CARDS.find((c) => c.id === worldId);

  const onWrapLayout = (e: LayoutChangeEvent) => {
    setWrapWidth(e.nativeEvent.layout.width);
  };

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  const goPrevious = () => {
    if (missionIndex === 0) {
      navigation.goBack();
      return;
    }
    setMissionIndex((i) => i - 1);
    setSelectedId(null);
    setFeedback(null);
  };

  const restart = () => {
    setMissionIndex(0);
    setSelectedId(null);
    setFeedback(null);
  };

  const advance = () => {
    setFeedback(null);
    setSelectedId(null);
    setMissionIndex((i) => i + 1);
  };

  // ----- Image mode (mission 1: pixel-exact reference image + invisible hit-zones) -----

  const onConfirmImage = () => {
    if (!selectedId || feedback) return;
    const option = mission.options!.find((o) => o.id === selectedId);
    if (option?.correct) {
      setFeedback('correct');
      speak(lang === 'ar' ? 'أحسنت! وجدتها!' : 'Great! You found it!');
      setTimeout(advance, 900);
    } else {
      setFeedback('wrong');
      speak(t.wrongTryAgain);
      setTimeout(() => setFeedback(null), 600);
    }
  };

  const selectedZone = mission?.options?.find((o) => o.id === selectedId);

  const renderImageMode = () => (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View
        style={[styles.imageWrap, { width: '100%', height: wrapWidth ? wrapWidth / (mission.imageRatio ?? 1) : 1 }]}
        onLayout={onWrapLayout}
      >
        {wrapWidth ? (
          <>
            <Image source={mission.image} style={styles.missionImage} resizeMode="cover" />

            {mission.options!.map((opt) => (
              <Pressable key={opt.id} style={[styles.hitZone, zoneStyle(opt)]} onPress={() => setSelectedId(opt.id)} />
            ))}

            {selectedZone ? (
              <View
                pointerEvents="none"
                style={[
                  styles.selectionBox,
                  zoneStyle(selectedZone),
                  feedback === 'wrong' ? styles.selectionBoxWrong : styles.selectionBoxActive,
                ]}
              />
            ) : null}

            <Pressable style={[styles.hitZone, zoneStyle(mission.previousZone!)]} onPress={goPrevious} />
            <Pressable style={[styles.hitZone, zoneStyle(mission.confirmZone!)]} onPress={onConfirmImage} />
          </>
        ) : null}
      </View>
    </ScrollView>
  );

  // ----- Template mode (missions 2+: colors/icons/character, no custom image) -----

  const template = mission.template;

  const onConfirmTemplate = () => {
    if (!selectedId || feedback || !template) return;
    const choice = template.choices.find((c) => c.id === selectedId);
    if (choice?.correct) {
      setFeedback('correct');
      speak(lang === 'ar' ? 'أحسنت! وجدتها!' : 'Great! You found it!');
      setTimeout(advance, 900);
    } else {
      setFeedback('wrong');
      speak(t.wrongTryAgain);
      setTimeout(() => setFeedback(null), 600);
    }
  };

  const renderTemplateMode = () => {
    if (!template) return null;
    const prompt = lang === 'ar' ? template.promptAr : template.promptEn;
    return (
      <ScrollView contentContainerStyle={styles.templateScroll}>
        <View style={styles.templateHeader}>
          <Text style={styles.templateEmoji}>{world?.emoji ?? '⭐'}</Text>
          <Text style={styles.templateMissionLabel}>
            {t.missionLabel} {mission.number}
          </Text>
        </View>

        <CharacterBubble characterId={template.characterId} text={prompt} />

        <View style={styles.choiceGrid}>
          {template.choices.map((choice) => {
            const isSelected = selectedId === choice.id;
            const boxStyle = [
              styles.choiceCard,
              isSelected && feedback === 'wrong' ? styles.choiceCardWrong : null,
              isSelected && feedback !== 'wrong' ? styles.choiceCardSelected : null,
            ];
            return (
              <Pressable key={choice.id} style={boxStyle} onPress={() => setSelectedId(choice.id)}>
                <Text style={styles.choiceEmoji}>{choice.emoji}</Text>
                <Text style={styles.choiceLabel}>{lang === 'ar' ? choice.labelAr : choice.labelEn}</Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.templateFooter}>
          <Pressable style={[styles.footerBtn, styles.previousBtn]} onPress={goPrevious}>
            <Text style={styles.footerBtnText}>{t.previous}</Text>
          </Pressable>
          <Pressable
            style={[styles.footerBtn, styles.confirmBtn, !selectedId ? styles.footerBtnDisabled : null]}
            onPress={onConfirmTemplate}
            disabled={!selectedId}
          >
            <Text style={styles.footerBtnText}>{t.confirm}</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={[styles.container, template ? { backgroundColor: world?.color ?? styles.container.backgroundColor } : null]}>
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : template ? (
        renderTemplateMode()
      ) : (
        renderImageMode()
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#3A282D' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  scroll: { flexGrow: 1, justifyContent: 'center' },
  imageWrap: { position: 'relative', overflow: 'hidden' },
  missionImage: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
  hitZone: { position: 'absolute' },
  selectionBox: {
    position: 'absolute',
    borderWidth: 4,
    borderRadius: 14,
  },
  selectionBoxActive: { borderColor: palette.blue },
  selectionBoxWrong: { borderColor: palette.red },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.white, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },

  templateScroll: { flexGrow: 1, padding: 20, paddingTop: 24 },
  templateHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 12 },
  templateEmoji: { fontSize: 28 },
  templateMissionLabel: { fontSize: 16, fontWeight: '900', color: palette.white },
  choiceGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginTop: 8 },
  choiceCard: {
    width: 130,
    height: 130,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'transparent',
  },
  choiceCardSelected: { borderColor: palette.blue },
  choiceCardWrong: { borderColor: palette.red },
  choiceEmoji: { fontSize: 48, marginBottom: 6 },
  choiceLabel: { fontSize: 14, fontWeight: '800', color: palette.dark, textAlign: 'center' },
  templateFooter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 28, gap: 12 },
  footerBtn: { flex: 1, paddingVertical: 16, borderRadius: 20, alignItems: 'center' },
  previousBtn: { backgroundColor: 'rgba(255,255,255,0.25)' },
  confirmBtn: { backgroundColor: palette.green },
  footerBtnDisabled: { opacity: 0.5 },
  footerBtnText: { color: palette.white, fontSize: 16, fontWeight: '900' },
});
