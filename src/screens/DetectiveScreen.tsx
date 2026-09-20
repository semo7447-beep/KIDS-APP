import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { DETECTIVE_HIDDEN_MISSIONS } from '../data/detectiveHiddenMissions';
import { DETECTIVE_LEVEL_NODES, DETECTIVE_MAP_IMAGE, DETECTIVE_MAP_RATIO } from '../data/detectiveLevelMap';
import { GAME_CARDS } from '../data/games';
import HiddenObjectBoard from '../components/HiddenObjectBoard';
import LevelMapBoard from '../components/LevelMapBoard';

const world = GAME_CARDS.find((c) => c.id === 'detective');

export default function DetectiveScreen() {
  const { t } = useLanguage();
  const [activeLevel, setActiveLevel] = useState<number | null>(null);
  const [completedLevels, setCompletedLevels] = useState<Set<number>>(new Set());

  const finished = completedLevels.size >= DETECTIVE_LEVEL_NODES.length;

  const restart = () => {
    setCompletedLevels(new Set());
    setActiveLevel(null);
  };

  const onLevelSolved = () => {
    if (activeLevel != null) {
      setCompletedLevels((prev) => new Set(prev).add(activeLevel));
    }
    setActiveLevel(null);
  };

  const mission = activeLevel != null ? DETECTIVE_HIDDEN_MISSIONS[activeLevel - 1] : null;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: world?.color ?? styles.container.backgroundColor }]}>
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : mission ? (
        <HiddenObjectBoard
          key={mission.id}
          mission={mission}
          onSolved={onLevelSolved}
          onPrevious={() => setActiveLevel(null)}
        />
      ) : (
        <LevelMapBoard
          mapImage={DETECTIVE_MAP_IMAGE}
          mapRatio={DETECTIVE_MAP_RATIO}
          nodes={DETECTIVE_LEVEL_NODES}
          completedLevels={completedLevels}
          onSelectLevel={setActiveLevel}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#3A282D' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.white, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
