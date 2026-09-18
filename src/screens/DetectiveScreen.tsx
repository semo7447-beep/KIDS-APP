import React, { useState } from 'react';
import { Image, LayoutChangeEvent, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { DETECTIVE_MISSIONS, Zone } from '../data/detectiveMissions';
import { useNavigation } from '@react-navigation/native';

function zoneStyle(zone: Zone) {
  return {
    left: `${zone.left}%` as const,
    top: `${zone.top}%` as const,
    width: `${zone.width}%` as const,
    height: `${zone.height}%` as const,
  };
}

export default function DetectiveScreen() {
  const { t, lang } = useLanguage();
  const navigation = useNavigation();
  const [missionIndex, setMissionIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [wrapWidth, setWrapWidth] = useState(0);
  const mission = DETECTIVE_MISSIONS[missionIndex];
  const finished = missionIndex >= DETECTIVE_MISSIONS.length;

  const onWrapLayout = (e: LayoutChangeEvent) => {
    setWrapWidth(e.nativeEvent.layout.width);
  };

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

  const selectedZone = mission?.options.find((o) => o.id === selectedId);

  return (
    <SafeAreaView style={styles.container}>
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scroll}>
          <View
            style={[styles.imageWrap, { width: '100%', height: wrapWidth ? wrapWidth / mission.imageRatio : 1 }]}
            onLayout={onWrapLayout}
          >
            {wrapWidth ? (
              <>
                <Image source={mission.image} style={styles.missionImage} resizeMode="cover" />

                {mission.options.map((opt) => (
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

                <Pressable style={[styles.hitZone, zoneStyle(mission.previousZone)]} onPress={goPrevious} />
                <Pressable style={[styles.hitZone, zoneStyle(mission.confirmZone)]} onPress={onConfirm} />
              </>
            ) : null}
          </View>
        </ScrollView>
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
