import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { GAME_CARDS } from '../data/games';
import WorldHeader from '../components/WorldHeader';

const CARD = GAME_CARDS.find((c) => c.id === 'buildworld')!;

const ITEMS = ['🏠', '🌳', '🏪', '🌉', '🚗', '🌊', '⛲', '🌸', '🏰', '🚂'];
const COLS = 6;
const ROWS = 8;

export default function BuildWorldScreen() {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState(ITEMS[0]);
  const [grid, setGrid] = useState<(string | null)[]>(() => Array(COLS * ROWS).fill(null));

  const onCellPress = (index: number) => {
    setGrid((prev) => {
      const next = [...prev];
      next[index] = next[index] === selected ? null : selected;
      return next;
    });
  };

  const clear = () => setGrid(Array(COLS * ROWS).fill(null));

  return (
    <SafeAreaView style={styles.container}>
      <WorldHeader title={lang === 'ar' ? CARD.titleAr : CARD.titleEn} image={CARD.worldImage} />
      <Text style={styles.instruction}>{t.buildScene}</Text>
      <ScrollView contentContainerStyle={styles.canvasScroll}>
        <View style={styles.canvas}>
          {grid.map((cell, i) => (
            <Pressable key={i} onPress={() => onCellPress(i)}>
              <View style={styles.cell}>{cell ? <Text style={styles.cellEmoji}>{cell}</Text> : null}</View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View style={styles.paletteRow}>
        {ITEMS.map((item) => (
          <Pressable key={item} onPress={() => setSelected(item)}>
            <View style={[styles.paletteItem, selected === item ? styles.paletteItemSelected : null]}>
              <Text style={styles.paletteEmoji}>{item}</Text>
            </View>
          </Pressable>
        ))}
      </View>
      <Pressable style={styles.clearBtn} onPress={clear}>
        <Text style={styles.clearText}>{t.clear}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const CELL_SIZE = 44;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  instruction: { fontSize: 15, fontWeight: '800', color: palette.dark, textAlign: 'center', marginVertical: 6 },
  canvasScroll: { alignItems: 'center' },
  canvas: {
    width: CELL_SIZE * COLS,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#DDEFD8',
    borderWidth: 3,
    borderColor: palette.green,
    borderRadius: 12,
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderWidth: 0.5,
    borderColor: '#C4DFC0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellEmoji: { fontSize: 24 },
  paletteRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 8 },
  paletteItem: {
    width: 44,
    height: 44,
    margin: 3,
    borderRadius: 12,
    backgroundColor: palette.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  paletteItemSelected: { borderColor: palette.green, backgroundColor: '#E3F7EA' },
  paletteEmoji: { fontSize: 24 },
  clearBtn: {
    alignSelf: 'center',
    backgroundColor: palette.red,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 16,
    marginBottom: 12,
  },
  clearText: { color: palette.white, fontWeight: '800' },
});
