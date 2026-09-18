export type Zone = { left: number; top: number; width: number; height: number };

export type MissionOptionZone = Zone & {
  id: string;
  correct: boolean;
};

export type Mission = {
  id: string;
  number: number;
  image: ReturnType<typeof require>;
  imageRatio: number;
  options: MissionOptionZone[];
  confirmZone: Zone;
  previousZone: Zone;
};
