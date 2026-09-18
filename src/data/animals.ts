export type AnimalItem = {
  id: string;
  emoji: string;
  nameAr: string;
  nameEn: string;
  factAr: string;
  factEn: string;
  landColor: string;
};

export const ANIMALS: AnimalItem[] = [
  {
    id: 'bear',
    emoji: '🐻',
    nameAr: 'الدب',
    nameEn: 'Bear',
    factAr: 'الدب يحب العسل كتير!',
    factEn: 'Bears love honey!',
    landColor: '#C9A15E',
  },
  {
    id: 'fox',
    emoji: '🦊',
    nameAr: 'الثعلب',
    nameEn: 'Fox',
    factAr: 'الثعلب له ذيل كبير وناعم.',
    factEn: 'The fox has a big fluffy tail.',
    landColor: '#3FD68D',
  },
  {
    id: 'tiger',
    emoji: '🐯',
    nameAr: 'النمر',
    nameEn: 'Tiger',
    factAr: 'النمر عنده خطوط برتقالية وسوداء.',
    factEn: 'The tiger has orange and black stripes.',
    landColor: '#FF9F45',
  },
  {
    id: 'elephant',
    emoji: '🐘',
    nameAr: 'الفيل',
    nameEn: 'Elephant',
    factAr: 'الفيل أكبر حيوان بري في الدنيا.',
    factEn: 'The elephant is the biggest land animal.',
    landColor: '#3FD68D',
  },
  {
    id: 'monkey',
    emoji: '🐒',
    nameAr: 'القرد',
    nameEn: 'Monkey',
    factAr: 'القرد بيحب يتسلق الأشجار.',
    factEn: 'The monkey loves to climb trees.',
    landColor: '#3FD68D',
  },
  {
    id: 'kangaroo',
    emoji: '🦘',
    nameAr: 'الكنغر',
    nameEn: 'Kangaroo',
    factAr: 'الكنغر بيقفز بدل ما يمشي.',
    factEn: 'The kangaroo jumps instead of walking.',
    landColor: '#FF9F45',
  },
  {
    id: 'penguin',
    emoji: '🐧',
    nameAr: 'البطريق',
    nameEn: 'Penguin',
    factAr: 'البطريق بيعيش في الثلج ويحب السباحة.',
    factEn: 'The penguin lives in the snow and loves swimming.',
    landColor: '#FFFFFF',
  },
];
