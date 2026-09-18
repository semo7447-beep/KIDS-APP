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
