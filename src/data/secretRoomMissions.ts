import { Mission } from '../types/mission';

export const SECRETROOM_MISSIONS: Mission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/secretroom/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    options: [
      { id: 'red', correct: true, left: 29.23, top: 84.63, width: 14.35, height: 7.48 },
      { id: 'blue', correct: false, left: 44.1, top: 84.63, width: 14.35, height: 7.48 },
      { id: 'green', correct: false, left: 58.98, top: 84.63, width: 14.35, height: 7.48 },
      { id: 'yellow', correct: false, left: 73.86, top: 84.63, width: 14.35, height: 7.48 },
    ],
    confirmZone: { left: 75.98, top: 91.81, width: 23.38, height: 3.89 },
    previousZone: { left: 1.06, top: 91.81, width: 23.91, height: 3.89 },
  },
  {
    "id": "mission2",
    "number": 2,
    "options": [],
    "template": {
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... تفاحة ناضجة 🍎",
      "promptEn": "The secret key’s color is the color of... A ripe apple 🍎",
      "choices": [
        {
          "id": "green_0",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "red_0",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": true
        },
        {
          "id": "blue_0",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "yellow_0",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... السماء الصافية 🌤️",
      "promptEn": "The secret key’s color is the color of... The clear sky 🌤️",
      "choices": [
        {
          "id": "green_1",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "yellow_1",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "blue_1",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": true
        },
        {
          "id": "red_1",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... العشب 🌱",
      "promptEn": "The secret key’s color is the color of... The grass 🌱",
      "choices": [
        {
          "id": "blue_2",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "yellow_2",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "green_2",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": true
        },
        {
          "id": "red_2",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... الشمس ☀️",
      "promptEn": "The secret key’s color is the color of... The sun ☀️",
      "choices": [
        {
          "id": "yellow_3",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": true
        },
        {
          "id": "green_3",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "blue_3",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "red_3",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... فراولة 🍓",
      "promptEn": "The secret key’s color is the color of... A strawberry 🍓",
      "choices": [
        {
          "id": "blue_4",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "green_4",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "red_4",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": true
        },
        {
          "id": "yellow_4",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... المحيط 🌊",
      "promptEn": "The secret key’s color is the color of... The ocean 🌊",
      "choices": [
        {
          "id": "red_5",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "yellow_5",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "green_5",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "blue_5",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission8",
    "number": 8,
    "options": [],
    "template": {
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... ورقة الشجر 🍃",
      "promptEn": "The secret key’s color is the color of... A tree leaf 🍃",
      "choices": [
        {
          "id": "green_6",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": true
        },
        {
          "id": "yellow_6",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "blue_6",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "red_6",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... الموزة 🍌",
      "promptEn": "The secret key’s color is the color of... A banana 🍌",
      "choices": [
        {
          "id": "red_7",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "yellow_7",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": true
        },
        {
          "id": "green_7",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "blue_7",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... طماطم 🍅",
      "promptEn": "The secret key’s color is the color of... A tomato 🍅",
      "choices": [
        {
          "id": "red_8",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": true
        },
        {
          "id": "blue_8",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "green_8",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "yellow_8",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... التوت الأزرق 🫐",
      "promptEn": "The secret key’s color is the color of... Blueberries 🫐",
      "choices": [
        {
          "id": "green_9",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "red_9",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "yellow_9",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "blue_9",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission12",
    "number": 12,
    "options": [],
    "template": {
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... التمساح 🐊",
      "promptEn": "The secret key’s color is the color of... The crocodile 🐊",
      "choices": [
        {
          "id": "yellow_10",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "green_10",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": true
        },
        {
          "id": "red_10",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "blue_10",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... الليمون 🍋",
      "promptEn": "The secret key’s color is the color of... A lemon 🍋",
      "choices": [
        {
          "id": "yellow_11",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": true
        },
        {
          "id": "green_11",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "blue_11",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "red_11",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... قلب ❤️",
      "promptEn": "The secret key’s color is the color of... A heart ❤️",
      "choices": [
        {
          "id": "red_12",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": true
        },
        {
          "id": "blue_12",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "yellow_12",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "green_12",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... الحوت 🐋",
      "promptEn": "The secret key’s color is the color of... The whale 🐋",
      "choices": [
        {
          "id": "blue_13",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": true
        },
        {
          "id": "red_13",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "green_13",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "yellow_13",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... الضفدع 🐸",
      "promptEn": "The secret key’s color is the color of... The frog 🐸",
      "choices": [
        {
          "id": "yellow_14",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "blue_14",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "red_14",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "green_14",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... الذرة 🌽",
      "promptEn": "The secret key’s color is the color of... Corn 🌽",
      "choices": [
        {
          "id": "red_15",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "yellow_15",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": true
        },
        {
          "id": "blue_15",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "green_15",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... وردة حمراء 🌹",
      "promptEn": "The secret key’s color is the color of... A red rose 🌹",
      "choices": [
        {
          "id": "green_16",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "yellow_16",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "red_16",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": true
        },
        {
          "id": "blue_16",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... قطرة الماء 💧",
      "promptEn": "The secret key’s color is the color of... A water drop 💧",
      "choices": [
        {
          "id": "yellow_17",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "blue_17",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": true
        },
        {
          "id": "red_17",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "green_17",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... البروكلي 🥦",
      "promptEn": "The secret key’s color is the color of... Broccoli 🥦",
      "choices": [
        {
          "id": "red_18",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "yellow_18",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "green_18",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": true
        },
        {
          "id": "blue_18",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... النحلة 🐝",
      "promptEn": "The secret key’s color is the color of... The bee 🐝",
      "choices": [
        {
          "id": "green_19",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "red_19",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "blue_19",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "yellow_19",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission22",
    "number": 22,
    "options": [],
    "template": {
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... فلفل حار 🌶️",
      "promptEn": "The secret key’s color is the color of... A hot pepper 🌶️",
      "choices": [
        {
          "id": "red_20",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": true
        },
        {
          "id": "green_20",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "yellow_20",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "blue_20",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... طائر أزرق صغير 🐦",
      "promptEn": "The secret key’s color is the color of... A little blue bird 🐦",
      "choices": [
        {
          "id": "red_21",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "green_21",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "blue_21",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": true
        },
        {
          "id": "yellow_21",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... الخيار 🥒",
      "promptEn": "The secret key’s color is the color of... A cucumber 🥒",
      "choices": [
        {
          "id": "green_22",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": true
        },
        {
          "id": "red_22",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "yellow_22",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "blue_22",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... الكتكوت 🐤",
      "promptEn": "The secret key’s color is the color of... A baby chick 🐤",
      "choices": [
        {
          "id": "blue_23",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "red_23",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "green_23",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "yellow_23",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission26",
    "number": 26,
    "options": [],
    "template": {
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... كرزة 🍒",
      "promptEn": "The secret key’s color is the color of... A cherry 🍒",
      "choices": [
        {
          "id": "yellow_24",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "red_24",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": true
        },
        {
          "id": "blue_24",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "green_24",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... الدلفين 🐬",
      "promptEn": "The secret key’s color is the color of... The dolphin 🐬",
      "choices": [
        {
          "id": "green_25",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "blue_25",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": true
        },
        {
          "id": "yellow_25",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "red_25",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... الديناصور الصغير 🦕",
      "promptEn": "The secret key’s color is the color of... A little dinosaur 🦕",
      "choices": [
        {
          "id": "blue_26",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "yellow_26",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "red_26",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "green_26",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission29",
    "number": 29,
    "options": [],
    "template": {
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... نجمة ⭐",
      "promptEn": "The secret key’s color is the color of... A star ⭐",
      "choices": [
        {
          "id": "red_27",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "green_27",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "yellow_27",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": true
        },
        {
          "id": "blue_27",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... سيارة إطفاء 🚒",
      "promptEn": "The secret key’s color is the color of... A fire truck 🚒",
      "choices": [
        {
          "id": "green_28",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "red_28",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": true
        },
        {
          "id": "blue_28",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "yellow_28",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... كوكب الأرض من الفضاء 🌍",
      "promptEn": "The secret key’s color is the color of... Earth seen from space 🌍",
      "choices": [
        {
          "id": "red_29",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "green_29",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "yellow_29",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "blue_29",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission32",
    "number": 32,
    "options": [],
    "template": {
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... إشارة المرور الخضراء 🚦",
      "promptEn": "The secret key’s color is the color of... The green traffic light 🚦",
      "choices": [
        {
          "id": "red_30",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "blue_30",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "yellow_30",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "green_30",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission33",
    "number": 33,
    "options": [],
    "template": {
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... قطعة الجبنة 🧀",
      "promptEn": "The secret key’s color is the color of... A piece of cheese 🧀",
      "choices": [
        {
          "id": "yellow_31",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": true
        },
        {
          "id": "red_31",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "blue_31",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "green_31",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... بطيخ من الداخل 🍉",
      "promptEn": "The secret key’s color is the color of... A watermelon inside 🍉",
      "choices": [
        {
          "id": "red_32",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": true
        },
        {
          "id": "yellow_32",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "blue_32",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "green_32",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... نجمة البحر الزرقاء ⭐",
      "promptEn": "The secret key’s color is the color of... A blue starfish ⭐",
      "choices": [
        {
          "id": "yellow_33",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "green_33",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "blue_33",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": true
        },
        {
          "id": "red_33",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... الزمرد 💚",
      "promptEn": "The secret key’s color is the color of... An emerald 💚",
      "choices": [
        {
          "id": "yellow_34",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "blue_34",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "green_34",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": true
        },
        {
          "id": "red_34",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... عباد الشمس 🌻",
      "promptEn": "The secret key’s color is the color of... A sunflower 🌻",
      "choices": [
        {
          "id": "blue_35",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "yellow_35",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": true
        },
        {
          "id": "red_35",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "green_35",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... قبعة بابا نويل 🎅",
      "promptEn": "The secret key’s color is the color of... Santa’s hat 🎅",
      "choices": [
        {
          "id": "red_36",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": true
        },
        {
          "id": "blue_36",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "yellow_36",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "green_36",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... الجينز 👖",
      "promptEn": "The secret key’s color is the color of... Blue jeans 👖",
      "choices": [
        {
          "id": "blue_37",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": true
        },
        {
          "id": "yellow_37",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "green_37",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "red_37",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... السلحفاة 🐢",
      "promptEn": "The secret key’s color is the color of... The turtle 🐢",
      "choices": [
        {
          "id": "green_38",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": true
        },
        {
          "id": "red_38",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "yellow_38",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "blue_38",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... تاج الملك الذهبي 👑",
      "promptEn": "The secret key’s color is the color of... The king’s golden crown 👑",
      "choices": [
        {
          "id": "blue_39",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "red_39",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "yellow_39",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": true
        },
        {
          "id": "green_39",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... تفاحة ناضجة 🍎",
      "promptEn": "The secret key’s color is the color of... A ripe apple 🍎",
      "choices": [
        {
          "id": "yellow_40",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "red_40",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": true
        },
        {
          "id": "blue_40",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "green_40",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... السماء الصافية 🌤️",
      "promptEn": "The secret key’s color is the color of... The clear sky 🌤️",
      "choices": [
        {
          "id": "green_41",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "blue_41",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": true
        },
        {
          "id": "yellow_41",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "red_41",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... العشب 🌱",
      "promptEn": "The secret key’s color is the color of... The grass 🌱",
      "choices": [
        {
          "id": "red_42",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "green_42",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": true
        },
        {
          "id": "yellow_42",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "blue_42",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... الشمس ☀️",
      "promptEn": "The secret key’s color is the color of... The sun ☀️",
      "choices": [
        {
          "id": "green_43",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "blue_43",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "red_43",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "yellow_43",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission46",
    "number": 46,
    "options": [],
    "template": {
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... فراولة 🍓",
      "promptEn": "The secret key’s color is the color of... A strawberry 🍓",
      "choices": [
        {
          "id": "green_44",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "red_44",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": true
        },
        {
          "id": "blue_44",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "yellow_44",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... المحيط 🌊",
      "promptEn": "The secret key’s color is the color of... The ocean 🌊",
      "choices": [
        {
          "id": "blue_45",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": true
        },
        {
          "id": "green_45",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "yellow_45",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "red_45",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... ورقة الشجر 🍃",
      "promptEn": "The secret key’s color is the color of... A tree leaf 🍃",
      "choices": [
        {
          "id": "red_46",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "yellow_46",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "blue_46",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "green_46",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... الموزة 🍌",
      "promptEn": "The secret key’s color is the color of... A banana 🍌",
      "choices": [
        {
          "id": "blue_47",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": false
        },
        {
          "id": "red_47",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "yellow_47",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": true
        },
        {
          "id": "green_47",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... طماطم 🍅",
      "promptEn": "The secret key’s color is the color of... A tomato 🍅",
      "choices": [
        {
          "id": "red_48",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": true
        },
        {
          "id": "green_48",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "yellow_48",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        },
        {
          "id": "blue_48",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
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
      "characterId": "murad",
      "promptAr": "لون المفتاح السري هو لون... التوت الأزرق 🫐",
      "promptEn": "The secret key’s color is the color of... Blueberries 🫐",
      "choices": [
        {
          "id": "green_49",
          "emoji": "🔑",
          "labelAr": "المفتاح الأخضر",
          "labelEn": "Green key",
          "correct": false
        },
        {
          "id": "red_49",
          "emoji": "🔑",
          "labelAr": "المفتاح الأحمر",
          "labelEn": "Red key",
          "correct": false
        },
        {
          "id": "blue_49",
          "emoji": "🔑",
          "labelAr": "المفتاح الأزرق",
          "labelEn": "Blue key",
          "correct": true
        },
        {
          "id": "yellow_49",
          "emoji": "🔑",
          "labelAr": "المفتاح الأصفر",
          "labelEn": "Yellow key",
          "correct": false
        }
      ]
    }
  }
];
