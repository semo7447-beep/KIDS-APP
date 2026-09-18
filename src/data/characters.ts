export type CharacterItem = {
  id: string;
  image: ReturnType<typeof require>;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  color: string;
};

export const CHARACTERS: CharacterItem[] = [
  { id: 'simo', image: require('../../assets/characters/simo.png'), nameAr: 'سيمو', nameEn: 'Simo', descAr: 'قائد الفريق ومحب التحديات', descEn: 'Team leader who loves challenges', color: '#4AC5FF' },
  { id: 'nour', image: require('../../assets/characters/nour.png'), nameAr: 'نور', nameEn: 'Nour', descAr: 'مبدعة وتحب الاستكشاف', descEn: 'Creative and loves exploring', color: '#FF6FA5' },
  { id: 'nawaf', image: require('../../assets/characters/nawaf.png'), nameAr: 'نواف', nameEn: 'Nawaf', descAr: 'لطيف ويحب مساعدة الأصدقاء', descEn: 'Kind and loves helping friends', color: '#FF9F45' },
  { id: 'alaa', image: require('../../assets/characters/alaa.png'), nameAr: 'علاء', nameEn: 'Alaa', descAr: 'المحقق الذكي والملاحظ', descEn: 'The smart, observant detective', color: '#FF5E5E' },
  { id: 'royo', image: require('../../assets/characters/royo.png'), nameAr: 'رويو', nameEn: 'Royo', descAr: 'يحب التكنولوجيا والابتكار', descEn: 'Loves technology and invention', color: '#4AC5FF' },
  { id: 'meemo', image: require('../../assets/characters/meemo.png'), nameAr: 'ميمو', nameEn: 'Meemo', descAr: 'شجاع ويحب المغامرات', descEn: 'Brave and loves adventures', color: '#3FD68D' },
  { id: 'rafa', image: require('../../assets/characters/rafa.png'), nameAr: 'رفا', nameEn: 'Rafa', descAr: 'لطيفة وتحب الفن', descEn: 'Sweet and loves art', color: '#8E5DF2' },
  { id: 'hakeem', image: require('../../assets/characters/hakeem.png'), nameAr: 'حكيم', nameEn: 'Hakeem', descAr: 'ذكي ويحب القراءة', descEn: 'Smart and loves reading', color: '#3FD68D' },
  { id: 'biko', image: require('../../assets/characters/biko.png'), nameAr: 'بيكو', nameEn: 'Biko', descAr: 'نشيط ويحب الرياضة', descEn: 'Active and loves sports', color: '#4AC5FF' },
  { id: 'nono', image: require('../../assets/characters/nono.png'), nameAr: 'نونو', nameEn: 'Nono', descAr: 'فضولي ويحب الفضاء', descEn: 'Curious and loves space', color: '#8E5DF2' },
  { id: 'diala', image: require('../../assets/characters/diala.png'), nameAr: 'ديالا', nameEn: 'Diala', descAr: 'مستكشفة الطبيعة والحيوانات', descEn: 'Explorer of nature and animals', color: '#FFD93D' },
  { id: 'omar', image: require('../../assets/characters/omar.png'), nameAr: 'عمر', nameEn: 'Omar', descAr: 'عالم صغير يحب التجارب', descEn: 'Little scientist who loves experiments', color: '#4AC5FF' },
  { id: 'eliana', image: require('../../assets/characters/eliana.png'), nameAr: 'إليانا', nameEn: 'Eliana', descAr: 'تحب القصص والسحر', descEn: 'Loves stories and magic', color: '#8E5DF2' },
  { id: 'eyad', image: require('../../assets/characters/eyad.png'), nameAr: 'إياد', nameEn: 'Eyad', descAr: 'مبدع في البناء والابتكار', descEn: 'Creative builder and inventor', color: '#FFD93D' },
  { id: 'lina', image: require('../../assets/characters/lina.png'), nameAr: 'لينا', nameEn: 'Lina', descAr: 'تحب الشتاء والمغامرات', descEn: 'Loves winter and adventures', color: '#4AC5FF' },
];
