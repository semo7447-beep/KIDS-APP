import { Zone } from '../types/mission';

export type CoopTemplate = {
  characterId: string;
  themeAr: string;
  themeEn: string;
  pieceEmojis: string[];
};

export type CoopMission = {
  id: string;
  number: number;
  image?: ReturnType<typeof require>;
  imageRatio?: number;
  pieceZones?: Zone[];
  startZone?: Zone;
  previousZone?: Zone;
  template?: CoopTemplate;
};

export const COOP_MISSIONS: CoopMission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/coop/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    pieceZones: [
      { left: 1.06, top: 66.39, width: 10.63, height: 5.38 },
      { left: 75.98, top: 63.7, width: 13.28, height: 5.38 },
      { left: 75.98, top: 69.38, width: 13.28, height: 6.58 },
    ],
    startZone: { left: 30.29, top: 89.42, width: 39.32, height: 6.58 },
    previousZone: { left: 1.06, top: 92.4, width: 26.03, height: 5.98 },
  },
  {
    "id": "mission2",
    "number": 2,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً فواكه السلطة",
      "themeEn": "Collect the salad fruits together",
      "pieceEmojis": [
        "🍇",
        "🍍",
        "🍓"
      ]
    }
  },
  {
    "id": "mission3",
    "number": 3,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً ألوان قوس قزح",
      "themeEn": "Collect the rainbow colors together",
      "pieceEmojis": [
        "🟧",
        "⭐",
        "🔺"
      ]
    }
  },
  {
    "id": "mission4",
    "number": 4,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً أصدقاء المزرعة",
      "themeEn": "Collect the farm friends together",
      "pieceEmojis": [
        "🐐",
        "🐎",
        "🐖"
      ]
    }
  },
  {
    "id": "mission5",
    "number": 5,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً سكان البحر",
      "themeEn": "Collect the sea dwellers together",
      "pieceEmojis": [
        "🐢",
        "🦈",
        "🐙"
      ]
    }
  },
  {
    "id": "mission6",
    "number": 6,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً فريق الحشرات",
      "themeEn": "Collect the insect team together",
      "pieceEmojis": [
        "🦋",
        "🦗",
        "🐜"
      ]
    }
  },
  {
    "id": "mission7",
    "number": 7,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً قافلة المركبات",
      "themeEn": "Collect the vehicle convoy together",
      "pieceEmojis": [
        "🚢",
        "✈️",
        "🚌"
      ]
    }
  },
  {
    "id": "mission8",
    "number": 8,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً أدوات المطبخ",
      "themeEn": "Collect the kitchen tools together",
      "pieceEmojis": [
        "🥄",
        "🍲",
        "🍽️"
      ]
    }
  },
  {
    "id": "mission9",
    "number": 9,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً فرقة الموسيقى",
      "themeEn": "Collect the music band together",
      "pieceEmojis": [
        "🎸",
        "🎻",
        "📯"
      ]
    }
  },
  {
    "id": "mission10",
    "number": 10,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً سرب الطيور",
      "themeEn": "Collect the bird flock together",
      "pieceEmojis": [
        "🦅",
        "🦜",
        "🦚"
      ]
    }
  },
  {
    "id": "mission11",
    "number": 11,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً أصدقاء البيت",
      "themeEn": "Collect the pet friends together",
      "pieceEmojis": [
        "🐠",
        "🐱",
        "🐹"
      ]
    }
  },
  {
    "id": "mission12",
    "number": 12,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً حقيبة المدرسة",
      "themeEn": "Collect the school kit together",
      "pieceEmojis": [
        "📏",
        "✏️",
        "🎒"
      ]
    }
  },
  {
    "id": "mission13",
    "number": 13,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً طاولة الحلويات",
      "themeEn": "Collect the dessert table together",
      "pieceEmojis": [
        "🍩",
        "🎂",
        "🍦"
      ]
    }
  },
  {
    "id": "mission14",
    "number": 14,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً مشهد الطبيعة",
      "themeEn": "Collect the nature scene together",
      "pieceEmojis": [
        "☁️",
        "🌳",
        "☀️"
      ]
    }
  },
  {
    "id": "mission15",
    "number": 15,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً سلة الخضروات",
      "themeEn": "Collect the vegetable basket together",
      "pieceEmojis": [
        "🥕",
        "🥔",
        "🫑"
      ]
    }
  },
  {
    "id": "mission16",
    "number": 16,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً خزانة الملابس",
      "themeEn": "Collect the clothes closet together",
      "pieceEmojis": [
        "👟",
        "🧦",
        "🧢"
      ]
    }
  },
  {
    "id": "mission17",
    "number": 17,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً فواكه السلطة",
      "themeEn": "Collect the salad fruits together",
      "pieceEmojis": [
        "🍇",
        "🍊",
        "🍓"
      ]
    }
  },
  {
    "id": "mission18",
    "number": 18,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً ألوان قوس قزح",
      "themeEn": "Collect the rainbow colors together",
      "pieceEmojis": [
        "🔺",
        "💛",
        "🟧"
      ]
    }
  },
  {
    "id": "mission19",
    "number": 19,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً أصدقاء المزرعة",
      "themeEn": "Collect the farm friends together",
      "pieceEmojis": [
        "🐎",
        "🐐",
        "🐔"
      ]
    }
  },
  {
    "id": "mission20",
    "number": 20,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً سكان البحر",
      "themeEn": "Collect the sea dwellers together",
      "pieceEmojis": [
        "🐙",
        "🐢",
        "🐋"
      ]
    }
  },
  {
    "id": "mission21",
    "number": 21,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً فريق الحشرات",
      "themeEn": "Collect the insect team together",
      "pieceEmojis": [
        "🐜",
        "🦋",
        "🐝"
      ]
    }
  },
  {
    "id": "mission22",
    "number": 22,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً قافلة المركبات",
      "themeEn": "Collect the vehicle convoy together",
      "pieceEmojis": [
        "✈️",
        "🚌",
        "🚲"
      ]
    }
  },
  {
    "id": "mission23",
    "number": 23,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً أدوات المطبخ",
      "themeEn": "Collect the kitchen tools together",
      "pieceEmojis": [
        "☕",
        "🥄",
        "🍲"
      ]
    }
  },
  {
    "id": "mission24",
    "number": 24,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً فرقة الموسيقى",
      "themeEn": "Collect the music band together",
      "pieceEmojis": [
        "🎵",
        "🥁",
        "🎻"
      ]
    }
  },
  {
    "id": "mission25",
    "number": 25,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً سرب الطيور",
      "themeEn": "Collect the bird flock together",
      "pieceEmojis": [
        "🦆",
        "🐧",
        "🦅"
      ]
    }
  },
  {
    "id": "mission26",
    "number": 26,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً أصدقاء البيت",
      "themeEn": "Collect the pet friends together",
      "pieceEmojis": [
        "🐱",
        "🦜",
        "🐠"
      ]
    }
  },
  {
    "id": "mission27",
    "number": 27,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً حقيبة المدرسة",
      "themeEn": "Collect the school kit together",
      "pieceEmojis": [
        "✂️",
        "📏",
        "📖"
      ]
    }
  },
  {
    "id": "mission28",
    "number": 28,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً طاولة الحلويات",
      "themeEn": "Collect the dessert table together",
      "pieceEmojis": [
        "🍫",
        "🍩",
        "🥧"
      ]
    }
  },
  {
    "id": "mission29",
    "number": 29,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً مشهد الطبيعة",
      "themeEn": "Collect the nature scene together",
      "pieceEmojis": [
        "🌙",
        "🌳",
        "☀️"
      ]
    }
  },
  {
    "id": "mission30",
    "number": 30,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً سلة الخضروات",
      "themeEn": "Collect the vegetable basket together",
      "pieceEmojis": [
        "🍅",
        "🥒",
        "🥔"
      ]
    }
  },
  {
    "id": "mission31",
    "number": 31,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً خزانة الملابس",
      "themeEn": "Collect the clothes closet together",
      "pieceEmojis": [
        "🧦",
        "👟",
        "👖"
      ]
    }
  },
  {
    "id": "mission32",
    "number": 32,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً فواكه السلطة",
      "themeEn": "Collect the salad fruits together",
      "pieceEmojis": [
        "🍍",
        "🍎",
        "🍌"
      ]
    }
  },
  {
    "id": "mission33",
    "number": 33,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً ألوان قوس قزح",
      "themeEn": "Collect the rainbow colors together",
      "pieceEmojis": [
        "🔺",
        "⚪",
        "💛"
      ]
    }
  },
  {
    "id": "mission34",
    "number": 34,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً أصدقاء المزرعة",
      "themeEn": "Collect the farm friends together",
      "pieceEmojis": [
        "🐎",
        "🐐",
        "🐄"
      ]
    }
  },
  {
    "id": "mission35",
    "number": 35,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً سكان البحر",
      "themeEn": "Collect the sea dwellers together",
      "pieceEmojis": [
        "🐙",
        "⭐",
        "🦈"
      ]
    }
  },
  {
    "id": "mission36",
    "number": 36,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً فريق الحشرات",
      "themeEn": "Collect the insect team together",
      "pieceEmojis": [
        "🐞",
        "🦟",
        "🐝"
      ]
    }
  },
  {
    "id": "mission37",
    "number": 37,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً قافلة المركبات",
      "themeEn": "Collect the vehicle convoy together",
      "pieceEmojis": [
        "🚲",
        "🚗",
        "🚆"
      ]
    }
  },
  {
    "id": "mission38",
    "number": 38,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً أدوات المطبخ",
      "themeEn": "Collect the kitchen tools together",
      "pieceEmojis": [
        "🔪",
        "🍽️",
        "🥄"
      ]
    }
  },
  {
    "id": "mission39",
    "number": 39,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً فرقة الموسيقى",
      "themeEn": "Collect the music band together",
      "pieceEmojis": [
        "🎵",
        "📯",
        "🥁"
      ]
    }
  },
  {
    "id": "mission40",
    "number": 40,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً سرب الطيور",
      "themeEn": "Collect the bird flock together",
      "pieceEmojis": [
        "🦆",
        "🦚",
        "🦉"
      ]
    }
  },
  {
    "id": "mission41",
    "number": 41,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً أصدقاء البيت",
      "themeEn": "Collect the pet friends together",
      "pieceEmojis": [
        "🐹",
        "🐶",
        "🐠"
      ]
    }
  },
  {
    "id": "mission42",
    "number": 42,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً حقيبة المدرسة",
      "themeEn": "Collect the school kit together",
      "pieceEmojis": [
        "✂️",
        "🎒",
        "📏"
      ]
    }
  },
  {
    "id": "mission43",
    "number": 43,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً طاولة الحلويات",
      "themeEn": "Collect the dessert table together",
      "pieceEmojis": [
        "🍦",
        "🍫",
        "🥧"
      ]
    }
  },
  {
    "id": "mission44",
    "number": 44,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً مشهد الطبيعة",
      "themeEn": "Collect the nature scene together",
      "pieceEmojis": [
        "🌸",
        "🌳",
        "⛰️"
      ]
    }
  },
  {
    "id": "mission45",
    "number": 45,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً سلة الخضروات",
      "themeEn": "Collect the vegetable basket together",
      "pieceEmojis": [
        "🥒",
        "🥔",
        "🫑"
      ]
    }
  },
  {
    "id": "mission46",
    "number": 46,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً خزانة الملابس",
      "themeEn": "Collect the clothes closet together",
      "pieceEmojis": [
        "👕",
        "🧢",
        "🧦"
      ]
    }
  },
  {
    "id": "mission47",
    "number": 47,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً فواكه السلطة",
      "themeEn": "Collect the salad fruits together",
      "pieceEmojis": [
        "🍍",
        "🍎",
        "🍓"
      ]
    }
  },
  {
    "id": "mission48",
    "number": 48,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً ألوان قوس قزح",
      "themeEn": "Collect the rainbow colors together",
      "pieceEmojis": [
        "⭐",
        "🔷",
        "💛"
      ]
    }
  },
  {
    "id": "mission49",
    "number": 49,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً أصدقاء المزرعة",
      "themeEn": "Collect the farm friends together",
      "pieceEmojis": [
        "🐔",
        "🐐",
        "🐖"
      ]
    }
  },
  {
    "id": "mission50",
    "number": 50,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً سكان البحر",
      "themeEn": "Collect the sea dwellers together",
      "pieceEmojis": [
        "🦈",
        "🐋",
        "🐟"
      ]
    }
  },
  {
    "id": "mission51",
    "number": 51,
    "template": {
      "characterId": "nawaf",
      "themeAr": "اجمعوا معاً فريق الحشرات",
      "themeEn": "Collect the insect team together",
      "pieceEmojis": [
        "🐞",
        "🐝",
        "🦟"
      ]
    }
  }
];
