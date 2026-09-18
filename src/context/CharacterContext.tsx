import React, { createContext, useContext, useState } from 'react';
import { CHARACTERS } from '../data/characters';

type CharacterContextValue = {
  selectedId: string;
  setSelectedId: (id: string) => void;
};

const CharacterContext = createContext<CharacterContextValue | undefined>(undefined);

export function CharacterProvider({ children }: { children: React.ReactNode }) {
  const [selectedId, setSelectedId] = useState<string>(CHARACTERS[0].id);
  return (
    <CharacterContext.Provider value={{ selectedId, setSelectedId }}>{children}</CharacterContext.Provider>
  );
}

export function useCharacter() {
  const ctx = useContext(CharacterContext);
  if (!ctx) throw new Error('useCharacter must be used within CharacterProvider');
  return ctx;
}
