import { Zone } from '../types/mission';

export type DrawTemplate = {
  characterId: string;
  targetEmoji: string;
  targetAr: string;
  targetEn: string;
};

export type DrawMission = {
  id: string;
  number: number;
  image?: ReturnType<typeof require>;
  imageRatio?: number;
  canvasZone?: Zone;
  eraserZone?: Zone;
  confirmZone?: Zone;
  previousZone?: Zone;
  nextZone?: Zone;
  colorZones?: (Zone & { color: string })[];
  template?: DrawTemplate;
};

export const DRAW_MISSIONS: DrawMission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/draw/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    canvasZone: { left: 31.88, top: 46.06, width: 37.2, height: 17.34 },
    eraserZone: { left: 1.59, top: 80.14, width: 21.25, height: 7.18 },
    confirmZone: { left: 69.08, top: 80.14, width: 29.23, height: 7.18 },
    previousZone: { left: 1.59, top: 93.3, width: 26.03, height: 5.38 },
    nextZone: { left: 73.32, top: 93.3, width: 26.03, height: 5.38 },
    colorZones: [
      { color: '#FF5E5E', left: 24.97, top: 80.14, width: 7.97, height: 7.18 },
      { color: '#4A6CF7', left: 32.94, top: 80.14, width: 7.97, height: 7.18 },
      { color: '#FFC93D', left: 40.91, top: 80.14, width: 7.97, height: 7.18 },
      { color: '#3FD68D', left: 48.88, top: 80.14, width: 7.97, height: 7.18 },
      { color: '#9B5DE5', left: 56.85, top: 80.14, width: 7.97, height: 7.18 },
    ],
  },
  {
    "id": "mission2",
    "number": 2,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🐟",
      "targetAr": "سمكة",
      "targetEn": "Fish"
    }
  },
  {
    "id": "mission3",
    "number": 3,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🐱",
      "targetAr": "قطة",
      "targetEn": "Cat"
    }
  },
  {
    "id": "mission4",
    "number": 4,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "☀️",
      "targetAr": "شمس",
      "targetEn": "Sun"
    }
  },
  {
    "id": "mission5",
    "number": 5,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🏠",
      "targetAr": "منزل",
      "targetEn": "House"
    }
  },
  {
    "id": "mission6",
    "number": 6,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🌸",
      "targetAr": "زهرة",
      "targetEn": "Flower"
    }
  },
  {
    "id": "mission7",
    "number": 7,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🚗",
      "targetAr": "سيارة",
      "targetEn": "Car"
    }
  },
  {
    "id": "mission8",
    "number": 8,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "⭐",
      "targetAr": "نجمة",
      "targetEn": "Star"
    }
  },
  {
    "id": "mission9",
    "number": 9,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🌙",
      "targetAr": "قمر",
      "targetEn": "Moon"
    }
  },
  {
    "id": "mission10",
    "number": 10,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🌳",
      "targetAr": "شجرة",
      "targetEn": "Tree"
    }
  },
  {
    "id": "mission11",
    "number": 11,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "☁️",
      "targetAr": "سحابة",
      "targetEn": "Cloud"
    }
  },
  {
    "id": "mission12",
    "number": 12,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🦋",
      "targetAr": "فراشة",
      "targetEn": "Butterfly"
    }
  },
  {
    "id": "mission13",
    "number": 13,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "✈️",
      "targetAr": "طائرة",
      "targetEn": "Airplane"
    }
  },
  {
    "id": "mission14",
    "number": 14,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "⛵",
      "targetAr": "قارب",
      "targetEn": "Boat"
    }
  },
  {
    "id": "mission15",
    "number": 15,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🚲",
      "targetAr": "دراجة",
      "targetEn": "Bicycle"
    }
  },
  {
    "id": "mission16",
    "number": 16,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🍎",
      "targetAr": "تفاحة",
      "targetEn": "Apple"
    }
  },
  {
    "id": "mission17",
    "number": 17,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "⚽",
      "targetAr": "كرة",
      "targetEn": "Ball"
    }
  },
  {
    "id": "mission18",
    "number": 18,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "☂️",
      "targetAr": "مظلة",
      "targetEn": "Umbrella"
    }
  },
  {
    "id": "mission19",
    "number": 19,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🌈",
      "targetAr": "قوس قزح",
      "targetEn": "Rainbow"
    }
  },
  {
    "id": "mission20",
    "number": 20,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🎈",
      "targetAr": "بالون",
      "targetEn": "Balloon"
    }
  },
  {
    "id": "mission21",
    "number": 21,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "👑",
      "targetAr": "تاج",
      "targetEn": "Crown"
    }
  },
  {
    "id": "mission22",
    "number": 22,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🐝",
      "targetAr": "نحلة",
      "targetEn": "Bee"
    }
  },
  {
    "id": "mission23",
    "number": 23,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🐻",
      "targetAr": "دب",
      "targetEn": "Bear"
    }
  },
  {
    "id": "mission24",
    "number": 24,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🐰",
      "targetAr": "أرنب",
      "targetEn": "Rabbit"
    }
  },
  {
    "id": "mission25",
    "number": 25,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🦆",
      "targetAr": "بطة",
      "targetEn": "Duck"
    }
  },
  {
    "id": "mission26",
    "number": 26,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🐎",
      "targetAr": "حصان",
      "targetEn": "Horse"
    }
  },
  {
    "id": "mission27",
    "number": 27,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🐘",
      "targetAr": "فيل",
      "targetEn": "Elephant"
    }
  },
  {
    "id": "mission28",
    "number": 28,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🦁",
      "targetAr": "أسد",
      "targetEn": "Lion"
    }
  },
  {
    "id": "mission29",
    "number": 29,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🐯",
      "targetAr": "نمر",
      "targetEn": "Tiger"
    }
  },
  {
    "id": "mission30",
    "number": 30,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🦊",
      "targetAr": "ثعلب",
      "targetEn": "Fox"
    }
  },
  {
    "id": "mission31",
    "number": 31,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🦉",
      "targetAr": "بومة",
      "targetEn": "Owl"
    }
  },
  {
    "id": "mission32",
    "number": 32,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🌴",
      "targetAr": "نخلة",
      "targetEn": "Palm tree"
    }
  },
  {
    "id": "mission33",
    "number": 33,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "⛰️",
      "targetAr": "جبل",
      "targetEn": "Mountain"
    }
  },
  {
    "id": "mission34",
    "number": 34,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🏰",
      "targetAr": "قلعة",
      "targetEn": "Castle"
    }
  },
  {
    "id": "mission35",
    "number": 35,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🤖",
      "targetAr": "روبوت",
      "targetEn": "Robot"
    }
  },
  {
    "id": "mission36",
    "number": 36,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🚀",
      "targetAr": "صاروخ",
      "targetEn": "Rocket"
    }
  },
  {
    "id": "mission37",
    "number": 37,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "⭐",
      "targetAr": "نجم البحر",
      "targetEn": "Starfish"
    }
  },
  {
    "id": "mission38",
    "number": 38,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🐌",
      "targetAr": "حلزون",
      "targetEn": "Snail"
    }
  },
  {
    "id": "mission39",
    "number": 39,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🍓",
      "targetAr": "فراولة",
      "targetEn": "Strawberry"
    }
  },
  {
    "id": "mission40",
    "number": 40,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🍇",
      "targetAr": "عنب",
      "targetEn": "Grapes"
    }
  },
  {
    "id": "mission41",
    "number": 41,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🥕",
      "targetAr": "جزرة",
      "targetEn": "Carrot"
    }
  },
  {
    "id": "mission42",
    "number": 42,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🌽",
      "targetAr": "ذرة",
      "targetEn": "Corn"
    }
  },
  {
    "id": "mission43",
    "number": 43,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🍩",
      "targetAr": "دونات",
      "targetEn": "Donut"
    }
  },
  {
    "id": "mission44",
    "number": 44,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🍕",
      "targetAr": "بيتزا",
      "targetEn": "Pizza"
    }
  },
  {
    "id": "mission45",
    "number": 45,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "☕",
      "targetAr": "كوب",
      "targetEn": "Cup"
    }
  },
  {
    "id": "mission46",
    "number": 46,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🏍️",
      "targetAr": "دراجة نارية",
      "targetEn": "Motorcycle"
    }
  },
  {
    "id": "mission47",
    "number": 47,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🚆",
      "targetAr": "قطار",
      "targetEn": "Train"
    }
  },
  {
    "id": "mission48",
    "number": 48,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🚌",
      "targetAr": "حافلة",
      "targetEn": "Bus"
    }
  },
  {
    "id": "mission49",
    "number": 49,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🪁",
      "targetAr": "طائرة ورقية",
      "targetEn": "Kite"
    }
  },
  {
    "id": "mission50",
    "number": 50,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🐦",
      "targetAr": "عصفور",
      "targetEn": "Bird"
    }
  },
  {
    "id": "mission51",
    "number": 51,
    "template": {
      "characterId": "lulu",
      "targetEmoji": "🐢",
      "targetAr": "سلحفاة",
      "targetEn": "Turtle"
    }
  }
];
