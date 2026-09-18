import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import Svg, { Polyline } from 'react-native-svg';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { palette } from '../theme/colors';
import { ANIMALS, AnimalItem } from '../data/animals';
import BackBar from '../components/BackBar';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ISLAND_SIZE = 92;
const ROW_HEIGHT = 170;
const TOP_PADDING = 40;
const X_POSITIONS = [0.25, 0.7, 0.32, 0.68, 0.3, 0.7, 0.5];

function getCenter(index: number) {
  const xRatio = X_POSITIONS[index % X_POSITIONS.length];
  return { x: xRatio * SCREEN_WIDTH, y: TOP_PADDING + index * ROW_HEIGHT };
}

function midpoint(a: { x: number; y: number }, b: { x: number; y: number }) {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

function AnimalIsland({
  index,
  animal,
  label,
  onPress,
}: {
  index: number;
  animal: AnimalItem;
  label: string;
  onPress: () => void;
}) {
  const scale = useRef(new Animated.Value(1)).current;
  const center = getCenter(index);

  const pressIn = () => Animated.spring(scale, { toValue: 0.9, useNativeDriver: true }).start();
  const pressOut = () => Animated.spring(scale, { toValue: 1, friction: 3, useNativeDriver: true }).start();

  return (
    <View
      style={{
        position: 'absolute',
        left: center.x - (ISLAND_SIZE + 40) / 2,
        top: center.y - ISLAND_SIZE / 2,
        width: ISLAND_SIZE + 40,
        alignItems: 'center',
      }}
    >
      <Pressable onPress={onPress} onPressIn={pressIn} onPressOut={pressOut}>
        <Animated.View style={[styles.island, { backgroundColor: animal.landColor, transform: [{ scale }] }]}>
          <Text style={styles.animalEmoji}>{animal.emoji}</Text>
        </Animated.View>
      </Pressable>
      <Text style={styles.islandLabel}>{label}</Text>
    </View>
  );
}

export default function AnimalWorldScreen() {
  const { t, lang } = useLanguage();
  const { markVisited } = useProgress();
  const [selected, setSelected] = useState<AnimalItem | null>(null);

  useEffect(() => {
    markVisited('animalworld');
  }, []);

  const points = ANIMALS.map((_, i) => {
    const c = getCenter(i);
    return `${c.x},${c.y}`;
  }).join(' ');

  const pawSpots = ANIMALS.slice(1).map((_, i) => midpoint(getCenter(i), getCenter(i + 1)));

  const contentHeight = TOP_PADDING + ANIMALS.length * ROW_HEIGHT + 100;

  const speak = (animal: AnimalItem) => {
    Speech.stop();
    const name = lang === 'ar' ? animal.nameAr : animal.nameEn;
    const fact = lang === 'ar' ? animal.factAr : animal.factEn;
    Speech.speak(`${name}. ${fact}`, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.85 });
  };

  const onSelect = (animal: AnimalItem) => {
    setSelected(animal);
    speak(animal);
  };

  return (
    <View style={styles.container}>
      <BackBar title={t.animalWorld} />
      {selected ? (
        <Pressable style={styles.factBubble} onPress={() => setSelected(null)}>
          <Text style={styles.factEmoji}>{selected.emoji}</Text>
          <Text style={styles.factName}>{lang === 'ar' ? selected.nameAr : selected.nameEn}</Text>
          <Text style={styles.factText}>{lang === 'ar' ? selected.factAr : selected.factEn}</Text>
        </Pressable>
      ) : null}
      <ScrollView contentContainerStyle={{ height: contentHeight }} style={styles.ocean}>
        <Svg width={SCREEN_WIDTH} height={contentHeight} style={StyleSheet.absoluteFill}>
          <Polyline
            points={points}
            fill="none"
            stroke={palette.white}
            strokeWidth={5}
            strokeDasharray="2, 18"
            strokeLinecap="round"
            opacity={0.7}
          />
        </Svg>
        {pawSpots.map((p, i) => (
          <Text key={i} style={[styles.paw, { left: p.x - 12, top: p.y - 12 }]}>
            🐾
          </Text>
        ))}
        {ANIMALS.map((animal, index) => (
          <AnimalIsland
            key={animal.id}
            index={index}
            animal={animal}
            label={lang === 'ar' ? animal.nameAr : animal.nameEn}
            onPress={() => onSelect(animal)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.blue },
  ocean: { flex: 1, backgroundColor: '#4AC5FF' },
  island: {
    width: ISLAND_SIZE,
    height: ISLAND_SIZE,
    borderRadius: ISLAND_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: palette.white,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  animalEmoji: { fontSize: 42 },
  islandLabel: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '800',
    color: palette.white,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowRadius: 3,
  },
  paw: { position: 'absolute', fontSize: 20, opacity: 0.8 },
  factBubble: {
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: palette.white,
    borderRadius: 20,
    padding: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  factEmoji: { fontSize: 36 },
  factName: { fontSize: 20, fontWeight: '900', color: palette.dark, marginTop: 4 },
  factText: { fontSize: 15, fontWeight: '600', color: palette.dark, marginTop: 4, textAlign: 'center' },
});
