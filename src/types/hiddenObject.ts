export type HiddenObjectItem = {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
  icon: ReturnType<typeof require>;
  labelAr: string;
  labelEn: string;
};

export type HiddenObjectMission = {
  id: string;
  number: number;
  image: ReturnType<typeof require>;
  imageRatio: number;
  characterId: string;
  promptAr: string;
  promptEn: string;
  objects: HiddenObjectItem[];
  targetIds: string[];
  lives: number;
  hints: number;
};
