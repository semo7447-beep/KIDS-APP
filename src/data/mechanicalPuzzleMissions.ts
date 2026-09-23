import { MechanicalPuzzleMission } from '../types/mechanicalPuzzle';

const ICON_GEAR = require('../../assets/icons/mechanical/gear.png');
const ICON_DIAL_FRAME = require('../../assets/icons/mechanical/digit_dial_frame.png');
const ICON_SLIDER_TRACK = require('../../assets/icons/mechanical/slider_track.png');
const ICON_SLIDER_BOLT = require('../../assets/icons/mechanical/slider_bolt.png');
const ICON_CHEST_CLOSED = require('../../assets/icons/mechanical/chest_closed.png');
const ICON_CHEST_OPEN = require('../../assets/icons/mechanical/chest_open.png');
const LEVEL1_SCENE = require('../../assets/missions/mechanical/level1_scene.png');

export const MECHANICAL_PUZZLE_MISSIONS: MechanicalPuzzleMission[] = [
  {
    id: 'mech-level1',
    number: 1,
    characterId: 'hakeem',
    promptAr: 'المستوى 1: أدر الترس، افتح الكود، واسحب المزلاج لتفتح الصندوق! ⚙️',
    promptEn: 'Level 1: Turn the gear, crack the code, and slide the bolt to open the chest! ⚙️',
    hints: 4,
    hintsAr: [
      'اضغط على العجلة النجمية عدة مرات حتى تدور نصف لفة.',
      'اضبط الأرقام الثلاثة على الكود الصحيح: 2 - 5 - 8، ثم اضغط ENGAGE.',
      'اضغط على المزلاج (الحلقة تحت الأرقام) عدة مرات حتى ينفتح.',
      'اضغط على الصندوق لفتحه أخيرًا!',
    ],
    hintsEn: [
      'Tap the star wheel a few times until it turns half a circle.',
      'Set the three digits to the correct code: 2 - 5 - 8, then press ENGAGE.',
      'Tap the bolt (the ring under the digits) a few times until it opens.',
      'Tap the chest to finally open it!',
    ],
    sceneImage: LEVEL1_SCENE,
    sceneImageRatio: 941 / 1672,
    backHotspot: { left: 69.93, top: 96.29, width: 10.2, height: 2.51 },
    hintsHotspot: { left: 85.02, top: 90.91, width: 12.22, height: 7.78 },
    hintCountHotspot: { left: 89.59, top: 91.63, width: 3.08, height: 2.03 },
    hintLeftHotspot: { left: 86.72, top: 96.83, width: 8.71, height: 1.38 },
    stages: [
      {
        kind: 'gear',
        labelAr: '1. أدر الترس',
        labelEn: '1. Turn the gear',
        step: 45,
        target: 180,
        image: ICON_GEAR,
        hotspot: { left: 9.03, top: 45.16, width: 17.0, height: 9.87 },
      },
      {
        kind: 'dial',
        labelAr: '2. اضبط الكود',
        labelEn: '2. Crack the code',
        code: [2, 5, 8],
        requireEngage: true,
        frameImage: ICON_DIAL_FRAME,
        frameImageRatio: 1221 / 727,
        slotCenters: [
          { left: 27, top: 52 },
          { left: 49, top: 52 },
          { left: 71.5, top: 52 },
        ],
        digitHotspots: [
          { left: 43.25, top: 41.57, width: 4.89, height: 2.39 },
          { left: 48.57, top: 41.57, width: 4.89, height: 2.39 },
          { left: 53.88, top: 41.57, width: 4.89, height: 2.39 },
        ],
        engageHotspot: { left: 60.36, top: 44.38, width: 9.56, height: 2.15 },
      },
      {
        kind: 'slider',
        labelAr: '3. اسحب المزلاج',
        labelEn: '3. Slide the bolt',
        step: 25,
        trackImage: ICON_SLIDER_TRACK,
        trackImageRatio: 1221 / 310,
        knobImage: ICON_SLIDER_BOLT,
        knobImageRatio: 1230 / 811,
        hotspot: { left: 46.76, top: 44.08, width: 9.03, height: 3.29 },
        glowHotspot: { left: 30.07, top: 33.61, width: 11.16, height: 12.56 },
      },
      {
        kind: 'chest',
        closedImage: ICON_CHEST_CLOSED,
        openImage: ICON_CHEST_OPEN,
        hotspot: { left: 38.79, top: 57.89, width: 22.85, height: 9.09 },
      },
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
