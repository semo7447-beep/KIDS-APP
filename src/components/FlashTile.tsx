import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import { palette } from '../theme/colors';

type Props = {
  topText: string;
  bottomText?: string;
  emoji?: string;
  backgroundColor?: string;
  onPress: () => void;
};

export default function FlashTile({ topText, bottomText, emoji, backgroundColor, onPress }: Props) {
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
      <Animated.View
        style={[
          styles.tile,
          { backgroundColor: backgroundColor ?? palette.white, transform: [{ scale }] },
        ]}
      >
        <Text style={styles.topText}>{topText}</Text>
        {emoji ? <Text style={styles.emoji}>{emoji}</Text> : null}
        {bottomText ? <Text style={styles.bottomText}>{bottomText}</Text> : null}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: 96,
    height: 110,
    margin: 6,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  topText: { fontSize: 34, fontWeight: '900', color: palette.white },
  emoji: { fontSize: 22, marginTop: 2 },
  bottomText: { fontSize: 12, fontWeight: '700', color: palette.white, marginTop: 2 },
});
