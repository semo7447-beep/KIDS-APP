import React, { useRef, useState } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Line, Rect } from 'react-native-svg';
import { useLanguage } from '../context/LanguageContext';
import { palette } from '../theme/colors';
import { MechanicalPuzzleMission } from '../types/mechanicalPuzzle';
import CharacterBubble from './CharacterBubble';

const WOOD_DARK = '#2D1E14';
const WOOD_LIGHT = '#5A3C28';
const BRASS = '#D4AF37';
const BRASS_LIGHT = '#F0D26E';
const GREEN = '#2ECC71';
const RED = '#E74C3C';

type Props = {
  mission: MechanicalPuzzleMission;
  onSolved: () => void;
  onPrevious: () => void;
};

type Stage = 0 | 1 | 2 | 3 | 4;

export default function MechanicalPuzzleBoard({ mission, onSolved, onPrevious }: Props) {
  const { lang, isRTL } = useLanguage();
  const [stage, setStage] = useState<Stage>(0);
  const [gearAngle, setGearAngle] = useState(0);
  const [dialDigits, setDialDigits] = useState([0, 0, 0]);
  const [dialWrong, setDialWrong] = useState(false);
  const [sliderVal, setSliderVal] = useState(0);
  const [hintsLeft, setHintsLeft] = useState(mission.hints);
  const [hintText, setHintText] = useState<string | null>(null);
  const gearRotate = useRef(new Animated.Value(0)).current;
  const sliderAnim = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const chestGlow = useRef(new Animated.Value(0)).current;

  const hints = lang === 'ar' ? mission.hintsAr : mission.hintsEn;

  const showHintFor = (idx: number) => {
    if (hintsLeft <= 0) return;
    setHintsLeft((h) => h - 1);
    setHintText(hints[idx] ?? null);
    setTimeout(() => setHintText(null), 3500);
  };

  const onTapGear = () => {
    if (stage !== 0) return;
    const next = (gearAngle + mission.gearStep) % 360;
    setGearAngle(next);
    Animated.timing(gearRotate, {
      toValue: next,
      duration: 260,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
    if (next === mission.gearTarget % 360) {
      setTimeout(() => setStage(1), 350);
    }
  };

  const onTapDigit = (i: number) => {
    if (stage !== 1) return;
    setDialDigits((prev) => {
      const copy = [...prev];
      copy[i] = (copy[i] + 1) % 10;
      return copy;
    });
    setDialWrong(false);
  };

  const onEngageDial = () => {
    if (stage !== 1) return;
    const ok = dialDigits.every((d, i) => d === mission.dialCode[i]);
    if (ok) {
      setStage(2);
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

  const onTapSlider = () => {
    if (stage !== 2) return;
    const next = Math.min(100, sliderVal + mission.sliderStep);
    setSliderVal(next);
    Animated.timing(sliderAnim, {
      toValue: next,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
    if (next === 100) {
      setTimeout(() => setStage(3), 300);
    }
  };

  const onTapChest = () => {
    if (stage !== 3) return;
    setStage(4);
    Animated.timing(chestGlow, { toValue: 1, duration: 500, useNativeDriver: false }).start();
    setTimeout(onSolved, 1100);
  };

  const gearRotateDeg = gearRotate.interpolate({ inputRange: [0, 360], outputRange: ['0deg', '360deg'] });
  const shakeX = shakeAnim.interpolate({ inputRange: [-1, 1], outputRange: [-8, 8] });
  const sliderWidth = sliderAnim.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] });
  const sliderKnobLeft = sliderAnim.interpolate({ inputRange: [0, 100], outputRange: ['0%', '86%'] });

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Pressable style={styles.iconBtn} onPress={onPrevious}>
          <Text style={styles.iconBtnText}>{isRTL ? '▶' : '◀'}</Text>
        </Pressable>
        <View style={styles.stageDots}>
          {[0, 1, 2, 3].map((i) => (
            <View key={i} style={[styles.stageDot, stage > i ? styles.stageDotDone : stage === i ? styles.stageDotActive : null]} />
          ))}
        </View>
        <Pressable style={styles.hintBtn} onPress={() => showHintFor(Math.min(stage, 3))} disabled={hintsLeft <= 0}>
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
        {/* Stage 1: star gear */}
        <View style={[styles.panel, stage > 0 ? styles.panelDone : null]}>
          <Text style={styles.panelLabel}>{lang === 'ar' ? '1. أدر الترس' : '1. Turn the gear'}</Text>
          <Pressable onPress={onTapGear} disabled={stage !== 0} style={styles.gearWrap}>
            <Svg width={140} height={140} viewBox="0 0 140 140">
              <Circle cx={70} cy={70} r={64} fill="none" stroke={BRASS} strokeWidth={3} />
              <Line x1={70} y1={6} x2={70} y2={20} stroke={stage > 0 ? GREEN : RED} strokeWidth={5} strokeLinecap="round" />
            </Svg>
            <Animated.View style={[styles.gearInner, { transform: [{ rotate: gearRotateDeg }] }]}>
              <Svg width={120} height={120} viewBox="0 0 120 120">
                <Circle cx={60} cy={60} r={50} fill={stage > 0 ? GREEN : BRASS} stroke={WOOD_DARK} strokeWidth={3} />
                <Circle cx={60} cy={60} r={16} fill={BRASS_LIGHT} />
                {Array.from({ length: 8 }, (_, i) => {
                  const a = (i * Math.PI * 2) / 8;
                  const cx = 60 + 56 * Math.cos(a);
                  const cy = 60 + 56 * Math.sin(a);
                  return <Rect key={i} x={cx - 6} y={cy - 6} width={12} height={12} fill={WOOD_DARK} />;
                })}
                <Line x1={60} y1={60} x2={60} y2={14} stroke={RED} strokeWidth={4} strokeLinecap="round" />
              </Svg>
            </Animated.View>
          </Pressable>
          {stage === 0 ? <Text style={styles.tapHint}>{lang === 'ar' ? 'اضغط للتدوير' : 'Tap to turn'}</Text> : null}
        </View>

        {/* Stage 2: digit dial */}
        <View style={[styles.panel, stage < 1 ? styles.panelLocked : null, stage > 1 ? styles.panelDone : null]}>
          <Text style={styles.panelLabel}>{lang === 'ar' ? '2. اضبط الكود' : '2. Crack the code'}</Text>
          <Animated.View style={[styles.dialRow, { transform: [{ translateX: shakeX }] }]}>
            {dialDigits.map((d, i) => (
              <Pressable key={i} style={[styles.digitBox, stage > 1 ? styles.digitBoxDone : null]} onPress={() => onTapDigit(i)} disabled={stage !== 1}>
                <Text style={styles.digitText}>{d}</Text>
              </Pressable>
            ))}
          </Animated.View>
          {dialWrong ? <Text style={styles.wrongText}>{lang === 'ar' ? 'مش هي! حاول تاني' : "Not quite! Try again"}</Text> : null}
          <Pressable style={[styles.engageBtn, stage !== 1 ? styles.engageBtnDisabled : null]} onPress={onEngageDial} disabled={stage !== 1}>
            <Text style={styles.engageBtnText}>ENGAGE</Text>
          </Pressable>
        </View>

        {/* Stage 3: slider */}
        <View style={[styles.panel, stage < 2 ? styles.panelLocked : null, stage > 2 ? styles.panelDone : null]}>
          <Text style={styles.panelLabel}>{lang === 'ar' ? '3. اسحب المزلاج' : '3. Slide the bolt'}</Text>
          <Pressable onPress={onTapSlider} disabled={stage !== 2} style={styles.sliderTrack}>
            <Animated.View style={[styles.sliderFill, { width: sliderWidth, backgroundColor: stage > 2 ? GREEN : BRASS }]} />
            <Animated.View style={[styles.sliderKnob, { left: sliderKnobLeft }]} />
          </Pressable>
          {stage === 2 ? <Text style={styles.tapHint}>{lang === 'ar' ? 'اضغط للسحب' : 'Tap to slide'}</Text> : null}
        </View>

        {/* Stage 4: chest */}
        <Pressable onPress={onTapChest} disabled={stage !== 3} style={[styles.chest, stage < 3 ? styles.panelLocked : null, stage === 4 ? styles.chestOpen : null]}>
          <Text style={styles.chestEmoji}>{stage === 4 ? '📦' : '🔒'}</Text>
          <Text style={styles.chestLabel}>{stage === 4 ? (lang === 'ar' ? 'فتحت!' : 'UNLOCKED!') : lang === 'ar' ? 'مقفل' : 'LOCKED'}</Text>
        </Pressable>
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
  digitBoxDone: { backgroundColor: GREEN },
  digitText: { fontSize: 26, fontWeight: '900', color: WOOD_DARK },
  wrongText: { color: RED, fontWeight: '800', marginTop: 8, fontSize: 13 },
  engageBtn: { marginTop: 10, backgroundColor: BRASS, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 8 },
  engageBtnDisabled: { opacity: 0.4 },
  engageBtnText: { color: WOOD_DARK, fontWeight: '900', fontSize: 14, letterSpacing: 1 },
  sliderTrack: { width: '100%', height: 44, borderRadius: 22, backgroundColor: WOOD_DARK, overflow: 'hidden', justifyContent: 'center' },
  sliderFill: { position: 'absolute', left: 0, top: 0, bottom: 0, borderRadius: 22 },
  sliderKnob: { position: 'absolute', width: 44, height: 44, borderRadius: 22, backgroundColor: BRASS_LIGHT, borderWidth: 3, borderColor: WOOD_DARK },
  chest: { alignItems: 'center', justifyContent: 'center', paddingVertical: 16, backgroundColor: WOOD_LIGHT, borderRadius: 14, borderWidth: 2, borderColor: BRASS },
  chestOpen: { borderColor: GREEN, backgroundColor: 'rgba(46,204,113,0.25)' },
  chestEmoji: { fontSize: 42 },
  chestLabel: { color: BRASS_LIGHT, fontWeight: '900', fontSize: 16, marginTop: 6, letterSpacing: 1 },
});
