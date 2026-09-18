import React, { useEffect, useRef } from 'react';
import { Animated, FlatList, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { palette } from '../theme/colors';
import { COLORS, ColorItem } from '../data/content';
import BackBar from '../components/BackBar';

function ColorTile({ item, onPress }: { item: ColorItem; label: string; onPress: () => void }) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.spring(scale, { toValue: 1.15, useNativeDriver: true }),
      Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
    ]).start();
    onPress();
  };

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={[styles.swatch, { backgroundColor: item.hex, transform: [{ scale }] }]} />
    </Pressable>
  );
}

export default function ColorsScreen() {
  const { lang, t } = useLanguage();
  const { markVisited } = useProgress();
  const speechLang = lang === 'ar' ? 'ar-SA' : 'en-US';

  useEffect(() => {
    markVisited('colors');
  }, []);

  const speak = (item: ColorItem) => {
    Speech.stop();
    Speech.speak(lang === 'ar' ? item.ar : item.en, { language: speechLang, pitch: 1.1, rate: 0.85 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackBar title={t.colors} />
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.hex}
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Animated.View style={styles.cell}>
            <ColorTile item={item} label={lang === 'ar' ? item.ar : item.en} onPress={() => speak(item)} />
            <Text style={styles.label}>{lang === 'ar' ? item.ar : item.en}</Text>
          </Animated.View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  list: { alignItems: 'center', paddingVertical: 12 },
  cell: { alignItems: 'center', margin: 8 },
  swatch: {
    width: 90,
    height: 90,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: palette.white,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  label: { marginTop: 6, fontSize: 14, fontWeight: '800', color: palette.dark },
});
