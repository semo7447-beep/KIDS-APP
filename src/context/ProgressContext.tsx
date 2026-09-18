import React, { createContext, useContext, useState } from 'react';

type ProgressContextValue = {
  visited: Set<string>;
  markVisited: (stopId: string) => void;
};

const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [visited, setVisited] = useState<Set<string>>(new Set());

  const markVisited = (stopId: string) => {
    setVisited((prev) => {
      if (prev.has(stopId)) return prev;
      const next = new Set(prev);
      next.add(stopId);
      return next;
    });
  };

  return (
    <ProgressContext.Provider value={{ visited, markVisited }}>{children}</ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
