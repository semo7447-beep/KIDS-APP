import { Mission } from '../types/mission';

export const PREDICT_MISSIONS: Mission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/predict/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    options: [
      { id: 'breaks', correct: false, left: 32.41, top: 67.58, width: 21.79, height: 12.56 },
      { id: 'watches', correct: false, left: 55.26, top: 67.58, width: 21.79, height: 12.56 },
      { id: 'catches', correct: true, left: 78.11, top: 67.58, width: 21.79, height: 12.56 },
    ],
    confirmZone: { left: 34.01, top: 82.84, width: 36.13, height: 4.78 },
    previousZone: { left: 1.06, top: 92.7, width: 23.91, height: 5.38 },
  },
  {
    "id": "mission2",
    "number": 2,
    "options": [],
    "template": {
      "characterId": "hakeem",
      "promptAr": "وضع يوسف مكعب ثلج في الشمس الحارة؟ ماذا سيحدث؟",
      "promptEn": "Yusuf put an ice cube in the hot sun? What will happen?",
      "choices": [
        {
          "id": "wrong2_0",
          "emoji": "🤔",
          "labelAr": "سيتحول إلى حجر 🪨",
          "labelEn": "It will turn into a rock 🪨",
          "correct": false
        },
        {
          "id": "wrong1_0",
          "emoji": "💭",
          "labelAr": "سيتجمد أكثر ❄️",
          "labelEn": "It will freeze more ❄️",
          "correct": false
        },
        {
          "id": "correct_0",
          "emoji": "❓",
          "labelAr": "سيذوب ويتحول لماء 💧",
          "labelEn": "It will melt into water 💧",
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
      "characterId": "hakeem",
      "promptAr": "نفخ ريم بالوناً كثيراً جداً؟ ماذا سيحدث؟",
      "promptEn": "Reem blew up a balloon way too much? What will happen?",
      "choices": [
        {
          "id": "wrong1_1",
          "emoji": "🤔",
          "labelAr": "سيطير البالون للفضاء 🚀",
          "labelEn": "The balloon will fly to space 🚀",
          "correct": false
        },
        {
          "id": "correct_1",
          "emoji": "💭",
          "labelAr": "سينفجر البالون 💥",
          "labelEn": "The balloon will pop 💥",
          "correct": true
        },
        {
          "id": "wrong2_1",
          "emoji": "❓",
          "labelAr": "سيتحول البالون لكرة 🏀",
          "labelEn": "The balloon will turn into a ball 🏀",
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
      "characterId": "hakeem",
      "promptAr": "سقى سلطان النبتة بانتظام كل يوم؟ ماذا سيحدث؟",
      "promptEn": "Sultan watered the plant regularly every day? What will happen?",
      "choices": [
        {
          "id": "correct_2",
          "emoji": "🤔",
          "labelAr": "ستنمو النبتة وتزهر 🌱",
          "labelEn": "The plant will grow and bloom 🌱",
          "correct": true
        },
        {
          "id": "wrong1_2",
          "emoji": "💭",
          "labelAr": "ستذبل النبتة 🥀",
          "labelEn": "The plant will wilt 🥀",
          "correct": false
        },
        {
          "id": "wrong2_2",
          "emoji": "❓",
          "labelAr": "ستتحول النبتة للون أزرق",
          "labelEn": "The plant will turn blue",
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
      "characterId": "hakeem",
      "promptAr": "ترك هيا الآيسكريم خارج الثلاجة وقتاً طويلاً؟ ماذا سيحدث؟",
      "promptEn": "Haya left ice cream outside the fridge for a long time? What will happen?",
      "choices": [
        {
          "id": "wrong2_3",
          "emoji": "🤔",
          "labelAr": "سيتحول لحلوى صلبة",
          "labelEn": "It will turn into hard candy",
          "correct": false
        },
        {
          "id": "wrong1_3",
          "emoji": "💭",
          "labelAr": "سيتجمد الآيسكريم أكثر",
          "labelEn": "The ice cream will freeze more",
          "correct": false
        },
        {
          "id": "correct_3",
          "emoji": "❓",
          "labelAr": "سيذوب الآيسكريم 🍦",
          "labelEn": "The ice cream will melt 🍦",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission6",
    "number": 6,
    "options": [],
    "template": {
      "characterId": "hakeem",
      "promptAr": "قرأ تركي كتاباً كل ليلة قبل النوم؟ ماذا سيحدث؟",
      "promptEn": "Turki read a book every night before bed? What will happen?",
      "choices": [
        {
          "id": "wrong1_4",
          "emoji": "🤔",
          "labelAr": "سينسى القراءة تماماً",
          "labelEn": "He/she will forget how to read completely",
          "correct": false
        },
        {
          "id": "correct_4",
          "emoji": "💭",
          "labelAr": "سيتعلم كلمات جديدة كثيرة 📚",
          "labelEn": "He/she will learn lots of new words 📚",
          "correct": true
        },
        {
          "id": "wrong2_4",
          "emoji": "❓",
          "labelAr": "سينام فوراً دون أي فائدة",
          "labelEn": "He/she will just fall asleep with no benefit",
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
      "characterId": "hakeem",
      "promptAr": "زرع رهف بذرة تفاح وسقاها بانتظام؟ ماذا سيحدث؟",
      "promptEn": "Rahaf planted an apple seed and watered it regularly? What will happen?",
      "choices": [
        {
          "id": "correct_5",
          "emoji": "🤔",
          "labelAr": "ستنبت شجرة تفاح صغيرة 🌳",
          "labelEn": "A small apple tree will sprout 🌳",
          "correct": true
        },
        {
          "id": "wrong1_5",
          "emoji": "💭",
          "labelAr": "ستتحول البذرة لزهرة فوراً",
          "labelEn": "The seed will turn into a flower instantly",
          "correct": false
        },
        {
          "id": "wrong2_5",
          "emoji": "❓",
          "labelAr": "لن يحدث شيء إطلاقاً",
          "labelEn": "Nothing will happen at all",
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
      "characterId": "hakeem",
      "promptAr": "ترك سعود دراجته تحت المطر مدة طويلة؟ ماذا سيحدث؟",
      "promptEn": "Saud left their bike out in the rain for a long time? What will happen?",
      "choices": [
        {
          "id": "correct_6",
          "emoji": "🤔",
          "labelAr": "قد تصدأ الدراجة 🚲",
          "labelEn": "The bike might rust 🚲",
          "correct": true
        },
        {
          "id": "wrong2_6",
          "emoji": "💭",
          "labelAr": "ستتحول الدراجة للون ذهبي",
          "labelEn": "The bike will turn gold",
          "correct": false
        },
        {
          "id": "wrong1_6",
          "emoji": "❓",
          "labelAr": "ستصبح الدراجة أسرع",
          "labelEn": "The bike will become faster",
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
      "characterId": "hakeem",
      "promptAr": "خلط نورة اللون الأزرق مع الأصفر؟ ماذا سيحدث؟",
      "promptEn": "Noura mixed blue paint with yellow paint? What will happen?",
      "choices": [
        {
          "id": "wrong1_7",
          "emoji": "🤔",
          "labelAr": "سيحصل على اللون الأحمر",
          "labelEn": "He/she will get the color red",
          "correct": false
        },
        {
          "id": "wrong2_7",
          "emoji": "💭",
          "labelAr": "سيحصل على اللون الأبيض",
          "labelEn": "He/she will get the color white",
          "correct": false
        },
        {
          "id": "correct_7",
          "emoji": "❓",
          "labelAr": "سيحصل على اللون الأخضر 🟢",
          "labelEn": "He/she will get the color green 🟢",
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
      "characterId": "hakeem",
      "promptAr": "لم ينظف خالد أسنانه لمدة طويلة؟ ماذا سيحدث؟",
      "promptEn": "Khalid didn’t brush their teeth for a long time? What will happen?",
      "choices": [
        {
          "id": "wrong1_8",
          "emoji": "🤔",
          "labelAr": "ستصبح أسنانه أقوى",
          "labelEn": "Their teeth will become stronger",
          "correct": false
        },
        {
          "id": "correct_8",
          "emoji": "💭",
          "labelAr": "قد تتسوس أسنانه 🦷",
          "labelEn": "Their teeth might get cavities 🦷",
          "correct": true
        },
        {
          "id": "wrong2_8",
          "emoji": "❓",
          "labelAr": "ستتغير أسنانه للون الأزرق",
          "labelEn": "Their teeth will turn blue",
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
      "characterId": "hakeem",
      "promptAr": "وضع جود بذور نبات في مكان مظلم بلا شمس؟ ماذا سيحدث؟",
      "promptEn": "Jood put plant seeds in a dark place with no sun? What will happen?",
      "choices": [
        {
          "id": "correct_9",
          "emoji": "🤔",
          "labelAr": "لن ينمو النبات بشكل جيد 🌑",
          "labelEn": "The plant won’t grow well 🌑",
          "correct": true
        },
        {
          "id": "wrong1_9",
          "emoji": "💭",
          "labelAr": "سينمو النبات أسرع بكثير",
          "labelEn": "The plant will grow much faster",
          "correct": false
        },
        {
          "id": "wrong2_9",
          "emoji": "❓",
          "labelAr": "سيتحول النبات للون الذهبي",
          "labelEn": "The plant will turn golden",
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
      "characterId": "hakeem",
      "promptAr": "نسي بندر مظلته في يوم ممطر وخرج بدونها؟ ماذا سيحدث؟",
      "promptEn": "Bandar forgot their umbrella on a rainy day and went out without it? What will happen?",
      "choices": [
        {
          "id": "wrong1_10",
          "emoji": "🤔",
          "labelAr": "سيبقى جافاً تماماً",
          "labelEn": "They will stay completely dry",
          "correct": false
        },
        {
          "id": "correct_10",
          "emoji": "💭",
          "labelAr": "سيبتل من المطر ☔",
          "labelEn": "They will get wet from the rain ☔",
          "correct": true
        },
        {
          "id": "wrong2_10",
          "emoji": "❓",
          "labelAr": "ستتوقف السماء عن المطر فوراً",
          "labelEn": "The sky will stop raining instantly",
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
      "characterId": "hakeem",
      "promptAr": "ترك غلا كوب الحليب خارج الثلاجة طوال اليوم في الصيف؟ ماذا سيحدث؟",
      "promptEn": "Ghala left a cup of milk out of the fridge all day in summer? What will happen?",
      "choices": [
        {
          "id": "wrong2_11",
          "emoji": "🤔",
          "labelAr": "سيتجمد الحليب فوراً",
          "labelEn": "The milk will freeze instantly",
          "correct": false
        },
        {
          "id": "wrong1_11",
          "emoji": "💭",
          "labelAr": "سيصبح الحليب ألذ",
          "labelEn": "The milk will taste better",
          "correct": false
        },
        {
          "id": "correct_11",
          "emoji": "❓",
          "labelAr": "سيفسد الحليب 🥛",
          "labelEn": "The milk will spoil 🥛",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission14",
    "number": 14,
    "options": [],
    "template": {
      "characterId": "hakeem",
      "promptAr": "تدرّب ناصر على العزف يومياً لمدة شهر كامل؟ ماذا سيحدث؟",
      "promptEn": "Nasser practiced playing music daily for a whole month? What will happen?",
      "choices": [
        {
          "id": "wrong2_12",
          "emoji": "🤔",
          "labelAr": "لن يتغير شيء أبداً",
          "labelEn": "Nothing will change at all",
          "correct": false
        },
        {
          "id": "correct_12",
          "emoji": "💭",
          "labelAr": "سيتحسن في العزف كثيراً 🎵",
          "labelEn": "They will get much better at playing 🎵",
          "correct": true
        },
        {
          "id": "wrong1_12",
          "emoji": "❓",
          "labelAr": "سينسى العزف تماماً",
          "labelEn": "They will forget how to play entirely",
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
      "characterId": "hakeem",
      "promptAr": "ألقى سارة قطعة معدن ثقيلة في حوض الماء؟ ماذا سيحدث؟",
      "promptEn": "Sara dropped a heavy piece of metal into a water tub? What will happen?",
      "choices": [
        {
          "id": "wrong1_13",
          "emoji": "🤔",
          "labelAr": "ستطفو فوق الماء",
          "labelEn": "It will float on the water",
          "correct": false
        },
        {
          "id": "wrong2_13",
          "emoji": "💭",
          "labelAr": "ستتحول إلى ذهب فوراً",
          "labelEn": "It will turn into gold instantly",
          "correct": false
        },
        {
          "id": "correct_13",
          "emoji": "❓",
          "labelAr": "ستغرق لأنها أثقل من الماء ⚓",
          "labelEn": "It will sink because it’s heavier than water ⚓",
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
      "characterId": "hakeem",
      "promptAr": "ألقى فهد قطعة خشب صغيرة في حوض الماء؟ ماذا سيحدث؟",
      "promptEn": "Fahad dropped a small piece of wood into a water tub? What will happen?",
      "choices": [
        {
          "id": "wrong1_14",
          "emoji": "🤔",
          "labelAr": "ستغرق للقاع مباشرة",
          "labelEn": "It will sink straight to the bottom",
          "correct": false
        },
        {
          "id": "correct_14",
          "emoji": "💭",
          "labelAr": "ستطفو فوق الماء 🪵",
          "labelEn": "It will float on the water 🪵",
          "correct": true
        },
        {
          "id": "wrong2_14",
          "emoji": "❓",
          "labelAr": "ستذوب في الماء تماماً",
          "labelEn": "It will completely dissolve in the water",
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
      "characterId": "hakeem",
      "promptAr": "ذاكر لمى دروسه جيداً قبل الاختبار؟ ماذا سيحدث؟",
      "promptEn": "Lama studied their lessons well before the test? What will happen?",
      "choices": [
        {
          "id": "wrong2_15",
          "emoji": "🤔",
          "labelAr": "لن يفرق ذلك شيئاً في النتيجة",
          "labelEn": "It won’t make any difference to the result",
          "correct": false
        },
        {
          "id": "wrong1_15",
          "emoji": "💭",
          "labelAr": "سيرسب في الاختبار",
          "labelEn": "They will fail the test",
          "correct": false
        },
        {
          "id": "correct_15",
          "emoji": "❓",
          "labelAr": "سيحصل على درجة ممتازة 🌟",
          "labelEn": "They will get an excellent grade 🌟",
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
      "characterId": "hakeem",
      "promptAr": "لعب ماجد بالكرة بالقرب من زجاج النافذة؟ ماذا سيحدث؟",
      "promptEn": "Majed played ball right next to the window glass? What will happen?",
      "choices": [
        {
          "id": "wrong1_16",
          "emoji": "🤔",
          "labelAr": "ستطير الكرة للفضاء",
          "labelEn": "The ball will fly to space",
          "correct": false
        },
        {
          "id": "wrong2_16",
          "emoji": "💭",
          "labelAr": "سيصبح الزجاج أقوى فجأة",
          "labelEn": "The glass will suddenly become stronger",
          "correct": false
        },
        {
          "id": "correct_16",
          "emoji": "❓",
          "labelAr": "قد يكسر الزجاج 🪟",
          "labelEn": "The glass might break 🪟",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission19",
    "number": 19,
    "options": [],
    "template": {
      "characterId": "hakeem",
      "promptAr": "وضع شهد الملابس المبللة تحت أشعة الشمس؟ ماذا سيحدث؟",
      "promptEn": "Shahad put the wet clothes out under the sunshine? What will happen?",
      "choices": [
        {
          "id": "wrong2_17",
          "emoji": "🤔",
          "labelAr": "ستتجمد الملابس فوراً",
          "labelEn": "The clothes will freeze instantly",
          "correct": false
        },
        {
          "id": "correct_17",
          "emoji": "💭",
          "labelAr": "ستجف الملابس ☀️",
          "labelEn": "The clothes will dry ☀️",
          "correct": true
        },
        {
          "id": "wrong1_17",
          "emoji": "❓",
          "labelAr": "ستبتل الملابس أكثر",
          "labelEn": "The clothes will get even more wet",
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
      "characterId": "hakeem",
      "promptAr": "وضع عبدالله مكعب ثلج في الشمس الحارة؟ ماذا سيحدث؟",
      "promptEn": "Abdullah put an ice cube in the hot sun? What will happen?",
      "choices": [
        {
          "id": "wrong1_18",
          "emoji": "🤔",
          "labelAr": "سيتجمد أكثر ❄️",
          "labelEn": "It will freeze more ❄️",
          "correct": false
        },
        {
          "id": "correct_18",
          "emoji": "💭",
          "labelAr": "سيذوب ويتحول لماء 💧",
          "labelEn": "It will melt into water 💧",
          "correct": true
        },
        {
          "id": "wrong2_18",
          "emoji": "❓",
          "labelAr": "سيتحول إلى حجر 🪨",
          "labelEn": "It will turn into a rock 🪨",
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
      "characterId": "hakeem",
      "promptAr": "نفخ وردة بالوناً كثيراً جداً؟ ماذا سيحدث؟",
      "promptEn": "Warda blew up a balloon way too much? What will happen?",
      "choices": [
        {
          "id": "wrong2_19",
          "emoji": "🤔",
          "labelAr": "سيتحول البالون لكرة 🏀",
          "labelEn": "The balloon will turn into a ball 🏀",
          "correct": false
        },
        {
          "id": "correct_19",
          "emoji": "💭",
          "labelAr": "سينفجر البالون 💥",
          "labelEn": "The balloon will pop 💥",
          "correct": true
        },
        {
          "id": "wrong1_19",
          "emoji": "❓",
          "labelAr": "سيطير البالون للفضاء 🚀",
          "labelEn": "The balloon will fly to space 🚀",
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
      "characterId": "hakeem",
      "promptAr": "سقى يوسف النبتة بانتظام كل يوم؟ ماذا سيحدث؟",
      "promptEn": "Yusuf watered the plant regularly every day? What will happen?",
      "choices": [
        {
          "id": "wrong2_20",
          "emoji": "🤔",
          "labelAr": "ستتحول النبتة للون أزرق",
          "labelEn": "The plant will turn blue",
          "correct": false
        },
        {
          "id": "wrong1_20",
          "emoji": "💭",
          "labelAr": "ستذبل النبتة 🥀",
          "labelEn": "The plant will wilt 🥀",
          "correct": false
        },
        {
          "id": "correct_20",
          "emoji": "❓",
          "labelAr": "ستنمو النبتة وتزهر 🌱",
          "labelEn": "The plant will grow and bloom 🌱",
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
      "characterId": "hakeem",
      "promptAr": "ترك ريم الآيسكريم خارج الثلاجة وقتاً طويلاً؟ ماذا سيحدث؟",
      "promptEn": "Reem left ice cream outside the fridge for a long time? What will happen?",
      "choices": [
        {
          "id": "correct_21",
          "emoji": "🤔",
          "labelAr": "سيذوب الآيسكريم 🍦",
          "labelEn": "The ice cream will melt 🍦",
          "correct": true
        },
        {
          "id": "wrong2_21",
          "emoji": "💭",
          "labelAr": "سيتحول لحلوى صلبة",
          "labelEn": "It will turn into hard candy",
          "correct": false
        },
        {
          "id": "wrong1_21",
          "emoji": "❓",
          "labelAr": "سيتجمد الآيسكريم أكثر",
          "labelEn": "The ice cream will freeze more",
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
      "characterId": "hakeem",
      "promptAr": "قرأ سلطان كتاباً كل ليلة قبل النوم؟ ماذا سيحدث؟",
      "promptEn": "Sultan read a book every night before bed? What will happen?",
      "choices": [
        {
          "id": "wrong1_22",
          "emoji": "🤔",
          "labelAr": "سينسى القراءة تماماً",
          "labelEn": "He/she will forget how to read completely",
          "correct": false
        },
        {
          "id": "wrong2_22",
          "emoji": "💭",
          "labelAr": "سينام فوراً دون أي فائدة",
          "labelEn": "He/she will just fall asleep with no benefit",
          "correct": false
        },
        {
          "id": "correct_22",
          "emoji": "❓",
          "labelAr": "سيتعلم كلمات جديدة كثيرة 📚",
          "labelEn": "He/she will learn lots of new words 📚",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission25",
    "number": 25,
    "options": [],
    "template": {
      "characterId": "hakeem",
      "promptAr": "زرع هيا بذرة تفاح وسقاها بانتظام؟ ماذا سيحدث؟",
      "promptEn": "Haya planted an apple seed and watered it regularly? What will happen?",
      "choices": [
        {
          "id": "wrong1_23",
          "emoji": "🤔",
          "labelAr": "ستتحول البذرة لزهرة فوراً",
          "labelEn": "The seed will turn into a flower instantly",
          "correct": false
        },
        {
          "id": "wrong2_23",
          "emoji": "💭",
          "labelAr": "لن يحدث شيء إطلاقاً",
          "labelEn": "Nothing will happen at all",
          "correct": false
        },
        {
          "id": "correct_23",
          "emoji": "❓",
          "labelAr": "ستنبت شجرة تفاح صغيرة 🌳",
          "labelEn": "A small apple tree will sprout 🌳",
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
      "characterId": "hakeem",
      "promptAr": "ترك تركي دراجته تحت المطر مدة طويلة؟ ماذا سيحدث؟",
      "promptEn": "Turki left their bike out in the rain for a long time? What will happen?",
      "choices": [
        {
          "id": "wrong1_24",
          "emoji": "🤔",
          "labelAr": "ستصبح الدراجة أسرع",
          "labelEn": "The bike will become faster",
          "correct": false
        },
        {
          "id": "wrong2_24",
          "emoji": "💭",
          "labelAr": "ستتحول الدراجة للون ذهبي",
          "labelEn": "The bike will turn gold",
          "correct": false
        },
        {
          "id": "correct_24",
          "emoji": "❓",
          "labelAr": "قد تصدأ الدراجة 🚲",
          "labelEn": "The bike might rust 🚲",
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
      "characterId": "hakeem",
      "promptAr": "خلط رهف اللون الأزرق مع الأصفر؟ ماذا سيحدث؟",
      "promptEn": "Rahaf mixed blue paint with yellow paint? What will happen?",
      "choices": [
        {
          "id": "wrong2_25",
          "emoji": "🤔",
          "labelAr": "سيحصل على اللون الأبيض",
          "labelEn": "He/she will get the color white",
          "correct": false
        },
        {
          "id": "wrong1_25",
          "emoji": "💭",
          "labelAr": "سيحصل على اللون الأحمر",
          "labelEn": "He/she will get the color red",
          "correct": false
        },
        {
          "id": "correct_25",
          "emoji": "❓",
          "labelAr": "سيحصل على اللون الأخضر 🟢",
          "labelEn": "He/she will get the color green 🟢",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission28",
    "number": 28,
    "options": [],
    "template": {
      "characterId": "hakeem",
      "promptAr": "لم ينظف سعود أسنانه لمدة طويلة؟ ماذا سيحدث؟",
      "promptEn": "Saud didn’t brush their teeth for a long time? What will happen?",
      "choices": [
        {
          "id": "correct_26",
          "emoji": "🤔",
          "labelAr": "قد تتسوس أسنانه 🦷",
          "labelEn": "Their teeth might get cavities 🦷",
          "correct": true
        },
        {
          "id": "wrong2_26",
          "emoji": "💭",
          "labelAr": "ستتغير أسنانه للون الأزرق",
          "labelEn": "Their teeth will turn blue",
          "correct": false
        },
        {
          "id": "wrong1_26",
          "emoji": "❓",
          "labelAr": "ستصبح أسنانه أقوى",
          "labelEn": "Their teeth will become stronger",
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
      "characterId": "hakeem",
      "promptAr": "وضع نورة بذور نبات في مكان مظلم بلا شمس؟ ماذا سيحدث؟",
      "promptEn": "Noura put plant seeds in a dark place with no sun? What will happen?",
      "choices": [
        {
          "id": "wrong2_27",
          "emoji": "🤔",
          "labelAr": "سيتحول النبات للون الذهبي",
          "labelEn": "The plant will turn golden",
          "correct": false
        },
        {
          "id": "correct_27",
          "emoji": "💭",
          "labelAr": "لن ينمو النبات بشكل جيد 🌑",
          "labelEn": "The plant won’t grow well 🌑",
          "correct": true
        },
        {
          "id": "wrong1_27",
          "emoji": "❓",
          "labelAr": "سينمو النبات أسرع بكثير",
          "labelEn": "The plant will grow much faster",
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
      "characterId": "hakeem",
      "promptAr": "نسي خالد مظلته في يوم ممطر وخرج بدونها؟ ماذا سيحدث؟",
      "promptEn": "Khalid forgot their umbrella on a rainy day and went out without it? What will happen?",
      "choices": [
        {
          "id": "wrong1_28",
          "emoji": "🤔",
          "labelAr": "سيبقى جافاً تماماً",
          "labelEn": "They will stay completely dry",
          "correct": false
        },
        {
          "id": "correct_28",
          "emoji": "💭",
          "labelAr": "سيبتل من المطر ☔",
          "labelEn": "They will get wet from the rain ☔",
          "correct": true
        },
        {
          "id": "wrong2_28",
          "emoji": "❓",
          "labelAr": "ستتوقف السماء عن المطر فوراً",
          "labelEn": "The sky will stop raining instantly",
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
      "characterId": "hakeem",
      "promptAr": "ترك جود كوب الحليب خارج الثلاجة طوال اليوم في الصيف؟ ماذا سيحدث؟",
      "promptEn": "Jood left a cup of milk out of the fridge all day in summer? What will happen?",
      "choices": [
        {
          "id": "correct_29",
          "emoji": "🤔",
          "labelAr": "سيفسد الحليب 🥛",
          "labelEn": "The milk will spoil 🥛",
          "correct": true
        },
        {
          "id": "wrong1_29",
          "emoji": "💭",
          "labelAr": "سيصبح الحليب ألذ",
          "labelEn": "The milk will taste better",
          "correct": false
        },
        {
          "id": "wrong2_29",
          "emoji": "❓",
          "labelAr": "سيتجمد الحليب فوراً",
          "labelEn": "The milk will freeze instantly",
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
      "characterId": "hakeem",
      "promptAr": "تدرّب بندر على العزف يومياً لمدة شهر كامل؟ ماذا سيحدث؟",
      "promptEn": "Bandar practiced playing music daily for a whole month? What will happen?",
      "choices": [
        {
          "id": "wrong2_30",
          "emoji": "🤔",
          "labelAr": "لن يتغير شيء أبداً",
          "labelEn": "Nothing will change at all",
          "correct": false
        },
        {
          "id": "correct_30",
          "emoji": "💭",
          "labelAr": "سيتحسن في العزف كثيراً 🎵",
          "labelEn": "They will get much better at playing 🎵",
          "correct": true
        },
        {
          "id": "wrong1_30",
          "emoji": "❓",
          "labelAr": "سينسى العزف تماماً",
          "labelEn": "They will forget how to play entirely",
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
      "characterId": "hakeem",
      "promptAr": "ألقى غلا قطعة معدن ثقيلة في حوض الماء؟ ماذا سيحدث؟",
      "promptEn": "Ghala dropped a heavy piece of metal into a water tub? What will happen?",
      "choices": [
        {
          "id": "correct_31",
          "emoji": "🤔",
          "labelAr": "ستغرق لأنها أثقل من الماء ⚓",
          "labelEn": "It will sink because it’s heavier than water ⚓",
          "correct": true
        },
        {
          "id": "wrong1_31",
          "emoji": "💭",
          "labelAr": "ستطفو فوق الماء",
          "labelEn": "It will float on the water",
          "correct": false
        },
        {
          "id": "wrong2_31",
          "emoji": "❓",
          "labelAr": "ستتحول إلى ذهب فوراً",
          "labelEn": "It will turn into gold instantly",
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
      "characterId": "hakeem",
      "promptAr": "ألقى ناصر قطعة خشب صغيرة في حوض الماء؟ ماذا سيحدث؟",
      "promptEn": "Nasser dropped a small piece of wood into a water tub? What will happen?",
      "choices": [
        {
          "id": "correct_32",
          "emoji": "🤔",
          "labelAr": "ستطفو فوق الماء 🪵",
          "labelEn": "It will float on the water 🪵",
          "correct": true
        },
        {
          "id": "wrong1_32",
          "emoji": "💭",
          "labelAr": "ستغرق للقاع مباشرة",
          "labelEn": "It will sink straight to the bottom",
          "correct": false
        },
        {
          "id": "wrong2_32",
          "emoji": "❓",
          "labelAr": "ستذوب في الماء تماماً",
          "labelEn": "It will completely dissolve in the water",
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
      "characterId": "hakeem",
      "promptAr": "ذاكر سارة دروسه جيداً قبل الاختبار؟ ماذا سيحدث؟",
      "promptEn": "Sara studied their lessons well before the test? What will happen?",
      "choices": [
        {
          "id": "wrong1_33",
          "emoji": "🤔",
          "labelAr": "سيرسب في الاختبار",
          "labelEn": "They will fail the test",
          "correct": false
        },
        {
          "id": "wrong2_33",
          "emoji": "💭",
          "labelAr": "لن يفرق ذلك شيئاً في النتيجة",
          "labelEn": "It won’t make any difference to the result",
          "correct": false
        },
        {
          "id": "correct_33",
          "emoji": "❓",
          "labelAr": "سيحصل على درجة ممتازة 🌟",
          "labelEn": "They will get an excellent grade 🌟",
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
      "characterId": "hakeem",
      "promptAr": "لعب فهد بالكرة بالقرب من زجاج النافذة؟ ماذا سيحدث؟",
      "promptEn": "Fahad played ball right next to the window glass? What will happen?",
      "choices": [
        {
          "id": "correct_34",
          "emoji": "🤔",
          "labelAr": "قد يكسر الزجاج 🪟",
          "labelEn": "The glass might break 🪟",
          "correct": true
        },
        {
          "id": "wrong2_34",
          "emoji": "💭",
          "labelAr": "سيصبح الزجاج أقوى فجأة",
          "labelEn": "The glass will suddenly become stronger",
          "correct": false
        },
        {
          "id": "wrong1_34",
          "emoji": "❓",
          "labelAr": "ستطير الكرة للفضاء",
          "labelEn": "The ball will fly to space",
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
      "characterId": "hakeem",
      "promptAr": "وضع لمى الملابس المبللة تحت أشعة الشمس؟ ماذا سيحدث؟",
      "promptEn": "Lama put the wet clothes out under the sunshine? What will happen?",
      "choices": [
        {
          "id": "wrong1_35",
          "emoji": "🤔",
          "labelAr": "ستبتل الملابس أكثر",
          "labelEn": "The clothes will get even more wet",
          "correct": false
        },
        {
          "id": "wrong2_35",
          "emoji": "💭",
          "labelAr": "ستتجمد الملابس فوراً",
          "labelEn": "The clothes will freeze instantly",
          "correct": false
        },
        {
          "id": "correct_35",
          "emoji": "❓",
          "labelAr": "ستجف الملابس ☀️",
          "labelEn": "The clothes will dry ☀️",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission38",
    "number": 38,
    "options": [],
    "template": {
      "characterId": "hakeem",
      "promptAr": "وضع ماجد مكعب ثلج في الشمس الحارة؟ ماذا سيحدث؟",
      "promptEn": "Majed put an ice cube in the hot sun? What will happen?",
      "choices": [
        {
          "id": "wrong1_36",
          "emoji": "🤔",
          "labelAr": "سيتجمد أكثر ❄️",
          "labelEn": "It will freeze more ❄️",
          "correct": false
        },
        {
          "id": "wrong2_36",
          "emoji": "💭",
          "labelAr": "سيتحول إلى حجر 🪨",
          "labelEn": "It will turn into a rock 🪨",
          "correct": false
        },
        {
          "id": "correct_36",
          "emoji": "❓",
          "labelAr": "سيذوب ويتحول لماء 💧",
          "labelEn": "It will melt into water 💧",
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
      "characterId": "hakeem",
      "promptAr": "نفخ شهد بالوناً كثيراً جداً؟ ماذا سيحدث؟",
      "promptEn": "Shahad blew up a balloon way too much? What will happen?",
      "choices": [
        {
          "id": "wrong2_37",
          "emoji": "🤔",
          "labelAr": "سيتحول البالون لكرة 🏀",
          "labelEn": "The balloon will turn into a ball 🏀",
          "correct": false
        },
        {
          "id": "wrong1_37",
          "emoji": "💭",
          "labelAr": "سيطير البالون للفضاء 🚀",
          "labelEn": "The balloon will fly to space 🚀",
          "correct": false
        },
        {
          "id": "correct_37",
          "emoji": "❓",
          "labelAr": "سينفجر البالون 💥",
          "labelEn": "The balloon will pop 💥",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission40",
    "number": 40,
    "options": [],
    "template": {
      "characterId": "hakeem",
      "promptAr": "سقى عبدالله النبتة بانتظام كل يوم؟ ماذا سيحدث؟",
      "promptEn": "Abdullah watered the plant regularly every day? What will happen?",
      "choices": [
        {
          "id": "wrong1_38",
          "emoji": "🤔",
          "labelAr": "ستذبل النبتة 🥀",
          "labelEn": "The plant will wilt 🥀",
          "correct": false
        },
        {
          "id": "wrong2_38",
          "emoji": "💭",
          "labelAr": "ستتحول النبتة للون أزرق",
          "labelEn": "The plant will turn blue",
          "correct": false
        },
        {
          "id": "correct_38",
          "emoji": "❓",
          "labelAr": "ستنمو النبتة وتزهر 🌱",
          "labelEn": "The plant will grow and bloom 🌱",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission41",
    "number": 41,
    "options": [],
    "template": {
      "characterId": "hakeem",
      "promptAr": "ترك وردة الآيسكريم خارج الثلاجة وقتاً طويلاً؟ ماذا سيحدث؟",
      "promptEn": "Warda left ice cream outside the fridge for a long time? What will happen?",
      "choices": [
        {
          "id": "wrong1_39",
          "emoji": "🤔",
          "labelAr": "سيتجمد الآيسكريم أكثر",
          "labelEn": "The ice cream will freeze more",
          "correct": false
        },
        {
          "id": "wrong2_39",
          "emoji": "💭",
          "labelAr": "سيتحول لحلوى صلبة",
          "labelEn": "It will turn into hard candy",
          "correct": false
        },
        {
          "id": "correct_39",
          "emoji": "❓",
          "labelAr": "سيذوب الآيسكريم 🍦",
          "labelEn": "The ice cream will melt 🍦",
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
      "characterId": "hakeem",
      "promptAr": "قرأ يوسف كتاباً كل ليلة قبل النوم؟ ماذا سيحدث؟",
      "promptEn": "Yusuf read a book every night before bed? What will happen?",
      "choices": [
        {
          "id": "wrong2_40",
          "emoji": "🤔",
          "labelAr": "سينام فوراً دون أي فائدة",
          "labelEn": "He/she will just fall asleep with no benefit",
          "correct": false
        },
        {
          "id": "wrong1_40",
          "emoji": "💭",
          "labelAr": "سينسى القراءة تماماً",
          "labelEn": "He/she will forget how to read completely",
          "correct": false
        },
        {
          "id": "correct_40",
          "emoji": "❓",
          "labelAr": "سيتعلم كلمات جديدة كثيرة 📚",
          "labelEn": "He/she will learn lots of new words 📚",
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
      "characterId": "hakeem",
      "promptAr": "زرع ريم بذرة تفاح وسقاها بانتظام؟ ماذا سيحدث؟",
      "promptEn": "Reem planted an apple seed and watered it regularly? What will happen?",
      "choices": [
        {
          "id": "correct_41",
          "emoji": "🤔",
          "labelAr": "ستنبت شجرة تفاح صغيرة 🌳",
          "labelEn": "A small apple tree will sprout 🌳",
          "correct": true
        },
        {
          "id": "wrong1_41",
          "emoji": "💭",
          "labelAr": "ستتحول البذرة لزهرة فوراً",
          "labelEn": "The seed will turn into a flower instantly",
          "correct": false
        },
        {
          "id": "wrong2_41",
          "emoji": "❓",
          "labelAr": "لن يحدث شيء إطلاقاً",
          "labelEn": "Nothing will happen at all",
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
      "characterId": "hakeem",
      "promptAr": "ترك سلطان دراجته تحت المطر مدة طويلة؟ ماذا سيحدث؟",
      "promptEn": "Sultan left their bike out in the rain for a long time? What will happen?",
      "choices": [
        {
          "id": "wrong2_42",
          "emoji": "🤔",
          "labelAr": "ستتحول الدراجة للون ذهبي",
          "labelEn": "The bike will turn gold",
          "correct": false
        },
        {
          "id": "correct_42",
          "emoji": "💭",
          "labelAr": "قد تصدأ الدراجة 🚲",
          "labelEn": "The bike might rust 🚲",
          "correct": true
        },
        {
          "id": "wrong1_42",
          "emoji": "❓",
          "labelAr": "ستصبح الدراجة أسرع",
          "labelEn": "The bike will become faster",
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
      "characterId": "hakeem",
      "promptAr": "خلط هيا اللون الأزرق مع الأصفر؟ ماذا سيحدث؟",
      "promptEn": "Haya mixed blue paint with yellow paint? What will happen?",
      "choices": [
        {
          "id": "wrong1_43",
          "emoji": "🤔",
          "labelAr": "سيحصل على اللون الأحمر",
          "labelEn": "He/she will get the color red",
          "correct": false
        },
        {
          "id": "wrong2_43",
          "emoji": "💭",
          "labelAr": "سيحصل على اللون الأبيض",
          "labelEn": "He/she will get the color white",
          "correct": false
        },
        {
          "id": "correct_43",
          "emoji": "❓",
          "labelAr": "سيحصل على اللون الأخضر 🟢",
          "labelEn": "He/she will get the color green 🟢",
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
      "characterId": "hakeem",
      "promptAr": "لم ينظف تركي أسنانه لمدة طويلة؟ ماذا سيحدث؟",
      "promptEn": "Turki didn’t brush their teeth for a long time? What will happen?",
      "choices": [
        {
          "id": "correct_44",
          "emoji": "🤔",
          "labelAr": "قد تتسوس أسنانه 🦷",
          "labelEn": "Their teeth might get cavities 🦷",
          "correct": true
        },
        {
          "id": "wrong2_44",
          "emoji": "💭",
          "labelAr": "ستتغير أسنانه للون الأزرق",
          "labelEn": "Their teeth will turn blue",
          "correct": false
        },
        {
          "id": "wrong1_44",
          "emoji": "❓",
          "labelAr": "ستصبح أسنانه أقوى",
          "labelEn": "Their teeth will become stronger",
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
      "characterId": "hakeem",
      "promptAr": "وضع رهف بذور نبات في مكان مظلم بلا شمس؟ ماذا سيحدث؟",
      "promptEn": "Rahaf put plant seeds in a dark place with no sun? What will happen?",
      "choices": [
        {
          "id": "correct_45",
          "emoji": "🤔",
          "labelAr": "لن ينمو النبات بشكل جيد 🌑",
          "labelEn": "The plant won’t grow well 🌑",
          "correct": true
        },
        {
          "id": "wrong1_45",
          "emoji": "💭",
          "labelAr": "سينمو النبات أسرع بكثير",
          "labelEn": "The plant will grow much faster",
          "correct": false
        },
        {
          "id": "wrong2_45",
          "emoji": "❓",
          "labelAr": "سيتحول النبات للون الذهبي",
          "labelEn": "The plant will turn golden",
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
      "characterId": "hakeem",
      "promptAr": "نسي سعود مظلته في يوم ممطر وخرج بدونها؟ ماذا سيحدث؟",
      "promptEn": "Saud forgot their umbrella on a rainy day and went out without it? What will happen?",
      "choices": [
        {
          "id": "wrong1_46",
          "emoji": "🤔",
          "labelAr": "سيبقى جافاً تماماً",
          "labelEn": "They will stay completely dry",
          "correct": false
        },
        {
          "id": "correct_46",
          "emoji": "💭",
          "labelAr": "سيبتل من المطر ☔",
          "labelEn": "They will get wet from the rain ☔",
          "correct": true
        },
        {
          "id": "wrong2_46",
          "emoji": "❓",
          "labelAr": "ستتوقف السماء عن المطر فوراً",
          "labelEn": "The sky will stop raining instantly",
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
      "characterId": "hakeem",
      "promptAr": "ترك نورة كوب الحليب خارج الثلاجة طوال اليوم في الصيف؟ ماذا سيحدث؟",
      "promptEn": "Noura left a cup of milk out of the fridge all day in summer? What will happen?",
      "choices": [
        {
          "id": "wrong2_47",
          "emoji": "🤔",
          "labelAr": "سيتجمد الحليب فوراً",
          "labelEn": "The milk will freeze instantly",
          "correct": false
        },
        {
          "id": "correct_47",
          "emoji": "💭",
          "labelAr": "سيفسد الحليب 🥛",
          "labelEn": "The milk will spoil 🥛",
          "correct": true
        },
        {
          "id": "wrong1_47",
          "emoji": "❓",
          "labelAr": "سيصبح الحليب ألذ",
          "labelEn": "The milk will taste better",
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
      "characterId": "hakeem",
      "promptAr": "تدرّب خالد على العزف يومياً لمدة شهر كامل؟ ماذا سيحدث؟",
      "promptEn": "Khalid practiced playing music daily for a whole month? What will happen?",
      "choices": [
        {
          "id": "wrong1_48",
          "emoji": "🤔",
          "labelAr": "سينسى العزف تماماً",
          "labelEn": "They will forget how to play entirely",
          "correct": false
        },
        {
          "id": "wrong2_48",
          "emoji": "💭",
          "labelAr": "لن يتغير شيء أبداً",
          "labelEn": "Nothing will change at all",
          "correct": false
        },
        {
          "id": "correct_48",
          "emoji": "❓",
          "labelAr": "سيتحسن في العزف كثيراً 🎵",
          "labelEn": "They will get much better at playing 🎵",
          "correct": true
        }
      ]
    }
  },
  {
    "id": "mission51",
    "number": 51,
    "options": [],
    "template": {
      "characterId": "hakeem",
      "promptAr": "ألقى جود قطعة معدن ثقيلة في حوض الماء؟ ماذا سيحدث؟",
      "promptEn": "Jood dropped a heavy piece of metal into a water tub? What will happen?",
      "choices": [
        {
          "id": "wrong1_49",
          "emoji": "🤔",
          "labelAr": "ستطفو فوق الماء",
          "labelEn": "It will float on the water",
          "correct": false
        },
        {
          "id": "wrong2_49",
          "emoji": "💭",
          "labelAr": "ستتحول إلى ذهب فوراً",
          "labelEn": "It will turn into gold instantly",
          "correct": false
        },
        {
          "id": "correct_49",
          "emoji": "❓",
          "labelAr": "ستغرق لأنها أثقل من الماء ⚓",
          "labelEn": "It will sink because it’s heavier than water ⚓",
          "correct": true
        }
      ]
    }
  }
];
