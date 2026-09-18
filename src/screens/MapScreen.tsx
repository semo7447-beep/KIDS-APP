import React, { useRef } from 'react';
import { Animated, Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Svg, { Polyline } from 'react-native-svg';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { useCharacter } from '../context/CharacterContext';
import { palette } from '../theme/colors';
import { STOPS } from '../data/stops';
import { CHARACTERS } from '../data/characters';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const STOP_SIZE = 96;
const ROW_HEIGHT = 160;
const TOP_PADDING = 60;
const X_POSITIONS = [0.28, 0.72, 0.5, 0.28, 0.72, 0.5, 0.5];

function getStopCenter(index: number) {
  const xRatio = X_POSITIONS[index % X_POSITIONS.length];
  return {
    x: xRatio * SCREEN_WIDTH,
    y: TOP_PADDING + index * ROW_HEIGHT,
  };
}

function StopMarker({
  index,
  stop,
  visited,
  color,
  label,
  onPress,
}: {
  index: number;
  stop: (typeof STOPS)[number];
  visited: boolean;
  color: string;
  label: string;
  onPress: () => void;
}) {
  const scale = useRef(new Animated.Value(1)).current;
  const center = getStopCenter(index);

  const pressIn = () => Animated.spring(scale, { toValue: 0.9, useNativeDriver: true }).start();
  const pressOut = () => Animated.spring(scale, { toValue: 1, friction: 3, useNativeDriver: true }).start();

  return (
    <View
      style={{
        position: 'absolute',
        left: center.x - STOP_SIZE / 2,
        top: center.y - STOP_SIZE / 2,
        alignItems: 'center',
        width: STOP_SIZE + 40,
        marginLeft: -20,
      }}
    >
      <Pressable onPress={onPress} onPressIn={pressIn} onPressOut={pressOut}>
        <Animated.View
          style={[
            styles.stopCircle,
            { backgroundColor: color, transform: [{ scale }] },
          ]}
        >
          <Text style={styles.stopEmoji}>{stop.emoji}</Text>
          {visited ? (
            <View style={styles.starBadge}>
              <Text style={styles.starText}>⭐</Text>
            </View>
          ) : null}
        </Animated.View>
      </Pressable>
      <Text style={styles.stopLabel}>{label}</Text>
    </View>
  );
}

export default function MapScreen({ navigation }: NativeStackScreenProps<any>) {
  const { t, lang, isRTL, toggleLang } = useLanguage();
  const { visited } = useProgress();
  const { selectedId } = useCharacter();
  const selectedCharacter = CHARACTERS.find((c) => c.id === selectedId) ?? CHARACTERS[0];

  const points = STOPS.map((_, i) => {
    const c = getStopCenter(i);
    return `${c.x},${c.y}`;
  }).join(' ');

  const contentHeight = TOP_PADDING + STOPS.length * ROW_HEIGHT + 80;

  return (
    <View style={styles.container}>
      <View style={[styles.header, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
        <Text style={styles.title}>{t.appName} 🌈</Text>
        <View style={[styles.headerRight, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <Pressable onPress={() => navigation.navigate('CharacterSelect')}>
            <Image source={selectedCharacter.image} style={styles.avatarBtn} resizeMode="cover" />
          </Pressable>
          <Pressable style={styles.langBtn} onPress={toggleLang}>
            <Text style={styles.langBtnText}>{t.langToggle}</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ height: contentHeight }}>
        <Svg width={SCREEN_WIDTH} height={contentHeight} style={StyleSheet.absoluteFill}>
          <Polyline
            points={points}
            fill="none"
            stroke={palette.dark}
            strokeWidth={5}
            strokeDasharray="2, 16"
            strokeLinecap="round"
            opacity={0.35}
          />
        </Svg>
        {STOPS.map((stop, index) => (
          <StopMarker
            key={stop.id}
            index={index}
            stop={stop}
            color={stop.color}
            visited={visited.has(stop.id)}
            label={lang === 'ar' ? stop.labelAr : stop.labelEn}
            onPress={() => navigation.navigate(stop.screen)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 54,
    paddingBottom: 10,
  },
  title: { fontSize: 24, fontWeight: '900', color: palette.dark },
  headerRight: { alignItems: 'center' },
  avatarBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: palette.white,
    marginHorizontal: 8,
  },
  langBtn: {
    backgroundColor: palette.purple,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  langBtnText: { color: palette.white, fontWeight: '700' },
  stopCircle: {
    width: STOP_SIZE,
    height: STOP_SIZE,
    borderRadius: STOP_SIZE / 2,
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
  stopEmoji: { fontSize: 40 },
  starBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
  },
  starText: { fontSize: 22 },
  stopLabel: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '800',
    color: palette.dark,
    textAlign: 'center',
  },
});
