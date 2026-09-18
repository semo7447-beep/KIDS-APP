export type Stop = {
  id: string;
  screen: string;
  emoji: string;
  color: string;
  labelAr: string;
  labelEn: string;
};

import { palette } from '../theme/colors';

export const STOPS: Stop[] = [
  { id: 'letters', screen: 'Letters', emoji: '🦁', color: palette.purple, labelAr: 'الحروف', labelEn: 'Letters' },
  { id: 'numbers', screen: 'Numbers', emoji: '🔢', color: palette.blue, labelAr: 'الأرقام', labelEn: 'Numbers' },
  { id: 'colors', screen: 'Colors', emoji: '🌈', color: palette.pink, labelAr: 'الألوان', labelEn: 'Colors' },
  { id: 'memory', screen: 'Memory', emoji: '🧠', color: palette.orange, labelAr: 'لعبة الذاكرة', labelEn: 'Memory Game' },
  { id: 'pattern', screen: 'Pattern', emoji: '🧩', color: palette.green, labelAr: 'أكمل النمط', labelEn: 'Pattern' },
  { id: 'oddoneout', screen: 'OddOneOut', emoji: '🔍', color: palette.red, labelAr: 'ابحث عن المختلف', labelEn: 'Odd One Out' },
  { id: 'draw', screen: 'Draw', emoji: '🖍️', color: palette.purple, labelAr: 'ارسم', labelEn: 'Draw' },
  { id: 'animalworld', screen: 'AnimalWorld', emoji: '🌍', color: palette.blue, labelAr: 'عالم الحيوانات', labelEn: 'Animal World' },
  { id: 'whatsmissing', screen: 'WhatsMissing', emoji: '👀', color: palette.orange, labelAr: 'اختفى شيء', labelEn: "What's Missing" },
  { id: 'predict', screen: 'Predict', emoji: '💡', color: palette.green, labelAr: 'ماذا سيحدث؟', labelEn: 'What Will Happen?' },
  { id: 'robot', screen: 'Robot', emoji: '🤖', color: palette.blue, labelAr: 'برمج الروبوت', labelEn: 'Program the Robot' },
  { id: 'speed', screen: 'Speed', emoji: '⚡', color: palette.red, labelAr: 'تحدي 10 ثوانٍ', labelEn: '10 Second Challenge' },
  { id: 'secretroom', screen: 'SecretRoom', emoji: '🔒', color: palette.purple, labelAr: 'غرفة الأسرار', labelEn: 'Secret Room' },
];
