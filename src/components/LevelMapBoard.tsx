import React, { useState } from 'react';
import { Image, LayoutChangeEvent, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { palette } from '../theme/colors';
import { LevelNode } from '../types/levelMap';

type Props = {
  mapImage: ReturnType<typeof require>;
  mapRatio: number;
  nodes: LevelNode[];
  completedLevels: Set<number>;
  onSelectLevel: (level: number) => void;
};

export default function LevelMapBoard({ mapImage, mapRatio, nodes, completedLevels, onSelectLevel }: Props) {
  const [wrapWidth, setWrapWidth] = useState(0);
  const wrapHeight = wrapWidth ? wrapWidth / mapRatio : 0;
  const onWrapLayout = (e: LayoutChangeEvent) => setWrapWidth(e.nativeEvent.layout.width);

  const nextUnlocked = nodes.find((n) => !completedLevels.has(n.level))?.level ?? nodes.length + 1;

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={[styles.wrap, { width: '100%', height: wrapHeight || 1 }]} onLayout={onWrapLayout}>
        {wrapWidth ? (
          <>
            <Image source={mapImage} style={styles.mapImage} resizeMode="cover" />
            {nodes.map((n) => {
              const isDone = completedLevels.has(n.level);
              const isUnlocked = isDone || n.level === nextUnlocked;
              const cx = n.left + n.width / 2;
              const cy = n.top + n.height / 2;
              return (
                <Pressable
                  key={n.level}
                  disabled={!isUnlocked}
                  onPress={() => onSelectLevel(n.level)}
                  style={[
                    styles.node,
                    {
                      left: `${cx}%` as const,
                      top: `${cy}%` as const,
                      marginLeft: -26,
                      marginTop: -26,
                      backgroundColor: isDone ? palette.green : isUnlocked ? palette.yellow : 'rgba(60,50,40,0.85)',
                    },
                  ]}
                >
                  <Text style={styles.nodeText}>{isDone ? '✓' : isUnlocked ? n.level : '🔒'}</Text>
                </Pressable>
              );
            })}
          </>
        ) : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 1 },
  wrap: { position: 'relative', overflow: 'hidden' },
  mapImage: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
  node: {
    position: 'absolute',
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: palette.white,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },
  nodeText: { fontSize: 20, fontWeight: '900', color: palette.dark },
});
