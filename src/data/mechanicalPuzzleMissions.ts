import { MechanicalPuzzleMission } from '../types/mechanicalPuzzle';

export const MECHANICAL_PUZZLE_MISSIONS: MechanicalPuzzleMission[] = [
  {
    id: 'mech-level1',
    number: 1,
    characterId: 'hakeem',
    promptAr: 'المستوى 1: أدر الترس، افتح الكود، واسحب المزلاج لتفتح الصندوق! ⚙️',
    promptEn: 'Level 1: Turn the gear, crack the code, and slide the bolt to open the chest! ⚙️',
    hints: 4,
    hintsAr: [
      'أدر الترس النجمي حتى يصل السهم الأحمر للأعلى تمامًا.',
      'اضبط الأرقام الثلاثة على الكود الصحيح: 2 - 5 - 8، ثم اضغط ENGAGE.',
      'اضغط على المزلاج عدة مرات حتى يصل آخر اليمين بالكامل.',
      'اضغط على الصندوق لفتحه أخيرًا!',
    ],
    hintsEn: [
      'Turn the star gear until the red arrow points straight up.',
      'Set the three digits to the correct code: 2 - 5 - 8, then press ENGAGE.',
      'Tap the bolt a few times until it slides all the way right.',
      'Tap the chest to finally open it!',
    ],
    stages: [
      { kind: 'gear', labelAr: '1. أدر الترس', labelEn: '1. Turn the gear', step: 45, target: 180 },
      { kind: 'dial', labelAr: '2. اضبط الكود', labelEn: '2. Crack the code', code: [2, 5, 8], requireEngage: true },
      { kind: 'slider', labelAr: '3. اسحب المزلاج', labelEn: '3. Slide the bolt', step: 25 },
      { kind: 'chest' },
    ],
  },
  {
    id: 'mech-level2',
    number: 2,
    characterId: 'hakeem',
    promptAr: 'المستوى 2: أدر صمام البخار، افك رموز الألواح، واسحب الرافعتين سوا! 💨',
    promptEn: "Level 2: Turn the steam valve, crack the rune code, and pull both levers together! 💨",
    hints: 3,
    hintsAr: [
      'أدر صمام البخار العلوي للوصول لضغط الأنابيب المناسب.',
      'اضبط الأسطوانات السحرية على الرمز السري: 4 - 1 - 9 - 2.',
      'اسحب الرافعتين الميكانيكيتين السفليتين معًا لفتح الباب الرئيسي!',
    ],
    hintsEn: [
      'Turn the upper steam valve to reach the right pipe pressure.',
      'Set the rune dials to the secret code: 4 - 1 - 9 - 2.',
      'Pull both lower mechanical levers together to open the main door!',
    ],
    stages: [
      { kind: 'gear', labelAr: '1. أدر صمام البخار', labelEn: '1. Turn the steam valve', step: 45, target: 180 },
      { kind: 'dial', labelAr: '2. افك رموز الألواح', labelEn: '2. Crack the rune code', code: [4, 1, 9, 2], requireEngage: false },
      { kind: 'levers', labelAr: '3. اسحب الرافعتين', labelEn: '3. Pull both levers', count: 2 },
    ],
  },
];
