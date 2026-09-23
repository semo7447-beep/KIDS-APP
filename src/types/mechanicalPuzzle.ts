export type PuzzleStageGear = {
  kind: 'gear';
  labelAr: string;
  labelEn: string;
  step: number;
  target: number;
};

export type PuzzleStageDial = {
  kind: 'dial';
  labelAr: string;
  labelEn: string;
  code: number[];
  // Pygame's level 1 dial needs an explicit ENGAGE tap; level 2's runes auto-check every tap.
  requireEngage: boolean;
};

export type PuzzleStageSlider = {
  kind: 'slider';
  labelAr: string;
  labelEn: string;
  step: number;
};

export type PuzzleStageLevers = {
  kind: 'levers';
  labelAr: string;
  labelEn: string;
  count: number;
};

export type PuzzleStageChest = {
  kind: 'chest';
};

export type PuzzleStage = PuzzleStageGear | PuzzleStageDial | PuzzleStageSlider | PuzzleStageLevers | PuzzleStageChest;

export type MechanicalPuzzleMission = {
  id: string;
  number: number;
  characterId: string;
  promptAr: string;
  promptEn: string;
  hints: number;
  hintsAr: string[];
  hintsEn: string[];
  stages: PuzzleStage[];
};
