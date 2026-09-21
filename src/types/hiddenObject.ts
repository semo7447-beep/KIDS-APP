export type HiddenObjectItem = {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
  // Legacy per-object assets (used when the mission has no emptyImage).
  icon?: ReturnType<typeof require>;
  cover?: ReturnType<typeof require>;
  labelAr: string;
  labelEn: string;
};

export type HiddenObjectMission = {
  id: string;
  number: number;
  image: ReturnType<typeof require>;
  // Same scene with all hidden objects removed. When present, the board derives
  // checklist icons and the found "reveal" purely from image + emptyImage + each
  // object's zone percentages, with no per-object icon/cover files needed.
  emptyImage?: ReturnType<typeof require>;
  imageRatio: number;
  characterId: string;
  promptAr: string;
  promptEn: string;
  objects: HiddenObjectItem[];
  targetIds: string[];
  lives: number;
  hints: number;
  // Optional audio. Left unset until real files are supplied - the board no-ops
  // when these are missing rather than requiring placeholder assets.
  music?: ReturnType<typeof require>;
  sfxCorrect?: ReturnType<typeof require>;
  sfxWrong?: ReturnType<typeof require>;
  sfxHint?: ReturnType<typeof require>;
};
