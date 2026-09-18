import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import BigButton from '../components/BigButton';

export default function LearnHubScreen({ navigation }: NativeStackScreenProps<any>) {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{t.learn} 📚</Text>
      <View style={styles.grid}>
        <BigButton label={t.letters} emoji="🔤" color={palette.purple} onPress={() => navigation.navigate('Letters')} />
        <BigButton label={t.numbers} emoji="🔢" color={palette.green} onPress={() => navigation.navigate('Numbers')} />
        <BigButton label={t.colors} emoji="🎨" color={palette.pink} onPress={() => navigation.navigate('Colors')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  title: { fontSize: 26, fontWeight: '900', color: palette.dark, textAlign: 'center', marginTop: 16 },
  grid: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' },
});
