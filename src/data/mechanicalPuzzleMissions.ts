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
    gearStep: 45,
    gearTarget: 180,
    dialCode: [2, 5, 8],
    sliderStep: 25,
  },
];
