import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { palette } from '../theme/colors';

type Props = {
  label: string;
  emoji: string;
  color: string;
  onPress: () => void;
  size?: 'large' | 'medium';
};

export default function BigButton({ label, emoji, color, onPress, size = 'large' }: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = () => {
    Animated.spring(scale, { toValue: 0.92, useNativeDriver: true }).start();
  };
  const pressOut = () => {
    Animated.spring(scale, { toValue: 1, friction: 3, useNativeDriver: true }).start();
  };

  const isLarge = size === 'large';

  return (
    <Pressable onPress={onPress} onPressIn={pressIn} onPressOut={pressOut}>
      <Animated.View
        style={[
          styles.card,
          isLarge ? styles.cardLarge : styles.cardMedium,
          { backgroundColor: color, transform: [{ scale }] },
        ]}
      >
        <Text style={isLarge ? styles.emojiLarge : styles.emojiMedium}>{emoji}</Text>
        <Text style={isLarge ? styles.labelLarge : styles.labelMedium}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  cardLarge: {
    width: 150,
    height: 150,
    margin: 10,
  },
  cardMedium: {
    width: 100,
    height: 100,
    margin: 8,
  },
  emojiLarge: { fontSize: 52 },
  emojiMedium: { fontSize: 34 },
  labelLarge: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: '800',
    color: palette.white,
  },
  labelMedium: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '700',
    color: palette.white,
  },
});
