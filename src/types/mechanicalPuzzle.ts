// Percent-based hit region within a mission's full sceneImage.
export type Hotspot = { left: number; top: number; width: number; height: number };

export type PuzzleStageGear = {
  kind: 'gear';
  labelAr: string;
  labelEn: string;
  step: number;
  target: number;
  // Angle the gear starts at (Chronos Corridor's spiral gear starts pre-rotated at 120°).
  startAngle?: number;
  // Real gear icon to rotate in place of the drawn SVG gear, when supplied.
  image?: ReturnType<typeof require>;
  // Scene mode: tap region over the mission's sceneImage, instead of a dedicated panel.
  hotspot?: Hotspot;
};

export type PuzzleStageDial = {
  kind: 'dial';
  labelAr: string;
  labelEn: string;
  code: number[];
  // Pygame's level 1 dial needs an explicit ENGAGE tap; level 2's runes auto-check every tap.
  requireEngage: boolean;
  // Real dial-frame art (the whole multi-cylinder housing) to use as background, with
  // digit text overlaid at slotCenters, instead of the drawn per-digit boxes.
  frameImage?: ReturnType<typeof require>;
  frameImageRatio?: number;
  slotCenters?: { left: number; top: number }[];
  // Scene mode: one tap region per digit over the sceneImage, plus the ENGAGE button's region.
  digitHotspots?: Hotspot[];
  engageHotspot?: Hotspot;
};

export type PuzzleStageSlider = {
  kind: 'slider';
  labelAr: string;
  labelEn: string;
  step: number;
  // Real track/knob art to use instead of the drawn bar + circle knob, when supplied.
  trackImage?: ReturnType<typeof require>;
  trackImageRatio?: number;
  knobImage?: ReturnType<typeof require>;
  knobImageRatio?: number;
  // Scene mode: tap region over the sceneImage.
  hotspot?: Hotspot;
  // Scene mode: region to briefly glow gold when this stage completes (e.g. the gear
  // cluster the bolt visually unlocks), purely a visual flourish, no extra game logic.
  glowHotspot?: Hotspot;
};

export type PuzzleStageLevers = {
  kind: 'levers';
  labelAr: string;
  labelEn: string;
  count: number;
};

export type PuzzleStageChest = {
  kind: 'chest';
  // Real closed/open chest art to use instead of the 🔒/📦 emoji, when supplied.
  closedImage?: ReturnType<typeof require>;
  openImage?: ReturnType<typeof require>;
  // Scene mode: tap region over the sceneImage.
  hotspot?: Hotspot;
};

// Each slot cycles through `optionCount` planet colors; solved when every slot's
// color index matches `target`.
export type PuzzleStagePlanets = {
  kind: 'planets';
  labelAr: string;
  labelEn: string;
  optionCount: number;
  target: number[];
};

// Tap an option to fill the next empty slot, in order; solved when the filled
// sequence matches `correctOrder`. A full-but-wrong sequence resets to empty
// (mirrors the Pygame rune-slot reference, which never costs a life on mismatch).
export type PuzzleStageSequence = {
  kind: 'sequence';
  labelAr: string;
  labelEn: string;
  options: { id: string; emoji: string }[];
  correctOrder: string[];
};

// A dot starts at `startValue` and moves toward the center by `step` on each tap;
// solved once it reaches `target` or below.
export type PuzzleStageMaze = {
  kind: 'maze';
  labelAr: string;
  labelEn: string;
  startValue: number;
  step: number;
  target: number;
};

export type PuzzleStage =
  | PuzzleStageGear
  | PuzzleStageDial
  | PuzzleStageSlider
  | PuzzleStageLevers
  | PuzzleStageChest
  | PuzzleStagePlanets
  | PuzzleStageSequence
  | PuzzleStageMaze;

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
  // When set, the board renders this full reference scene as the background and places
  // each stage's hotspot(s) directly over it, instead of the stacked-panel layout.
  sceneImage?: ReturnType<typeof require>;
  sceneImageRatio?: number;
  // Scene mode: the artwork's own BACK button and HINTS card become the real controls.
  // hintCountHotspot / hintLeftHotspot cover the printed "3" and "3 LEFT" with the live count.
  backHotspot?: Hotspot;
  hintsHotspot?: Hotspot;
  hintCountHotspot?: Hotspot;
  hintLeftHotspot?: Hotspot;
};
