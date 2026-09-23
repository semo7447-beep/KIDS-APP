export type MechanicalPuzzleMission = {
  id: string;
  number: number;
  characterId: string;
  promptAr: string;
  promptEn: string;
  hints: number;
  hintsAr: string[];
  hintsEn: string[];
  // Stage 1: star gear wheel — tap rotates it by gearStep degrees; solved at gearTarget degrees.
  gearStep: number;
  gearTarget: number;
  // Stage 2: 3-digit dial — tap a digit to cycle 0-9; solved when it matches dialCode, confirmed via ENGAGE.
  dialCode: number[];
  // Stage 3: sliding bolt — tap adds sliderStep percent; solved at 100.
  sliderStep: number;
};
