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
  {
    id: 'mech-level3',
    number: 3,
    characterId: 'hakeem',
    promptAr: 'المستوى 3: رتب الكواكب، أدخل رمز النجوم، واسحب الرافعة لتفعيل الجسر السماوي! 🌌',
    promptEn: 'Level 3: Align the planets, enter the star code, and pull the lever to activate the Celestial Bridge! 🌌',
    hints: 3,
    hintsAr: [
      'حرك الكواكب إلى مواقعها الصحيحة وفق نمط الأبراج.',
      'أدخل رمز النجوم السماوي: 7 - 3 - 5 - 1.',
      'اسحب الرافعة البلورية لتفعيل الجسر المعلق!',
    ],
    hintsEn: [
      'Align the planets with their correct zodiac signs.',
      'Enter the celestial code: 7 - 3 - 5 - 1.',
      'Pull the crystal lever to activate the Celestial Bridge!',
    ],
    stages: [
      { kind: 'planets', labelAr: '1. رتب الكواكب', labelEn: '1. Align the planets', optionCount: 4, target: [0, 3, 2, 1] },
      { kind: 'dial', labelAr: '2. أدخل رمز النجوم', labelEn: '2. Enter the star code', code: [7, 3, 5, 1], requireEngage: false },
      { kind: 'levers', labelAr: '3. اسحب الرافعة', labelEn: '3. Pull the lever', count: 1 },
    ],
  },
  {
    id: 'mech-level4',
    number: 4,
    characterId: 'hakeem',
    promptAr: 'المستوى 4: أدر التروس الحلزونية، رتب الرموز، واعبر المتاهة المغناطيسية! 🌀',
    promptEn: 'Level 4: Turn the spiral gears, order the runes, and cross the magnetic maze! 🌀',
    hints: 4,
    hintsAr: [
      'أدر التروس الحلزونية العلوية حتى يتجه المؤشر للأعلى تمامًا.',
      'اختر الرموز الثلاثة بالترتيب: الشمس، الماء، ثم النجمة.',
      'اضغط على المتاهة عدة مرات لتقريب المؤشر المغناطيسي من المركز.',
      'اضغط على المفتاح لفتح ممر الكرونوس أخيرًا!',
    ],
    hintsEn: [
      'Turn the spiral gears until the pointer aims straight up.',
      'Pick the three runes in order: Sun, Water, then Star.',
      'Tap the maze a few times to pull the magnetic pointer toward the center.',
      'Tap the key to finally open the Chronos Corridor!',
    ],
    stages: [
      { kind: 'gear', labelAr: '1. أدر التروس الحلزونية', labelEn: '1. Turn the spiral gears', step: 30, target: 0, startAngle: 120 },
      {
        kind: 'sequence',
        labelAr: '2. رتب الرموز',
        labelEn: '2. Order the runes',
        options: [
          { id: 'sun', emoji: '☀️' },
          { id: 'water', emoji: '💧' },
          { id: 'star', emoji: '⭐' },
        ],
        correctOrder: ['sun', 'water', 'star'],
      },
      { kind: 'maze', labelAr: '3. اعبر المتاهة', labelEn: '3. Cross the maze', startValue: 120, step: 25, target: 20 },
      { kind: 'chest' },
    ],
  },
];
