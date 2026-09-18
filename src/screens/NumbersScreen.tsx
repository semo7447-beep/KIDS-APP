import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { palette } from '../theme/colors';
import { NUMBERS } from '../data/content';
import FlashTile from '../components/FlashTile';
import BackBar from '../components/BackBar';

const TILE_COLORS = [palette.blue, palette.green, palette.orange, palette.purple, palette.pink];

export default function NumbersScreen() {
  const { lang, t } = useLanguage();
  const { markVisited } = useProgress();
  const speechLang = lang === 'ar' ? 'ar-SA' : 'en-US';

  useEffect(() => {
    markVisited('numbers');
  }, []);

  const speak = (item: (typeof NUMBERS)[number]) => {
    Speech.stop();
    const word = lang === 'ar' ? item.ar : item.en;
    Speech.speak(`${item.value} . ${word}`, { language: speechLang, pitch: 1.1, rate: 0.85 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackBar title={t.numbers} />
      <FlatList
        data={NUMBERS}
        keyExtractor={(item) => String(item.value)}
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => (
          <FlashTile
            topText={String(item.value)}
            bottomText={lang === 'ar' ? item.ar : item.en}
            emoji={item.emoji}
            backgroundColor={TILE_COLORS[index % TILE_COLORS.length]}
            onPress={() => speak(item)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  list: { alignItems: 'center', paddingVertical: 12 },
});
