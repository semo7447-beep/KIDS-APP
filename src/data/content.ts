export type LetterItem = {
  char: string;
  word: string;
  emoji: string;
};

export const ARABIC_LETTERS: LetterItem[] = [
  { char: 'أ', word: 'أسد', emoji: '🦁' },
  { char: 'ب', word: 'بطة', emoji: '🦆' },
  { char: 'ت', word: 'تفاحة', emoji: '🍎' },
  { char: 'ث', word: 'ثعلب', emoji: '🦊' },
  { char: 'ج', word: 'جمل', emoji: '🐫' },
  { char: 'ح', word: 'حصان', emoji: '🐴' },
  { char: 'خ', word: 'خروف', emoji: '🐑' },
  { char: 'د', word: 'دجاجة', emoji: '🐔' },
  { char: 'ذ', word: 'ذئب', emoji: '🐺' },
  { char: 'ر', word: 'رمان', emoji: '🍎' },
  { char: 'ز', word: 'زرافة', emoji: '🦒' },
  { char: 'س', word: 'سمكة', emoji: '🐟' },
  { char: 'ش', word: 'شمس', emoji: '☀️' },
  { char: 'ص', word: 'صقر', emoji: '🦅' },
  { char: 'ض', word: 'ضفدع', emoji: '🐸' },
  { char: 'ط', word: 'طائرة', emoji: '✈️' },
  { char: 'ظ', word: 'ظبي', emoji: '🦌' },
  { char: 'ع', word: 'عصفور', emoji: '🐦' },
  { char: 'غ', word: 'غزال', emoji: '🦌' },
  { char: 'ف', word: 'فيل', emoji: '🐘' },
  { char: 'ق', word: 'قطة', emoji: '🐱' },
  { char: 'ك', word: 'كلب', emoji: '🐶' },
  { char: 'ل', word: 'ليمون', emoji: '🍋' },
  { char: 'م', word: 'موز', emoji: '🍌' },
  { char: 'ن', word: 'نحلة', emoji: '🐝' },
  { char: 'ه', word: 'هدهد', emoji: '🐦' },
  { char: 'و', word: 'وردة', emoji: '🌹' },
  { char: 'ي', word: 'يد', emoji: '✋' },
];

export const ENGLISH_LETTERS: LetterItem[] = [
  { char: 'A', word: 'Apple', emoji: '🍎' },
  { char: 'B', word: 'Ball', emoji: '⚽' },
  { char: 'C', word: 'Cat', emoji: '🐱' },
  { char: 'D', word: 'Dog', emoji: '🐶' },
  { char: 'E', word: 'Elephant', emoji: '🐘' },
  { char: 'F', word: 'Fish', emoji: '🐟' },
  { char: 'G', word: 'Giraffe', emoji: '🦒' },
  { char: 'H', word: 'Horse', emoji: '🐴' },
  { char: 'I', word: 'Ice cream', emoji: '🍦' },
  { char: 'J', word: 'Juice', emoji: '🧃' },
  { char: 'K', word: 'Kite', emoji: '🪁' },
  { char: 'L', word: 'Lion', emoji: '🦁' },
  { char: 'M', word: 'Moon', emoji: '🌙' },
  { char: 'N', word: 'Nest', emoji: '🪺' },
  { char: 'O', word: 'Orange', emoji: '🍊' },
  { char: 'P', word: 'Panda', emoji: '🐼' },
  { char: 'Q', word: 'Queen', emoji: '👸' },
  { char: 'R', word: 'Rabbit', emoji: '🐰' },
  { char: 'S', word: 'Sun', emoji: '☀️' },
  { char: 'T', word: 'Tiger', emoji: '🐯' },
  { char: 'U', word: 'Umbrella', emoji: '☂️' },
  { char: 'V', word: 'Van', emoji: '🚐' },
  { char: 'W', word: 'Whale', emoji: '🐳' },
  { char: 'X', word: 'Xylophone', emoji: '🎼' },
  { char: 'Y', word: 'Yo-yo', emoji: '🪀' },
  { char: 'Z', word: 'Zebra', emoji: '🦓' },
];

export type NumberItem = {
  value: number;
  ar: string;
  en: string;
  emoji: string;
};

const NUMBER_EMOJIS = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
const NUMBER_WORDS_AR = [
  'صفر', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة', 'عشرة',
];
const NUMBER_WORDS_EN = [
  'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
];

export const NUMBERS: NumberItem[] = Array.from({ length: 11 }, (_, i) => ({
  value: i,
  ar: NUMBER_WORDS_AR[i],
  en: NUMBER_WORDS_EN[i],
  emoji: NUMBER_EMOJIS[i],
}));

export type ColorItem = {
  hex: string;
  ar: string;
  en: string;
};

export const COLORS: ColorItem[] = [
  { hex: '#FF5E5E', ar: 'أحمر', en: 'Red' },
  { hex: '#4AC5FF', ar: 'أزرق', en: 'Blue' },
  { hex: '#FFD93D', ar: 'أصفر', en: 'Yellow' },
  { hex: '#3FD68D', ar: 'أخضر', en: 'Green' },
  { hex: '#FF9F45', ar: 'برتقالي', en: 'Orange' },
  { hex: '#8E5DF2', ar: 'بنفسجي', en: 'Purple' },
  { hex: '#FF6FA5', ar: 'وردي', en: 'Pink' },
  { hex: '#A0522D', ar: 'بني', en: 'Brown' },
  { hex: '#3A2E4D', ar: 'أسود', en: 'Black' },
  { hex: '#FFFFFF', ar: 'أبيض', en: 'White' },
];

export const MEMORY_EMOJIS = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🥝', '🍑'];
