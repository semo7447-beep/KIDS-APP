import { Mission } from '../types/mission';

export const WHATSMISSING_MISSIONS: Mission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/whatsmissing/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    options: [
      { id: 'bear', correct: true, left: 1.59, top: 72.37, width: 19.13, height: 11.66 },
      { id: 'car', correct: false, left: 21.79, top: 72.37, width: 18.6, height: 11.66 },
      { id: 'ball', correct: false, left: 41.44, top: 72.37, width: 18.6, height: 11.66 },
      { id: 'blocks', correct: false, left: 61.11, top: 72.37, width: 18.6, height: 11.66 },
      { id: 'dino', correct: false, left: 80.55, top: 72.37, width: 18.6, height: 11.66 },
    ],
    confirmZone: { left: 73.32, top: 93.3, width: 26.03, height: 5.98 },
    previousZone: { left: 1.59, top: 93.3, width: 26.03, height: 5.98 },
  },
  {
    "id": "mission2",
    "number": 2,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "موزة، عنب... مين زميلهم الناقص من الفواكه؟",
      "promptEn": "Banana, Grapes... which one is their missing Fruit friend?",
      "choices": [
        {
          "id": "correct_0",
          "emoji": "🍎",
          "labelAr": "تفاحة",
          "labelEn": "Apple",
          "correct": true
        },
        {
          "id": "wrong1_0",
          "emoji": "⭐",
          "labelAr": "نجم البحر",
          "labelEn": "Starfish",
          "correct": false
        },
        {
          "id": "wrong0_0",
          "emoji": "🥄",
          "labelAr": "ملعقة",
          "labelEn": "Spoon",
          "correct": false
        },
        {
          "id": "wrong2_0",
          "emoji": "🦜",
          "labelAr": "ببغاء",
          "labelEn": "Parrot",
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
      "characterId": "nono",
      "promptAr": "طماطم، خيار... مين زميلهم الناقص من الخضروات؟",
      "promptEn": "Tomato, Cucumber... which one is their missing Vegetable friend?",
      "choices": [
        {
          "id": "correct_1",
          "emoji": "🥕",
          "labelAr": "جزرة",
          "labelEn": "Carrot",
          "correct": true
        },
        {
          "id": "wrong0_1",
          "emoji": "🎹",
          "labelAr": "بيانو",
          "labelEn": "Piano",
          "correct": false
        },
        {
          "id": "wrong2_1",
          "emoji": "🎂",
          "labelAr": "كيك",
          "labelEn": "Cake",
          "correct": false
        },
        {
          "id": "wrong1_1",
          "emoji": "🦈",
          "labelAr": "قرش",
          "labelEn": "Shark",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission4",
    "number": 4,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "خروف، دجاجة... مين زميلهم الناقص من حيوانات المزرعة؟",
      "promptEn": "Sheep, Chicken... which one is their missing Farm animal friend?",
      "choices": [
        {
          "id": "wrong1_2",
          "emoji": "✈️",
          "labelAr": "طائرة",
          "labelEn": "Plane",
          "correct": false
        },
        {
          "id": "wrong2_2",
          "emoji": "☁️",
          "labelAr": "سحابة",
          "labelEn": "Cloud",
          "correct": false
        },
        {
          "id": "correct_2",
          "emoji": "🐄",
          "labelAr": "بقرة",
          "labelEn": "Cow",
          "correct": true
        },
        {
          "id": "wrong0_2",
          "emoji": "🍅",
          "labelAr": "طماطم",
          "labelEn": "Tomato",
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
      "characterId": "nono",
      "promptAr": "أخطبوط، سلحفاة... مين زميلهم الناقص من حيوانات البحر؟",
      "promptEn": "Octopus, Turtle... which one is their missing Sea animal friend?",
      "choices": [
        {
          "id": "wrong1_3",
          "emoji": "🧦",
          "labelAr": "جوارب",
          "labelEn": "Socks",
          "correct": false
        },
        {
          "id": "wrong2_3",
          "emoji": "🎂",
          "labelAr": "كيك",
          "labelEn": "Cake",
          "correct": false
        },
        {
          "id": "correct_3",
          "emoji": "🐟",
          "labelAr": "سمكة",
          "labelEn": "Fish",
          "correct": true
        },
        {
          "id": "wrong0_3",
          "emoji": "🍎",
          "labelAr": "تفاحة",
          "labelEn": "Apple",
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
      "characterId": "nono",
      "promptAr": "فراشة، نملة... مين زميلهم الناقص من الحشرات؟",
      "promptEn": "Butterfly, Ant... which one is their missing Insect friend?",
      "choices": [
        {
          "id": "wrong1_4",
          "emoji": "🔺",
          "labelAr": "مثلث",
          "labelEn": "Triangle",
          "correct": false
        },
        {
          "id": "wrong0_4",
          "emoji": "📖",
          "labelAr": "كتاب",
          "labelEn": "Book",
          "correct": false
        },
        {
          "id": "correct_4",
          "emoji": "🐝",
          "labelAr": "نحلة",
          "labelEn": "Bee",
          "correct": true
        },
        {
          "id": "wrong2_4",
          "emoji": "🐰",
          "labelAr": "أرنب",
          "labelEn": "Rabbit",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission7",
    "number": 7,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "حافلة، دراجة... مين زميلهم الناقص من المركبات؟",
      "promptEn": "Bus, Bike... which one is their missing Vehicle friend?",
      "choices": [
        {
          "id": "wrong0_5",
          "emoji": "✏️",
          "labelAr": "قلم",
          "labelEn": "Pencil",
          "correct": false
        },
        {
          "id": "wrong2_5",
          "emoji": "🦗",
          "labelAr": "يعسوب",
          "labelEn": "Dragonfly",
          "correct": false
        },
        {
          "id": "correct_5",
          "emoji": "🚗",
          "labelAr": "سيارة",
          "labelEn": "Car",
          "correct": true
        },
        {
          "id": "wrong1_5",
          "emoji": "⚪",
          "labelAr": "دائرة",
          "labelEn": "Circle",
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
      "characterId": "nono",
      "promptAr": "شوكة، سكين... مين زميلهم الناقص من أدوات المطبخ؟",
      "promptEn": "Fork, Knife... which one is their missing Kitchen tool friend?",
      "choices": [
        {
          "id": "wrong1_6",
          "emoji": "🐑",
          "labelAr": "خروف",
          "labelEn": "Sheep",
          "correct": false
        },
        {
          "id": "wrong0_6",
          "emoji": "🎵",
          "labelAr": "ناي",
          "labelEn": "Flute",
          "correct": false
        },
        {
          "id": "correct_6",
          "emoji": "🥄",
          "labelAr": "ملعقة",
          "labelEn": "Spoon",
          "correct": true
        },
        {
          "id": "wrong2_6",
          "emoji": "🫑",
          "labelAr": "فلفل",
          "labelEn": "Pepper",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission9",
    "number": 9,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "مربع، مثلث... مين زميلهم الناقص من الأشكال؟",
      "promptEn": "Square, Triangle... which one is their missing Shape friend?",
      "choices": [
        {
          "id": "wrong1_7",
          "emoji": "🐶",
          "labelAr": "كلب",
          "labelEn": "Dog",
          "correct": false
        },
        {
          "id": "wrong0_7",
          "emoji": "🍅",
          "labelAr": "طماطم",
          "labelEn": "Tomato",
          "correct": false
        },
        {
          "id": "wrong2_7",
          "emoji": "🧦",
          "labelAr": "جوارب",
          "labelEn": "Socks",
          "correct": false
        },
        {
          "id": "correct_7",
          "emoji": "⚪",
          "labelAr": "دائرة",
          "labelEn": "Circle",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission10",
    "number": 10,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "جيتار، بيانو... مين زميلهم الناقص من الآلات الموسيقية؟",
      "promptEn": "Guitar, Piano... which one is their missing Musical instrument friend?",
      "choices": [
        {
          "id": "correct_8",
          "emoji": "🥁",
          "labelAr": "طبلة",
          "labelEn": "Drum",
          "correct": true
        },
        {
          "id": "wrong2_8",
          "emoji": "🐟",
          "labelAr": "سمكة",
          "labelEn": "Fish",
          "correct": false
        },
        {
          "id": "wrong1_8",
          "emoji": "🦚",
          "labelAr": "طاووس",
          "labelEn": "Peacock",
          "correct": false
        },
        {
          "id": "wrong0_8",
          "emoji": "⭐",
          "labelAr": "نجمة",
          "labelEn": "Star",
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
      "characterId": "nono",
      "promptAr": "بومة، ببغاء... مين زميلهم الناقص من الطيور؟",
      "promptEn": "Owl, Parrot... which one is their missing Bird friend?",
      "choices": [
        {
          "id": "wrong1_9",
          "emoji": "🫑",
          "labelAr": "فلفل",
          "labelEn": "Pepper",
          "correct": false
        },
        {
          "id": "wrong0_9",
          "emoji": "🍇",
          "labelAr": "عنب",
          "labelEn": "Grapes",
          "correct": false
        },
        {
          "id": "correct_9",
          "emoji": "🦆",
          "labelAr": "بطة",
          "labelEn": "Duck",
          "correct": true
        },
        {
          "id": "wrong2_9",
          "emoji": "🦜",
          "labelAr": "ببغاء أليف",
          "labelEn": "Pet parrot",
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
      "characterId": "nono",
      "promptAr": "كلب، أرنب... مين زميلهم الناقص من الحيوانات الأليفة؟",
      "promptEn": "Dog, Rabbit... which one is their missing Pet friend?",
      "choices": [
        {
          "id": "wrong0_10",
          "emoji": "🚢",
          "labelAr": "سفينة",
          "labelEn": "Ship",
          "correct": false
        },
        {
          "id": "correct_10",
          "emoji": "🐱",
          "labelAr": "قطة",
          "labelEn": "Cat",
          "correct": true
        },
        {
          "id": "wrong2_10",
          "emoji": "🌽",
          "labelAr": "ذرة",
          "labelEn": "Corn",
          "correct": false
        },
        {
          "id": "wrong1_10",
          "emoji": "🌳",
          "labelAr": "شجرة",
          "labelEn": "Tree",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission13",
    "number": 13,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "بنطال، حذاء... مين زميلهم الناقص من الملابس؟",
      "promptEn": "Pants, Shoes... which one is their missing Clothe friend?",
      "choices": [
        {
          "id": "correct_11",
          "emoji": "👕",
          "labelAr": "قميص",
          "labelEn": "Shirt",
          "correct": true
        },
        {
          "id": "wrong2_11",
          "emoji": "🎹",
          "labelAr": "بيانو",
          "labelEn": "Piano",
          "correct": false
        },
        {
          "id": "wrong0_11",
          "emoji": "🍅",
          "labelAr": "طماطم",
          "labelEn": "Tomato",
          "correct": false
        },
        {
          "id": "wrong1_11",
          "emoji": "🍓",
          "labelAr": "فراولة",
          "labelEn": "Strawberry",
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
      "characterId": "nono",
      "promptAr": "كتاب، حقيبة... مين زميلهم الناقص من الأدوات المدرسية؟",
      "promptEn": "Book, Backpack... which one is their missing School supplie friend?",
      "choices": [
        {
          "id": "wrong2_12",
          "emoji": "🐑",
          "labelAr": "خروف",
          "labelEn": "Sheep",
          "correct": false
        },
        {
          "id": "wrong0_12",
          "emoji": "🌽",
          "labelAr": "ذرة",
          "labelEn": "Corn",
          "correct": false
        },
        {
          "id": "wrong1_12",
          "emoji": "🍴",
          "labelAr": "شوكة",
          "labelEn": "Fork",
          "correct": false
        },
        {
          "id": "correct_12",
          "emoji": "✏️",
          "labelAr": "قلم",
          "labelEn": "Pencil",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission15",
    "number": 15,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "آيس كريم، دونات... مين زميلهم الناقص من الحلويات؟",
      "promptEn": "Ice cream, Donut... which one is their missing Dessert friend?",
      "choices": [
        {
          "id": "wrong0_13",
          "emoji": "🍌",
          "labelAr": "موزة",
          "labelEn": "Banana",
          "correct": false
        },
        {
          "id": "wrong1_13",
          "emoji": "🥁",
          "labelAr": "طبلة",
          "labelEn": "Drum",
          "correct": false
        },
        {
          "id": "correct_13",
          "emoji": "🎂",
          "labelAr": "كيك",
          "labelEn": "Cake",
          "correct": true
        },
        {
          "id": "wrong2_13",
          "emoji": "🍎",
          "labelAr": "تفاحة",
          "labelEn": "Apple",
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
      "characterId": "nono",
      "promptAr": "زهرة، شمس... مين زميلهم الناقص من الطبيعة؟",
      "promptEn": "Flower, Sun... which one is their missing Natur friend?",
      "choices": [
        {
          "id": "wrong1_14",
          "emoji": "✏️",
          "labelAr": "قلم",
          "labelEn": "Pencil",
          "correct": false
        },
        {
          "id": "wrong2_14",
          "emoji": "👕",
          "labelAr": "قميص",
          "labelEn": "Shirt",
          "correct": false
        },
        {
          "id": "correct_14",
          "emoji": "🌳",
          "labelAr": "شجرة",
          "labelEn": "Tree",
          "correct": true
        },
        {
          "id": "wrong0_14",
          "emoji": "🐋",
          "labelAr": "حوت",
          "labelEn": "Whale",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission17",
    "number": 17,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "تفاحة، عنب... مين زميلهم الناقص من الفواكه؟",
      "promptEn": "Apple, Grapes... which one is their missing Fruit friend?",
      "choices": [
        {
          "id": "wrong0_15",
          "emoji": "🥧",
          "labelAr": "فطيرة",
          "labelEn": "Pie",
          "correct": false
        },
        {
          "id": "wrong2_15",
          "emoji": "📏",
          "labelAr": "مسطرة",
          "labelEn": "Ruler",
          "correct": false
        },
        {
          "id": "correct_15",
          "emoji": "🍌",
          "labelAr": "موزة",
          "labelEn": "Banana",
          "correct": true
        },
        {
          "id": "wrong1_15",
          "emoji": "🐋",
          "labelAr": "حوت",
          "labelEn": "Whale",
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
      "characterId": "nono",
      "promptAr": "جزرة، خيار... مين زميلهم الناقص من الخضروات؟",
      "promptEn": "Carrot, Cucumber... which one is their missing Vegetable friend?",
      "choices": [
        {
          "id": "wrong2_16",
          "emoji": "☀️",
          "labelAr": "شمس",
          "labelEn": "Sun",
          "correct": false
        },
        {
          "id": "correct_16",
          "emoji": "🍅",
          "labelAr": "طماطم",
          "labelEn": "Tomato",
          "correct": true
        },
        {
          "id": "wrong0_16",
          "emoji": "🍫",
          "labelAr": "شوكولاتة",
          "labelEn": "Chocolate",
          "correct": false
        },
        {
          "id": "wrong1_16",
          "emoji": "🌳",
          "labelAr": "شجرة",
          "labelEn": "Tree",
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
      "characterId": "nono",
      "promptAr": "بقرة، دجاجة... مين زميلهم الناقص من حيوانات المزرعة؟",
      "promptEn": "Cow, Chicken... which one is their missing Farm animal friend?",
      "choices": [
        {
          "id": "wrong2_17",
          "emoji": "🍽️",
          "labelAr": "طبق",
          "labelEn": "Plate",
          "correct": false
        },
        {
          "id": "correct_17",
          "emoji": "🐑",
          "labelAr": "خروف",
          "labelEn": "Sheep",
          "correct": true
        },
        {
          "id": "wrong0_17",
          "emoji": "🌳",
          "labelAr": "شجرة",
          "labelEn": "Tree",
          "correct": false
        },
        {
          "id": "wrong1_17",
          "emoji": "📓",
          "labelAr": "دفتر",
          "labelEn": "Notebook",
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
      "characterId": "nono",
      "promptAr": "سمكة، سلحفاة... مين زميلهم الناقص من حيوانات البحر؟",
      "promptEn": "Fish, Turtle... which one is their missing Sea animal friend?",
      "choices": [
        {
          "id": "correct_18",
          "emoji": "🐙",
          "labelAr": "أخطبوط",
          "labelEn": "Octopus",
          "correct": true
        },
        {
          "id": "wrong0_18",
          "emoji": "🦜",
          "labelAr": "ببغاء",
          "labelEn": "Parrot",
          "correct": false
        },
        {
          "id": "wrong2_18",
          "emoji": "👟",
          "labelAr": "حذاء",
          "labelEn": "Shoes",
          "correct": false
        },
        {
          "id": "wrong1_18",
          "emoji": "⚪",
          "labelAr": "دائرة",
          "labelEn": "Circle",
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
      "characterId": "nono",
      "promptAr": "نحلة، نملة... مين زميلهم الناقص من الحشرات؟",
      "promptEn": "Bee, Ant... which one is their missing Insect friend?",
      "choices": [
        {
          "id": "wrong0_19",
          "emoji": "🐖",
          "labelAr": "خنزير",
          "labelEn": "Pig",
          "correct": false
        },
        {
          "id": "wrong2_19",
          "emoji": "🔺",
          "labelAr": "مثلث",
          "labelEn": "Triangle",
          "correct": false
        },
        {
          "id": "correct_19",
          "emoji": "🦋",
          "labelAr": "فراشة",
          "labelEn": "Butterfly",
          "correct": true
        },
        {
          "id": "wrong1_19",
          "emoji": "☀️",
          "labelAr": "شمس",
          "labelEn": "Sun",
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
      "characterId": "nono",
      "promptAr": "سيارة، دراجة... مين زميلهم الناقص من المركبات؟",
      "promptEn": "Car, Bike... which one is their missing Vehicle friend?",
      "choices": [
        {
          "id": "wrong1_20",
          "emoji": "🦜",
          "labelAr": "ببغاء",
          "labelEn": "Parrot",
          "correct": false
        },
        {
          "id": "correct_20",
          "emoji": "🚌",
          "labelAr": "حافلة",
          "labelEn": "Bus",
          "correct": true
        },
        {
          "id": "wrong2_20",
          "emoji": "☕",
          "labelAr": "كوب",
          "labelEn": "Cup",
          "correct": false
        },
        {
          "id": "wrong0_20",
          "emoji": "🫑",
          "labelAr": "فلفل",
          "labelEn": "Pepper",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission23",
    "number": 23,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "ملعقة، سكين... مين زميلهم الناقص من أدوات المطبخ؟",
      "promptEn": "Spoon, Knife... which one is their missing Kitchen tool friend?",
      "choices": [
        {
          "id": "correct_21",
          "emoji": "🍴",
          "labelAr": "شوكة",
          "labelEn": "Fork",
          "correct": true
        },
        {
          "id": "wrong2_21",
          "emoji": "🐄",
          "labelAr": "بقرة",
          "labelEn": "Cow",
          "correct": false
        },
        {
          "id": "wrong0_21",
          "emoji": "🍎",
          "labelAr": "تفاحة",
          "labelEn": "Apple",
          "correct": false
        },
        {
          "id": "wrong1_21",
          "emoji": "🧥",
          "labelAr": "معطف",
          "labelEn": "Coat",
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
      "characterId": "nono",
      "promptAr": "دائرة، مثلث... مين زميلهم الناقص من الأشكال؟",
      "promptEn": "Circle, Triangle... which one is their missing Shape friend?",
      "choices": [
        {
          "id": "wrong1_22",
          "emoji": "☁️",
          "labelAr": "سحابة",
          "labelEn": "Cloud",
          "correct": false
        },
        {
          "id": "correct_22",
          "emoji": "🟧",
          "labelAr": "مربع",
          "labelEn": "Square",
          "correct": true
        },
        {
          "id": "wrong0_22",
          "emoji": "🦜",
          "labelAr": "ببغاء",
          "labelEn": "Parrot",
          "correct": false
        },
        {
          "id": "wrong2_22",
          "emoji": "✈️",
          "labelAr": "طائرة",
          "labelEn": "Plane",
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
      "characterId": "nono",
      "promptAr": "طبلة، بيانو... مين زميلهم الناقص من الآلات الموسيقية؟",
      "promptEn": "Drum, Piano... which one is their missing Musical instrument friend?",
      "choices": [
        {
          "id": "wrong2_23",
          "emoji": "🔺",
          "labelAr": "مثلث",
          "labelEn": "Triangle",
          "correct": false
        },
        {
          "id": "wrong1_23",
          "emoji": "✂️",
          "labelAr": "مقص",
          "labelEn": "Scissors",
          "correct": false
        },
        {
          "id": "correct_23",
          "emoji": "🎸",
          "labelAr": "جيتار",
          "labelEn": "Guitar",
          "correct": true
        },
        {
          "id": "wrong0_23",
          "emoji": "📖",
          "labelAr": "كتاب",
          "labelEn": "Book",
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
      "characterId": "nono",
      "promptAr": "بطة، ببغاء... مين زميلهم الناقص من الطيور؟",
      "promptEn": "Duck, Parrot... which one is their missing Bird friend?",
      "choices": [
        {
          "id": "wrong2_24",
          "emoji": "🥄",
          "labelAr": "ملعقة",
          "labelEn": "Spoon",
          "correct": false
        },
        {
          "id": "wrong0_24",
          "emoji": "🧦",
          "labelAr": "جوارب",
          "labelEn": "Socks",
          "correct": false
        },
        {
          "id": "wrong1_24",
          "emoji": "🐰",
          "labelAr": "أرنب",
          "labelEn": "Rabbit",
          "correct": false
        },
        {
          "id": "correct_24",
          "emoji": "🦉",
          "labelAr": "بومة",
          "labelEn": "Owl",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission27",
    "number": 27,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "قطة، أرنب... مين زميلهم الناقص من الحيوانات الأليفة؟",
      "promptEn": "Cat, Rabbit... which one is their missing Pet friend?",
      "choices": [
        {
          "id": "correct_25",
          "emoji": "🐶",
          "labelAr": "كلب",
          "labelEn": "Dog",
          "correct": true
        },
        {
          "id": "wrong0_25",
          "emoji": "👖",
          "labelAr": "بنطال",
          "labelEn": "Pants",
          "correct": false
        },
        {
          "id": "wrong2_25",
          "emoji": "⭐",
          "labelAr": "نجم البحر",
          "labelEn": "Starfish",
          "correct": false
        },
        {
          "id": "wrong1_25",
          "emoji": "🦈",
          "labelAr": "قرش",
          "labelEn": "Shark",
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
      "characterId": "nono",
      "promptAr": "قميص، حذاء... مين زميلهم الناقص من الملابس؟",
      "promptEn": "Shirt, Shoes... which one is their missing Clothe friend?",
      "choices": [
        {
          "id": "wrong1_26",
          "emoji": "🐙",
          "labelAr": "أخطبوط",
          "labelEn": "Octopus",
          "correct": false
        },
        {
          "id": "wrong0_26",
          "emoji": "🌳",
          "labelAr": "شجرة",
          "labelEn": "Tree",
          "correct": false
        },
        {
          "id": "correct_26",
          "emoji": "👖",
          "labelAr": "بنطال",
          "labelEn": "Pants",
          "correct": true
        },
        {
          "id": "wrong2_26",
          "emoji": "🥔",
          "labelAr": "بطاطس",
          "labelEn": "Potato",
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
      "characterId": "nono",
      "promptAr": "قلم، حقيبة... مين زميلهم الناقص من الأدوات المدرسية؟",
      "promptEn": "Pencil, Backpack... which one is their missing School supplie friend?",
      "choices": [
        {
          "id": "correct_27",
          "emoji": "📖",
          "labelAr": "كتاب",
          "labelEn": "Book",
          "correct": true
        },
        {
          "id": "wrong2_27",
          "emoji": "🐧",
          "labelAr": "بطريق",
          "labelEn": "Penguin",
          "correct": false
        },
        {
          "id": "wrong0_27",
          "emoji": "🎻",
          "labelAr": "كمان",
          "labelEn": "Violin",
          "correct": false
        },
        {
          "id": "wrong1_27",
          "emoji": "🐢",
          "labelAr": "سلحفاة",
          "labelEn": "Turtle",
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
      "characterId": "nono",
      "promptAr": "كيك، دونات... مين زميلهم الناقص من الحلويات؟",
      "promptEn": "Cake, Donut... which one is their missing Dessert friend?",
      "choices": [
        {
          "id": "wrong0_28",
          "emoji": "📏",
          "labelAr": "مسطرة",
          "labelEn": "Ruler",
          "correct": false
        },
        {
          "id": "wrong1_28",
          "emoji": "🧦",
          "labelAr": "جوارب",
          "labelEn": "Socks",
          "correct": false
        },
        {
          "id": "wrong2_28",
          "emoji": "✏️",
          "labelAr": "قلم",
          "labelEn": "Pencil",
          "correct": false
        },
        {
          "id": "correct_28",
          "emoji": "🍦",
          "labelAr": "آيس كريم",
          "labelEn": "Ice cream",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission31",
    "number": 31,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "شجرة، شمس... مين زميلهم الناقص من الطبيعة؟",
      "promptEn": "Tree, Sun... which one is their missing Natur friend?",
      "choices": [
        {
          "id": "wrong0_29",
          "emoji": "✏️",
          "labelAr": "قلم",
          "labelEn": "Pencil",
          "correct": false
        },
        {
          "id": "wrong1_29",
          "emoji": "🦚",
          "labelAr": "طاووس",
          "labelEn": "Peacock",
          "correct": false
        },
        {
          "id": "correct_29",
          "emoji": "🌸",
          "labelAr": "زهرة",
          "labelEn": "Flower",
          "correct": true
        },
        {
          "id": "wrong2_29",
          "emoji": "🚌",
          "labelAr": "حافلة",
          "labelEn": "Bus",
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
      "characterId": "nono",
      "promptAr": "تفاحة، موزة... مين زميلهم الناقص من الفواكه؟",
      "promptEn": "Apple, Banana... which one is their missing Fruit friend?",
      "choices": [
        {
          "id": "wrong2_30",
          "emoji": "🥧",
          "labelAr": "فطيرة",
          "labelEn": "Pie",
          "correct": false
        },
        {
          "id": "correct_30",
          "emoji": "🍇",
          "labelAr": "عنب",
          "labelEn": "Grapes",
          "correct": true
        },
        {
          "id": "wrong0_30",
          "emoji": "📖",
          "labelAr": "كتاب",
          "labelEn": "Book",
          "correct": false
        },
        {
          "id": "wrong1_30",
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
      "characterId": "nono",
      "promptAr": "جزرة، طماطم... مين زميلهم الناقص من الخضروات؟",
      "promptEn": "Carrot, Tomato... which one is their missing Vegetable friend?",
      "choices": [
        {
          "id": "wrong2_31",
          "emoji": "🐹",
          "labelAr": "همستر",
          "labelEn": "Hamster",
          "correct": false
        },
        {
          "id": "correct_31",
          "emoji": "🥒",
          "labelAr": "خيار",
          "labelEn": "Cucumber",
          "correct": true
        },
        {
          "id": "wrong0_31",
          "emoji": "⭐",
          "labelAr": "نجمة",
          "labelEn": "Star",
          "correct": false
        },
        {
          "id": "wrong1_31",
          "emoji": "🐐",
          "labelAr": "ماعز",
          "labelEn": "Goat",
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
      "characterId": "nono",
      "promptAr": "بقرة، خروف... مين زميلهم الناقص من حيوانات المزرعة؟",
      "promptEn": "Cow, Sheep... which one is their missing Farm animal friend?",
      "choices": [
        {
          "id": "wrong0_32",
          "emoji": "🍓",
          "labelAr": "فراولة",
          "labelEn": "Strawberry",
          "correct": false
        },
        {
          "id": "wrong2_32",
          "emoji": "🐙",
          "labelAr": "أخطبوط",
          "labelEn": "Octopus",
          "correct": false
        },
        {
          "id": "wrong1_32",
          "emoji": "✂️",
          "labelAr": "مقص",
          "labelEn": "Scissors",
          "correct": false
        },
        {
          "id": "correct_32",
          "emoji": "🐔",
          "labelAr": "دجاجة",
          "labelEn": "Chicken",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission35",
    "number": 35,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "سمكة، أخطبوط... مين زميلهم الناقص من حيوانات البحر؟",
      "promptEn": "Fish, Octopus... which one is their missing Sea animal friend?",
      "choices": [
        {
          "id": "correct_33",
          "emoji": "🐢",
          "labelAr": "سلحفاة",
          "labelEn": "Turtle",
          "correct": true
        },
        {
          "id": "wrong1_33",
          "emoji": "⚪",
          "labelAr": "دائرة",
          "labelEn": "Circle",
          "correct": false
        },
        {
          "id": "wrong2_33",
          "emoji": "🦜",
          "labelAr": "ببغاء أليف",
          "labelEn": "Pet parrot",
          "correct": false
        },
        {
          "id": "wrong0_33",
          "emoji": "🥕",
          "labelAr": "جزرة",
          "labelEn": "Carrot",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission36",
    "number": 36,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "نحلة، فراشة... مين زميلهم الناقص من الحشرات؟",
      "promptEn": "Bee, Butterfly... which one is their missing Insect friend?",
      "choices": [
        {
          "id": "wrong0_34",
          "emoji": "🍍",
          "labelAr": "أناناس",
          "labelEn": "Pineapple",
          "correct": false
        },
        {
          "id": "wrong2_34",
          "emoji": "🍓",
          "labelAr": "فراولة",
          "labelEn": "Strawberry",
          "correct": false
        },
        {
          "id": "correct_34",
          "emoji": "🐜",
          "labelAr": "نملة",
          "labelEn": "Ant",
          "correct": true
        },
        {
          "id": "wrong1_34",
          "emoji": "👕",
          "labelAr": "قميص",
          "labelEn": "Shirt",
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
      "characterId": "nono",
      "promptAr": "سيارة، حافلة... مين زميلهم الناقص من المركبات؟",
      "promptEn": "Car, Bus... which one is their missing Vehicle friend?",
      "choices": [
        {
          "id": "wrong2_35",
          "emoji": "🍓",
          "labelAr": "فراولة",
          "labelEn": "Strawberry",
          "correct": false
        },
        {
          "id": "wrong0_35",
          "emoji": "🐑",
          "labelAr": "خروف",
          "labelEn": "Sheep",
          "correct": false
        },
        {
          "id": "correct_35",
          "emoji": "🚲",
          "labelAr": "دراجة",
          "labelEn": "Bike",
          "correct": true
        },
        {
          "id": "wrong1_35",
          "emoji": "🐋",
          "labelAr": "حوت",
          "labelEn": "Whale",
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
      "characterId": "nono",
      "promptAr": "ملعقة، شوكة... مين زميلهم الناقص من أدوات المطبخ؟",
      "promptEn": "Spoon, Fork... which one is their missing Kitchen tool friend?",
      "choices": [
        {
          "id": "wrong2_36",
          "emoji": "🚌",
          "labelAr": "حافلة",
          "labelEn": "Bus",
          "correct": false
        },
        {
          "id": "wrong0_36",
          "emoji": "🦜",
          "labelAr": "ببغاء",
          "labelEn": "Parrot",
          "correct": false
        },
        {
          "id": "wrong1_36",
          "emoji": "🦈",
          "labelAr": "قرش",
          "labelEn": "Shark",
          "correct": false
        },
        {
          "id": "correct_36",
          "emoji": "🔪",
          "labelAr": "سكين",
          "labelEn": "Knife",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission39",
    "number": 39,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "دائرة، مربع... مين زميلهم الناقص من الأشكال؟",
      "promptEn": "Circle, Square... which one is their missing Shape friend?",
      "choices": [
        {
          "id": "wrong1_37",
          "emoji": "🐎",
          "labelAr": "حصان",
          "labelEn": "Horse",
          "correct": false
        },
        {
          "id": "correct_37",
          "emoji": "🔺",
          "labelAr": "مثلث",
          "labelEn": "Triangle",
          "correct": true
        },
        {
          "id": "wrong0_37",
          "emoji": "🌙",
          "labelAr": "قمر",
          "labelEn": "Moon",
          "correct": false
        },
        {
          "id": "wrong2_37",
          "emoji": "🦅",
          "labelAr": "نسر",
          "labelEn": "Eagle",
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
      "characterId": "nono",
      "promptAr": "طبلة، جيتار... مين زميلهم الناقص من الآلات الموسيقية؟",
      "promptEn": "Drum, Guitar... which one is their missing Musical instrument friend?",
      "choices": [
        {
          "id": "wrong0_38",
          "emoji": "🐋",
          "labelAr": "حوت",
          "labelEn": "Whale",
          "correct": false
        },
        {
          "id": "correct_38",
          "emoji": "🎹",
          "labelAr": "بيانو",
          "labelEn": "Piano",
          "correct": true
        },
        {
          "id": "wrong1_38",
          "emoji": "🍇",
          "labelAr": "عنب",
          "labelEn": "Grapes",
          "correct": false
        },
        {
          "id": "wrong2_38",
          "emoji": "🐔",
          "labelAr": "دجاجة",
          "labelEn": "Chicken",
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
      "characterId": "nono",
      "promptAr": "بطة، بومة... مين زميلهم الناقص من الطيور؟",
      "promptEn": "Duck, Owl... which one is their missing Bird friend?",
      "choices": [
        {
          "id": "correct_39",
          "emoji": "🦜",
          "labelAr": "ببغاء",
          "labelEn": "Parrot",
          "correct": true
        },
        {
          "id": "wrong0_39",
          "emoji": "🦋",
          "labelAr": "فراشة",
          "labelEn": "Butterfly",
          "correct": false
        },
        {
          "id": "wrong1_39",
          "emoji": "✂️",
          "labelAr": "مقص",
          "labelEn": "Scissors",
          "correct": false
        },
        {
          "id": "wrong2_39",
          "emoji": "🍩",
          "labelAr": "دونات",
          "labelEn": "Donut",
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
      "characterId": "nono",
      "promptAr": "قطة، كلب... مين زميلهم الناقص من الحيوانات الأليفة؟",
      "promptEn": "Cat, Dog... which one is their missing Pet friend?",
      "choices": [
        {
          "id": "wrong1_40",
          "emoji": "🍊",
          "labelAr": "برتقالة",
          "labelEn": "Orange",
          "correct": false
        },
        {
          "id": "wrong0_40",
          "emoji": "🥒",
          "labelAr": "خيار",
          "labelEn": "Cucumber",
          "correct": false
        },
        {
          "id": "correct_40",
          "emoji": "🐰",
          "labelAr": "أرنب",
          "labelEn": "Rabbit",
          "correct": true
        },
        {
          "id": "wrong2_40",
          "emoji": "⛰️",
          "labelAr": "جبل",
          "labelEn": "Mountain",
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
      "characterId": "nono",
      "promptAr": "قميص، بنطال... مين زميلهم الناقص من الملابس؟",
      "promptEn": "Shirt, Pants... which one is their missing Clothe friend?",
      "choices": [
        {
          "id": "wrong0_41",
          "emoji": "🍌",
          "labelAr": "موزة",
          "labelEn": "Banana",
          "correct": false
        },
        {
          "id": "wrong2_41",
          "emoji": "🌸",
          "labelAr": "زهرة",
          "labelEn": "Flower",
          "correct": false
        },
        {
          "id": "correct_41",
          "emoji": "👟",
          "labelAr": "حذاء",
          "labelEn": "Shoes",
          "correct": true
        },
        {
          "id": "wrong1_41",
          "emoji": "🦚",
          "labelAr": "طاووس",
          "labelEn": "Peacock",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission44",
    "number": 44,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "قلم، كتاب... مين زميلهم الناقص من الأدوات المدرسية؟",
      "promptEn": "Pencil, Book... which one is their missing School supplie friend?",
      "choices": [
        {
          "id": "wrong2_42",
          "emoji": "🐠",
          "labelAr": "سمكة زينة",
          "labelEn": "Goldfish",
          "correct": false
        },
        {
          "id": "wrong0_42",
          "emoji": "🥒",
          "labelAr": "خيار",
          "labelEn": "Cucumber",
          "correct": false
        },
        {
          "id": "correct_42",
          "emoji": "🎒",
          "labelAr": "حقيبة",
          "labelEn": "Backpack",
          "correct": true
        },
        {
          "id": "wrong1_42",
          "emoji": "🍌",
          "labelAr": "موزة",
          "labelEn": "Banana",
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
      "characterId": "nono",
      "promptAr": "كيك، آيس كريم... مين زميلهم الناقص من الحلويات؟",
      "promptEn": "Cake, Ice cream... which one is their missing Dessert friend?",
      "choices": [
        {
          "id": "wrong0_43",
          "emoji": "🦚",
          "labelAr": "طاووس",
          "labelEn": "Peacock",
          "correct": false
        },
        {
          "id": "wrong2_43",
          "emoji": "🐢",
          "labelAr": "سلحفاة",
          "labelEn": "Turtle",
          "correct": false
        },
        {
          "id": "correct_43",
          "emoji": "🍩",
          "labelAr": "دونات",
          "labelEn": "Donut",
          "correct": true
        },
        {
          "id": "wrong1_43",
          "emoji": "⭐",
          "labelAr": "نجم البحر",
          "labelEn": "Starfish",
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
      "characterId": "nono",
      "promptAr": "شجرة، زهرة... مين زميلهم الناقص من الطبيعة؟",
      "promptEn": "Tree, Flower... which one is their missing Natur friend?",
      "choices": [
        {
          "id": "wrong2_44",
          "emoji": "🐠",
          "labelAr": "سمكة زينة",
          "labelEn": "Goldfish",
          "correct": false
        },
        {
          "id": "wrong0_44",
          "emoji": "🍽️",
          "labelAr": "طبق",
          "labelEn": "Plate",
          "correct": false
        },
        {
          "id": "correct_44",
          "emoji": "☀️",
          "labelAr": "شمس",
          "labelEn": "Sun",
          "correct": true
        },
        {
          "id": "wrong1_44",
          "emoji": "🦜",
          "labelAr": "ببغاء أليف",
          "labelEn": "Pet parrot",
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
      "characterId": "nono",
      "promptAr": "تفاحة، موزة... مين زميلهم الناقص من الفواكه؟",
      "promptEn": "Apple, Banana... which one is their missing Fruit friend?",
      "choices": [
        {
          "id": "correct_45",
          "emoji": "🍊",
          "labelAr": "برتقالة",
          "labelEn": "Orange",
          "correct": true
        },
        {
          "id": "wrong2_45",
          "emoji": "🍽️",
          "labelAr": "طبق",
          "labelEn": "Plate",
          "correct": false
        },
        {
          "id": "wrong0_45",
          "emoji": "🐞",
          "labelAr": "خنفساء",
          "labelEn": "Ladybug",
          "correct": false
        },
        {
          "id": "wrong1_45",
          "emoji": "👖",
          "labelAr": "بنطال",
          "labelEn": "Pants",
          "correct": false
        }
      ]
    }
  },
  {
    "id": "mission48",
    "number": 48,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "جزرة، طماطم... مين زميلهم الناقص من الخضروات؟",
      "promptEn": "Carrot, Tomato... which one is their missing Vegetable friend?",
      "choices": [
        {
          "id": "wrong0_46",
          "emoji": "🎸",
          "labelAr": "جيتار",
          "labelEn": "Guitar",
          "correct": false
        },
        {
          "id": "wrong2_46",
          "emoji": "🐝",
          "labelAr": "نحلة",
          "labelEn": "Bee",
          "correct": false
        },
        {
          "id": "wrong1_46",
          "emoji": "⚪",
          "labelAr": "دائرة",
          "labelEn": "Circle",
          "correct": false
        },
        {
          "id": "correct_46",
          "emoji": "🥔",
          "labelAr": "بطاطس",
          "labelEn": "Potato",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission49",
    "number": 49,
    "options": [],
    "template": {
      "characterId": "nono",
      "promptAr": "بقرة، خروف... مين زميلهم الناقص من حيوانات المزرعة؟",
      "promptEn": "Cow, Sheep... which one is their missing Farm animal friend?",
      "choices": [
        {
          "id": "correct_47",
          "emoji": "🐎",
          "labelAr": "حصان",
          "labelEn": "Horse",
          "correct": true
        },
        {
          "id": "wrong2_47",
          "emoji": "📓",
          "labelAr": "دفتر",
          "labelEn": "Notebook",
          "correct": false
        },
        {
          "id": "wrong1_47",
          "emoji": "🥄",
          "labelAr": "ملعقة",
          "labelEn": "Spoon",
          "correct": false
        },
        {
          "id": "wrong0_47",
          "emoji": "☕",
          "labelAr": "كوب",
          "labelEn": "Cup",
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
      "characterId": "nono",
      "promptAr": "سمكة، أخطبوط... مين زميلهم الناقص من حيوانات البحر؟",
      "promptEn": "Fish, Octopus... which one is their missing Sea animal friend?",
      "choices": [
        {
          "id": "correct_48",
          "emoji": "🦈",
          "labelAr": "قرش",
          "labelEn": "Shark",
          "correct": true
        },
        {
          "id": "wrong2_48",
          "emoji": "🥄",
          "labelAr": "ملعقة",
          "labelEn": "Spoon",
          "correct": false
        },
        {
          "id": "wrong0_48",
          "emoji": "💛",
          "labelAr": "قلب",
          "labelEn": "Heart",
          "correct": false
        },
        {
          "id": "wrong1_48",
          "emoji": "🍓",
          "labelAr": "فراولة",
          "labelEn": "Strawberry",
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
      "characterId": "nono",
      "promptAr": "نحلة، فراشة... مين زميلهم الناقص من الحشرات؟",
      "promptEn": "Bee, Butterfly... which one is their missing Insect friend?",
      "choices": [
        {
          "id": "wrong0_49",
          "emoji": "🦈",
          "labelAr": "قرش",
          "labelEn": "Shark",
          "correct": false
        },
        {
          "id": "wrong2_49",
          "emoji": "🔪",
          "labelAr": "سكين",
          "labelEn": "Knife",
          "correct": false
        },
        {
          "id": "wrong1_49",
          "emoji": "🐔",
          "labelAr": "دجاجة",
          "labelEn": "Chicken",
          "correct": false
        },
        {
          "id": "correct_49",
          "emoji": "🐞",
          "labelAr": "خنفساء",
          "labelEn": "Ladybug",
          "correct": true
        }
      ]
    }
  }
];
