import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { palette, tabColors } from '../theme/colors';
import { ARABIC_LETTERS, ENGLISH_LETTERS, LetterItem } from '../data/content';
import FlashTile from '../components/FlashTile';
import BackBar from '../components/BackBar';

const TILE_COLORS = [palette.purple, palette.blue, palette.green, palette.orange, palette.pink];

export default function LettersScreen() {
  const { lang, t } = useLanguage();
  const data: LetterItem[] = lang === 'ar' ? ARABIC_LETTERS : ENGLISH_LETTERS;
  const speechLang = lang === 'ar' ? 'ar-SA' : 'en-US';

  const speak = (item: LetterItem) => {
    Speech.stop();
    Speech.speak(`${item.char} . ${item.word}`, { language: speechLang, pitch: 1.1, rate: 0.85 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackBar title={t.letters} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.char}
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => (
          <FlashTile
            topText={item.char}
            bottomText={item.word}
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
