import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import BigButton from '../components/BigButton';

export default function HomeScreen({ navigation }: NativeStackScreenProps<any>) {
  const { t, isRTL, toggleLang } = useLanguage();

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
        <Text style={styles.title}>{t.appName} 🌈</Text>
        <Pressable style={styles.langBtn} onPress={toggleLang}>
          <Text style={styles.langBtnText}>{t.langToggle}</Text>
        </Pressable>
      </View>
      <Text style={styles.subtitle}>{t.welcome}</Text>
      <View style={styles.grid}>
        <BigButton label={t.learn} emoji="📚" color={palette.blue} onPress={() => navigation.navigate('Learn')} />
        <BigButton label={t.games} emoji="🎮" color={palette.orange} onPress={() => navigation.navigate('Games')} />
        <BigButton label={t.draw} emoji="🎨" color={palette.pink} onPress={() => navigation.navigate('Draw')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  title: { fontSize: 28, fontWeight: '900', color: palette.dark },
  langBtn: {
    backgroundColor: palette.purple,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  langBtnText: { color: palette.white, fontWeight: '700' },
  subtitle: {
    fontSize: 16,
    color: palette.dark,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
