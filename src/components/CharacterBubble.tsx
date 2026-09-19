import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { CHARACTERS } from '../data/characters';

export default function CharacterBubble({ characterId, text }: { characterId: string; text: string }) {
  const { lang, isRTL } = useLanguage();
  const character = CHARACTERS.find((c) => c.id === characterId) ?? CHARACTERS[0];
  const name = lang === 'ar' ? character.nameAr : character.nameEn;
  const align = { textAlign: isRTL ? ('right' as const) : ('left' as const) };

  return (
    <View style={styles.row}>
      <Image source={character.image} style={styles.avatar} />
      <View style={styles.bubble}>
        <Text style={[styles.name, align]}>{name}</Text>
        <Text style={[styles.text, align]}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 14 },
  avatar: { width: 56, height: 56, borderRadius: 28, borderWidth: 3, borderColor: palette.white },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  name: { fontWeight: '900', fontSize: 13, color: palette.dark, marginBottom: 2 },
  text: { fontSize: 16, fontWeight: '700', color: palette.dark, textAlign: 'right' },
});
