import { Mission } from '../types/mission';

export const DETECTIVE_MISSIONS: Mission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/detective/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    options: [
      { id: 'car', correct: true, left: 24.23, top: 68.18, width: 15.3, height: 12.56 },
      { id: 'cup', correct: false, left: 40.38, top: 68.18, width: 15.3, height: 12.56 },
      { id: 'lens', correct: false, left: 56.11, top: 68.18, width: 15.3, height: 12.56 },
      { id: 'plant', correct: false, left: 71.84, top: 68.18, width: 15.3, height: 12.56 },
    ],
    confirmZone: { left: 70.67, top: 89.42, width: 27.63, height: 8.67 },
    previousZone: { left: 1.59, top: 89.42, width: 26.03, height: 8.67 },
  },
  {
    "id": "mission2",
    "number": 2,
    "options": [],
    "template": {
      "characterId": "alaa",
      "promptAr": "عندي أطول رقبة في الغابة... من أنا؟",
      "promptEn": "I have the longest neck in the jungle... who am I?",
      "choices": [
        {
          "id": "jellyfish_0",
          "emoji": "🪼",
          "labelAr": "قنديل البحر",
          "labelEn": "Jellyfish",
          "correct": false
        },
        {
          "id": "duck_0",
          "emoji": "🦆",
          "labelAr": "بطة",
          "labelEn": "Duck",
          "correct": false
        },
        {
          "id": "giraffe_0",
          "emoji": "🦒",
          "labelAr": "زرافة",
          "labelEn": "Giraffe",
          "correct": true
        },
        {
          "id": "monkey_0",
          "emoji": "🐒",
          "labelAr": "قرد",
          "labelEn": "Monkey",
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
      "characterId": "alaa",
      "promptAr": "أنام معلقاً بالمقلوب في الكهف... من أنا؟",
      "promptEn": "I sleep upside down in a cave... who am I?",
      "choices": [
        {
          "id": "dolphin_1",
          "emoji": "🐬",
          "labelAr": "دلفين",
          "labelEn": "Dolphin",
          "correct": false
        },
        {
          "id": "duck_1",
          "emoji": "🦆",
          "labelAr": "بطة",
          "labelEn": "Duck",
          "correct": false
        },
        {
          "id": "bat_1",
          "emoji": "🦇",
          "labelAr": "خفاش",
          "labelEn": "Bat",
          "correct": true
        },
        {
          "id": "turtle_1",
          "emoji": "🐢",
          "labelAr": "سلحفاة",
          "labelEn": "Turtle",
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
      "characterId": "alaa",
      "promptAr": "أبني بيتي من الشمع وأصنع العسل... من أنا؟",
      "promptEn": "I build my home from wax and make honey... who am I?",
      "choices": [
        {
          "id": "bat_2",
          "emoji": "🦇",
          "labelAr": "خفاش",
          "labelEn": "Bat",
          "correct": false
        },
        {
          "id": "fox_2",
          "emoji": "🦊",
          "labelAr": "ثعلب",
          "labelEn": "Fox",
          "correct": false
        },
        {
          "id": "bee_2",
          "emoji": "🐝",
          "labelAr": "نحلة",
          "labelEn": "Bee",
          "correct": true
        },
        {
          "id": "ant_2",
          "emoji": "🐜",
          "labelAr": "نملة",
          "labelEn": "Ant",
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
      "characterId": "alaa",
      "promptAr": "أستيقظ في الليل وأرى في الظلام... من أنا؟",
      "promptEn": "I wake at night and see in the dark... who am I?",
      "choices": [
        {
          "id": "zebra_3",
          "emoji": "🦓",
          "labelAr": "حمار وحشي",
          "labelEn": "Zebra",
          "correct": false
        },
        {
          "id": "whale_3",
          "emoji": "🐋",
          "labelAr": "حوت",
          "labelEn": "Whale",
          "correct": false
        },
        {
          "id": "owl_3",
          "emoji": "🦉",
          "labelAr": "بومة",
          "labelEn": "Owl",
          "correct": true
        },
        {
          "id": "bee_3",
          "emoji": "🐝",
          "labelAr": "نحلة",
          "labelEn": "Bee",
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
      "characterId": "alaa",
      "promptAr": "أحمل بيتي فوق ظهري... من أنا؟",
      "promptEn": "I carry my home on my back... who am I?",
      "choices": [
        {
          "id": "turtle_4",
          "emoji": "🐢",
          "labelAr": "سلحفاة",
          "labelEn": "Turtle",
          "correct": true
        },
        {
          "id": "giraffe_4",
          "emoji": "🦒",
          "labelAr": "زرافة",
          "labelEn": "Giraffe",
          "correct": false
        },
        {
          "id": "sheep_4",
          "emoji": "🐑",
          "labelAr": "خروف",
          "labelEn": "Sheep",
          "correct": false
        },
        {
          "id": "jellyfish_4",
          "emoji": "🪼",
          "labelAr": "قنديل البحر",
          "labelEn": "Jellyfish",
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
      "characterId": "alaa",
      "promptAr": "لي أنف طويل جداً اسمه خرطوم... من أنا؟",
      "promptEn": "I have a very long nose called a trunk... who am I?",
      "choices": [
        {
          "id": "wolf_5",
          "emoji": "🐺",
          "labelAr": "ذئب",
          "labelEn": "Wolf",
          "correct": false
        },
        {
          "id": "penguin_5",
          "emoji": "🐧",
          "labelAr": "بطريق",
          "labelEn": "Penguin",
          "correct": false
        },
        {
          "id": "elephant_5",
          "emoji": "🐘",
          "labelAr": "فيل",
          "labelEn": "Elephant",
          "correct": true
        },
        {
          "id": "turtle_5",
          "emoji": "🐢",
          "labelAr": "سلحفاة",
          "labelEn": "Turtle",
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
      "characterId": "alaa",
      "promptAr": "أحمل صغيري في جيب على بطني... من أنا؟",
      "promptEn": "I carry my baby in a pouch... who am I?",
      "choices": [
        {
          "id": "butterfly_6",
          "emoji": "🦋",
          "labelAr": "فراشة",
          "labelEn": "Butterfly",
          "correct": false
        },
        {
          "id": "bat_6",
          "emoji": "🦇",
          "labelAr": "خفاش",
          "labelEn": "Bat",
          "correct": false
        },
        {
          "id": "woodpecker_6",
          "emoji": "🐦",
          "labelAr": "نقار خشب",
          "labelEn": "Woodpecker",
          "correct": false
        },
        {
          "id": "kangaroo_6",
          "emoji": "🦘",
          "labelAr": "كنغر",
          "labelEn": "Kangaroo",
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
      "characterId": "alaa",
      "promptAr": "أفتح ريشي الملون مثل المروحة... من أنا؟",
      "promptEn": "I open my colorful feathers like a fan... who am I?",
      "choices": [
        {
          "id": "hedgehog_7",
          "emoji": "🦔",
          "labelAr": "قنفذ",
          "labelEn": "Hedgehog",
          "correct": false
        },
        {
          "id": "zebra_7",
          "emoji": "🦓",
          "labelAr": "حمار وحشي",
          "labelEn": "Zebra",
          "correct": false
        },
        {
          "id": "seal_7",
          "emoji": "🦭",
          "labelAr": "فقمة",
          "labelEn": "Seal",
          "correct": false
        },
        {
          "id": "peacock_7",
          "emoji": "🦚",
          "labelAr": "طاووس",
          "labelEn": "Peacock",
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
      "characterId": "alaa",
      "promptAr": "أغيّر لوني حسب المكان من حولي... من أنا؟",
      "promptEn": "I change my color to match my surroundings... who am I?",
      "choices": [
        {
          "id": "chameleon_8",
          "emoji": "🦎",
          "labelAr": "حرباء",
          "labelEn": "Chameleon",
          "correct": true
        },
        {
          "id": "dog_8",
          "emoji": "🐶",
          "labelAr": "كلب",
          "labelEn": "Dog",
          "correct": false
        },
        {
          "id": "octopus_8",
          "emoji": "🐙",
          "labelAr": "أخطبوط",
          "labelEn": "Octopus",
          "correct": false
        },
        {
          "id": "cat_8",
          "emoji": "🐱",
          "labelAr": "قطة",
          "labelEn": "Cat",
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
      "characterId": "alaa",
      "promptAr": "لي ثمانية أذرع وأسبح في البحر... من أنا؟",
      "promptEn": "I have eight arms and swim in the sea... who am I?",
      "choices": [
        {
          "id": "chameleon_9",
          "emoji": "🦎",
          "labelAr": "حرباء",
          "labelEn": "Chameleon",
          "correct": false
        },
        {
          "id": "tiger_9",
          "emoji": "🐯",
          "labelAr": "نمر",
          "labelEn": "Tiger",
          "correct": false
        },
        {
          "id": "fox_9",
          "emoji": "🦊",
          "labelAr": "ثعلب",
          "labelEn": "Fox",
          "correct": false
        },
        {
          "id": "octopus_9",
          "emoji": "🐙",
          "labelAr": "أخطبوط",
          "labelEn": "Octopus",
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
      "characterId": "alaa",
      "promptAr": "لا أطير لكنني أسبح وأعيش في البرد... من أنا؟",
      "promptEn": "I can’t fly but I swim and live in the cold... who am I?",
      "choices": [
        {
          "id": "bee_10",
          "emoji": "🐝",
          "labelAr": "نحلة",
          "labelEn": "Bee",
          "correct": false
        },
        {
          "id": "octopus_10",
          "emoji": "🐙",
          "labelAr": "أخطبوط",
          "labelEn": "Octopus",
          "correct": false
        },
        {
          "id": "monkey_10",
          "emoji": "🐒",
          "labelAr": "قرد",
          "labelEn": "Monkey",
          "correct": false
        },
        {
          "id": "penguin_10",
          "emoji": "🐧",
          "labelAr": "بطريق",
          "labelEn": "Penguin",
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
      "characterId": "alaa",
      "promptAr": "أخزن المكسرات استعداداً للشتاء... من أنا؟",
      "promptEn": "I store nuts to get ready for winter... who am I?",
      "choices": [
        {
          "id": "rooster_11",
          "emoji": "🐓",
          "labelAr": "ديك",
          "labelEn": "Rooster",
          "correct": false
        },
        {
          "id": "squirrel_11",
          "emoji": "🐿️",
          "labelAr": "سنجاب",
          "labelEn": "Squirrel",
          "correct": true
        },
        {
          "id": "goat_11",
          "emoji": "🐐",
          "labelAr": "ماعز",
          "labelEn": "Goat",
          "correct": false
        },
        {
          "id": "butterfly_11",
          "emoji": "🦋",
          "labelAr": "فراشة",
          "labelEn": "Butterfly",
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
      "characterId": "alaa",
      "promptAr": "أنسج بيتي من الخيوط... من أنا؟",
      "promptEn": "I weave my home from threads... who am I?",
      "choices": [
        {
          "id": "ladybug_12",
          "emoji": "🐞",
          "labelAr": "دعسوقة",
          "labelEn": "Ladybug",
          "correct": false
        },
        {
          "id": "monkey_12",
          "emoji": "🐒",
          "labelAr": "قرد",
          "labelEn": "Monkey",
          "correct": false
        },
        {
          "id": "kangaroo_12",
          "emoji": "🦘",
          "labelAr": "كنغر",
          "labelEn": "Kangaroo",
          "correct": false
        },
        {
          "id": "spider_12",
          "emoji": "🕷️",
          "labelAr": "عنكبوت",
          "labelEn": "Spider",
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
      "characterId": "alaa",
      "promptAr": "أخزن الماء في سنامي وأعيش في الصحراء... من أنا؟",
      "promptEn": "I store water in my hump and live in the desert... who am I?",
      "choices": [
        {
          "id": "octopus_13",
          "emoji": "🐙",
          "labelAr": "أخطبوط",
          "labelEn": "Octopus",
          "correct": false
        },
        {
          "id": "camel_13",
          "emoji": "🐫",
          "labelAr": "جمل",
          "labelEn": "Camel",
          "correct": true
        },
        {
          "id": "goat_13",
          "emoji": "🐐",
          "labelAr": "ماعز",
          "labelEn": "Goat",
          "correct": false
        },
        {
          "id": "lion_13",
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
      "characterId": "alaa",
      "promptAr": "أنا ملك الغابة وصوتي زئير قوي... من أنا؟",
      "promptEn": "I’m the king of the jungle with a mighty roar... who am I?",
      "choices": [
        {
          "id": "lion_14",
          "emoji": "🦁",
          "labelAr": "أسد",
          "labelEn": "Lion",
          "correct": true
        },
        {
          "id": "dolphin_14",
          "emoji": "🐬",
          "labelAr": "دلفين",
          "labelEn": "Dolphin",
          "correct": false
        },
        {
          "id": "seahorse_14",
          "emoji": "🐴",
          "labelAr": "فرس البحر",
          "labelEn": "Seahorse",
          "correct": false
        },
        {
          "id": "peacock_14",
          "emoji": "🦚",
          "labelAr": "طاووس",
          "labelEn": "Peacock",
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
      "characterId": "alaa",
      "promptAr": "أنا ذكي جداً ولوني برتقالي... من أنا؟",
      "promptEn": "I’m very clever and orange-colored... who am I?",
      "choices": [
        {
          "id": "koala_15",
          "emoji": "🐨",
          "labelAr": "كوالا",
          "labelEn": "Koala",
          "correct": false
        },
        {
          "id": "ladybug_15",
          "emoji": "🐞",
          "labelAr": "دعسوقة",
          "labelEn": "Ladybug",
          "correct": false
        },
        {
          "id": "panda_15",
          "emoji": "🐼",
          "labelAr": "باندا",
          "labelEn": "Panda",
          "correct": false
        },
        {
          "id": "fox_15",
          "emoji": "🦊",
          "labelAr": "ثعلب",
          "labelEn": "Fox",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission18",
    "number": 18,
    "options": [],
    "template": {
      "characterId": "alaa",
      "promptAr": "أحمل بيتي الحلزوني وأتحرك ببطء... من أنا؟",
      "promptEn": "I carry my spiral home and move slowly... who am I?",
      "choices": [
        {
          "id": "snail_16",
          "emoji": "🐌",
          "labelAr": "حلزون",
          "labelEn": "Snail",
          "correct": true
        },
        {
          "id": "parrot_16",
          "emoji": "🦜",
          "labelAr": "ببغاء",
          "labelEn": "Parrot",
          "correct": false
        },
        {
          "id": "seahorse_16",
          "emoji": "🐴",
          "labelAr": "فرس البحر",
          "labelEn": "Seahorse",
          "correct": false
        },
        {
          "id": "bee_16",
          "emoji": "🐝",
          "labelAr": "نحلة",
          "labelEn": "Bee",
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
      "characterId": "alaa",
      "promptAr": "أنقر الأشجار بمنقاري بقوة... من أنا؟",
      "promptEn": "I peck trees hard with my beak... who am I?",
      "choices": [
        {
          "id": "crab_17",
          "emoji": "🦀",
          "labelAr": "سلطعون",
          "labelEn": "Crab",
          "correct": false
        },
        {
          "id": "elephant_17",
          "emoji": "🐘",
          "labelAr": "فيل",
          "labelEn": "Elephant",
          "correct": false
        },
        {
          "id": "woodpecker_17",
          "emoji": "🐦",
          "labelAr": "نقار خشب",
          "labelEn": "Woodpecker",
          "correct": true
        },
        {
          "id": "zebra_17",
          "emoji": "🦓",
          "labelAr": "حمار وحشي",
          "labelEn": "Zebra",
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
      "characterId": "alaa",
      "promptAr": "أقفز عالياً وأعيش قرب الماء... من أنا؟",
      "promptEn": "I jump high and live near water... who am I?",
      "choices": [
        {
          "id": "panda_18",
          "emoji": "🐼",
          "labelAr": "باندا",
          "labelEn": "Panda",
          "correct": false
        },
        {
          "id": "chameleon_18",
          "emoji": "🦎",
          "labelAr": "حرباء",
          "labelEn": "Chameleon",
          "correct": false
        },
        {
          "id": "frog_18",
          "emoji": "🐸",
          "labelAr": "ضفدع",
          "labelEn": "Frog",
          "correct": true
        },
        {
          "id": "turtle_18",
          "emoji": "🐢",
          "labelAr": "سلحفاة",
          "labelEn": "Turtle",
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
      "characterId": "alaa",
      "promptAr": "لي أسنان حادة وأسبح في المحيط... من أنا؟",
      "promptEn": "I have sharp teeth and swim in the ocean... who am I?",
      "choices": [
        {
          "id": "koala_19",
          "emoji": "🐨",
          "labelAr": "كوالا",
          "labelEn": "Koala",
          "correct": false
        },
        {
          "id": "seahorse_19",
          "emoji": "🐴",
          "labelAr": "فرس البحر",
          "labelEn": "Seahorse",
          "correct": false
        },
        {
          "id": "shark_19",
          "emoji": "🦈",
          "labelAr": "قرش",
          "labelEn": "Shark",
          "correct": true
        },
        {
          "id": "camel_19",
          "emoji": "🐫",
          "labelAr": "جمل",
          "labelEn": "Camel",
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
      "characterId": "alaa",
      "promptAr": "لي أذنان طويلتان وأقفز بسرعة... من أنا؟",
      "promptEn": "I have long ears and hop fast... who am I?",
      "choices": [
        {
          "id": "rooster_20",
          "emoji": "🐓",
          "labelAr": "ديك",
          "labelEn": "Rooster",
          "correct": false
        },
        {
          "id": "rabbit_20",
          "emoji": "🐰",
          "labelAr": "أرنب",
          "labelEn": "Rabbit",
          "correct": true
        },
        {
          "id": "cat_20",
          "emoji": "🐱",
          "labelAr": "قطة",
          "labelEn": "Cat",
          "correct": false
        },
        {
          "id": "lion_20",
          "emoji": "🦁",
          "labelAr": "أسد",
          "labelEn": "Lion",
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
      "characterId": "alaa",
      "promptAr": "جسمي مخطط بالأبيض والأسود... من أنا؟",
      "promptEn": "My body has black and white stripes... who am I?",
      "choices": [
        {
          "id": "rabbit_21",
          "emoji": "🐰",
          "labelAr": "أرنب",
          "labelEn": "Rabbit",
          "correct": false
        },
        {
          "id": "bee_21",
          "emoji": "🐝",
          "labelAr": "نحلة",
          "labelEn": "Bee",
          "correct": false
        },
        {
          "id": "zebra_21",
          "emoji": "🦓",
          "labelAr": "حمار وحشي",
          "labelEn": "Zebra",
          "correct": true
        },
        {
          "id": "lion_21",
          "emoji": "🦁",
          "labelAr": "أسد",
          "labelEn": "Lion",
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
      "characterId": "alaa",
      "promptAr": "أنام كثيراً وآكل أوراق الأوكالبتوس... من أنا؟",
      "promptEn": "I sleep a lot and eat eucalyptus leaves... who am I?",
      "choices": [
        {
          "id": "koala_22",
          "emoji": "🐨",
          "labelAr": "كوالا",
          "labelEn": "Koala",
          "correct": true
        },
        {
          "id": "seahorse_22",
          "emoji": "🐴",
          "labelAr": "فرس البحر",
          "labelEn": "Seahorse",
          "correct": false
        },
        {
          "id": "tiger_22",
          "emoji": "🐯",
          "labelAr": "نمر",
          "labelEn": "Tiger",
          "correct": false
        },
        {
          "id": "elephant_22",
          "emoji": "🐘",
          "labelAr": "فيل",
          "labelEn": "Elephant",
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
      "characterId": "alaa",
      "promptAr": "أمشي بجانب وأحمل مقصين... من أنا؟",
      "promptEn": "I walk sideways and carry two pincers... who am I?",
      "choices": [
        {
          "id": "crab_23",
          "emoji": "🦀",
          "labelAr": "سلطعون",
          "labelEn": "Crab",
          "correct": true
        },
        {
          "id": "frog_23",
          "emoji": "🐸",
          "labelAr": "ضفدع",
          "labelEn": "Frog",
          "correct": false
        },
        {
          "id": "monkey_23",
          "emoji": "🐒",
          "labelAr": "قرد",
          "labelEn": "Monkey",
          "correct": false
        },
        {
          "id": "flamingo_23",
          "emoji": "🦩",
          "labelAr": "فلامنغو",
          "labelEn": "Flamingo",
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
      "characterId": "alaa",
      "promptAr": "أطير عالياً وبصري حاد جداً... من أنا؟",
      "promptEn": "I fly high and have very sharp eyesight... who am I?",
      "choices": [
        {
          "id": "owl_24",
          "emoji": "🦉",
          "labelAr": "بومة",
          "labelEn": "Owl",
          "correct": false
        },
        {
          "id": "eagle_24",
          "emoji": "🦅",
          "labelAr": "نسر",
          "labelEn": "Eagle",
          "correct": true
        },
        {
          "id": "crab_24",
          "emoji": "🦀",
          "labelAr": "سلطعون",
          "labelEn": "Crab",
          "correct": false
        },
        {
          "id": "cat_24",
          "emoji": "🐱",
          "labelAr": "قطة",
          "labelEn": "Cat",
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
      "characterId": "alaa",
      "promptAr": "أنا ذكي وأحب القفز فوق الماء... من أنا؟",
      "promptEn": "I’m smart and love leaping over the water... who am I?",
      "choices": [
        {
          "id": "snail_25",
          "emoji": "🐌",
          "labelAr": "حلزون",
          "labelEn": "Snail",
          "correct": false
        },
        {
          "id": "dolphin_25",
          "emoji": "🐬",
          "labelAr": "دلفين",
          "labelEn": "Dolphin",
          "correct": true
        },
        {
          "id": "seal_25",
          "emoji": "🦭",
          "labelAr": "فقمة",
          "labelEn": "Seal",
          "correct": false
        },
        {
          "id": "zebra_25",
          "emoji": "🦓",
          "labelAr": "حمار وحشي",
          "labelEn": "Zebra",
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
      "characterId": "alaa",
      "promptAr": "جسمي مغطى بأشواك للحماية... من أنا؟",
      "promptEn": "My body is covered in spikes for protection... who am I?",
      "choices": [
        {
          "id": "eagle_26",
          "emoji": "🦅",
          "labelAr": "نسر",
          "labelEn": "Eagle",
          "correct": false
        },
        {
          "id": "hedgehog_26",
          "emoji": "🦔",
          "labelAr": "قنفذ",
          "labelEn": "Hedgehog",
          "correct": true
        },
        {
          "id": "tiger_26",
          "emoji": "🐯",
          "labelAr": "نمر",
          "labelEn": "Tiger",
          "correct": false
        },
        {
          "id": "crab_26",
          "emoji": "🦀",
          "labelAr": "سلطعون",
          "labelEn": "Crab",
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
      "characterId": "alaa",
      "promptAr": "أقف على رجل واحدة ولوني وردي... من أنا؟",
      "promptEn": "I stand on one leg and I’m pink... who am I?",
      "choices": [
        {
          "id": "butterfly_27",
          "emoji": "🦋",
          "labelAr": "فراشة",
          "labelEn": "Butterfly",
          "correct": false
        },
        {
          "id": "zebra_27",
          "emoji": "🦓",
          "labelAr": "حمار وحشي",
          "labelEn": "Zebra",
          "correct": false
        },
        {
          "id": "bee_27",
          "emoji": "🐝",
          "labelAr": "نحلة",
          "labelEn": "Bee",
          "correct": false
        },
        {
          "id": "flamingo_27",
          "emoji": "🦩",
          "labelAr": "فلامنغو",
          "labelEn": "Flamingo",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission30",
    "number": 30,
    "options": [],
    "template": {
      "characterId": "alaa",
      "promptAr": "أعطي الحليب وأقول موووو... من أنا؟",
      "promptEn": "I give milk and say moo... who am I?",
      "choices": [
        {
          "id": "bee_28",
          "emoji": "🐝",
          "labelAr": "نحلة",
          "labelEn": "Bee",
          "correct": false
        },
        {
          "id": "horse_28",
          "emoji": "🐎",
          "labelAr": "حصان",
          "labelEn": "Horse",
          "correct": false
        },
        {
          "id": "cow_28",
          "emoji": "🐄",
          "labelAr": "بقرة",
          "labelEn": "Cow",
          "correct": true
        },
        {
          "id": "sheep_28",
          "emoji": "🐑",
          "labelAr": "خروف",
          "labelEn": "Sheep",
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
      "characterId": "alaa",
      "promptAr": "أوقظ الجميع صباحاً بصياحي... من أنا؟",
      "promptEn": "I wake everyone up in the morning with my crow... who am I?",
      "choices": [
        {
          "id": "dolphin_29",
          "emoji": "🐬",
          "labelAr": "دلفين",
          "labelEn": "Dolphin",
          "correct": false
        },
        {
          "id": "octopus_29",
          "emoji": "🐙",
          "labelAr": "أخطبوط",
          "labelEn": "Octopus",
          "correct": false
        },
        {
          "id": "owl_29",
          "emoji": "🦉",
          "labelAr": "بومة",
          "labelEn": "Owl",
          "correct": false
        },
        {
          "id": "rooster_29",
          "emoji": "🐓",
          "labelAr": "ديك",
          "labelEn": "Rooster",
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
      "characterId": "alaa",
      "promptAr": "أنا صغيرة لكن أحمل أوزاناً أكبر مني بكثير... من أنا؟",
      "promptEn": "I’m tiny but I carry things much heavier than me... who am I?",
      "choices": [
        {
          "id": "wolf_30",
          "emoji": "🐺",
          "labelAr": "ذئب",
          "labelEn": "Wolf",
          "correct": false
        },
        {
          "id": "duck_30",
          "emoji": "🦆",
          "labelAr": "بطة",
          "labelEn": "Duck",
          "correct": false
        },
        {
          "id": "bee_30",
          "emoji": "🐝",
          "labelAr": "نحلة",
          "labelEn": "Bee",
          "correct": false
        },
        {
          "id": "ant_30",
          "emoji": "🐜",
          "labelAr": "نملة",
          "labelEn": "Ant",
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
      "characterId": "alaa",
      "promptAr": "أسبح في البركة وأقول قاق قاق... من أنا؟",
      "promptEn": "I swim in the pond and say quack quack... who am I?",
      "choices": [
        {
          "id": "duck_31",
          "emoji": "🦆",
          "labelAr": "بطة",
          "labelEn": "Duck",
          "correct": true
        },
        {
          "id": "bear_31",
          "emoji": "🐻",
          "labelAr": "دب",
          "labelEn": "Bear",
          "correct": false
        },
        {
          "id": "parrot_31",
          "emoji": "🦜",
          "labelAr": "ببغاء",
          "labelEn": "Parrot",
          "correct": false
        },
        {
          "id": "lion_31",
          "emoji": "🦁",
          "labelAr": "أسد",
          "labelEn": "Lion",
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
      "characterId": "alaa",
      "promptAr": "صوفي ناعم ويُصنع منه الملابس الدافئة... من أنا؟",
      "promptEn": "My wool is soft and used to make warm clothes... who am I?",
      "choices": [
        {
          "id": "sheep_32",
          "emoji": "🐑",
          "labelAr": "خروف",
          "labelEn": "Sheep",
          "correct": true
        },
        {
          "id": "squirrel_32",
          "emoji": "🐿️",
          "labelAr": "سنجاب",
          "labelEn": "Squirrel",
          "correct": false
        },
        {
          "id": "cow_32",
          "emoji": "🐄",
          "labelAr": "بقرة",
          "labelEn": "Cow",
          "correct": false
        },
        {
          "id": "tiger_32",
          "emoji": "🐯",
          "labelAr": "نمر",
          "labelEn": "Tiger",
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
      "characterId": "alaa",
      "promptAr": "أجري بسرعة كبيرة ويركبني الناس... من أنا؟",
      "promptEn": "I run very fast and people ride me... who am I?",
      "choices": [
        {
          "id": "octopus_33",
          "emoji": "🐙",
          "labelAr": "أخطبوط",
          "labelEn": "Octopus",
          "correct": false
        },
        {
          "id": "duck_33",
          "emoji": "🦆",
          "labelAr": "بطة",
          "labelEn": "Duck",
          "correct": false
        },
        {
          "id": "lion_33",
          "emoji": "🦁",
          "labelAr": "أسد",
          "labelEn": "Lion",
          "correct": false
        },
        {
          "id": "horse_33",
          "emoji": "🐎",
          "labelAr": "حصان",
          "labelEn": "Horse",
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
      "characterId": "alaa",
      "promptAr": "أتسلق الصخور ولي قرنان... من أنا؟",
      "promptEn": "I climb rocks and have two horns... who am I?",
      "choices": [
        {
          "id": "goat_34",
          "emoji": "🐐",
          "labelAr": "ماعز",
          "labelEn": "Goat",
          "correct": true
        },
        {
          "id": "panda_34",
          "emoji": "🐼",
          "labelAr": "باندا",
          "labelEn": "Panda",
          "correct": false
        },
        {
          "id": "owl_34",
          "emoji": "🦉",
          "labelAr": "بومة",
          "labelEn": "Owl",
          "correct": false
        },
        {
          "id": "flamingo_34",
          "emoji": "🦩",
          "labelAr": "فلامنغو",
          "labelEn": "Flamingo",
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
      "characterId": "alaa",
      "promptAr": "أعوي للقمر وأعيش مع قطيعي... من أنا؟",
      "promptEn": "I howl at the moon and live with my pack... who am I?",
      "choices": [
        {
          "id": "wolf_35",
          "emoji": "🐺",
          "labelAr": "ذئب",
          "labelEn": "Wolf",
          "correct": true
        },
        {
          "id": "lion_35",
          "emoji": "🦁",
          "labelAr": "أسد",
          "labelEn": "Lion",
          "correct": false
        },
        {
          "id": "rabbit_35",
          "emoji": "🐰",
          "labelAr": "أرنب",
          "labelEn": "Rabbit",
          "correct": false
        },
        {
          "id": "rooster_35",
          "emoji": "🐓",
          "labelAr": "ديك",
          "labelEn": "Rooster",
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
      "characterId": "alaa",
      "promptAr": "أنام طوال فصل الشتاء داخل كهفي... من أنا؟",
      "promptEn": "I sleep all winter long inside my den... who am I?",
      "choices": [
        {
          "id": "penguin_36",
          "emoji": "🐧",
          "labelAr": "بطريق",
          "labelEn": "Penguin",
          "correct": false
        },
        {
          "id": "seahorse_36",
          "emoji": "🐴",
          "labelAr": "فرس البحر",
          "labelEn": "Seahorse",
          "correct": false
        },
        {
          "id": "bear_36",
          "emoji": "🐻",
          "labelAr": "دب",
          "labelEn": "Bear",
          "correct": true
        },
        {
          "id": "rooster_36",
          "emoji": "🐓",
          "labelAr": "ديك",
          "labelEn": "Rooster",
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
      "characterId": "alaa",
      "promptAr": "جسمي مخطط بالبرتقالي والأسود وأنا مفترس قوي... من أنا؟",
      "promptEn": "My body has orange and black stripes and I’m a strong predator... who am I?",
      "choices": [
        {
          "id": "dolphin_37",
          "emoji": "🐬",
          "labelAr": "دلفين",
          "labelEn": "Dolphin",
          "correct": false
        },
        {
          "id": "tiger_37",
          "emoji": "🐯",
          "labelAr": "نمر",
          "labelEn": "Tiger",
          "correct": true
        },
        {
          "id": "jellyfish_37",
          "emoji": "🪼",
          "labelAr": "قنديل البحر",
          "labelEn": "Jellyfish",
          "correct": false
        },
        {
          "id": "elephant_37",
          "emoji": "🐘",
          "labelAr": "فيل",
          "labelEn": "Elephant",
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
      "characterId": "alaa",
      "promptAr": "أتأرجح بين الأشجار وأحب الموز... من أنا؟",
      "promptEn": "I swing between trees and love bananas... who am I?",
      "choices": [
        {
          "id": "panda_38",
          "emoji": "🐼",
          "labelAr": "باندا",
          "labelEn": "Panda",
          "correct": false
        },
        {
          "id": "giraffe_38",
          "emoji": "🦒",
          "labelAr": "زرافة",
          "labelEn": "Giraffe",
          "correct": false
        },
        {
          "id": "monkey_38",
          "emoji": "🐒",
          "labelAr": "قرد",
          "labelEn": "Monkey",
          "correct": true
        },
        {
          "id": "cat_38",
          "emoji": "🐱",
          "labelAr": "قطة",
          "labelEn": "Cat",
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
      "characterId": "alaa",
      "promptAr": "لوني أبيض وأسود وآكل الخيزران طوال اليوم... من أنا؟",
      "promptEn": "I’m black and white and eat bamboo all day... who am I?",
      "choices": [
        {
          "id": "rooster_39",
          "emoji": "🐓",
          "labelAr": "ديك",
          "labelEn": "Rooster",
          "correct": false
        },
        {
          "id": "cow_39",
          "emoji": "🐄",
          "labelAr": "بقرة",
          "labelEn": "Cow",
          "correct": false
        },
        {
          "id": "dolphin_39",
          "emoji": "🐬",
          "labelAr": "دلفين",
          "labelEn": "Dolphin",
          "correct": false
        },
        {
          "id": "panda_39",
          "emoji": "🐼",
          "labelAr": "باندا",
          "labelEn": "Panda",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission42",
    "number": 42,
    "options": [],
    "template": {
      "characterId": "alaa",
      "promptAr": "شكلي مثل الحصان لكنني أعيش في البحر... من أنا؟",
      "promptEn": "I look like a horse but I live in the sea... who am I?",
      "choices": [
        {
          "id": "spider_40",
          "emoji": "🕷️",
          "labelAr": "عنكبوت",
          "labelEn": "Spider",
          "correct": false
        },
        {
          "id": "horse_40",
          "emoji": "🐎",
          "labelAr": "حصان",
          "labelEn": "Horse",
          "correct": false
        },
        {
          "id": "giraffe_40",
          "emoji": "🦒",
          "labelAr": "زرافة",
          "labelEn": "Giraffe",
          "correct": false
        },
        {
          "id": "seahorse_40",
          "emoji": "🐴",
          "labelAr": "فرس البحر",
          "labelEn": "Seahorse",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission43",
    "number": 43,
    "options": [],
    "template": {
      "characterId": "alaa",
      "promptAr": "جسمي شفاف وطري وأطفو في المحيط... من أنا؟",
      "promptEn": "My body is soft and see-through, I float in the ocean... who am I?",
      "choices": [
        {
          "id": "owl_41",
          "emoji": "🦉",
          "labelAr": "بومة",
          "labelEn": "Owl",
          "correct": false
        },
        {
          "id": "snail_41",
          "emoji": "🐌",
          "labelAr": "حلزون",
          "labelEn": "Snail",
          "correct": false
        },
        {
          "id": "goat_41",
          "emoji": "🐐",
          "labelAr": "ماعز",
          "labelEn": "Goat",
          "correct": false
        },
        {
          "id": "jellyfish_41",
          "emoji": "🪼",
          "labelAr": "قنديل البحر",
          "labelEn": "Jellyfish",
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
      "characterId": "alaa",
      "promptAr": "أستطيع تقليد كلام البشر وريشي ملون... من أنا؟",
      "promptEn": "I can mimic human speech and my feathers are colorful... who am I?",
      "choices": [
        {
          "id": "turtle_42",
          "emoji": "🐢",
          "labelAr": "سلحفاة",
          "labelEn": "Turtle",
          "correct": false
        },
        {
          "id": "ladybug_42",
          "emoji": "🐞",
          "labelAr": "دعسوقة",
          "labelEn": "Ladybug",
          "correct": false
        },
        {
          "id": "parrot_42",
          "emoji": "🦜",
          "labelAr": "ببغاء",
          "labelEn": "Parrot",
          "correct": true
        },
        {
          "id": "tiger_42",
          "emoji": "🐯",
          "labelAr": "نمر",
          "labelEn": "Tiger",
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
      "characterId": "alaa",
      "promptAr": "أنا صغير جداً وأحب الجبن... من أنا؟",
      "promptEn": "I’m tiny and I love cheese... who am I?",
      "choices": [
        {
          "id": "mouse_43",
          "emoji": "🐭",
          "labelAr": "فأر",
          "labelEn": "Mouse",
          "correct": true
        },
        {
          "id": "camel_43",
          "emoji": "🐫",
          "labelAr": "جمل",
          "labelEn": "Camel",
          "correct": false
        },
        {
          "id": "tiger_43",
          "emoji": "🐯",
          "labelAr": "نمر",
          "labelEn": "Tiger",
          "correct": false
        },
        {
          "id": "frog_43",
          "emoji": "🐸",
          "labelAr": "ضفدع",
          "labelEn": "Frog",
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
      "characterId": "alaa",
      "promptAr": "أموء وأحب اللعب بكرة الخيط... من أنا؟",
      "promptEn": "I meow and love playing with a ball of yarn... who am I?",
      "choices": [
        {
          "id": "camel_44",
          "emoji": "🐫",
          "labelAr": "جمل",
          "labelEn": "Camel",
          "correct": false
        },
        {
          "id": "cat_44",
          "emoji": "🐱",
          "labelAr": "قطة",
          "labelEn": "Cat",
          "correct": true
        },
        {
          "id": "snail_44",
          "emoji": "🐌",
          "labelAr": "حلزون",
          "labelEn": "Snail",
          "correct": false
        },
        {
          "id": "horse_44",
          "emoji": "🐎",
          "labelAr": "حصان",
          "labelEn": "Horse",
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
      "characterId": "alaa",
      "promptAr": "أنبح وأنا أفضل صديق للإنسان... من أنا؟",
      "promptEn": "I bark and I’m the best friend of humans... who am I?",
      "choices": [
        {
          "id": "snail_45",
          "emoji": "🐌",
          "labelAr": "حلزون",
          "labelEn": "Snail",
          "correct": false
        },
        {
          "id": "sheep_45",
          "emoji": "🐑",
          "labelAr": "خروف",
          "labelEn": "Sheep",
          "correct": false
        },
        {
          "id": "dog_45",
          "emoji": "🐶",
          "labelAr": "كلب",
          "labelEn": "Dog",
          "correct": true
        },
        {
          "id": "rooster_45",
          "emoji": "🐓",
          "labelAr": "ديك",
          "labelEn": "Rooster",
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
      "characterId": "alaa",
      "promptAr": "أنا أكبر حيوان يعيش في المحيط... من أنا؟",
      "promptEn": "I’m the biggest animal living in the ocean... who am I?",
      "choices": [
        {
          "id": "kangaroo_46",
          "emoji": "🦘",
          "labelAr": "كنغر",
          "labelEn": "Kangaroo",
          "correct": false
        },
        {
          "id": "octopus_46",
          "emoji": "🐙",
          "labelAr": "أخطبوط",
          "labelEn": "Octopus",
          "correct": false
        },
        {
          "id": "spider_46",
          "emoji": "🕷️",
          "labelAr": "عنكبوت",
          "labelEn": "Spider",
          "correct": false
        },
        {
          "id": "whale_46",
          "emoji": "🐋",
          "labelAr": "حوت",
          "labelEn": "Whale",
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
      "characterId": "alaa",
      "promptAr": "كنت يرقة ثم صرت أطير بأجنحة ملونة... من أنا؟",
      "promptEn": "I was a caterpillar, then I grew colorful wings... who am I?",
      "choices": [
        {
          "id": "camel_47",
          "emoji": "🐫",
          "labelAr": "جمل",
          "labelEn": "Camel",
          "correct": false
        },
        {
          "id": "rooster_47",
          "emoji": "🐓",
          "labelAr": "ديك",
          "labelEn": "Rooster",
          "correct": false
        },
        {
          "id": "butterfly_47",
          "emoji": "🦋",
          "labelAr": "فراشة",
          "labelEn": "Butterfly",
          "correct": true
        },
        {
          "id": "whale_47",
          "emoji": "🐋",
          "labelAr": "حوت",
          "labelEn": "Whale",
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
      "characterId": "alaa",
      "promptAr": "جسمي أحمر صغير وعليه نقاط سوداء... من أنا؟",
      "promptEn": "My body is small and red with black dots... who am I?",
      "choices": [
        {
          "id": "monkey_48",
          "emoji": "🐒",
          "labelAr": "قرد",
          "labelEn": "Monkey",
          "correct": false
        },
        {
          "id": "frog_48",
          "emoji": "🐸",
          "labelAr": "ضفدع",
          "labelEn": "Frog",
          "correct": false
        },
        {
          "id": "ladybug_48",
          "emoji": "🐞",
          "labelAr": "دعسوقة",
          "labelEn": "Ladybug",
          "correct": true
        },
        {
          "id": "sheep_48",
          "emoji": "🐑",
          "labelAr": "خروف",
          "labelEn": "Sheep",
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
      "characterId": "alaa",
      "promptAr": "أصفق بزعانفي وأنزلق على الجليد... من أنا؟",
      "promptEn": "I clap my flippers and slide on the ice... who am I?",
      "choices": [
        {
          "id": "seal_49",
          "emoji": "🦭",
          "labelAr": "فقمة",
          "labelEn": "Seal",
          "correct": true
        },
        {
          "id": "goat_49",
          "emoji": "🐐",
          "labelAr": "ماعز",
          "labelEn": "Goat",
          "correct": false
        },
        {
          "id": "wolf_49",
          "emoji": "🐺",
          "labelAr": "ذئب",
          "labelEn": "Wolf",
          "correct": false
        },
        {
          "id": "whale_49",
          "emoji": "🐋",
          "labelAr": "حوت",
          "labelEn": "Whale",
          "correct": false
        }
      ]
    }
  }
];
