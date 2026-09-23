import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { MECHANICAL_PUZZLE_MISSIONS } from '../data/mechanicalPuzzleMissions';
import { MECHANICAL_LEVEL_NODES, MECHANICAL_MAP_IMAGE, MECHANICAL_MAP_RATIO } from '../data/mechanicalLevelMap';
import { GAME_CARDS } from '../data/games';
import MechanicalPuzzleBoard from '../components/MechanicalPuzzleBoard';
import LevelMapBoard from '../components/LevelMapBoard';

const world = GAME_CARDS.find((c) => c.id === 'predict');

export default function PredictScreen() {
  const { t } = useLanguage();
  const [activeLevel, setActiveLevel] = useState<number | null>(null);
  const [completedLevels, setCompletedLevels] = useState<Set<number>>(new Set());

  const finished = completedLevels.size >= MECHANICAL_LEVEL_NODES.length;

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

  const mission = activeLevel != null ? MECHANICAL_PUZZLE_MISSIONS[activeLevel - 1] : null;

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
        <MechanicalPuzzleBoard
          key={mission.id}
          mission={mission}
          onSolved={onLevelSolved}
          onPrevious={() => setActiveLevel(null)}
        />
      ) : (
        <LevelMapBoard
          mapImage={MECHANICAL_MAP_IMAGE}
          mapRatio={MECHANICAL_MAP_RATIO}
          nodes={MECHANICAL_LEVEL_NODES}
          completedLevels={completedLevels}
          onSelectLevel={setActiveLevel}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2D1E14' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.white, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
