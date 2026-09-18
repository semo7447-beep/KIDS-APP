import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';

export default function BackBar({ title }: { title: string }) {
  const navigation = useNavigation();
  const { isRTL } = useLanguage();
  const backIcon = isRTL ? '▶' : '◀';

  return (
    <View style={[styles.bar, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>{backIcon}</Text>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 4,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: palette.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: { color: palette.white, fontSize: 18, fontWeight: '900' },
  title: { fontSize: 22, fontWeight: '900', color: palette.dark },
  spacer: { width: 44 },
});
