import { Mission } from '../types/mission';

export const RESCUE_MISSIONS: Mission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/rescue/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    options: [
      { id: 'cutter', correct: false, left: 14.35, top: 77.15, width: 20.19, height: 12.56 },
      { id: 'hammer', correct: false, left: 36.66, top: 77.15, width: 20.19, height: 12.56 },
      { id: 'key', correct: false, left: 58.45, top: 77.15, width: 20.19, height: 12.56 },
      { id: 'saw', correct: true, left: 79.49, top: 77.15, width: 19.66, height: 12.56 },
    ],
    confirmZone: { left: 69.08, top: 90.91, width: 29.76, height: 5.98 },
    previousZone: { left: 1.59, top: 90.91, width: 26.03, height: 5.98 },
  },
  {
    "id": "mission2",
    "number": 2,
    "options": [],
    "template": {
      "characterId": "diala",
      "promptAr": "أرنب 🐰 عالق خلف باب حديدي مقفل بإحكام! ما الأداة التي تنقذه؟",
      "promptEn": "A Rabbit 🐰 is trapped behind a firmly locked iron door! Which tool will rescue it?",
      "choices": [
        {
          "id": "saw_0",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": false
        },
        {
          "id": "hammer_0",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "cutter_0",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "key_0",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission3",
    "number": 3,
    "options": [],
    "template": {
      "characterId": "diala",
      "promptAr": "قرد 🐒 محبوس داخل قفص معدني مقفل! ما الأداة التي تنقذه؟",
      "promptEn": "A Monkey 🐒 is locked inside a metal cage! Which tool will rescue it?",
      "choices": [
        {
          "id": "ladder_1",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": false
        },
        {
          "id": "cutter_1",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "key_1",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": true
        },
        {
          "id": "hammer_1",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
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
      "characterId": "diala",
      "promptAr": "كلب 🐶 غصن شجرة ثقيل سقط ويسد طريقه! ما الأداة التي تنقذه؟",
      "promptEn": "A Dog 🐶 is a heavy tree branch fell and is blocking the way! Which tool will rescue it?",
      "choices": [
        {
          "id": "saw_2",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": true
        },
        {
          "id": "rope_2",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        },
        {
          "id": "hammer_2",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "net_cutter_2",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
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
      "characterId": "diala",
      "promptAr": "فيل صغير 🐘 جذع خشبي كبير يمنعه من الخروج! ما الأداة التي تنقذه؟",
      "promptEn": "A Baby elephant 🐘 is a big wooden log is blocking the way out! Which tool will rescue it?",
      "choices": [
        {
          "id": "saw_3",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": true
        },
        {
          "id": "boat_3",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "key_3",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": false
        },
        {
          "id": "hammer_3",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
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
      "characterId": "diala",
      "promptAr": "قطة 🐱 متشابك داخل شبكة صياد في البحر! ما الأداة التي تنقذه؟",
      "promptEn": "A Cat 🐱 is tangled inside a fisherman’s net at sea! Which tool will rescue it?",
      "choices": [
        {
          "id": "rope_4",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        },
        {
          "id": "ladder_4",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": false
        },
        {
          "id": "net_cutter_4",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": true
        },
        {
          "id": "hammer_4",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
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
      "characterId": "diala",
      "promptAr": "بطة 🦆 مقيد بحبل ملتف حول رجله بإحكام! ما الأداة التي تنقذه؟",
      "promptEn": "A Duck 🦆 is tied up with rope wrapped tightly around its leg! Which tool will rescue it?",
      "choices": [
        {
          "id": "saw_5",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": false
        },
        {
          "id": "cutter_5",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": true
        },
        {
          "id": "boat_5",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "hammer_5",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
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
      "characterId": "diala",
      "promptAr": "دلفين 🐬 عالق فوق جزيرة صغيرة وسط النهر! ما الأداة التي تنقذه؟",
      "promptEn": "A Dolphin 🐬 is stranded on a tiny island in the middle of the river! Which tool will rescue it?",
      "choices": [
        {
          "id": "boat_6",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": true
        },
        {
          "id": "ladder_6",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": false
        },
        {
          "id": "hammer_6",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "net_cutter_6",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
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
      "characterId": "diala",
      "promptAr": "شبل أسد 🦁 غارق ويحتاج من يوصله للشاطئ! ما الأداة التي تنقذه؟",
      "promptEn": "A Lion cub 🦁 is stuck in the water and needs a ride to shore! Which tool will rescue it?",
      "choices": [
        {
          "id": "boat_7",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": true
        },
        {
          "id": "ladder_7",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": false
        },
        {
          "id": "cutter_7",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "rope_7",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
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
      "characterId": "diala",
      "promptAr": "نمر صغير 🐯 وقع داخل بئر عميق ولا يستطيع الخروج! ما الأداة التي تنقذه؟",
      "promptEn": "A Tiger cub 🐯 is fell into a deep well and can’t get out! Which tool will rescue it?",
      "choices": [
        {
          "id": "net_cutter_8",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": false
        },
        {
          "id": "rope_8",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": true
        },
        {
          "id": "boat_8",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "cutter_8",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
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
      "characterId": "diala",
      "promptAr": "دب صغير 🐻 عالق فوق شجرة عالية جداً! ما الأداة التي تنقذه؟",
      "promptEn": "A Bear cub 🐻 is stuck high up in a very tall tree! Which tool will rescue it?",
      "choices": [
        {
          "id": "key_9",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": false
        },
        {
          "id": "net_cutter_9",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": false
        },
        {
          "id": "ladder_9",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": true
        },
        {
          "id": "saw_9",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
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
      "characterId": "diala",
      "promptAr": "ثعلب صغير 🦊 محاصر فوق سطح منزل مرتفع! ما الأداة التي تنقذه؟",
      "promptEn": "A Little fox 🦊 is trapped on top of a high rooftop! Which tool will rescue it?",
      "choices": [
        {
          "id": "rope_10",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        },
        {
          "id": "hammer_10",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "cutter_10",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "ladder_10",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
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
      "characterId": "diala",
      "promptAr": "سنجاب 🐿️ وقع في حفرة عميقة في الأرض! ما الأداة التي تنقذه؟",
      "promptEn": "A Squirrel 🐿️ is fell into a deep hole in the ground! Which tool will rescue it?",
      "choices": [
        {
          "id": "hammer_11",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "rope_11",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": true
        },
        {
          "id": "ladder_11",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": false
        },
        {
          "id": "key_11",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
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
      "characterId": "diala",
      "promptAr": "غزال 🦌 خلف صندوق خشبي مثبت بمسامير قوية! ما الأداة التي تنقذه؟",
      "promptEn": "A Deer 🦌 is behind a wooden crate nailed shut tightly! Which tool will rescue it?",
      "choices": [
        {
          "id": "ladder_12",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": false
        },
        {
          "id": "net_cutter_12",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": false
        },
        {
          "id": "hammer_12",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": true
        },
        {
          "id": "saw_12",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
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
      "characterId": "diala",
      "promptAr": "طائر صغير 🐦 محبوس خلف قفل صدئ قديم! ما الأداة التي تنقذه؟",
      "promptEn": "A Little bird 🐦 is trapped behind an old rusty padlock! Which tool will rescue it?",
      "choices": [
        {
          "id": "rope_13",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        },
        {
          "id": "cutter_13",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "boat_13",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "key_13",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission16",
    "number": 16,
    "options": [],
    "template": {
      "characterId": "diala",
      "promptAr": "مهر (حصان صغير) 🐎 عالق خلف باب حديدي مقفل بإحكام! ما الأداة التي تنقذه؟",
      "promptEn": "A Foal (baby horse) 🐎 is trapped behind a firmly locked iron door! Which tool will rescue it?",
      "choices": [
        {
          "id": "rope_14",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        },
        {
          "id": "key_14",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": true
        },
        {
          "id": "cutter_14",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "saw_14",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
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
      "characterId": "diala",
      "promptAr": "أرنب 🐰 محبوس داخل قفص معدني مقفل! ما الأداة التي تنقذه؟",
      "promptEn": "A Rabbit 🐰 is locked inside a metal cage! Which tool will rescue it?",
      "choices": [
        {
          "id": "boat_15",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "ladder_15",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": false
        },
        {
          "id": "key_15",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": true
        },
        {
          "id": "saw_15",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
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
      "characterId": "diala",
      "promptAr": "قرد 🐒 غصن شجرة ثقيل سقط ويسد طريقه! ما الأداة التي تنقذه؟",
      "promptEn": "A Monkey 🐒 is a heavy tree branch fell and is blocking the way! Which tool will rescue it?",
      "choices": [
        {
          "id": "hammer_16",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "boat_16",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "saw_16",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": true
        },
        {
          "id": "net_cutter_16",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
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
      "characterId": "diala",
      "promptAr": "كلب 🐶 جذع خشبي كبير يمنعه من الخروج! ما الأداة التي تنقذه؟",
      "promptEn": "A Dog 🐶 is a big wooden log is blocking the way out! Which tool will rescue it?",
      "choices": [
        {
          "id": "saw_17",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": true
        },
        {
          "id": "rope_17",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        },
        {
          "id": "net_cutter_17",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": false
        },
        {
          "id": "key_17",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
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
      "characterId": "diala",
      "promptAr": "فيل صغير 🐘 متشابك داخل شبكة صياد في البحر! ما الأداة التي تنقذه؟",
      "promptEn": "A Baby elephant 🐘 is tangled inside a fisherman’s net at sea! Which tool will rescue it?",
      "choices": [
        {
          "id": "cutter_18",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "boat_18",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "hammer_18",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "net_cutter_18",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission21",
    "number": 21,
    "options": [],
    "template": {
      "characterId": "diala",
      "promptAr": "قطة 🐱 مقيد بحبل ملتف حول رجله بإحكام! ما الأداة التي تنقذه؟",
      "promptEn": "A Cat 🐱 is tied up with rope wrapped tightly around its leg! Which tool will rescue it?",
      "choices": [
        {
          "id": "ladder_19",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": false
        },
        {
          "id": "boat_19",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "net_cutter_19",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": false
        },
        {
          "id": "cutter_19",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
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
      "characterId": "diala",
      "promptAr": "بطة 🦆 عالق فوق جزيرة صغيرة وسط النهر! ما الأداة التي تنقذه؟",
      "promptEn": "A Duck 🦆 is stranded on a tiny island in the middle of the river! Which tool will rescue it?",
      "choices": [
        {
          "id": "rope_20",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        },
        {
          "id": "hammer_20",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "boat_20",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": true
        },
        {
          "id": "saw_20",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
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
      "characterId": "diala",
      "promptAr": "دلفين 🐬 غارق ويحتاج من يوصله للشاطئ! ما الأداة التي تنقذه؟",
      "promptEn": "A Dolphin 🐬 is stuck in the water and needs a ride to shore! Which tool will rescue it?",
      "choices": [
        {
          "id": "boat_21",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": true
        },
        {
          "id": "hammer_21",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "key_21",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": false
        },
        {
          "id": "rope_21",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
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
      "characterId": "diala",
      "promptAr": "شبل أسد 🦁 وقع داخل بئر عميق ولا يستطيع الخروج! ما الأداة التي تنقذه؟",
      "promptEn": "A Lion cub 🦁 is fell into a deep well and can’t get out! Which tool will rescue it?",
      "choices": [
        {
          "id": "rope_22",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": true
        },
        {
          "id": "key_22",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": false
        },
        {
          "id": "saw_22",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": false
        },
        {
          "id": "net_cutter_22",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
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
      "characterId": "diala",
      "promptAr": "نمر صغير 🐯 عالق فوق شجرة عالية جداً! ما الأداة التي تنقذه؟",
      "promptEn": "A Tiger cub 🐯 is stuck high up in a very tall tree! Which tool will rescue it?",
      "choices": [
        {
          "id": "ladder_23",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": true
        },
        {
          "id": "rope_23",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        },
        {
          "id": "boat_23",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "key_23",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
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
      "characterId": "diala",
      "promptAr": "دب صغير 🐻 محاصر فوق سطح منزل مرتفع! ما الأداة التي تنقذه؟",
      "promptEn": "A Bear cub 🐻 is trapped on top of a high rooftop! Which tool will rescue it?",
      "choices": [
        {
          "id": "rope_24",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        },
        {
          "id": "ladder_24",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": true
        },
        {
          "id": "hammer_24",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "cutter_24",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
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
      "characterId": "diala",
      "promptAr": "ثعلب صغير 🦊 وقع في حفرة عميقة في الأرض! ما الأداة التي تنقذه؟",
      "promptEn": "A Little fox 🦊 is fell into a deep hole in the ground! Which tool will rescue it?",
      "choices": [
        {
          "id": "cutter_25",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "net_cutter_25",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": false
        },
        {
          "id": "rope_25",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": true
        },
        {
          "id": "saw_25",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
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
      "characterId": "diala",
      "promptAr": "سنجاب 🐿️ خلف صندوق خشبي مثبت بمسامير قوية! ما الأداة التي تنقذه؟",
      "promptEn": "A Squirrel 🐿️ is behind a wooden crate nailed shut tightly! Which tool will rescue it?",
      "choices": [
        {
          "id": "hammer_26",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": true
        },
        {
          "id": "saw_26",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": false
        },
        {
          "id": "net_cutter_26",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": false
        },
        {
          "id": "cutter_26",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
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
      "characterId": "diala",
      "promptAr": "غزال 🦌 محبوس خلف قفل صدئ قديم! ما الأداة التي تنقذه؟",
      "promptEn": "A Deer 🦌 is trapped behind an old rusty padlock! Which tool will rescue it?",
      "choices": [
        {
          "id": "boat_27",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "net_cutter_27",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": false
        },
        {
          "id": "cutter_27",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "key_27",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
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
      "characterId": "diala",
      "promptAr": "طائر صغير 🐦 عالق خلف باب حديدي مقفل بإحكام! ما الأداة التي تنقذه؟",
      "promptEn": "A Little bird 🐦 is trapped behind a firmly locked iron door! Which tool will rescue it?",
      "choices": [
        {
          "id": "boat_28",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "saw_28",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": false
        },
        {
          "id": "cutter_28",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "key_28",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
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
      "characterId": "diala",
      "promptAr": "مهر (حصان صغير) 🐎 محبوس داخل قفص معدني مقفل! ما الأداة التي تنقذه؟",
      "promptEn": "A Foal (baby horse) 🐎 is locked inside a metal cage! Which tool will rescue it?",
      "choices": [
        {
          "id": "hammer_29",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "ladder_29",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": false
        },
        {
          "id": "boat_29",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "key_29",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
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
      "characterId": "diala",
      "promptAr": "أرنب 🐰 غصن شجرة ثقيل سقط ويسد طريقه! ما الأداة التي تنقذه؟",
      "promptEn": "A Rabbit 🐰 is a heavy tree branch fell and is blocking the way! Which tool will rescue it?",
      "choices": [
        {
          "id": "rope_30",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        },
        {
          "id": "cutter_30",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "saw_30",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": true
        },
        {
          "id": "hammer_30",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
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
      "characterId": "diala",
      "promptAr": "قرد 🐒 جذع خشبي كبير يمنعه من الخروج! ما الأداة التي تنقذه؟",
      "promptEn": "A Monkey 🐒 is a big wooden log is blocking the way out! Which tool will rescue it?",
      "choices": [
        {
          "id": "boat_31",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "hammer_31",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "ladder_31",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": false
        },
        {
          "id": "saw_31",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission34",
    "number": 34,
    "options": [],
    "template": {
      "characterId": "diala",
      "promptAr": "كلب 🐶 متشابك داخل شبكة صياد في البحر! ما الأداة التي تنقذه؟",
      "promptEn": "A Dog 🐶 is tangled inside a fisherman’s net at sea! Which tool will rescue it?",
      "choices": [
        {
          "id": "ladder_32",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": false
        },
        {
          "id": "saw_32",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": false
        },
        {
          "id": "boat_32",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "net_cutter_32",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
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
      "characterId": "diala",
      "promptAr": "فيل صغير 🐘 مقيد بحبل ملتف حول رجله بإحكام! ما الأداة التي تنقذه؟",
      "promptEn": "A Baby elephant 🐘 is tied up with rope wrapped tightly around its leg! Which tool will rescue it?",
      "choices": [
        {
          "id": "rope_33",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        },
        {
          "id": "hammer_33",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "net_cutter_33",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": false
        },
        {
          "id": "cutter_33",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
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
      "characterId": "diala",
      "promptAr": "قطة 🐱 عالق فوق جزيرة صغيرة وسط النهر! ما الأداة التي تنقذه؟",
      "promptEn": "A Cat 🐱 is stranded on a tiny island in the middle of the river! Which tool will rescue it?",
      "choices": [
        {
          "id": "key_34",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": false
        },
        {
          "id": "cutter_34",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "boat_34",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": true
        },
        {
          "id": "net_cutter_34",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
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
      "characterId": "diala",
      "promptAr": "بطة 🦆 غارق ويحتاج من يوصله للشاطئ! ما الأداة التي تنقذه؟",
      "promptEn": "A Duck 🦆 is stuck in the water and needs a ride to shore! Which tool will rescue it?",
      "choices": [
        {
          "id": "rope_35",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        },
        {
          "id": "boat_35",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": true
        },
        {
          "id": "net_cutter_35",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": false
        },
        {
          "id": "cutter_35",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
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
      "characterId": "diala",
      "promptAr": "دلفين 🐬 وقع داخل بئر عميق ولا يستطيع الخروج! ما الأداة التي تنقذه؟",
      "promptEn": "A Dolphin 🐬 is fell into a deep well and can’t get out! Which tool will rescue it?",
      "choices": [
        {
          "id": "hammer_36",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "rope_36",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": true
        },
        {
          "id": "net_cutter_36",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": false
        },
        {
          "id": "cutter_36",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
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
      "characterId": "diala",
      "promptAr": "شبل أسد 🦁 عالق فوق شجرة عالية جداً! ما الأداة التي تنقذه؟",
      "promptEn": "A Lion cub 🦁 is stuck high up in a very tall tree! Which tool will rescue it?",
      "choices": [
        {
          "id": "saw_37",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": false
        },
        {
          "id": "key_37",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": false
        },
        {
          "id": "ladder_37",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": true
        },
        {
          "id": "net_cutter_37",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
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
      "characterId": "diala",
      "promptAr": "نمر صغير 🐯 محاصر فوق سطح منزل مرتفع! ما الأداة التي تنقذه؟",
      "promptEn": "A Tiger cub 🐯 is trapped on top of a high rooftop! Which tool will rescue it?",
      "choices": [
        {
          "id": "ladder_38",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": true
        },
        {
          "id": "hammer_38",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "rope_38",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        },
        {
          "id": "saw_38",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
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
      "characterId": "diala",
      "promptAr": "دب صغير 🐻 وقع في حفرة عميقة في الأرض! ما الأداة التي تنقذه؟",
      "promptEn": "A Bear cub 🐻 is fell into a deep hole in the ground! Which tool will rescue it?",
      "choices": [
        {
          "id": "rope_39",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": true
        },
        {
          "id": "boat_39",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "net_cutter_39",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": false
        },
        {
          "id": "hammer_39",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
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
      "characterId": "diala",
      "promptAr": "ثعلب صغير 🦊 خلف صندوق خشبي مثبت بمسامير قوية! ما الأداة التي تنقذه؟",
      "promptEn": "A Little fox 🦊 is behind a wooden crate nailed shut tightly! Which tool will rescue it?",
      "choices": [
        {
          "id": "key_40",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": false
        },
        {
          "id": "ladder_40",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": false
        },
        {
          "id": "boat_40",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "hammer_40",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
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
      "characterId": "diala",
      "promptAr": "سنجاب 🐿️ محبوس خلف قفل صدئ قديم! ما الأداة التي تنقذه؟",
      "promptEn": "A Squirrel 🐿️ is trapped behind an old rusty padlock! Which tool will rescue it?",
      "choices": [
        {
          "id": "key_41",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": true
        },
        {
          "id": "boat_41",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "cutter_41",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "ladder_41",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
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
      "characterId": "diala",
      "promptAr": "غزال 🦌 عالق خلف باب حديدي مقفل بإحكام! ما الأداة التي تنقذه؟",
      "promptEn": "A Deer 🦌 is trapped behind a firmly locked iron door! Which tool will rescue it?",
      "choices": [
        {
          "id": "cutter_42",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "key_42",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": true
        },
        {
          "id": "rope_42",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        },
        {
          "id": "ladder_42",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
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
      "characterId": "diala",
      "promptAr": "طائر صغير 🐦 محبوس داخل قفص معدني مقفل! ما الأداة التي تنقذه؟",
      "promptEn": "A Little bird 🐦 is locked inside a metal cage! Which tool will rescue it?",
      "choices": [
        {
          "id": "cutter_43",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "key_43",
          "emoji": "🔑",
          "labelAr": "مفتاح",
          "labelEn": "Key",
          "correct": true
        },
        {
          "id": "net_cutter_43",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": false
        },
        {
          "id": "rope_43",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
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
      "characterId": "diala",
      "promptAr": "مهر (حصان صغير) 🐎 غصن شجرة ثقيل سقط ويسد طريقه! ما الأداة التي تنقذه؟",
      "promptEn": "A Foal (baby horse) 🐎 is a heavy tree branch fell and is blocking the way! Which tool will rescue it?",
      "choices": [
        {
          "id": "saw_44",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": true
        },
        {
          "id": "boat_44",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "cutter_44",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "rope_44",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
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
      "characterId": "diala",
      "promptAr": "أرنب 🐰 جذع خشبي كبير يمنعه من الخروج! ما الأداة التي تنقذه؟",
      "promptEn": "A Rabbit 🐰 is a big wooden log is blocking the way out! Which tool will rescue it?",
      "choices": [
        {
          "id": "hammer_45",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "saw_45",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": true
        },
        {
          "id": "boat_45",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": false
        },
        {
          "id": "net_cutter_45",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
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
      "characterId": "diala",
      "promptAr": "قرد 🐒 متشابك داخل شبكة صياد في البحر! ما الأداة التي تنقذه؟",
      "promptEn": "A Monkey 🐒 is tangled inside a fisherman’s net at sea! Which tool will rescue it?",
      "choices": [
        {
          "id": "cutter_46",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "ladder_46",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": false
        },
        {
          "id": "net_cutter_46",
          "emoji": "🥅",
          "labelAr": "مقص شباك",
          "labelEn": "Net scissors",
          "correct": true
        },
        {
          "id": "saw_46",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
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
      "characterId": "diala",
      "promptAr": "كلب 🐶 مقيد بحبل ملتف حول رجله بإحكام! ما الأداة التي تنقذه؟",
      "promptEn": "A Dog 🐶 is tied up with rope wrapped tightly around its leg! Which tool will rescue it?",
      "choices": [
        {
          "id": "cutter_47",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": true
        },
        {
          "id": "ladder_47",
          "emoji": "🪜",
          "labelAr": "سلم",
          "labelEn": "Ladder",
          "correct": false
        },
        {
          "id": "hammer_47",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "boat_47",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
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
      "characterId": "diala",
      "promptAr": "فيل صغير 🐘 عالق فوق جزيرة صغيرة وسط النهر! ما الأداة التي تنقذه؟",
      "promptEn": "A Baby elephant 🐘 is stranded on a tiny island in the middle of the river! Which tool will rescue it?",
      "choices": [
        {
          "id": "boat_48",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": true
        },
        {
          "id": "hammer_48",
          "emoji": "🔨",
          "labelAr": "مطرقة",
          "labelEn": "Hammer",
          "correct": false
        },
        {
          "id": "saw_48",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": false
        },
        {
          "id": "rope_48",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
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
      "characterId": "diala",
      "promptAr": "قطة 🐱 غارق ويحتاج من يوصله للشاطئ! ما الأداة التي تنقذه؟",
      "promptEn": "A Cat 🐱 is stuck in the water and needs a ride to shore! Which tool will rescue it?",
      "choices": [
        {
          "id": "saw_49",
          "emoji": "🪚",
          "labelAr": "منشار",
          "labelEn": "Saw",
          "correct": false
        },
        {
          "id": "cutter_49",
          "emoji": "✂️",
          "labelAr": "مقص القطع",
          "labelEn": "Bolt cutter",
          "correct": false
        },
        {
          "id": "boat_49",
          "emoji": "🚤",
          "labelAr": "قارب",
          "labelEn": "Boat",
          "correct": true
        },
        {
          "id": "rope_49",
          "emoji": "🪢",
          "labelAr": "حبل",
          "labelEn": "Rope",
          "correct": false
        }
      ]
    }
  }
];
