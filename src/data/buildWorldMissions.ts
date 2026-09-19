import { Mission } from '../types/mission';

export const BUILDWORLD_MISSIONS: Mission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/buildworld/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    options: [
      { id: 'house', correct: true, left: 14.88, top: 77.15, width: 15.94, height: 8.07 },
      { id: 'shop', correct: true, left: 31.88, top: 77.15, width: 13.28, height: 8.07 },
      { id: 'garden', correct: true, left: 46.23, top: 77.15, width: 13.28, height: 8.07 },
    ],
    confirmZone: { left: 28.69, top: 49.64, width: 41.45, height: 14.35 },
    previousZone: { left: 1.59, top: 93.01, width: 26.03, height: 5.98 },
  },
  {
    "id": "mission2",
    "number": 2,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الصحراء؟",
      "promptEn": "Which item belongs in the Desert world?",
      "choices": [
        {
          "id": "wrong1_0",
          "emoji": "🦭",
          "labelAr": "فقمة",
          "labelEn": "Seal",
          "correct": false
        },
        {
          "id": "wrong0_0",
          "emoji": "🕳️",
          "labelAr": "كهف",
          "labelEn": "Cave",
          "correct": false
        },
        {
          "id": "correct_0",
          "emoji": "🐫",
          "labelAr": "جمل",
          "labelEn": "Camel",
          "correct": true
        },
        {
          "id": "wrong2_0",
          "emoji": "🦁",
          "labelAr": "أسد",
          "labelEn": "Lion",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission3",
    "number": 3,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الغابة؟",
      "promptEn": "Which item belongs in the Forest world?",
      "choices": [
        {
          "id": "wrong2_1",
          "emoji": "🪐",
          "labelAr": "كوكب",
          "labelEn": "Planet",
          "correct": false
        },
        {
          "id": "wrong0_1",
          "emoji": "⛰️",
          "labelAr": "قمة جبل",
          "labelEn": "Mountain peak",
          "correct": false
        },
        {
          "id": "wrong1_1",
          "emoji": "🧊",
          "labelAr": "كتلة جليدية",
          "labelEn": "Ice block",
          "correct": false
        },
        {
          "id": "correct_1",
          "emoji": "🌳",
          "labelAr": "شجرة كبيرة",
          "labelEn": "Big tree",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission4",
    "number": 4,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم البحر؟",
      "promptEn": "Which item belongs in the Sea world?",
      "choices": [
        {
          "id": "wrong2_2",
          "emoji": "🌸",
          "labelAr": "زهرة",
          "labelEn": "Flower",
          "correct": false
        },
        {
          "id": "correct_2",
          "emoji": "🐟",
          "labelAr": "سمكة ملونة",
          "labelEn": "Colorful fish",
          "correct": true
        },
        {
          "id": "wrong0_2",
          "emoji": "⛰️",
          "labelAr": "قمة جبل",
          "labelEn": "Mountain peak",
          "correct": false
        },
        {
          "id": "wrong1_2",
          "emoji": "🪑",
          "labelAr": "مقعد حديقة",
          "labelEn": "Garden bench",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission5",
    "number": 5,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم القطب متجمد؟",
      "promptEn": "Which item belongs in the Arctic world?",
      "choices": [
        {
          "id": "correct_3",
          "emoji": "🐧",
          "labelAr": "بطريق",
          "labelEn": "Penguin",
          "correct": true
        },
        {
          "id": "wrong1_3",
          "emoji": "🦁",
          "labelAr": "أسد",
          "labelEn": "Lion",
          "correct": false
        },
        {
          "id": "wrong2_3",
          "emoji": "🚌",
          "labelAr": "حافلة",
          "labelEn": "Bus",
          "correct": false
        },
        {
          "id": "wrong0_3",
          "emoji": "⛲",
          "labelAr": "نافورة ماء",
          "labelEn": "Fountain",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission6",
    "number": 6,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الفضاء؟",
      "promptEn": "Which item belongs in the Space world?",
      "choices": [
        {
          "id": "wrong1_4",
          "emoji": "🐒",
          "labelAr": "قرد",
          "labelEn": "Monkey",
          "correct": false
        },
        {
          "id": "wrong0_4",
          "emoji": "🏙️",
          "labelAr": "ناطحة سحاب",
          "labelEn": "Skyscraper",
          "correct": false
        },
        {
          "id": "wrong2_4",
          "emoji": "🐟",
          "labelAr": "سمكة ملونة",
          "labelEn": "Colorful fish",
          "correct": false
        },
        {
          "id": "correct_4",
          "emoji": "🚀",
          "labelAr": "صاروخ",
          "labelEn": "Rocket",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission7",
    "number": 7,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم المزرعة؟",
      "promptEn": "Which item belongs in the Farm world?",
      "choices": [
        {
          "id": "correct_5",
          "emoji": "🐄",
          "labelAr": "بقرة",
          "labelEn": "Cow",
          "correct": true
        },
        {
          "id": "wrong0_5",
          "emoji": "🪣",
          "labelAr": "دلو ماء",
          "labelEn": "Water bucket",
          "correct": false
        },
        {
          "id": "wrong1_5",
          "emoji": "⛰️",
          "labelAr": "قمة جبل",
          "labelEn": "Mountain peak",
          "correct": false
        },
        {
          "id": "wrong2_5",
          "emoji": "🐙",
          "labelAr": "أخطبوط",
          "labelEn": "Octopus",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission8",
    "number": 8,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم المدينة؟",
      "promptEn": "Which item belongs in the City world?",
      "choices": [
        {
          "id": "wrong0_6",
          "emoji": "🧊",
          "labelAr": "كتلة جليدية",
          "labelEn": "Ice block",
          "correct": false
        },
        {
          "id": "wrong2_6",
          "emoji": "🐚",
          "labelAr": "صدفة",
          "labelEn": "Seashell",
          "correct": false
        },
        {
          "id": "wrong1_6",
          "emoji": "⛰️",
          "labelAr": "قمة جبل",
          "labelEn": "Mountain peak",
          "correct": false
        },
        {
          "id": "correct_6",
          "emoji": "🏙️",
          "labelAr": "ناطحة سحاب",
          "labelEn": "Skyscraper",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission9",
    "number": 9,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الجبل؟",
      "promptEn": "Which item belongs in the Mountain world?",
      "choices": [
        {
          "id": "correct_7",
          "emoji": "⛰️",
          "labelAr": "قمة جبل",
          "labelEn": "Mountain peak",
          "correct": true
        },
        {
          "id": "wrong0_7",
          "emoji": "🌵",
          "labelAr": "صبار",
          "labelEn": "Cactus",
          "correct": false
        },
        {
          "id": "wrong1_7",
          "emoji": "🌴",
          "labelAr": "واحة نخيل",
          "labelEn": "Palm oasis",
          "correct": false
        },
        {
          "id": "wrong2_7",
          "emoji": "🚗",
          "labelAr": "سيارة",
          "labelEn": "Car",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission10",
    "number": 10,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الحديقة؟",
      "promptEn": "Which item belongs in the Garden world?",
      "choices": [
        {
          "id": "correct_8",
          "emoji": "🌸",
          "labelAr": "زهرة",
          "labelEn": "Flower",
          "correct": true
        },
        {
          "id": "wrong2_8",
          "emoji": "⭐",
          "labelAr": "نجمة لامعة",
          "labelEn": "Shining star",
          "correct": false
        },
        {
          "id": "wrong0_8",
          "emoji": "🍄",
          "labelAr": "فطر",
          "labelEn": "Mushroom",
          "correct": false
        },
        {
          "id": "wrong1_8",
          "emoji": "🪐",
          "labelAr": "كوكب",
          "labelEn": "Planet",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission11",
    "number": 11,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم القرية؟",
      "promptEn": "Which item belongs in the Village world?",
      "choices": [
        {
          "id": "correct_9",
          "emoji": "🏡",
          "labelAr": "كوخ صغير",
          "labelEn": "Small hut",
          "correct": true
        },
        {
          "id": "wrong2_9",
          "emoji": "🌴",
          "labelAr": "واحة نخيل",
          "labelEn": "Palm oasis",
          "correct": false
        },
        {
          "id": "wrong1_9",
          "emoji": "🪐",
          "labelAr": "كوكب",
          "labelEn": "Planet",
          "correct": false
        },
        {
          "id": "wrong0_9",
          "emoji": "🏜️",
          "labelAr": "كثيب رملي",
          "labelEn": "Sand dune",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission12",
    "number": 12,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الصحراء؟",
      "promptEn": "Which item belongs in the Desert world?",
      "choices": [
        {
          "id": "wrong2_10",
          "emoji": "🏡",
          "labelAr": "بيت مزرعة",
          "labelEn": "Farmhouse",
          "correct": false
        },
        {
          "id": "wrong1_10",
          "emoji": "🏘️",
          "labelAr": "بيت ريفي",
          "labelEn": "Village house",
          "correct": false
        },
        {
          "id": "wrong0_10",
          "emoji": "⛲",
          "labelAr": "نافورة ماء",
          "labelEn": "Fountain",
          "correct": false
        },
        {
          "id": "correct_10",
          "emoji": "🌵",
          "labelAr": "صبار",
          "labelEn": "Cactus",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission13",
    "number": 13,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الغابة؟",
      "promptEn": "Which item belongs in the Forest world?",
      "choices": [
        {
          "id": "correct_11",
          "emoji": "🦁",
          "labelAr": "أسد",
          "labelEn": "Lion",
          "correct": true
        },
        {
          "id": "wrong1_11",
          "emoji": "🚀",
          "labelAr": "صاروخ",
          "labelEn": "Rocket",
          "correct": false
        },
        {
          "id": "wrong0_11",
          "emoji": "🐫",
          "labelAr": "جمل",
          "labelEn": "Camel",
          "correct": false
        },
        {
          "id": "wrong2_11",
          "emoji": "🐄",
          "labelAr": "بقرة",
          "labelEn": "Cow",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission14",
    "number": 14,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم البحر؟",
      "promptEn": "Which item belongs in the Sea world?",
      "choices": [
        {
          "id": "wrong1_12",
          "emoji": "🐧",
          "labelAr": "بطريق",
          "labelEn": "Penguin",
          "correct": false
        },
        {
          "id": "correct_12",
          "emoji": "⛵",
          "labelAr": "سفينة شراعية",
          "labelEn": "Sailboat",
          "correct": true
        },
        {
          "id": "wrong2_12",
          "emoji": "🌳",
          "labelAr": "شجرة كبيرة",
          "labelEn": "Big tree",
          "correct": false
        },
        {
          "id": "wrong0_12",
          "emoji": "🌸",
          "labelAr": "زهرة",
          "labelEn": "Flower",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission15",
    "number": 15,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم القطب متجمد؟",
      "promptEn": "Which item belongs in the Arctic world?",
      "choices": [
        {
          "id": "wrong2_13",
          "emoji": "🐚",
          "labelAr": "صدفة",
          "labelEn": "Seashell",
          "correct": false
        },
        {
          "id": "wrong1_13",
          "emoji": "🌴",
          "labelAr": "واحة نخيل",
          "labelEn": "Palm oasis",
          "correct": false
        },
        {
          "id": "correct_13",
          "emoji": "🐻‍❄️",
          "labelAr": "دب قطبي",
          "labelEn": "Polar bear",
          "correct": true
        },
        {
          "id": "wrong0_13",
          "emoji": "🦁",
          "labelAr": "أسد",
          "labelEn": "Lion",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission16",
    "number": 16,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الفضاء؟",
      "promptEn": "Which item belongs in the Space world?",
      "choices": [
        {
          "id": "wrong0_14",
          "emoji": "🏡",
          "labelAr": "كوخ صغير",
          "labelEn": "Small hut",
          "correct": false
        },
        {
          "id": "wrong1_14",
          "emoji": "🐻‍❄️",
          "labelAr": "دب قطبي",
          "labelEn": "Polar bear",
          "correct": false
        },
        {
          "id": "wrong2_14",
          "emoji": "🦅",
          "labelAr": "نسر",
          "labelEn": "Eagle",
          "correct": false
        },
        {
          "id": "correct_14",
          "emoji": "🪐",
          "labelAr": "كوكب",
          "labelEn": "Planet",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission17",
    "number": 17,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم المزرعة؟",
      "promptEn": "Which item belongs in the Farm world?",
      "choices": [
        {
          "id": "correct_15",
          "emoji": "🚜",
          "labelAr": "جرار",
          "labelEn": "Tractor",
          "correct": true
        },
        {
          "id": "wrong0_15",
          "emoji": "🐧",
          "labelAr": "بطريق",
          "labelEn": "Penguin",
          "correct": false
        },
        {
          "id": "wrong2_15",
          "emoji": "🧊",
          "labelAr": "كتلة جليدية",
          "labelEn": "Ice block",
          "correct": false
        },
        {
          "id": "wrong1_15",
          "emoji": "🚦",
          "labelAr": "إشارة مرور",
          "labelEn": "Traffic light",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission18",
    "number": 18,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم المدينة؟",
      "promptEn": "Which item belongs in the City world?",
      "choices": [
        {
          "id": "wrong0_16",
          "emoji": "🪐",
          "labelAr": "كوكب",
          "labelEn": "Planet",
          "correct": false
        },
        {
          "id": "wrong1_16",
          "emoji": "🦁",
          "labelAr": "أسد",
          "labelEn": "Lion",
          "correct": false
        },
        {
          "id": "correct_16",
          "emoji": "🚗",
          "labelAr": "سيارة",
          "labelEn": "Car",
          "correct": true
        },
        {
          "id": "wrong2_16",
          "emoji": "⛲",
          "labelAr": "نافورة ماء",
          "labelEn": "Fountain",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission19",
    "number": 19,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الجبل؟",
      "promptEn": "Which item belongs in the Mountain world?",
      "choices": [
        {
          "id": "wrong2_17",
          "emoji": "🐔",
          "labelAr": "دجاجة",
          "labelEn": "Chicken",
          "correct": false
        },
        {
          "id": "correct_17",
          "emoji": "🧗",
          "labelAr": "متسلق جبال",
          "labelEn": "Climber",
          "correct": true
        },
        {
          "id": "wrong0_17",
          "emoji": "🚗",
          "labelAr": "سيارة",
          "labelEn": "Car",
          "correct": false
        },
        {
          "id": "wrong1_17",
          "emoji": "⛲",
          "labelAr": "نافورة ماء",
          "labelEn": "Fountain",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission20",
    "number": 20,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الحديقة؟",
      "promptEn": "Which item belongs in the Garden world?",
      "choices": [
        {
          "id": "wrong1_18",
          "emoji": "🧗",
          "labelAr": "متسلق جبال",
          "labelEn": "Climber",
          "correct": false
        },
        {
          "id": "wrong0_18",
          "emoji": "🦅",
          "labelAr": "نسر",
          "labelEn": "Eagle",
          "correct": false
        },
        {
          "id": "correct_18",
          "emoji": "🦋",
          "labelAr": "فراشة",
          "labelEn": "Butterfly",
          "correct": true
        },
        {
          "id": "wrong2_18",
          "emoji": "🐫",
          "labelAr": "جمل",
          "labelEn": "Camel",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission21",
    "number": 21,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم القرية؟",
      "promptEn": "Which item belongs in the Village world?",
      "choices": [
        {
          "id": "correct_19",
          "emoji": "👨‍🌾",
          "labelAr": "فلاح",
          "labelEn": "Farmer",
          "correct": true
        },
        {
          "id": "wrong0_19",
          "emoji": "🦁",
          "labelAr": "أسد",
          "labelEn": "Lion",
          "correct": false
        },
        {
          "id": "wrong2_19",
          "emoji": "🏜️",
          "labelAr": "كثيب رملي",
          "labelEn": "Sand dune",
          "correct": false
        },
        {
          "id": "wrong1_19",
          "emoji": "🦋",
          "labelAr": "فراشة",
          "labelEn": "Butterfly",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission22",
    "number": 22,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الصحراء؟",
      "promptEn": "Which item belongs in the Desert world?",
      "choices": [
        {
          "id": "wrong2_20",
          "emoji": "🐟",
          "labelAr": "سمكة ملونة",
          "labelEn": "Colorful fish",
          "correct": false
        },
        {
          "id": "wrong0_20",
          "emoji": "⛲",
          "labelAr": "نافورة ماء",
          "labelEn": "Fountain",
          "correct": false
        },
        {
          "id": "wrong1_20",
          "emoji": "🧗",
          "labelAr": "متسلق جبال",
          "labelEn": "Climber",
          "correct": false
        },
        {
          "id": "correct_20",
          "emoji": "🌴",
          "labelAr": "واحة نخيل",
          "labelEn": "Palm oasis",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission23",
    "number": 23,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الغابة؟",
      "promptEn": "Which item belongs in the Forest world?",
      "choices": [
        {
          "id": "wrong2_21",
          "emoji": "🚀",
          "labelAr": "صاروخ",
          "labelEn": "Rocket",
          "correct": false
        },
        {
          "id": "wrong0_21",
          "emoji": "🌵",
          "labelAr": "صبار",
          "labelEn": "Cactus",
          "correct": false
        },
        {
          "id": "correct_21",
          "emoji": "🍄",
          "labelAr": "فطر",
          "labelEn": "Mushroom",
          "correct": true
        },
        {
          "id": "wrong1_21",
          "emoji": "👨‍🚀",
          "labelAr": "رائد فضاء",
          "labelEn": "Astronaut",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission24",
    "number": 24,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم البحر؟",
      "promptEn": "Which item belongs in the Sea world?",
      "choices": [
        {
          "id": "wrong2_22",
          "emoji": "🌸",
          "labelAr": "زهرة",
          "labelEn": "Flower",
          "correct": false
        },
        {
          "id": "wrong1_22",
          "emoji": "🧗",
          "labelAr": "متسلق جبال",
          "labelEn": "Climber",
          "correct": false
        },
        {
          "id": "correct_22",
          "emoji": "🐚",
          "labelAr": "صدفة",
          "labelEn": "Seashell",
          "correct": true
        },
        {
          "id": "wrong0_22",
          "emoji": "🚌",
          "labelAr": "حافلة",
          "labelEn": "Bus",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission25",
    "number": 25,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم القطب متجمد؟",
      "promptEn": "Which item belongs in the Arctic world?",
      "choices": [
        {
          "id": "wrong1_23",
          "emoji": "🐒",
          "labelAr": "قرد",
          "labelEn": "Monkey",
          "correct": false
        },
        {
          "id": "wrong0_23",
          "emoji": "🌳",
          "labelAr": "شجرة كبيرة",
          "labelEn": "Big tree",
          "correct": false
        },
        {
          "id": "correct_23",
          "emoji": "🧊",
          "labelAr": "كتلة جليدية",
          "labelEn": "Ice block",
          "correct": true
        },
        {
          "id": "wrong2_23",
          "emoji": "🌵",
          "labelAr": "صبار",
          "labelEn": "Cactus",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission26",
    "number": 26,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الفضاء؟",
      "promptEn": "Which item belongs in the Space world?",
      "choices": [
        {
          "id": "wrong0_24",
          "emoji": "🚦",
          "labelAr": "إشارة مرور",
          "labelEn": "Traffic light",
          "correct": false
        },
        {
          "id": "wrong2_24",
          "emoji": "⛵",
          "labelAr": "سفينة شراعية",
          "labelEn": "Sailboat",
          "correct": false
        },
        {
          "id": "correct_24",
          "emoji": "⭐",
          "labelAr": "نجمة لامعة",
          "labelEn": "Shining star",
          "correct": true
        },
        {
          "id": "wrong1_24",
          "emoji": "🐟",
          "labelAr": "سمكة ملونة",
          "labelEn": "Colorful fish",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission27",
    "number": 27,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم المزرعة؟",
      "promptEn": "Which item belongs in the Farm world?",
      "choices": [
        {
          "id": "wrong1_25",
          "emoji": "🍄",
          "labelAr": "فطر",
          "labelEn": "Mushroom",
          "correct": false
        },
        {
          "id": "correct_25",
          "emoji": "🏡",
          "labelAr": "بيت مزرعة",
          "labelEn": "Farmhouse",
          "correct": true
        },
        {
          "id": "wrong2_25",
          "emoji": "⛵",
          "labelAr": "سفينة شراعية",
          "labelEn": "Sailboat",
          "correct": false
        },
        {
          "id": "wrong0_25",
          "emoji": "🧊",
          "labelAr": "كتلة جليدية",
          "labelEn": "Ice block",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission28",
    "number": 28,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم المدينة؟",
      "promptEn": "Which item belongs in the City world?",
      "choices": [
        {
          "id": "wrong0_26",
          "emoji": "🐫",
          "labelAr": "جمل",
          "labelEn": "Camel",
          "correct": false
        },
        {
          "id": "wrong2_26",
          "emoji": "🦋",
          "labelAr": "فراشة",
          "labelEn": "Butterfly",
          "correct": false
        },
        {
          "id": "correct_26",
          "emoji": "🚦",
          "labelAr": "إشارة مرور",
          "labelEn": "Traffic light",
          "correct": true
        },
        {
          "id": "wrong1_26",
          "emoji": "🪣",
          "labelAr": "دلو ماء",
          "labelEn": "Water bucket",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission29",
    "number": 29,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الجبل؟",
      "promptEn": "Which item belongs in the Mountain world?",
      "choices": [
        {
          "id": "wrong1_27",
          "emoji": "🐒",
          "labelAr": "قرد",
          "labelEn": "Monkey",
          "correct": false
        },
        {
          "id": "correct_27",
          "emoji": "🕳️",
          "labelAr": "كهف",
          "labelEn": "Cave",
          "correct": true
        },
        {
          "id": "wrong0_27",
          "emoji": "🚜",
          "labelAr": "جرار",
          "labelEn": "Tractor",
          "correct": false
        },
        {
          "id": "wrong2_27",
          "emoji": "🐄",
          "labelAr": "بقرة",
          "labelEn": "Cow",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission30",
    "number": 30,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الحديقة؟",
      "promptEn": "Which item belongs in the Garden world?",
      "choices": [
        {
          "id": "wrong1_28",
          "emoji": "🚦",
          "labelAr": "إشارة مرور",
          "labelEn": "Traffic light",
          "correct": false
        },
        {
          "id": "correct_28",
          "emoji": "⛲",
          "labelAr": "نافورة ماء",
          "labelEn": "Fountain",
          "correct": true
        },
        {
          "id": "wrong0_28",
          "emoji": "🚗",
          "labelAr": "سيارة",
          "labelEn": "Car",
          "correct": false
        },
        {
          "id": "wrong2_28",
          "emoji": "🐚",
          "labelAr": "صدفة",
          "labelEn": "Seashell",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission31",
    "number": 31,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم القرية؟",
      "promptEn": "Which item belongs in the Village world?",
      "choices": [
        {
          "id": "correct_29",
          "emoji": "🪣",
          "labelAr": "دلو ماء",
          "labelEn": "Water bucket",
          "correct": true
        },
        {
          "id": "wrong2_29",
          "emoji": "🚀",
          "labelAr": "صاروخ",
          "labelEn": "Rocket",
          "correct": false
        },
        {
          "id": "wrong0_29",
          "emoji": "👨‍🚀",
          "labelAr": "رائد فضاء",
          "labelEn": "Astronaut",
          "correct": false
        },
        {
          "id": "wrong1_29",
          "emoji": "⛲",
          "labelAr": "نافورة ماء",
          "labelEn": "Fountain",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission32",
    "number": 32,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الصحراء؟",
      "promptEn": "Which item belongs in the Desert world?",
      "choices": [
        {
          "id": "wrong1_30",
          "emoji": "👨‍🚀",
          "labelAr": "رائد فضاء",
          "labelEn": "Astronaut",
          "correct": false
        },
        {
          "id": "wrong0_30",
          "emoji": "🚦",
          "labelAr": "إشارة مرور",
          "labelEn": "Traffic light",
          "correct": false
        },
        {
          "id": "correct_30",
          "emoji": "🏜️",
          "labelAr": "كثيب رملي",
          "labelEn": "Sand dune",
          "correct": true
        },
        {
          "id": "wrong2_30",
          "emoji": "🐙",
          "labelAr": "أخطبوط",
          "labelEn": "Octopus",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission33",
    "number": 33,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الغابة؟",
      "promptEn": "Which item belongs in the Forest world?",
      "choices": [
        {
          "id": "wrong2_31",
          "emoji": "🏘️",
          "labelAr": "بيت ريفي",
          "labelEn": "Village house",
          "correct": false
        },
        {
          "id": "wrong1_31",
          "emoji": "🧊",
          "labelAr": "كتلة جليدية",
          "labelEn": "Ice block",
          "correct": false
        },
        {
          "id": "correct_31",
          "emoji": "🐒",
          "labelAr": "قرد",
          "labelEn": "Monkey",
          "correct": true
        },
        {
          "id": "wrong0_31",
          "emoji": "🕳️",
          "labelAr": "كهف",
          "labelEn": "Cave",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission34",
    "number": 34,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم البحر؟",
      "promptEn": "Which item belongs in the Sea world?",
      "choices": [
        {
          "id": "wrong2_32",
          "emoji": "🌳",
          "labelAr": "شجرة كبيرة",
          "labelEn": "Big tree",
          "correct": false
        },
        {
          "id": "wrong1_32",
          "emoji": "🐔",
          "labelAr": "دجاجة",
          "labelEn": "Chicken",
          "correct": false
        },
        {
          "id": "correct_32",
          "emoji": "🐙",
          "labelAr": "أخطبوط",
          "labelEn": "Octopus",
          "correct": true
        },
        {
          "id": "wrong0_32",
          "emoji": "🪑",
          "labelAr": "مقعد حديقة",
          "labelEn": "Garden bench",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission35",
    "number": 35,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم القطب متجمد؟",
      "promptEn": "Which item belongs in the Arctic world?",
      "choices": [
        {
          "id": "wrong0_33",
          "emoji": "🕳️",
          "labelAr": "كهف",
          "labelEn": "Cave",
          "correct": false
        },
        {
          "id": "wrong1_33",
          "emoji": "🚀",
          "labelAr": "صاروخ",
          "labelEn": "Rocket",
          "correct": false
        },
        {
          "id": "wrong2_33",
          "emoji": "🏡",
          "labelAr": "كوخ صغير",
          "labelEn": "Small hut",
          "correct": false
        },
        {
          "id": "correct_33",
          "emoji": "🦭",
          "labelAr": "فقمة",
          "labelEn": "Seal",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission36",
    "number": 36,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الفضاء؟",
      "promptEn": "Which item belongs in the Space world?",
      "choices": [
        {
          "id": "correct_34",
          "emoji": "👨‍🚀",
          "labelAr": "رائد فضاء",
          "labelEn": "Astronaut",
          "correct": true
        },
        {
          "id": "wrong2_34",
          "emoji": "🐄",
          "labelAr": "بقرة",
          "labelEn": "Cow",
          "correct": false
        },
        {
          "id": "wrong0_34",
          "emoji": "🏘️",
          "labelAr": "بيت ريفي",
          "labelEn": "Village house",
          "correct": false
        },
        {
          "id": "wrong1_34",
          "emoji": "🦭",
          "labelAr": "فقمة",
          "labelEn": "Seal",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission37",
    "number": 37,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم المزرعة؟",
      "promptEn": "Which item belongs in the Farm world?",
      "choices": [
        {
          "id": "wrong0_35",
          "emoji": "🏡",
          "labelAr": "كوخ صغير",
          "labelEn": "Small hut",
          "correct": false
        },
        {
          "id": "correct_35",
          "emoji": "🐔",
          "labelAr": "دجاجة",
          "labelEn": "Chicken",
          "correct": true
        },
        {
          "id": "wrong1_35",
          "emoji": "🪐",
          "labelAr": "كوكب",
          "labelEn": "Planet",
          "correct": false
        },
        {
          "id": "wrong2_35",
          "emoji": "🦅",
          "labelAr": "نسر",
          "labelEn": "Eagle",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission38",
    "number": 38,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم المدينة؟",
      "promptEn": "Which item belongs in the City world?",
      "choices": [
        {
          "id": "wrong0_36",
          "emoji": "🪐",
          "labelAr": "كوكب",
          "labelEn": "Planet",
          "correct": false
        },
        {
          "id": "correct_36",
          "emoji": "🚌",
          "labelAr": "حافلة",
          "labelEn": "Bus",
          "correct": true
        },
        {
          "id": "wrong2_36",
          "emoji": "🐄",
          "labelAr": "بقرة",
          "labelEn": "Cow",
          "correct": false
        },
        {
          "id": "wrong1_36",
          "emoji": "🏘️",
          "labelAr": "بيت ريفي",
          "labelEn": "Village house",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission39",
    "number": 39,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الجبل؟",
      "promptEn": "Which item belongs in the Mountain world?",
      "choices": [
        {
          "id": "wrong1_37",
          "emoji": "👨‍🚀",
          "labelAr": "رائد فضاء",
          "labelEn": "Astronaut",
          "correct": false
        },
        {
          "id": "wrong0_37",
          "emoji": "🐒",
          "labelAr": "قرد",
          "labelEn": "Monkey",
          "correct": false
        },
        {
          "id": "correct_37",
          "emoji": "🦅",
          "labelAr": "نسر",
          "labelEn": "Eagle",
          "correct": true
        },
        {
          "id": "wrong2_37",
          "emoji": "🏡",
          "labelAr": "كوخ صغير",
          "labelEn": "Small hut",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission40",
    "number": 40,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الحديقة؟",
      "promptEn": "Which item belongs in the Garden world?",
      "choices": [
        {
          "id": "wrong2_38",
          "emoji": "🚌",
          "labelAr": "حافلة",
          "labelEn": "Bus",
          "correct": false
        },
        {
          "id": "wrong1_38",
          "emoji": "🐔",
          "labelAr": "دجاجة",
          "labelEn": "Chicken",
          "correct": false
        },
        {
          "id": "correct_38",
          "emoji": "🪑",
          "labelAr": "مقعد حديقة",
          "labelEn": "Garden bench",
          "correct": true
        },
        {
          "id": "wrong0_38",
          "emoji": "🚦",
          "labelAr": "إشارة مرور",
          "labelEn": "Traffic light",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission41",
    "number": 41,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم القرية؟",
      "promptEn": "Which item belongs in the Village world?",
      "choices": [
        {
          "id": "wrong1_39",
          "emoji": "🌳",
          "labelAr": "شجرة كبيرة",
          "labelEn": "Big tree",
          "correct": false
        },
        {
          "id": "wrong0_39",
          "emoji": "🦅",
          "labelAr": "نسر",
          "labelEn": "Eagle",
          "correct": false
        },
        {
          "id": "correct_39",
          "emoji": "🏘️",
          "labelAr": "بيت ريفي",
          "labelEn": "Village house",
          "correct": true
        },
        {
          "id": "wrong2_39",
          "emoji": "🐄",
          "labelAr": "بقرة",
          "labelEn": "Cow",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission42",
    "number": 42,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الصحراء؟",
      "promptEn": "Which item belongs in the Desert world?",
      "choices": [
        {
          "id": "wrong2_40",
          "emoji": "⭐",
          "labelAr": "نجمة لامعة",
          "labelEn": "Shining star",
          "correct": false
        },
        {
          "id": "correct_40",
          "emoji": "🐫",
          "labelAr": "جمل",
          "labelEn": "Camel",
          "correct": true
        },
        {
          "id": "wrong0_40",
          "emoji": "🐒",
          "labelAr": "قرد",
          "labelEn": "Monkey",
          "correct": false
        },
        {
          "id": "wrong1_40",
          "emoji": "🐚",
          "labelAr": "صدفة",
          "labelEn": "Seashell",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission43",
    "number": 43,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الغابة؟",
      "promptEn": "Which item belongs in the Forest world?",
      "choices": [
        {
          "id": "wrong0_41",
          "emoji": "🏘️",
          "labelAr": "بيت ريفي",
          "labelEn": "Village house",
          "correct": false
        },
        {
          "id": "wrong1_41",
          "emoji": "🐄",
          "labelAr": "بقرة",
          "labelEn": "Cow",
          "correct": false
        },
        {
          "id": "wrong2_41",
          "emoji": "🚜",
          "labelAr": "جرار",
          "labelEn": "Tractor",
          "correct": false
        },
        {
          "id": "correct_41",
          "emoji": "🌳",
          "labelAr": "شجرة كبيرة",
          "labelEn": "Big tree",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission44",
    "number": 44,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم البحر؟",
      "promptEn": "Which item belongs in the Sea world?",
      "choices": [
        {
          "id": "wrong2_42",
          "emoji": "🏘️",
          "labelAr": "بيت ريفي",
          "labelEn": "Village house",
          "correct": false
        },
        {
          "id": "correct_42",
          "emoji": "🐟",
          "labelAr": "سمكة ملونة",
          "labelEn": "Colorful fish",
          "correct": true
        },
        {
          "id": "wrong1_42",
          "emoji": "🧊",
          "labelAr": "كتلة جليدية",
          "labelEn": "Ice block",
          "correct": false
        },
        {
          "id": "wrong0_42",
          "emoji": "🦅",
          "labelAr": "نسر",
          "labelEn": "Eagle",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission45",
    "number": 45,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم القطب متجمد؟",
      "promptEn": "Which item belongs in the Arctic world?",
      "choices": [
        {
          "id": "wrong0_43",
          "emoji": "🐙",
          "labelAr": "أخطبوط",
          "labelEn": "Octopus",
          "correct": false
        },
        {
          "id": "correct_43",
          "emoji": "🐧",
          "labelAr": "بطريق",
          "labelEn": "Penguin",
          "correct": true
        },
        {
          "id": "wrong2_43",
          "emoji": "🏡",
          "labelAr": "بيت مزرعة",
          "labelEn": "Farmhouse",
          "correct": false
        },
        {
          "id": "wrong1_43",
          "emoji": "⛰️",
          "labelAr": "قمة جبل",
          "labelEn": "Mountain peak",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission46",
    "number": 46,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الفضاء؟",
      "promptEn": "Which item belongs in the Space world?",
      "choices": [
        {
          "id": "wrong1_44",
          "emoji": "🐫",
          "labelAr": "جمل",
          "labelEn": "Camel",
          "correct": false
        },
        {
          "id": "wrong0_44",
          "emoji": "👨‍🌾",
          "labelAr": "فلاح",
          "labelEn": "Farmer",
          "correct": false
        },
        {
          "id": "correct_44",
          "emoji": "🚀",
          "labelAr": "صاروخ",
          "labelEn": "Rocket",
          "correct": true
        },
        {
          "id": "wrong2_44",
          "emoji": "🐒",
          "labelAr": "قرد",
          "labelEn": "Monkey",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission47",
    "number": 47,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم المزرعة؟",
      "promptEn": "Which item belongs in the Farm world?",
      "choices": [
        {
          "id": "wrong0_45",
          "emoji": "🪐",
          "labelAr": "كوكب",
          "labelEn": "Planet",
          "correct": false
        },
        {
          "id": "wrong2_45",
          "emoji": "🏜️",
          "labelAr": "كثيب رملي",
          "labelEn": "Sand dune",
          "correct": false
        },
        {
          "id": "wrong1_45",
          "emoji": "🏡",
          "labelAr": "كوخ صغير",
          "labelEn": "Small hut",
          "correct": false
        },
        {
          "id": "correct_45",
          "emoji": "🐄",
          "labelAr": "بقرة",
          "labelEn": "Cow",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission48",
    "number": 48,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم المدينة؟",
      "promptEn": "Which item belongs in the City world?",
      "choices": [
        {
          "id": "wrong2_46",
          "emoji": "🧗",
          "labelAr": "متسلق جبال",
          "labelEn": "Climber",
          "correct": false
        },
        {
          "id": "wrong0_46",
          "emoji": "🦭",
          "labelAr": "فقمة",
          "labelEn": "Seal",
          "correct": false
        },
        {
          "id": "correct_46",
          "emoji": "🏙️",
          "labelAr": "ناطحة سحاب",
          "labelEn": "Skyscraper",
          "correct": true
        },
        {
          "id": "wrong1_46",
          "emoji": "🕳️",
          "labelAr": "كهف",
          "labelEn": "Cave",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission49",
    "number": 49,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الجبل؟",
      "promptEn": "Which item belongs in the Mountain world?",
      "choices": [
        {
          "id": "wrong2_47",
          "emoji": "🐫",
          "labelAr": "جمل",
          "labelEn": "Camel",
          "correct": false
        },
        {
          "id": "wrong0_47",
          "emoji": "🪐",
          "labelAr": "كوكب",
          "labelEn": "Planet",
          "correct": false
        },
        {
          "id": "correct_47",
          "emoji": "⛰️",
          "labelAr": "قمة جبل",
          "labelEn": "Mountain peak",
          "correct": true
        },
        {
          "id": "wrong1_47",
          "emoji": "🚀",
          "labelAr": "صاروخ",
          "labelEn": "Rocket",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission50",
    "number": 50,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم الحديقة؟",
      "promptEn": "Which item belongs in the Garden world?",
      "choices": [
        {
          "id": "wrong2_48",
          "emoji": "🧗",
          "labelAr": "متسلق جبال",
          "labelEn": "Climber",
          "correct": false
        },
        {
          "id": "correct_48",
          "emoji": "🌸",
          "labelAr": "زهرة",
          "labelEn": "Flower",
          "correct": true
        },
        {
          "id": "wrong0_48",
          "emoji": "⭐",
          "labelAr": "نجمة لامعة",
          "labelEn": "Shining star",
          "correct": false
        },
        {
          "id": "wrong1_48",
          "emoji": "🦁",
          "labelAr": "أسد",
          "labelEn": "Lion",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission51",
    "number": 51,
    "options": [],
    "template": {
      "characterId": "eyad",
      "promptAr": "أي عنصر يناسب عالم القرية؟",
      "promptEn": "Which item belongs in the Village world?",
      "choices": [
        {
          "id": "wrong1_49",
          "emoji": "🦁",
          "labelAr": "أسد",
          "labelEn": "Lion",
          "correct": false
        },
        {
          "id": "wrong0_49",
          "emoji": "🚗",
          "labelAr": "سيارة",
          "labelEn": "Car",
          "correct": false
        },
        {
          "id": "wrong2_49",
          "emoji": "🧊",
          "labelAr": "كتلة جليدية",
          "labelEn": "Ice block",
          "correct": false
        },
        {
          "id": "correct_49",
          "emoji": "🏡",
          "labelAr": "كوخ صغير",
          "labelEn": "Small hut",
          "correct": true
        }
      ]
    }
  }
];
