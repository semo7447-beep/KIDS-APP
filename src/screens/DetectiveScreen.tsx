import React, { useState } from 'react';
import { Image, LayoutChangeEvent, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { DETECTIVE_MISSIONS } from '../data/detectiveMissions';
import { DETECTIVE_HIDDEN_MISSIONS } from '../data/detectiveHiddenMissions';
import { Zone } from '../types/mission';
import { GAME_CARDS } from '../data/games';
import HiddenObjectBoard from '../components/HiddenObjectBoard';

function zoneStyle(zone: Zone) {
  return {
    left: `${zone.left}%` as const,
    top: `${zone.top}%` as const,
    width: `${zone.width}%` as const,
    height: `${zone.height}%` as const,
  };
}

const world = GAME_CARDS.find((c) => c.id === 'detective');
const mission1 = DETECTIVE_MISSIONS[0];

export default function DetectiveScreen() {
  const { t, lang } = useLanguage();
  const navigation = useNavigation();
  // stage 0 = the original pixel-exact mission1 image; stage N (1..) = DETECTIVE_HIDDEN_MISSIONS[N-1]
  const [stage, setStage] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [wrapWidth, setWrapWidth] = useState(0);

  const finished = stage > DETECTIVE_HIDDEN_MISSIONS.length;

  const onWrapLayout = (e: LayoutChangeEvent) => setWrapWidth(e.nativeEvent.layout.width);

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  const restart = () => {
    setStage(0);
    setSelectedId(null);
    setFeedback(null);
  };

  const goPreviousFromImage = () => {
    navigation.goBack();
  };

  const onConfirmImage = () => {
    if (!selectedId || feedback) return;
    const option = mission1.options!.find((o) => o.id === selectedId);
    if (option?.correct) {
      setFeedback('correct');
      speak(lang === 'ar' ? 'أحسنت! وجدتها!' : 'Great! You found it!');
      setTimeout(() => {
        setFeedback(null);
        setSelectedId(null);
        setStage(1);
      }, 900);
    } else {
      setFeedback('wrong');
      speak(t.wrongTryAgain);
      setTimeout(() => setFeedback(null), 600);
    }
  };

  const selectedZone = mission1.options!.find((o) => o.id === selectedId);
  const wrapHeight = wrapWidth ? wrapWidth / (mission1.imageRatio ?? 1) : 0;

  const renderImageStage = () => (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={[styles.imageWrap, { width: '100%', height: wrapHeight || 1 }]} onLayout={onWrapLayout}>
        {wrapWidth ? (
          <>
            <Image source={mission1.image} style={styles.missionImage} resizeMode="cover" />

            {mission1.options!.map((opt) => (
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

            <Pressable style={[styles.hitZone, zoneStyle(mission1.previousZone!)]} onPress={goPreviousFromImage} />
            <Pressable style={[styles.hitZone, zoneStyle(mission1.confirmZone!)]} onPress={onConfirmImage} />
          </>
        ) : null}
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={[styles.container, stage >= 1 ? { backgroundColor: world?.color ?? styles.container.backgroundColor } : null]}>
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : stage === 0 ? (
        renderImageStage()
      ) : (
        <HiddenObjectBoard
          mission={DETECTIVE_HIDDEN_MISSIONS[stage - 1]}
          onSolved={() => setStage((s) => s + 1)}
          onPrevious={() => setStage((s) => Math.max(0, s - 1))}
        />
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
});
