import React, { createContext, useContext, useMemo, useState } from 'react';

export type Lang = 'ar' | 'en';

type Strings = {
  appName: string;
  tagline: string;
  chooseCharacter: string;
  wellDone: string;
  playAgain: string;
  clear: string;
  undo: string;
  moves: string;
  langToggle: string;
  memorize: string;
  whatDisappeared: string;
  findTarget: string;
  timeUp: string;
  startRobot: string;
  repeatOrder: string;
  unlocked: string;
  drawPrompt: string;
  newDrawing: string;
  choosePath: string;
  workTogether: string;
  yourTurn: string;
  buildScene: string;
};

const AR: Strings = {
  appName: 'مين البطل؟',
  tagline: 'أبطال المعرفة والمغامرة',
  chooseCharacter: 'اختر شخصيتك',
  wellDone: 'أحسنت! 🎉',
  playAgain: 'العب مرة أخرى',
  clear: 'مسح',
  undo: 'تراجع',
  moves: 'المحاولات',
  langToggle: 'English',
  memorize: 'احفظ!',
  whatDisappeared: 'ايه اللي اختفى؟',
  findTarget: 'دور على',
  timeUp: 'حاول تاني!',
  startRobot: 'ابدأ',
  repeatOrder: 'كرر نفس الترتيب',
  unlocked: 'فتحت الغرفة! 🔓',
  drawPrompt: 'ارسم اللي شايفه',
  newDrawing: 'رسمة جديدة',
  choosePath: 'اختر الطريق الصح',
  workTogether: 'اشتغلوا مع بعض',
  yourTurn: 'دورك',
  buildScene: 'اسحب العناصر وابنِ عالمك',
};

const EN: Strings = {
  appName: "Who's The Hero?",
  tagline: 'Heroes of Knowledge and Adventure',
  chooseCharacter: 'Choose Your Character',
  wellDone: 'Well done! 🎉',
  playAgain: 'Play again',
  clear: 'Clear',
  undo: 'Undo',
  moves: 'Moves',
  langToggle: 'عربي',
  memorize: 'Memorize!',
  whatDisappeared: 'What disappeared?',
  findTarget: 'Find',
  timeUp: 'Try again!',
  startRobot: 'Go',
  repeatOrder: 'Repeat the same order',
  unlocked: 'Room unlocked! 🔓',
  drawPrompt: 'Draw what you see',
  newDrawing: 'New drawing',
  choosePath: 'Choose the right path',
  workTogether: 'Work together',
  yourTurn: 'Your turn',
  buildScene: 'Drag items to build your world',
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
