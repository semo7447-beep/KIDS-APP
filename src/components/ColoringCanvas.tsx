import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Ellipse, Polygon, Rect } from 'react-native-svg';
import { palette } from '../theme/colors';
import { ColoringRegion, ColoringTemplate } from '../types/coloringTemplate';

const PALETTE = ['#FF5E5E', '#FF9F45', '#FFD93D', '#3FD68D', '#4AC5FF', '#8E5DF2', '#FF6FA5', '#7A5230', '#FFFFFF', '#241B3A'];
const OUTLINE = '#241B3A';
const BLANK = '#FFFFFF';

function RegionShape({ region, fill, onPress }: { region: ColoringRegion; fill: string; onPress: () => void }) {
  const common = { fill, stroke: OUTLINE, strokeWidth: 3, onPress };
  if (region.shape === 'rect') {
    return <Rect x={region.x} y={region.y} width={region.width} height={region.height} rx={region.rx ?? 0} {...common} />;
  }
  if (region.shape === 'circle') {
    return <Circle cx={region.cx} cy={region.cy} r={region.r} {...common} />;
  }
  if (region.shape === 'ellipse') {
    return <Ellipse cx={region.cx} cy={region.cy} rx={region.rx} ry={region.ry} {...common} />;
  }
  return <Polygon points={region.points} {...common} />;
}

export default function ColoringCanvas({ template, onDone }: { template: ColoringTemplate; onDone: () => void }) {
  const [fills, setFills] = useState<Record<string, string>>({});
  const [selectedColor, setSelectedColor] = useState(PALETTE[0]);
  const [eraseMode, setEraseMode] = useState(false);

  const onRegionPress = (id: string) => {
    setFills((prev) => ({ ...prev, [id]: eraseMode ? BLANK : selectedColor }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.canvasWrap}>
        <Svg viewBox={template.viewBox} style={styles.svg}>
          {template.regions.map((region) => (
            <RegionShape key={region.id} region={region} fill={fills[region.id] ?? BLANK} onPress={() => onRegionPress(region.id)} />
          ))}
        </Svg>
      </View>

      <View style={styles.toolRow}>
        <Pressable style={[styles.eraseBtn, eraseMode ? styles.eraseBtnActive : null]} onPress={() => setEraseMode((e) => !e)}>
          <Text style={styles.eraseIcon}>🧹</Text>
        </Pressable>
        <View style={styles.paletteRow}>
          {PALETTE.map((c) => (
            <Pressable
              key={c}
              onPress={() => {
                setSelectedColor(c);
                setEraseMode(false);
              }}
              style={[
                styles.swatch,
                { backgroundColor: c },
                !eraseMode && selectedColor === c ? styles.swatchSelected : null,
                c === '#FFFFFF' ? styles.swatchBorder : null,
              ]}
            />
          ))}
        </View>
      </View>

      <Pressable style={styles.doneBtn} onPress={onDone}>
        <Text style={styles.doneText}>✓ تم الرسم</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'stretch', width: '100%' },
  canvasWrap: {
    aspectRatio: 1,
    backgroundColor: palette.white,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 14,
  },
  svg: { width: '100%', height: '100%' },
  toolRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 14 },
  eraseBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eraseBtnActive: { backgroundColor: palette.yellow },
  eraseIcon: { fontSize: 20 },
  paletteRow: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  swatch: { width: 30, height: 30, borderRadius: 15, borderWidth: 2, borderColor: 'rgba(255,255,255,0.6)' },
  swatchSelected: { borderColor: palette.dark, borderWidth: 3 },
  swatchBorder: { borderColor: 'rgba(0,0,0,0.3)' },
  doneBtn: { backgroundColor: palette.green, paddingVertical: 14, borderRadius: 20, alignItems: 'center' },
  doneText: { color: palette.white, fontSize: 18, fontWeight: '900' },
});
