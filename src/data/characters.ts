export type CharacterItem = {
  id: string;
  image: ReturnType<typeof require>;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
};

export const CHARACTERS: CharacterItem[] = [
  { id: 'diala', image: require('../../assets/characters/diala.jpg'), nameAr: 'ديالا', nameEn: 'Diala', descAr: 'مستكشفة الطبيعة والحيوانات', descEn: 'Explorer of nature and animals' },
  { id: 'timo', image: require('../../assets/characters/timo.jpg'), nameAr: 'تيمو', nameEn: 'Timo', descAr: 'صوت المرح', descEn: 'The voice of fun' },
  { id: 'eliana', image: require('../../assets/characters/eliana.jpg'), nameAr: 'إليانا', nameEn: 'Eliana', descAr: 'الأميرة المبدعة', descEn: 'The creative princess' },
  { id: 'nono', image: require('../../assets/characters/nono.jpg'), nameAr: 'نونو', nameEn: 'Nono', descAr: 'فضولي ويحب الفضاء', descEn: 'Curious and loves space' },
  { id: 'nawaf', image: require('../../assets/characters/nawaf.jpg'), nameAr: 'نواف', nameEn: 'Nawaf', descAr: 'لطيف ويحب مساعدة الأصدقاء', descEn: 'Kind and loves helping friends' },
  { id: 'murad', image: require('../../assets/characters/murad.jpg'), nameAr: 'مراد', nameEn: 'Murad', descAr: 'دكتور كتب وحب القراءة', descEn: 'Doctor of books, loves reading' },
  { id: 'lina', image: require('../../assets/characters/lina.jpg'), nameAr: 'لينا', nameEn: 'Lina', descAr: 'تحب الثلج والمغامرات', descEn: 'Loves snow and adventures' },
  { id: 'tshabi', image: require('../../assets/characters/tshabi.jpg'), nameAr: 'تشابي', nameEn: 'Tshabi', descAr: 'ماعز صغير بقلب كبير', descEn: 'Small goat, big heart' },
  { id: 'eyad', image: require('../../assets/characters/eyad.jpg'), nameAr: 'إياد', nameEn: 'Eyad', descAr: 'مبدع في البناء والابتكار', descEn: 'Creative builder and inventor' },
  { id: 'layan', image: require('../../assets/characters/layan.jpg'), nameAr: 'ليان', nameEn: 'Layan', descAr: 'مبدعة ونشيطة .. تصنع الجمال', descEn: 'Creative and lively, makes beauty' },
  { id: 'lulu', image: require('../../assets/characters/lulu.jpg'), nameAr: 'لولو', nameEn: 'Lulu', descAr: 'الفن لغة القلوب', descEn: 'Art is the language of hearts' },
  { id: 'omar', image: require('../../assets/characters/omar.jpg'), nameAr: 'عمر', nameEn: 'Omar', descAr: 'عالم صغير يصنع الفرق', descEn: 'A little scientist who makes a difference' },
  { id: 'robo', image: require('../../assets/characters/robo.jpg'), nameAr: 'روبو', nameEn: 'Robo', descAr: 'يحب التكنولوجيا والابتكار', descEn: 'Loves technology and invention' },
  { id: 'hakeem', image: require('../../assets/characters/hakeem.jpg'), nameAr: 'حكيم', nameEn: 'Hakeem', descAr: 'ذكي ويحب القراءة', descEn: 'Smart and loves reading' },
  { id: 'alaa', image: require('../../assets/characters/alaa.jpg'), nameAr: 'علاء', nameEn: 'Alaa', descAr: 'المحقق الذكي والملاحظ', descEn: 'The smart, observant detective' },
  { id: 'biko', image: require('../../assets/characters/biko.jpg'), nameAr: 'بيكو', nameEn: 'Biko', descAr: 'شغف وحب الرياضة', descEn: 'Passion and love of sports' },
];
