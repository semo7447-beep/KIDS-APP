import React, { createContext, useContext, useMemo, useState } from 'react';

export type Lang = 'ar' | 'en';

type Strings = {
  appName: string;
  home: string;
  learn: string;
  games: string;
  draw: string;
  welcome: string;
  letters: string;
  numbers: string;
  colors: string;
  memoryGame: string;
  pattern: string;
  oddOneOut: string;
  findDifferent: string;
  animalWorld: string;
  detective: string;
  predictGame: string;
  whatsMissing: string;
  speedChallenge: string;
  robotProgram: string;
  rescueAnimal: string;
  secretRoom: string;
  memorize: string;
  whatDisappeared: string;
  findTarget: string;
  timeUp: string;
  tryAgain: string;
  startRobot: string;
  goal: string;
  repeatOrder: string;
  unlocked: string;
  wellDone: string;
  playAgain: string;
  tapToHear: string;
  clear: string;
  undo: string;
  back: string;
  moves: string;
  langToggle: string;
};

const AR: Strings = {
  appName: 'عالم الأطفال',
  home: 'الرئيسية',
  learn: 'تعلّم',
  games: 'ألعاب',
  draw: 'ارسم',
  welcome: 'أهلاً بك! اختر نشاطًا لتبدأ',
  letters: 'الحروف',
  numbers: 'الأرقام',
  colors: 'الألوان',
  memoryGame: 'لعبة الذاكرة',
  pattern: 'أكمل النمط',
  oddOneOut: 'ابحث عن المختلف',
  findDifferent: 'اضغط على المختلف',
  animalWorld: 'عالم الحيوانات',
  detective: 'المحقق الصغير',
  predictGame: 'ماذا سيحدث؟',
  whatsMissing: 'اختفى شيء',
  speedChallenge: 'تحدي 10 ثوانٍ',
  robotProgram: 'برمج الروبوت',
  rescueAnimal: 'أنقذ الحيوان',
  secretRoom: 'غرفة الأسرار',
  memorize: 'احفظ!',
  whatDisappeared: 'ايه اللي اختفى؟',
  findTarget: 'دور على',
  timeUp: 'حاول تاني!',
  tryAgain: 'حاول تاني',
  startRobot: 'ابدأ',
  goal: 'الهدف',
  repeatOrder: 'كرر نفس الترتيب',
  unlocked: 'فتحت الغرفة! 🔓',
  wellDone: 'أحسنت! 🎉',
  playAgain: 'العب مرة أخرى',
  tapToHear: 'اضغط لتسمع',
  clear: 'مسح',
  undo: 'تراجع',
  back: 'رجوع',
  moves: 'المحاولات',
  langToggle: 'English',
};

const EN: Strings = {
  appName: "Kids World",
  home: 'Home',
  learn: 'Learn',
  games: 'Games',
  draw: 'Draw',
  welcome: 'Welcome! Pick an activity to start',
  letters: 'Letters',
  numbers: 'Numbers',
  colors: 'Colors',
  memoryGame: 'Memory Game',
  pattern: 'Pattern',
  oddOneOut: 'Odd One Out',
  findDifferent: 'Tap the different one',
  animalWorld: 'Animal World',
  detective: 'Little Detective',
  predictGame: 'What Will Happen?',
  whatsMissing: "What's Missing",
  speedChallenge: '10 Second Challenge',
  robotProgram: 'Program the Robot',
  rescueAnimal: 'Rescue the Animal',
  secretRoom: 'Secret Room',
  memorize: 'Memorize!',
  whatDisappeared: 'What disappeared?',
  findTarget: 'Find',
  timeUp: 'Try again!',
  tryAgain: 'Try again',
  startRobot: 'Go',
  goal: 'Goal',
  repeatOrder: 'Repeat the same order',
  unlocked: 'Room unlocked! 🔓',
  wellDone: 'Well done! 🎉',
  playAgain: 'Play again',
  tapToHear: 'Tap to hear',
  clear: 'Clear',
  undo: 'Undo',
  back: 'Back',
  moves: 'Moves',
  langToggle: 'عربي',
};

const STRINGS: Record<Lang, Strings> = { ar: AR, en: EN };

type LanguageContextValue = {
  lang: Lang;
  t: Strings;
  isRTL: boolean;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar');

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: STRINGS[lang],
      isRTL: lang === 'ar',
      toggleLang: () => setLang((prev) => (prev === 'ar' ? 'en' : 'ar')),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
