import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { MIMO_HIDDEN_MISSIONS } from '../data/mimoHiddenMissions';
import { GAME_CARDS } from '../data/games';
import HiddenObjectBoard from '../components/HiddenObjectBoard';

const world = GAME_CARDS.find((c) => c.id === 'mimo');

export default function MimoScreen() {
  const { t } = useLanguage();
  const [missionIndex, setMissionIndex] = useState(0);

  const finished = missionIndex >= MIMO_HIDDEN_MISSIONS.length;

  const restart = () => setMissionIndex(0);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: world?.color ?? styles.container.backgroundColor }]}>
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : (
        <HiddenObjectBoard
          key={MIMO_HIDDEN_MISSIONS[missionIndex].id}
          mission={MIMO_HIDDEN_MISSIONS[missionIndex]}
          onSolved={() => setMissionIndex((i) => i + 1)}
          onPrevious={() => setMissionIndex((i) => Math.max(0, i - 1))}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2E4A2E' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.white, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
