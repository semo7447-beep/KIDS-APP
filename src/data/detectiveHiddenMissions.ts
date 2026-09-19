import { HiddenObjectMission } from '../types/hiddenObject';

export const DETECTIVE_HIDDEN_MISSIONS: HiddenObjectMission[] = [
  {
    id: 'hidden1',
    number: 2,
    image: require('../../assets/missions/detective/hidden_scene1_full.jpg'),
    imageRatio: 941 / 1672,
    characterId: 'alaa',
    promptAr: 'دور على الأغراض المطلوبة في مكتب المحقق! 🔍',
    promptEn: "Find the listed objects in the detective's study! 🔍",
    lives: 3,
    hints: 3,
    targetIds: ['magnifier', 'coffee', 'camera', 'candle', 'key', 'compass', 'cards', 'pocketwatch'],
    objects: [
      { id: 'magnifier', left: 36, top: 59, width: 22, height: 10, icon: require('../../assets/missions/detective/icons/magnifier.jpg'), labelAr: 'المكبرة', labelEn: 'Magnifier' },
      { id: 'coffee', left: 1, top: 55, width: 16, height: 9, icon: require('../../assets/missions/detective/icons/coffee.jpg'), labelAr: 'فنجان القهوة', labelEn: 'Coffee cup' },
      { id: 'glasses', left: 15, top: 58, width: 20, height: 6, icon: require('../../assets/missions/detective/icons/glasses.jpg'), labelAr: 'النظارة', labelEn: 'Glasses' },
      { id: 'camera', left: 63, top: 50, width: 17, height: 9, icon: require('../../assets/missions/detective/icons/camera.jpg'), labelAr: 'الكاميرا', labelEn: 'Camera' },
      { id: 'phone', left: 76, top: 44, width: 20, height: 10, icon: require('../../assets/missions/detective/icons/phone.jpg'), labelAr: 'الهاتف', labelEn: 'Telephone' },
      { id: 'candle', left: 86, top: 57, width: 11, height: 13, icon: require('../../assets/missions/detective/icons/candle.jpg'), labelAr: 'الشمعة', labelEn: 'Candle' },
      { id: 'inkwell', left: 69, top: 62, width: 13, height: 9, icon: require('../../assets/missions/detective/icons/inkwell.jpg'), labelAr: 'دواة الحبر', labelEn: 'Inkwell' },
      { id: 'toycar', left: 76, top: 72, width: 16, height: 7, icon: require('../../assets/missions/detective/icons/toycar.jpg'), labelAr: 'سيارة اللعبة', labelEn: 'Toy car' },
      { id: 'key', left: 30, top: 73, width: 15, height: 7, icon: require('../../assets/missions/detective/icons/key.jpg'), labelAr: 'المفتاح', labelEn: 'Key' },
      { id: 'compass', left: 74, top: 82, width: 20, height: 9, icon: require('../../assets/missions/detective/icons/compass.jpg'), labelAr: 'البوصلة', labelEn: 'Compass' },
      { id: 'cards', left: 38, top: 75, width: 32, height: 14, icon: require('../../assets/missions/detective/icons/cards.jpg'), labelAr: 'أوراق اللعب', labelEn: 'Playing cards' },
      { id: 'pocketwatch', left: 80, top: 71, width: 19, height: 10, icon: require('../../assets/missions/detective/icons/pocketwatch.jpg'), labelAr: 'ساعة الجيب', labelEn: 'Pocket watch' },
      { id: 'book', left: 0, top: 63, width: 28, height: 10, icon: require('../../assets/missions/detective/icons/book.jpg'), labelAr: 'الكتاب', labelEn: 'Book' },
      { id: 'plant', left: 59, top: 40, width: 16, height: 12, icon: require('../../assets/missions/detective/icons/plant.jpg'), labelAr: 'النبتة', labelEn: 'Plant' },
      { id: 'dogstatue', left: 10, top: 30, width: 14, height: 10, icon: require('../../assets/missions/detective/icons/dogstatue.jpg'), labelAr: 'تمثال الكلب', labelEn: 'Dog statue' },
    ],
  },
];
