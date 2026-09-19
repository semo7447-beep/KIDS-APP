import { Zone } from '../types/mission';

export type SpeedTarget = Zone & { id: string; isTarget: boolean };
export type SpeedTemplateItem = { id: string; emoji: string; isTarget: boolean };

export type SpeedTemplate = {
  characterId: string;
  promptAr: string;
  promptEn: string;
  items: SpeedTemplateItem[];
};

export type SpeedMission = {
  id: string;
  number: number;
  image?: ReturnType<typeof require>;
  imageRatio?: number;
  items?: SpeedTarget[];
  startZone?: Zone;
  timeSeconds: number;
  template?: SpeedTemplate;
};

export const SPEED_MISSIONS: SpeedMission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/speed/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    timeSeconds: 10,
    items: [
      { id: 'penguin1', isTarget: true, left: 1.59, top: 53.53, width: 15.94, height: 9.57 },
      { id: 'cat', isTarget: false, left: 18.07, top: 53.53, width: 15.94, height: 9.57 },
      { id: 'elephant', isTarget: false, left: 34.54, top: 53.53, width: 15.94, height: 9.57 },
      { id: 'chick', isTarget: false, left: 51.01, top: 53.53, width: 15.94, height: 9.57 },
      { id: 'car', isTarget: false, left: 67.48, top: 53.53, width: 15.94, height: 9.57 },
      { id: 'penguin2', isTarget: true, left: 83.95, top: 53.53, width: 15.41, height: 9.57 },
    ],
    startZone: { left: 30.82, top: 92.11, width: 39.32, height: 6.58 },
  },
  {
    "id": "mission2",
    "number": 2,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الحيوانات التي تطير",
      "promptEn": "Pick all the animals that fly",
      "items": [
        {
          "id": "dst1_0",
          "emoji": "🐢",
          "isTarget": false
        },
        {
          "id": "dst2_0",
          "emoji": "🐘",
          "isTarget": false
        },
        {
          "id": "dst0_0",
          "emoji": "🐟",
          "isTarget": false
        },
        {
          "id": "tgt1_0",
          "emoji": "🦜",
          "isTarget": true
        },
        {
          "id": "dst3_0",
          "emoji": "🐱",
          "isTarget": false
        },
        {
          "id": "tgt0_0",
          "emoji": "🦉",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission3",
    "number": 3,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الفواكه",
      "promptEn": "Pick all the fruits",
      "items": [
        {
          "id": "dst2_1",
          "emoji": "🔨",
          "isTarget": false
        },
        {
          "id": "tgt0_1",
          "emoji": "🍎",
          "isTarget": true
        },
        {
          "id": "tgt1_1",
          "emoji": "🍓",
          "isTarget": true
        },
        {
          "id": "dst0_1",
          "emoji": "🏀",
          "isTarget": false
        },
        {
          "id": "tgt2_1",
          "emoji": "🍇",
          "isTarget": true
        },
        {
          "id": "dst1_1",
          "emoji": "🚗",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission4",
    "number": 4,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل المركبات",
      "promptEn": "Pick all the vehicles",
      "items": [
        {
          "id": "tgt0_2",
          "emoji": "✈️",
          "isTarget": true
        },
        {
          "id": "dst3_2",
          "emoji": "🌳",
          "isTarget": false
        },
        {
          "id": "tgt1_2",
          "emoji": "🚗",
          "isTarget": true
        },
        {
          "id": "dst0_2",
          "emoji": "✏️",
          "isTarget": false
        },
        {
          "id": "dst2_2",
          "emoji": "🍎",
          "isTarget": false
        },
        {
          "id": "dst1_2",
          "emoji": "🐱",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission5",
    "number": 5,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الأشكال الدائرية",
      "promptEn": "Pick all the round shapes",
      "items": [
        {
          "id": "dst0_3",
          "emoji": "💛",
          "isTarget": false
        },
        {
          "id": "tgt1_3",
          "emoji": "⚽",
          "isTarget": true
        },
        {
          "id": "dst1_3",
          "emoji": "☂️",
          "isTarget": false
        },
        {
          "id": "tgt2_3",
          "emoji": "🌕",
          "isTarget": true
        },
        {
          "id": "tgt0_3",
          "emoji": "☸️",
          "isTarget": true
        },
        {
          "id": "dst2_3",
          "emoji": "⭐",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission6",
    "number": 6,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل حيوانات البحر",
      "promptEn": "Pick all the sea animals",
      "items": [
        {
          "id": "tgt1_4",
          "emoji": "🦈",
          "isTarget": true
        },
        {
          "id": "dst3_4",
          "emoji": "🐒",
          "isTarget": false
        },
        {
          "id": "dst0_4",
          "emoji": "🦁",
          "isTarget": false
        },
        {
          "id": "dst1_4",
          "emoji": "🦒",
          "isTarget": false
        },
        {
          "id": "dst2_4",
          "emoji": "🐘",
          "isTarget": false
        },
        {
          "id": "tgt0_4",
          "emoji": "🐟",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission7",
    "number": 7,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الأشياء الصفراء",
      "promptEn": "Pick all the yellow things",
      "items": [
        {
          "id": "tgt0_5",
          "emoji": "☀️",
          "isTarget": true
        },
        {
          "id": "tgt2_5",
          "emoji": "🍌",
          "isTarget": true
        },
        {
          "id": "dst2_5",
          "emoji": "🌊",
          "isTarget": false
        },
        {
          "id": "tgt1_5",
          "emoji": "⭐",
          "isTarget": true
        },
        {
          "id": "dst0_5",
          "emoji": "🌿",
          "isTarget": false
        },
        {
          "id": "dst1_5",
          "emoji": "🍎",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission8",
    "number": 8,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الحشرات",
      "promptEn": "Pick all the insects",
      "items": [
        {
          "id": "tgt0_6",
          "emoji": "🐞",
          "isTarget": true
        },
        {
          "id": "dst2_6",
          "emoji": "🐱",
          "isTarget": false
        },
        {
          "id": "dst3_6",
          "emoji": "🐶",
          "isTarget": false
        },
        {
          "id": "dst1_6",
          "emoji": "🦆",
          "isTarget": false
        },
        {
          "id": "dst0_6",
          "emoji": "🐔",
          "isTarget": false
        },
        {
          "id": "tgt1_6",
          "emoji": "🦋",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission9",
    "number": 9,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل أدوات المطبخ",
      "promptEn": "Pick all the kitchen tools",
      "items": [
        {
          "id": "tgt2_7",
          "emoji": "🔪",
          "isTarget": true
        },
        {
          "id": "dst1_7",
          "emoji": "🚲",
          "isTarget": false
        },
        {
          "id": "tgt1_7",
          "emoji": "🍽️",
          "isTarget": true
        },
        {
          "id": "tgt0_7",
          "emoji": "🍲",
          "isTarget": true
        },
        {
          "id": "dst0_7",
          "emoji": "🏀",
          "isTarget": false
        },
        {
          "id": "dst2_7",
          "emoji": "✏️",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission10",
    "number": 10,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الطيور",
      "promptEn": "Pick all the birds",
      "items": [
        {
          "id": "dst2_8",
          "emoji": "🦊",
          "isTarget": false
        },
        {
          "id": "dst3_8",
          "emoji": "🐱",
          "isTarget": false
        },
        {
          "id": "dst1_8",
          "emoji": "🐎",
          "isTarget": false
        },
        {
          "id": "dst0_8",
          "emoji": "🐰",
          "isTarget": false
        },
        {
          "id": "tgt0_8",
          "emoji": "🦜",
          "isTarget": true
        },
        {
          "id": "tgt1_8",
          "emoji": "🦆",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission11",
    "number": 11,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الحلويات",
      "promptEn": "Pick all the desserts",
      "items": [
        {
          "id": "tgt1_9",
          "emoji": "🎂",
          "isTarget": true
        },
        {
          "id": "dst0_9",
          "emoji": "🫑",
          "isTarget": false
        },
        {
          "id": "dst2_9",
          "emoji": "🥕",
          "isTarget": false
        },
        {
          "id": "tgt2_9",
          "emoji": "🍬",
          "isTarget": true
        },
        {
          "id": "dst1_9",
          "emoji": "🥒",
          "isTarget": false
        },
        {
          "id": "tgt0_9",
          "emoji": "🍦",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission12",
    "number": 12,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل حيوانات المزرعة",
      "promptEn": "Pick all the farm animals",
      "items": [
        {
          "id": "dst0_10",
          "emoji": "🦁",
          "isTarget": false
        },
        {
          "id": "dst1_10",
          "emoji": "🐯",
          "isTarget": false
        },
        {
          "id": "tgt0_10",
          "emoji": "🐄",
          "isTarget": true
        },
        {
          "id": "dst2_10",
          "emoji": "🐒",
          "isTarget": false
        },
        {
          "id": "tgt1_10",
          "emoji": "🐎",
          "isTarget": true
        },
        {
          "id": "dst3_10",
          "emoji": "🦒",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission13",
    "number": 13,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الأدوات المدرسية",
      "promptEn": "Pick all the school supplies",
      "items": [
        {
          "id": "tgt2_11",
          "emoji": "✏️",
          "isTarget": true
        },
        {
          "id": "dst0_11",
          "emoji": "🥄",
          "isTarget": false
        },
        {
          "id": "dst2_11",
          "emoji": "🔨",
          "isTarget": false
        },
        {
          "id": "dst1_11",
          "emoji": "🏀",
          "isTarget": false
        },
        {
          "id": "tgt0_11",
          "emoji": "📏",
          "isTarget": true
        },
        {
          "id": "tgt1_11",
          "emoji": "🎒",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission14",
    "number": 14,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل وسائل النقل التي تطير",
      "promptEn": "Pick all the vehicles that fly",
      "items": [
        {
          "id": "dst3_12",
          "emoji": "🚗",
          "isTarget": false
        },
        {
          "id": "dst1_12",
          "emoji": "🚲",
          "isTarget": false
        },
        {
          "id": "dst0_12",
          "emoji": "🚌",
          "isTarget": false
        },
        {
          "id": "tgt1_12",
          "emoji": "🪁",
          "isTarget": true
        },
        {
          "id": "tgt0_12",
          "emoji": "✈️",
          "isTarget": true
        },
        {
          "id": "dst2_12",
          "emoji": "🚆",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission15",
    "number": 15,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الفواكه الحمراء",
      "promptEn": "Pick all the red fruits",
      "items": [
        {
          "id": "dst1_13",
          "emoji": "🍍",
          "isTarget": false
        },
        {
          "id": "dst2_13",
          "emoji": "🥝",
          "isTarget": false
        },
        {
          "id": "tgt1_13",
          "emoji": "🍓",
          "isTarget": true
        },
        {
          "id": "tgt0_13",
          "emoji": "🍎",
          "isTarget": true
        },
        {
          "id": "dst0_13",
          "emoji": "🍋",
          "isTarget": false
        },
        {
          "id": "tgt2_13",
          "emoji": "🍒",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission16",
    "number": 16,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الآلات الموسيقية",
      "promptEn": "Pick all the musical instruments",
      "items": [
        {
          "id": "tgt0_14",
          "emoji": "🎻",
          "isTarget": true
        },
        {
          "id": "tgt1_14",
          "emoji": "🎸",
          "isTarget": true
        },
        {
          "id": "dst3_14",
          "emoji": "🥄",
          "isTarget": false
        },
        {
          "id": "dst2_14",
          "emoji": "✂️",
          "isTarget": false
        },
        {
          "id": "dst0_14",
          "emoji": "🔑",
          "isTarget": false
        },
        {
          "id": "dst1_14",
          "emoji": "🔨",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission17",
    "number": 17,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الحيوانات التي تطير",
      "promptEn": "Pick all the animals that fly",
      "items": [
        {
          "id": "dst2_15",
          "emoji": "🐘",
          "isTarget": false
        },
        {
          "id": "tgt2_15",
          "emoji": "🐝",
          "isTarget": true
        },
        {
          "id": "tgt0_15",
          "emoji": "🦋",
          "isTarget": true
        },
        {
          "id": "dst0_15",
          "emoji": "🐱",
          "isTarget": false
        },
        {
          "id": "tgt1_15",
          "emoji": "🦉",
          "isTarget": true
        },
        {
          "id": "dst1_15",
          "emoji": "🐢",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission18",
    "number": 18,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الفواكه",
      "promptEn": "Pick all the fruits",
      "items": [
        {
          "id": "tgt1_16",
          "emoji": "🍇",
          "isTarget": true
        },
        {
          "id": "dst3_16",
          "emoji": "🏀",
          "isTarget": false
        },
        {
          "id": "dst0_16",
          "emoji": "🪑",
          "isTarget": false
        },
        {
          "id": "dst2_16",
          "emoji": "📖",
          "isTarget": false
        },
        {
          "id": "tgt0_16",
          "emoji": "🍌",
          "isTarget": true
        },
        {
          "id": "dst1_16",
          "emoji": "🚗",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission19",
    "number": 19,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل المركبات",
      "promptEn": "Pick all the vehicles",
      "items": [
        {
          "id": "tgt2_17",
          "emoji": "🚌",
          "isTarget": true
        },
        {
          "id": "tgt0_17",
          "emoji": "🚗",
          "isTarget": true
        },
        {
          "id": "dst0_17",
          "emoji": "🍎",
          "isTarget": false
        },
        {
          "id": "tgt1_17",
          "emoji": "✈️",
          "isTarget": true
        },
        {
          "id": "dst2_17",
          "emoji": "🌳",
          "isTarget": false
        },
        {
          "id": "dst1_17",
          "emoji": "✏️",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission20",
    "number": 20,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الأشكال الدائرية",
      "promptEn": "Pick all the round shapes",
      "items": [
        {
          "id": "dst1_18",
          "emoji": "🔺",
          "isTarget": false
        },
        {
          "id": "dst0_18",
          "emoji": "💛",
          "isTarget": false
        },
        {
          "id": "dst3_18",
          "emoji": "🔷",
          "isTarget": false
        },
        {
          "id": "dst2_18",
          "emoji": "☂️",
          "isTarget": false
        },
        {
          "id": "tgt1_18",
          "emoji": "☸️",
          "isTarget": true
        },
        {
          "id": "tgt0_18",
          "emoji": "🌕",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission21",
    "number": 21,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل حيوانات البحر",
      "promptEn": "Pick all the sea animals",
      "items": [
        {
          "id": "tgt1_19",
          "emoji": "🐋",
          "isTarget": true
        },
        {
          "id": "tgt0_19",
          "emoji": "🦈",
          "isTarget": true
        },
        {
          "id": "dst0_19",
          "emoji": "🐻",
          "isTarget": false
        },
        {
          "id": "dst2_19",
          "emoji": "🦁",
          "isTarget": false
        },
        {
          "id": "tgt2_19",
          "emoji": "🐙",
          "isTarget": true
        },
        {
          "id": "dst1_19",
          "emoji": "🦒",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission22",
    "number": 22,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الأشياء الصفراء",
      "promptEn": "Pick all the yellow things",
      "items": [
        {
          "id": "dst3_20",
          "emoji": "🍎",
          "isTarget": false
        },
        {
          "id": "dst0_20",
          "emoji": "🌊",
          "isTarget": false
        },
        {
          "id": "dst1_20",
          "emoji": "🌿",
          "isTarget": false
        },
        {
          "id": "tgt0_20",
          "emoji": "🍋",
          "isTarget": true
        },
        {
          "id": "dst2_20",
          "emoji": "🫐",
          "isTarget": false
        },
        {
          "id": "tgt1_20",
          "emoji": "☀️",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission23",
    "number": 23,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الحشرات",
      "promptEn": "Pick all the insects",
      "items": [
        {
          "id": "tgt2_21",
          "emoji": "🦋",
          "isTarget": true
        },
        {
          "id": "dst0_21",
          "emoji": "🦆",
          "isTarget": false
        },
        {
          "id": "tgt1_21",
          "emoji": "🐝",
          "isTarget": true
        },
        {
          "id": "dst1_21",
          "emoji": "🐱",
          "isTarget": false
        },
        {
          "id": "dst2_21",
          "emoji": "🐰",
          "isTarget": false
        },
        {
          "id": "tgt0_21",
          "emoji": "🐜",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission24",
    "number": 24,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل أدوات المطبخ",
      "promptEn": "Pick all the kitchen tools",
      "items": [
        {
          "id": "dst2_22",
          "emoji": "🚲",
          "isTarget": false
        },
        {
          "id": "dst0_22",
          "emoji": "🔨",
          "isTarget": false
        },
        {
          "id": "dst3_22",
          "emoji": "✏️",
          "isTarget": false
        },
        {
          "id": "tgt0_22",
          "emoji": "🍲",
          "isTarget": true
        },
        {
          "id": "tgt1_22",
          "emoji": "🍽️",
          "isTarget": true
        },
        {
          "id": "dst1_22",
          "emoji": "🏀",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission25",
    "number": 25,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الطيور",
      "promptEn": "Pick all the birds",
      "items": [
        {
          "id": "dst2_23",
          "emoji": "🐰",
          "isTarget": false
        },
        {
          "id": "tgt1_23",
          "emoji": "🦆",
          "isTarget": true
        },
        {
          "id": "tgt2_23",
          "emoji": "🦅",
          "isTarget": true
        },
        {
          "id": "dst1_23",
          "emoji": "🐟",
          "isTarget": false
        },
        {
          "id": "dst0_23",
          "emoji": "🐱",
          "isTarget": false
        },
        {
          "id": "tgt0_23",
          "emoji": "🦜",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission26",
    "number": 26,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الحلويات",
      "promptEn": "Pick all the desserts",
      "items": [
        {
          "id": "dst0_24",
          "emoji": "🥒",
          "isTarget": false
        },
        {
          "id": "tgt0_24",
          "emoji": "🍬",
          "isTarget": true
        },
        {
          "id": "dst3_24",
          "emoji": "🍅",
          "isTarget": false
        },
        {
          "id": "dst2_24",
          "emoji": "🥕",
          "isTarget": false
        },
        {
          "id": "dst1_24",
          "emoji": "🫑",
          "isTarget": false
        },
        {
          "id": "tgt1_24",
          "emoji": "🍦",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission27",
    "number": 27,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل حيوانات المزرعة",
      "promptEn": "Pick all the farm animals",
      "items": [
        {
          "id": "tgt0_25",
          "emoji": "🐎",
          "isTarget": true
        },
        {
          "id": "tgt1_25",
          "emoji": "🐄",
          "isTarget": true
        },
        {
          "id": "dst1_25",
          "emoji": "🐒",
          "isTarget": false
        },
        {
          "id": "dst2_25",
          "emoji": "🐯",
          "isTarget": false
        },
        {
          "id": "dst0_25",
          "emoji": "🦒",
          "isTarget": false
        },
        {
          "id": "tgt2_25",
          "emoji": "🐔",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission28",
    "number": 28,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الأدوات المدرسية",
      "promptEn": "Pick all the school supplies",
      "items": [
        {
          "id": "tgt1_26",
          "emoji": "📏",
          "isTarget": true
        },
        {
          "id": "dst0_26",
          "emoji": "🥄",
          "isTarget": false
        },
        {
          "id": "dst2_26",
          "emoji": "🔨",
          "isTarget": false
        },
        {
          "id": "dst1_26",
          "emoji": "🍲",
          "isTarget": false
        },
        {
          "id": "dst3_26",
          "emoji": "🏀",
          "isTarget": false
        },
        {
          "id": "tgt0_26",
          "emoji": "✏️",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission29",
    "number": 29,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل وسائل النقل التي تطير",
      "promptEn": "Pick all the vehicles that fly",
      "items": [
        {
          "id": "dst2_27",
          "emoji": "⛵",
          "isTarget": false
        },
        {
          "id": "dst1_27",
          "emoji": "🚗",
          "isTarget": false
        },
        {
          "id": "tgt0_27",
          "emoji": "🎈",
          "isTarget": true
        },
        {
          "id": "tgt2_27",
          "emoji": "🚀",
          "isTarget": true
        },
        {
          "id": "dst0_27",
          "emoji": "🚌",
          "isTarget": false
        },
        {
          "id": "tgt1_27",
          "emoji": "✈️",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission30",
    "number": 30,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الفواكه الحمراء",
      "promptEn": "Pick all the red fruits",
      "items": [
        {
          "id": "tgt1_28",
          "emoji": "🍉",
          "isTarget": true
        },
        {
          "id": "tgt0_28",
          "emoji": "🍒",
          "isTarget": true
        },
        {
          "id": "dst0_28",
          "emoji": "🍍",
          "isTarget": false
        },
        {
          "id": "dst1_28",
          "emoji": "🍌",
          "isTarget": false
        },
        {
          "id": "dst3_28",
          "emoji": "🍋",
          "isTarget": false
        },
        {
          "id": "dst2_28",
          "emoji": "🍇",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission31",
    "number": 31,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الآلات الموسيقية",
      "promptEn": "Pick all the musical instruments",
      "items": [
        {
          "id": "dst0_29",
          "emoji": "📏",
          "isTarget": false
        },
        {
          "id": "dst1_29",
          "emoji": "✂️",
          "isTarget": false
        },
        {
          "id": "tgt0_29",
          "emoji": "🎸",
          "isTarget": true
        },
        {
          "id": "tgt2_29",
          "emoji": "🎻",
          "isTarget": true
        },
        {
          "id": "tgt1_29",
          "emoji": "🥁",
          "isTarget": true
        },
        {
          "id": "dst2_29",
          "emoji": "🥄",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission32",
    "number": 32,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الحيوانات التي تطير",
      "promptEn": "Pick all the animals that fly",
      "items": [
        {
          "id": "tgt0_30",
          "emoji": "🦅",
          "isTarget": true
        },
        {
          "id": "tgt1_30",
          "emoji": "🐝",
          "isTarget": true
        },
        {
          "id": "dst2_30",
          "emoji": "🐘",
          "isTarget": false
        },
        {
          "id": "dst0_30",
          "emoji": "🐎",
          "isTarget": false
        },
        {
          "id": "dst1_30",
          "emoji": "🐢",
          "isTarget": false
        },
        {
          "id": "dst3_30",
          "emoji": "🐟",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission33",
    "number": 33,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الفواكه",
      "promptEn": "Pick all the fruits",
      "items": [
        {
          "id": "dst2_31",
          "emoji": "🚗",
          "isTarget": false
        },
        {
          "id": "dst1_31",
          "emoji": "🪑",
          "isTarget": false
        },
        {
          "id": "tgt2_31",
          "emoji": "🍌",
          "isTarget": true
        },
        {
          "id": "tgt0_31",
          "emoji": "🍎",
          "isTarget": true
        },
        {
          "id": "dst0_31",
          "emoji": "📖",
          "isTarget": false
        },
        {
          "id": "tgt1_31",
          "emoji": "🍓",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission34",
    "number": 34,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل المركبات",
      "promptEn": "Pick all the vehicles",
      "items": [
        {
          "id": "dst0_32",
          "emoji": "🍎",
          "isTarget": false
        },
        {
          "id": "dst2_32",
          "emoji": "✏️",
          "isTarget": false
        },
        {
          "id": "dst1_32",
          "emoji": "🌳",
          "isTarget": false
        },
        {
          "id": "tgt1_32",
          "emoji": "🚗",
          "isTarget": true
        },
        {
          "id": "tgt0_32",
          "emoji": "🚆",
          "isTarget": true
        },
        {
          "id": "dst3_32",
          "emoji": "🏀",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission35",
    "number": 35,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الأشكال الدائرية",
      "promptEn": "Pick all the round shapes",
      "items": [
        {
          "id": "dst0_33",
          "emoji": "🔺",
          "isTarget": false
        },
        {
          "id": "dst1_33",
          "emoji": "☂️",
          "isTarget": false
        },
        {
          "id": "tgt1_33",
          "emoji": "🕐",
          "isTarget": true
        },
        {
          "id": "dst2_33",
          "emoji": "💛",
          "isTarget": false
        },
        {
          "id": "tgt2_33",
          "emoji": "🌕",
          "isTarget": true
        },
        {
          "id": "tgt0_33",
          "emoji": "☸️",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission36",
    "number": 36,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل حيوانات البحر",
      "promptEn": "Pick all the sea animals",
      "items": [
        {
          "id": "dst3_34",
          "emoji": "🦒",
          "isTarget": false
        },
        {
          "id": "dst1_34",
          "emoji": "🐻",
          "isTarget": false
        },
        {
          "id": "tgt0_34",
          "emoji": "🦈",
          "isTarget": true
        },
        {
          "id": "tgt1_34",
          "emoji": "🐋",
          "isTarget": true
        },
        {
          "id": "dst0_34",
          "emoji": "🦁",
          "isTarget": false
        },
        {
          "id": "dst2_34",
          "emoji": "🐒",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission37",
    "number": 37,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الأشياء الصفراء",
      "promptEn": "Pick all the yellow things",
      "items": [
        {
          "id": "tgt1_35",
          "emoji": "☀️",
          "isTarget": true
        },
        {
          "id": "dst2_35",
          "emoji": "❤️",
          "isTarget": false
        },
        {
          "id": "tgt0_35",
          "emoji": "🍌",
          "isTarget": true
        },
        {
          "id": "tgt2_35",
          "emoji": "🍋",
          "isTarget": true
        },
        {
          "id": "dst1_35",
          "emoji": "🌿",
          "isTarget": false
        },
        {
          "id": "dst0_35",
          "emoji": "🍎",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission38",
    "number": 38,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الحشرات",
      "promptEn": "Pick all the insects",
      "items": [
        {
          "id": "dst1_36",
          "emoji": "🐔",
          "isTarget": false
        },
        {
          "id": "tgt1_36",
          "emoji": "🦋",
          "isTarget": true
        },
        {
          "id": "dst0_36",
          "emoji": "🦆",
          "isTarget": false
        },
        {
          "id": "dst2_36",
          "emoji": "🐰",
          "isTarget": false
        },
        {
          "id": "tgt0_36",
          "emoji": "🐝",
          "isTarget": true
        },
        {
          "id": "dst3_36",
          "emoji": "🐶",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission39",
    "number": 39,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل أدوات المطبخ",
      "promptEn": "Pick all the kitchen tools",
      "items": [
        {
          "id": "dst0_37",
          "emoji": "📖",
          "isTarget": false
        },
        {
          "id": "dst1_37",
          "emoji": "🏀",
          "isTarget": false
        },
        {
          "id": "tgt0_37",
          "emoji": "🥄",
          "isTarget": true
        },
        {
          "id": "tgt2_37",
          "emoji": "🍲",
          "isTarget": true
        },
        {
          "id": "tgt1_37",
          "emoji": "🍽️",
          "isTarget": true
        },
        {
          "id": "dst2_37",
          "emoji": "🚲",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission40",
    "number": 40,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الطيور",
      "promptEn": "Pick all the birds",
      "items": [
        {
          "id": "dst3_38",
          "emoji": "🐟",
          "isTarget": false
        },
        {
          "id": "tgt0_38",
          "emoji": "🐧",
          "isTarget": true
        },
        {
          "id": "dst0_38",
          "emoji": "🐱",
          "isTarget": false
        },
        {
          "id": "dst1_38",
          "emoji": "🦊",
          "isTarget": false
        },
        {
          "id": "tgt1_38",
          "emoji": "🦆",
          "isTarget": true
        },
        {
          "id": "dst2_38",
          "emoji": "🐰",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission41",
    "number": 41,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الحلويات",
      "promptEn": "Pick all the desserts",
      "items": [
        {
          "id": "tgt2_39",
          "emoji": "🎂",
          "isTarget": true
        },
        {
          "id": "dst0_39",
          "emoji": "🫑",
          "isTarget": false
        },
        {
          "id": "tgt1_39",
          "emoji": "🍬",
          "isTarget": true
        },
        {
          "id": "tgt0_39",
          "emoji": "🍦",
          "isTarget": true
        },
        {
          "id": "dst2_39",
          "emoji": "🥦",
          "isTarget": false
        },
        {
          "id": "dst1_39",
          "emoji": "🥒",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission42",
    "number": 42,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل حيوانات المزرعة",
      "promptEn": "Pick all the farm animals",
      "items": [
        {
          "id": "tgt1_40",
          "emoji": "🐑",
          "isTarget": true
        },
        {
          "id": "dst2_40",
          "emoji": "🐒",
          "isTarget": false
        },
        {
          "id": "dst3_40",
          "emoji": "🦒",
          "isTarget": false
        },
        {
          "id": "dst0_40",
          "emoji": "🐯",
          "isTarget": false
        },
        {
          "id": "dst1_40",
          "emoji": "🐘",
          "isTarget": false
        },
        {
          "id": "tgt0_40",
          "emoji": "🐎",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission43",
    "number": 43,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الأدوات المدرسية",
      "promptEn": "Pick all the school supplies",
      "items": [
        {
          "id": "dst0_41",
          "emoji": "🥄",
          "isTarget": false
        },
        {
          "id": "dst2_41",
          "emoji": "🏀",
          "isTarget": false
        },
        {
          "id": "tgt1_41",
          "emoji": "✏️",
          "isTarget": true
        },
        {
          "id": "tgt0_41",
          "emoji": "📏",
          "isTarget": true
        },
        {
          "id": "dst1_41",
          "emoji": "🍲",
          "isTarget": false
        },
        {
          "id": "tgt2_41",
          "emoji": "📖",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission44",
    "number": 44,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل وسائل النقل التي تطير",
      "promptEn": "Pick all the vehicles that fly",
      "items": [
        {
          "id": "dst0_42",
          "emoji": "🚌",
          "isTarget": false
        },
        {
          "id": "dst2_42",
          "emoji": "⛵",
          "isTarget": false
        },
        {
          "id": "dst1_42",
          "emoji": "🚗",
          "isTarget": false
        },
        {
          "id": "tgt1_42",
          "emoji": "🪁",
          "isTarget": true
        },
        {
          "id": "dst3_42",
          "emoji": "🚲",
          "isTarget": false
        },
        {
          "id": "tgt0_42",
          "emoji": "🎈",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission45",
    "number": 45,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الفواكه الحمراء",
      "promptEn": "Pick all the red fruits",
      "items": [
        {
          "id": "dst2_43",
          "emoji": "🥝",
          "isTarget": false
        },
        {
          "id": "tgt1_43",
          "emoji": "🍒",
          "isTarget": true
        },
        {
          "id": "tgt0_43",
          "emoji": "🍉",
          "isTarget": true
        },
        {
          "id": "dst1_43",
          "emoji": "🍍",
          "isTarget": false
        },
        {
          "id": "tgt2_43",
          "emoji": "🍓",
          "isTarget": true
        },
        {
          "id": "dst0_43",
          "emoji": "🍇",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission46",
    "number": 46,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الآلات الموسيقية",
      "promptEn": "Pick all the musical instruments",
      "items": [
        {
          "id": "tgt1_44",
          "emoji": "🥁",
          "isTarget": true
        },
        {
          "id": "tgt0_44",
          "emoji": "🎸",
          "isTarget": true
        },
        {
          "id": "dst0_44",
          "emoji": "🔨",
          "isTarget": false
        },
        {
          "id": "dst1_44",
          "emoji": "✂️",
          "isTarget": false
        },
        {
          "id": "dst3_44",
          "emoji": "🔑",
          "isTarget": false
        },
        {
          "id": "dst2_44",
          "emoji": "📏",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission47",
    "number": 47,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الحيوانات التي تطير",
      "promptEn": "Pick all the animals that fly",
      "items": [
        {
          "id": "dst2_45",
          "emoji": "🐟",
          "isTarget": false
        },
        {
          "id": "tgt1_45",
          "emoji": "🦋",
          "isTarget": true
        },
        {
          "id": "tgt0_45",
          "emoji": "🦅",
          "isTarget": true
        },
        {
          "id": "dst0_45",
          "emoji": "🐢",
          "isTarget": false
        },
        {
          "id": "dst1_45",
          "emoji": "🐎",
          "isTarget": false
        },
        {
          "id": "tgt2_45",
          "emoji": "🦜",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission48",
    "number": 48,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الفواكه",
      "promptEn": "Pick all the fruits",
      "items": [
        {
          "id": "dst1_46",
          "emoji": "🚗",
          "isTarget": false
        },
        {
          "id": "dst0_46",
          "emoji": "🔨",
          "isTarget": false
        },
        {
          "id": "dst3_46",
          "emoji": "🏀",
          "isTarget": false
        },
        {
          "id": "tgt0_46",
          "emoji": "🍓",
          "isTarget": true
        },
        {
          "id": "dst2_46",
          "emoji": "🪑",
          "isTarget": false
        },
        {
          "id": "tgt1_46",
          "emoji": "🍇",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": "mission49",
    "number": 49,
    "timeSeconds": 12,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل المركبات",
      "promptEn": "Pick all the vehicles",
      "items": [
        {
          "id": "tgt2_47",
          "emoji": "🚆",
          "isTarget": true
        },
        {
          "id": "tgt1_47",
          "emoji": "🚗",
          "isTarget": true
        },
        {
          "id": "tgt0_47",
          "emoji": "🚌",
          "isTarget": true
        },
        {
          "id": "dst1_47",
          "emoji": "🏀",
          "isTarget": false
        },
        {
          "id": "dst0_47",
          "emoji": "🌳",
          "isTarget": false
        },
        {
          "id": "dst2_47",
          "emoji": "🐱",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission50",
    "number": 50,
    "timeSeconds": 8,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل الأشكال الدائرية",
      "promptEn": "Pick all the round shapes",
      "items": [
        {
          "id": "tgt1_48",
          "emoji": "🌕",
          "isTarget": true
        },
        {
          "id": "dst1_48",
          "emoji": "🔺",
          "isTarget": false
        },
        {
          "id": "dst0_48",
          "emoji": "⭐",
          "isTarget": false
        },
        {
          "id": "dst2_48",
          "emoji": "💛",
          "isTarget": false
        },
        {
          "id": "tgt0_48",
          "emoji": "☸️",
          "isTarget": true
        },
        {
          "id": "dst3_48",
          "emoji": "🔷",
          "isTarget": false
        }
      ]
    }
  },
  {
    "id": "mission51",
    "number": 51,
    "timeSeconds": 10,
    "template": {
      "characterId": "biko",
      "promptAr": "اختر كل حيوانات البحر",
      "promptEn": "Pick all the sea animals",
      "items": [
        {
          "id": "tgt0_49",
          "emoji": "🐋",
          "isTarget": true
        },
        {
          "id": "tgt1_49",
          "emoji": "🐟",
          "isTarget": true
        },
        {
          "id": "dst0_49",
          "emoji": "🐻",
          "isTarget": false
        },
        {
          "id": "dst1_49",
          "emoji": "🐘",
          "isTarget": false
        },
        {
          "id": "dst2_49",
          "emoji": "🦁",
          "isTarget": false
        },
        {
          "id": "tgt2_49",
          "emoji": "🐙",
          "isTarget": true
        }
      ]
    }
  }
];
