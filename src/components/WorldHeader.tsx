import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';

export default function WorldHeader({
  title,
  image,
}: {
  title: string;
  image: ReturnType<typeof require>;
}) {
  const navigation = useNavigation();
  const { isRTL } = useLanguage();
  const backIcon = isRTL ? '▶' : '◀';

  return (
    <View style={styles.wrap}>
      <Image source={image} style={styles.bg} resizeMode="cover" />
      <View style={styles.overlay} />
      <Pressable
        style={[styles.backBtn, isRTL ? { right: 12 } : { left: 12 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backIcon}>{backIcon}</Text>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: '100%', height: 130, justifyContent: 'flex-end' },
  bg: { ...StyleSheet.absoluteFill },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.28)',
  },
  backBtn: {
    position: 'absolute',
    top: 44,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: { color: palette.dark, fontSize: 16, fontWeight: '900' },
  title: {
    color: palette.white,
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowRadius: 6,
  },
});
