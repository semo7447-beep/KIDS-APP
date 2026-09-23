import React, { useRef, useState } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Line, Rect } from 'react-native-svg';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { MechanicalPuzzleMission, PuzzleStage } from '../types/mechanicalPuzzle';
import CharacterBubble from './CharacterBubble';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const WOOD_DARK = '#2D1E14';
const WOOD_LIGHT = '#5A3C28';
const BRASS = '#D4AF37';
const BRASS_LIGHT = '#F0D26E';
const CYAN = '#34E7E4';
const GREEN = '#2ECC71';
const RED = '#E74C3C';
const PLANET_COLORS = ['#DC4B37', '#3C82F0', '#C8C8CD', '#DC9650'];

type Props = {
  mission: MechanicalPuzzleMission;
  onSolved: () => void;
  onPrevious: () => void;
};

export default function MechanicalPuzzleBoard({ mission, onSolved, onPrevious }: Props) {
  const { lang, isRTL } = useLanguage();
  const stages = mission.stages;
  const [stageIndex, setStageIndex] = useState(0);
  const [hintsLeft, setHintsLeft] = useState(mission.hints);
  const [hintText, setHintText] = useState<string | null>(null);

  // Per-stage runtime state, keyed by stage index. Stages don't change within a mounted
  // instance (the board is remounted via `key={mission.id}` when the mission changes).
  const gearAngles = useRef<Record<number, number>>({}).current;
  const gearAnims = useRef<Record<number, Animated.Value>>({}).current;
  const [dialDigits, setDialDigits] = useState<Record<number, number[]>>(
    Object.fromEntries(stages.map((s, i) => [i, s.kind === 'dial' ? s.code.map(() => 0) : []]))
  );
  const [dialWrong, setDialWrong] = useState(false);
  const [sliderValsState, setSliderValsState] = useState<Record<number, number>>({});
  const sliderAnims = useRef<Record<number, Animated.Value>>({}).current;
  const [leverState, setLeverState] = useState<Record<number, boolean[]>>(
    Object.fromEntries(stages.map((s, i) => [i, s.kind === 'levers' ? Array(s.count).fill(false) : []]))
  );
  const [chestOpen, setChestOpen] = useState(false);
  const [planetState, setPlanetState] = useState<Record<number, number[]>>(
    Object.fromEntries(stages.map((s, i) => [i, s.kind === 'planets' ? s.target.map(() => 0) : []]))
  );
  const [sequenceSlots, setSequenceSlots] = useState<Record<number, (string | null)[]>>(
    Object.fromEntries(stages.map((s, i) => [i, s.kind === 'sequence' ? s.correctOrder.map(() => null) : []]))
  );
  const [sequenceWrong, setSequenceWrong] = useState(false);
  const [mazeVals, setMazeVals] = useState<Record<number, number>>({});
  const mazeAnims = useRef<Record<number, Animated.Value>>({}).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;

  const hints = lang === 'ar' ? mission.hintsAr : mission.hintsEn;

  const showHintFor = (idx: number) => {
    if (hintsLeft <= 0) return;
    setHintsLeft((h) => h - 1);
    setHintText(hints[idx] ?? null);
    setTimeout(() => setHintText(null), 3500);
  };

  const advanceStage = () => {
    if (stageIndex >= stages.length - 1) {
      setTimeout(onSolved, 700);
    } else {
      setTimeout(() => setStageIndex((s) => s + 1), 350);
    }
  };

  const getGearAnim = (i: number, startAngle: number) => {
    if (!gearAnims[i]) gearAnims[i] = new Animated.Value(startAngle);
    return gearAnims[i];
  };
  const getSliderAnim = (i: number) => {
    if (!sliderAnims[i]) sliderAnims[i] = new Animated.Value(0);
    return sliderAnims[i];
  };
  const getMazeAnim = (i: number, startValue: number) => {
    if (!mazeAnims[i]) mazeAnims[i] = new Animated.Value(startValue);
    return mazeAnims[i];
  };

  const onTapGear = (i: number, stage: Extract<PuzzleStage, { kind: 'gear' }>) => {
    if (i !== stageIndex) return;
    // Keep an ever-increasing raw angle (no modulo) so the rotation animation always
    // continues forward instead of snapping backward when it wraps past 360.
    const cur = gearAngles[i] ?? stage.startAngle ?? 0;
    const next = cur + stage.step;
    gearAngles[i] = next;
    Animated.timing(getGearAnim(i, stage.startAngle ?? 0), {
      toValue: next,
      duration: 260,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
    if (next % 360 === stage.target % 360) advanceStage();
  };

  const onTapDigit = (i: number, digitIdx: number, stage: Extract<PuzzleStage, { kind: 'dial' }>) => {
    if (i !== stageIndex) return;
    setDialDigits((prev) => {
      const arr = [...(prev[i] ?? stage.code.map(() => 0))];
      arr[digitIdx] = (arr[digitIdx] + 1) % 10;
      const next = { ...prev, [i]: arr };
      if (!stage.requireEngage && arr.every((d, k) => d === stage.code[k])) {
        advanceStage();
      }
      return next;
    });
    setDialWrong(false);
  };

  const onEngageDial = (i: number, stage: Extract<PuzzleStage, { kind: 'dial' }>) => {
    if (i !== stageIndex || !stage.requireEngage) return;
    const digits = dialDigits[i] ?? [];
    const ok = digits.every((d, k) => d === stage.code[k]);
    if (ok) {
      advanceStage();
    } else {
      setDialWrong(true);
      shakeAnim.setValue(0);
      Animated.sequence([
        Animated.timing(shakeAnim, { toValue: 1, duration: 60, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -1, duration: 60, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 1, duration: 60, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 0, duration: 60, useNativeDriver: true }),
      ]).start();
    }
  };

  const onTapSlider = (i: number, stage: Extract<PuzzleStage, { kind: 'slider' }>) => {
    if (i !== stageIndex) return;
    const cur = sliderValsState[i] ?? 0;
    const next = Math.min(100, cur + stage.step);
    setSliderValsState((prev) => ({ ...prev, [i]: next }));
    Animated.timing(getSliderAnim(i), {
      toValue: next,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
    if (next === 100) advanceStage();
  };

  const onTapLever = (i: number, leverIdx: number, stage: Extract<PuzzleStage, { kind: 'levers' }>) => {
    if (i !== stageIndex) return;
    setLeverState((prev) => {
      const arr = [...(prev[i] ?? Array(stage.count).fill(false))];
      arr[leverIdx] = true;
      const next = { ...prev, [i]: arr };
      if (arr.every(Boolean)) advanceStage();
      return next;
    });
  };

  const onTapPlanet = (i: number, slotIdx: number, stage: Extract<PuzzleStage, { kind: 'planets' }>) => {
    if (i !== stageIndex) return;
    setPlanetState((prev) => {
      const arr = [...(prev[i] ?? stage.target.map(() => 0))];
      arr[slotIdx] = (arr[slotIdx] + 1) % stage.optionCount;
      const next = { ...prev, [i]: arr };
      if (arr.every((v, k) => v === stage.target[k])) advanceStage();
      return next;
    });
  };

  const onTapOption = (i: number, optionId: string, stage: Extract<PuzzleStage, { kind: 'sequence' }>) => {
    if (i !== stageIndex) return;
    setSequenceSlots((prev) => {
      const arr = [...(prev[i] ?? stage.correctOrder.map(() => null))];
      const emptyIdx = arr.findIndex((v) => v === null);
      if (emptyIdx === -1) return prev;
      arr[emptyIdx] = optionId;
      const next = { ...prev, [i]: arr };
      if (!arr.includes(null)) {
        if (arr.every((v, k) => v === stage.correctOrder[k])) {
          advanceStage();
        } else {
          setSequenceWrong(true);
          shakeAnim.setValue(0);
          Animated.sequence([
            Animated.timing(shakeAnim, { toValue: 1, duration: 60, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: -1, duration: 60, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 1, duration: 60, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 0, duration: 60, useNativeDriver: true }),
          ]).start(() => {
            setSequenceWrong(false);
            setSequenceSlots((p) => ({ ...p, [i]: stage.correctOrder.map(() => null) }));
          });
        }
      }
      return next;
    });
  };

  const onTapMaze = (i: number, stage: Extract<PuzzleStage, { kind: 'maze' }>) => {
    if (i !== stageIndex) return;
    const cur = mazeVals[i] ?? stage.startValue;
    const next = Math.max(0, cur - stage.step);
    setMazeVals((prev) => ({ ...prev, [i]: next }));
    Animated.timing(getMazeAnim(i, stage.startValue), {
      toValue: next,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
    if (next <= stage.target) advanceStage();
  };

  const onTapChest = (i: number) => {
    if (i !== stageIndex) return;
    setChestOpen(true);
    advanceStage();
  };

  const shakeX = shakeAnim.interpolate({ inputRange: [-1, 1], outputRange: [-8, 8] });
  const stageLabel = (stage: PuzzleStage) => {
    if (stage.kind === 'chest') return lang === 'ar' ? 'الصندوق' : 'The chest';
    return lang === 'ar' ? stage.labelAr : stage.labelEn;
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Pressable style={styles.iconBtn} onPress={onPrevious}>
          <Text style={styles.iconBtnText}>{isRTL ? '▶' : '◀'}</Text>
        </Pressable>
        <View style={styles.stageDots}>
          {stages.map((_, i) => (
            <View key={i} style={[styles.stageDot, stageIndex > i ? styles.stageDotDone : stageIndex === i ? styles.stageDotActive : null]} />
          ))}
        </View>
        <Pressable style={styles.hintBtn} onPress={() => showHintFor(Math.min(stageIndex, hints.length - 1))} disabled={hintsLeft <= 0}>
          <Text style={styles.hintBtnText}>💡 {hintsLeft}</Text>
        </Pressable>
      </View>

      <CharacterBubble characterId={mission.characterId} text={lang === 'ar' ? mission.promptAr : mission.promptEn} />

      {hintText ? (
        <View style={styles.hintBanner}>
          <Text style={styles.hintBannerText}>{hintText}</Text>
        </View>
      ) : null}

      <View style={styles.vault}>
        {stages.map((stage, i) => {
          const isLocked = i > stageIndex;
          const isDone = i < stageIndex || (i === stageIndex && (stage.kind === 'chest' ? chestOpen : false));

          if (stage.kind === 'gear') {
            const rotateDeg = getGearAnim(i, stage.startAngle ?? 0).interpolate({ inputRange: [0, 360], outputRange: ['0deg', '360deg'] });
            return (
              <View key={i} style={[styles.panel, isLocked ? styles.panelLocked : null, isDone ? styles.panelDone : null]}>
                <Text style={styles.panelLabel}>{stageLabel(stage)}</Text>
                <Pressable onPress={() => onTapGear(i, stage)} disabled={isLocked || isDone} style={styles.gearWrap}>
                  <Svg width={140} height={140} viewBox="0 0 140 140">
                    <Circle cx={70} cy={70} r={64} fill="none" stroke={BRASS} strokeWidth={3} />
                    <Line x1={70} y1={6} x2={70} y2={20} stroke={isDone ? GREEN : RED} strokeWidth={5} strokeLinecap="round" />
                  </Svg>
                  <Animated.View style={[styles.gearInner, { transform: [{ rotate: rotateDeg }] }]}>
                    <Svg width={120} height={120} viewBox="0 0 120 120">
                      <Circle cx={60} cy={60} r={50} fill={isDone ? GREEN : BRASS} stroke={WOOD_DARK} strokeWidth={3} />
                      <Circle cx={60} cy={60} r={16} fill={BRASS_LIGHT} />
                      {Array.from({ length: 8 }, (_, t) => {
                        const a = (t * Math.PI * 2) / 8;
                        const cx = 60 + 56 * Math.cos(a);
                        const cy = 60 + 56 * Math.sin(a);
                        return <Rect key={t} x={cx - 6} y={cy - 6} width={12} height={12} fill={WOOD_DARK} />;
                      })}
                      <Line x1={60} y1={60} x2={60} y2={14} stroke={RED} strokeWidth={4} strokeLinecap="round" />
                    </Svg>
                  </Animated.View>
                </Pressable>
                {i === stageIndex ? <Text style={styles.tapHint}>{lang === 'ar' ? 'اضغط للتدوير' : 'Tap to turn'}</Text> : null}
              </View>
            );
          }

          if (stage.kind === 'dial') {
            const digits = dialDigits[i] ?? stage.code.map(() => 0);
            return (
              <View key={i} style={[styles.panel, isLocked ? styles.panelLocked : null, isDone ? styles.panelDone : null]}>
                <Text style={styles.panelLabel}>{stageLabel(stage)}</Text>
                <Animated.View style={[styles.dialRow, { transform: [{ translateX: i === stageIndex ? shakeX : 0 }] }]}>
                  {digits.map((d, digitIdx) => (
                    <Pressable
                      key={digitIdx}
                      style={[styles.digitBox, isDone ? styles.digitBoxDone : null]}
                      onPress={() => onTapDigit(i, digitIdx, stage)}
                      disabled={isLocked || isDone}
                    >
                      <Text style={styles.digitText}>{d}</Text>
                    </Pressable>
                  ))}
                </Animated.View>
                {i === stageIndex && dialWrong ? (
                  <Text style={styles.wrongText}>{lang === 'ar' ? 'مش هي! حاول تاني' : "Not quite! Try again"}</Text>
                ) : null}
                {stage.requireEngage ? (
                  <Pressable
                    style={[styles.engageBtn, isLocked || isDone ? styles.engageBtnDisabled : null]}
                    onPress={() => onEngageDial(i, stage)}
                    disabled={isLocked || isDone}
                  >
                    <Text style={styles.engageBtnText}>ENGAGE</Text>
                  </Pressable>
                ) : null}
              </View>
            );
          }

          if (stage.kind === 'slider') {
            const val = sliderValsState[i] ?? 0;
            const width = getSliderAnim(i).interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] });
            const knobLeft = getSliderAnim(i).interpolate({ inputRange: [0, 100], outputRange: ['0%', '86%'] });
            return (
              <View key={i} style={[styles.panel, isLocked ? styles.panelLocked : null, isDone ? styles.panelDone : null]}>
                <Text style={styles.panelLabel}>{stageLabel(stage)}</Text>
                <Pressable onPress={() => onTapSlider(i, stage)} disabled={isLocked || isDone} style={styles.sliderTrack}>
                  <Animated.View style={[styles.sliderFill, { width, backgroundColor: val >= 100 ? GREEN : BRASS }]} />
                  <Animated.View style={[styles.sliderKnob, { left: knobLeft }]} />
                </Pressable>
                {i === stageIndex ? <Text style={styles.tapHint}>{lang === 'ar' ? 'اضغط للسحب' : 'Tap to slide'}</Text> : null}
              </View>
            );
          }

          if (stage.kind === 'levers') {
            const levers = leverState[i] ?? Array(stage.count).fill(false);
            const leverHint =
              stage.count > 1
                ? lang === 'ar'
                  ? 'اسحب الرافعتين معًا'
                  : 'Pull both levers'
                : lang === 'ar'
                ? 'اسحب الرافعة'
                : 'Pull the lever';
            return (
              <View key={i} style={[styles.panel, isLocked ? styles.panelLocked : null, isDone ? styles.panelDone : null]}>
                <Text style={styles.panelLabel}>{stageLabel(stage)}</Text>
                <View style={styles.leverRow}>
                  {levers.map((pulled, leverIdx) => (
                    <Pressable
                      key={leverIdx}
                      style={[styles.lever, pulled ? styles.leverPulled : null]}
                      onPress={() => onTapLever(i, leverIdx, stage)}
                      disabled={isLocked || isDone || pulled}
                    >
                      <Text style={styles.leverEmoji}>🔧</Text>
                    </Pressable>
                  ))}
                </View>
                {i === stageIndex ? <Text style={styles.tapHint}>{leverHint}</Text> : null}
              </View>
            );
          }

          if (stage.kind === 'planets') {
            const slots = planetState[i] ?? stage.target.map(() => 0);
            return (
              <View key={i} style={[styles.panel, isLocked ? styles.panelLocked : null, isDone ? styles.panelDone : null]}>
                <Text style={styles.panelLabel}>{stageLabel(stage)}</Text>
                <View style={styles.planetRow}>
                  {slots.map((v, slotIdx) => (
                    <Pressable
                      key={slotIdx}
                      style={[styles.planetSlot, { backgroundColor: PLANET_COLORS[v % PLANET_COLORS.length] }]}
                      onPress={() => onTapPlanet(i, slotIdx, stage)}
                      disabled={isLocked || isDone}
                    />
                  ))}
                </View>
                {i === stageIndex ? <Text style={styles.tapHint}>{lang === 'ar' ? 'اضغط لتدوير الكوكب' : 'Tap to cycle the planet'}</Text> : null}
              </View>
            );
          }

          if (stage.kind === 'sequence') {
            const slots = sequenceSlots[i] ?? stage.correctOrder.map(() => null);
            return (
              <View key={i} style={[styles.panel, isLocked ? styles.panelLocked : null, isDone ? styles.panelDone : null]}>
                <Text style={styles.panelLabel}>{stageLabel(stage)}</Text>
                <View style={styles.sequenceOptionsRow}>
                  {stage.options.map((opt) => (
                    <Pressable
                      key={opt.id}
                      style={styles.sequenceOptionBtn}
                      onPress={() => onTapOption(i, opt.id, stage)}
                      disabled={isLocked || isDone}
                    >
                      <Text style={styles.sequenceOptionEmoji}>{opt.emoji}</Text>
                    </Pressable>
                  ))}
                </View>
                <Animated.View style={[styles.sequenceSlotsRow, { transform: [{ translateX: i === stageIndex ? shakeX : 0 }] }]}>
                  {slots.map((v, slotIdx) => {
                    const opt = stage.options.find((o) => o.id === v);
                    return (
                      <View key={slotIdx} style={[styles.sequenceSlotBox, isDone ? styles.sequenceSlotBoxDone : null]}>
                        <Text style={styles.sequenceSlotEmoji}>{opt?.emoji ?? ''}</Text>
                      </View>
                    );
                  })}
                </Animated.View>
                {i === stageIndex && sequenceWrong ? (
                  <Text style={styles.wrongText}>{lang === 'ar' ? 'مش هي! حاول تاني' : "Not quite! Try again"}</Text>
                ) : null}
              </View>
            );
          }

          if (stage.kind === 'maze') {
            const val = mazeVals[i] ?? stage.startValue;
            const cx = getMazeAnim(i, stage.startValue).interpolate({ inputRange: [0, stage.startValue], outputRange: [70, 130] });
            return (
              <View key={i} style={[styles.panel, isLocked ? styles.panelLocked : null, isDone ? styles.panelDone : null]}>
                <Text style={styles.panelLabel}>{stageLabel(stage)}</Text>
                <Pressable onPress={() => onTapMaze(i, stage)} disabled={isLocked || isDone} style={styles.gearWrap}>
                  <Svg width={140} height={140} viewBox="0 0 140 140">
                    <Circle cx={70} cy={70} r={60} fill="none" stroke={val <= stage.target ? GREEN : BRASS} strokeWidth={4} />
                    <Circle cx={70} cy={70} r={40} fill="none" stroke={WOOD_DARK} strokeWidth={2} />
                    <Circle cx={70} cy={70} r={20} fill="none" stroke={WOOD_DARK} strokeWidth={2} />
                    <AnimatedCircle cx={cx} cy={70} r={9} fill={CYAN} />
                  </Svg>
                </Pressable>
                {i === stageIndex ? (
                  <Text style={styles.tapHint}>{lang === 'ar' ? 'اضغط لتقريب المؤشر' : 'Tap to pull it inward'}</Text>
                ) : null}
              </View>
            );
          }

          // chest
          return (
            <Pressable
              key={i}
              onPress={() => onTapChest(i)}
              disabled={isLocked || (i === stageIndex && chestOpen)}
              style={[styles.chest, isLocked ? styles.panelLocked : null, i === stageIndex && chestOpen ? styles.chestOpen : null]}
            >
              <Text style={styles.chestEmoji}>{i === stageIndex && chestOpen ? '📦' : '🔒'}</Text>
              <Text style={styles.chestLabel}>
                {i === stageIndex && chestOpen ? (lang === 'ar' ? 'فتحت!' : 'UNLOCKED!') : lang === 'ar' ? 'مقفل' : 'LOCKED'}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 20 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  iconBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.85)', alignItems: 'center', justifyContent: 'center' },
  iconBtnText: { fontSize: 15, fontWeight: '900', color: palette.dark },
  stageDots: { flexDirection: 'row', gap: 6 },
  stageDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: 'rgba(255,255,255,0.35)' },
  stageDotActive: { backgroundColor: BRASS_LIGHT },
  stageDotDone: { backgroundColor: GREEN },
  hintBtn: { backgroundColor: 'rgba(255,255,255,0.9)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 },
  hintBtnText: { fontSize: 14, fontWeight: '900', color: palette.dark },
  hintBanner: { backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 12, padding: 10, marginBottom: 10 },
  hintBannerText: { fontSize: 14, fontWeight: '700', color: palette.dark, textAlign: 'center' },
  vault: { flex: 1, backgroundColor: WOOD_DARK, borderRadius: 20, borderWidth: 4, borderColor: BRASS, padding: 14, gap: 14 },
  panel: { backgroundColor: WOOD_LIGHT, borderRadius: 14, borderWidth: 2, borderColor: BRASS, padding: 12, alignItems: 'center' },
  panelLocked: { opacity: 0.4 },
  panelDone: { borderColor: GREEN },
  panelLabel: { color: BRASS_LIGHT, fontWeight: '900', fontSize: 14, marginBottom: 8 },
  gearWrap: { width: 140, height: 140, alignItems: 'center', justifyContent: 'center' },
  gearInner: { position: 'absolute', width: 120, height: 120, alignItems: 'center', justifyContent: 'center' },
  tapHint: { color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 6, fontWeight: '700' },
  dialRow: { flexDirection: 'row', gap: 10 },
  digitBox: { width: 48, height: 56, borderRadius: 8, backgroundColor: BRASS, alignItems: 'center', justifyContent: 'center' },
  digitBoxDone: { backgroundColor: CYAN },
  digitText: { fontSize: 26, fontWeight: '900', color: WOOD_DARK },
  wrongText: { color: RED, fontWeight: '800', marginTop: 8, fontSize: 13 },
  engageBtn: { marginTop: 10, backgroundColor: BRASS, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 8 },
  engageBtnDisabled: { opacity: 0.4 },
  engageBtnText: { color: WOOD_DARK, fontWeight: '900', fontSize: 14, letterSpacing: 1 },
  sliderTrack: { width: '100%', height: 44, borderRadius: 22, backgroundColor: WOOD_DARK, overflow: 'hidden', justifyContent: 'center' },
  sliderFill: { position: 'absolute', left: 0, top: 0, bottom: 0, borderRadius: 22 },
  sliderKnob: { position: 'absolute', width: 44, height: 44, borderRadius: 22, backgroundColor: BRASS_LIGHT, borderWidth: 3, borderColor: WOOD_DARK },
  leverRow: { flexDirection: 'row', gap: 24 },
  lever: { width: 56, height: 72, borderRadius: 10, backgroundColor: RED, alignItems: 'center', justifyContent: 'center' },
  leverPulled: { backgroundColor: GREEN },
  leverEmoji: { fontSize: 26 },
  planetRow: { flexDirection: 'row', gap: 14 },
  planetSlot: { width: 48, height: 48, borderRadius: 24, borderWidth: 3, borderColor: BRASS_LIGHT },
  sequenceOptionsRow: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  sequenceOptionBtn: { width: 48, height: 48, borderRadius: 10, backgroundColor: BRASS, alignItems: 'center', justifyContent: 'center' },
  sequenceOptionEmoji: { fontSize: 24 },
  sequenceSlotsRow: { flexDirection: 'row', gap: 10 },
  sequenceSlotBox: { width: 42, height: 48, borderRadius: 8, backgroundColor: WOOD_DARK, borderWidth: 2, borderColor: BRASS_LIGHT, alignItems: 'center', justifyContent: 'center' },
  sequenceSlotBoxDone: { borderColor: GREEN },
  sequenceSlotEmoji: { fontSize: 20 },
  chest: { alignItems: 'center', justifyContent: 'center', paddingVertical: 16, backgroundColor: WOOD_LIGHT, borderRadius: 14, borderWidth: 2, borderColor: BRASS },
  chestOpen: { borderColor: GREEN, backgroundColor: 'rgba(46,204,113,0.25)' },
  chestEmoji: { fontSize: 42 },
  chestLabel: { color: BRASS_LIGHT, fontWeight: '900', fontSize: 16, marginTop: 6, letterSpacing: 1 },
});
