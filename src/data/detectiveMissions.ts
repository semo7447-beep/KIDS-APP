export type Zone = { left: number; top: number; width: number; height: number };

export type MissionOptionZone = Zone & {
  id: string;
  correct: boolean;
};

export type DetectiveMission = {
  id: string;
  number: number;
  image: ReturnType<typeof require>;
  imageRatio: number;
  options: MissionOptionZone[];
  confirmZone: Zone;
  previousZone: Zone;
};

export const DETECTIVE_MISSIONS: DetectiveMission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/detective/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    options: [
      { id: 'car', correct: true, left: 24.23, top: 68.18, width: 15.3, height: 12.56 },
      { id: 'cup', correct: false, left: 40.38, top: 68.18, width: 15.3, height: 12.56 },
      { id: 'lens', correct: false, left: 56.11, top: 68.18, width: 15.3, height: 12.56 },
      { id: 'plant', correct: false, left: 71.84, top: 68.18, width: 15.3, height: 12.56 },
    ],
    confirmZone: { left: 70.67, top: 89.42, width: 27.63, height: 8.67 },
    previousZone: { left: 1.59, top: 89.42, width: 26.03, height: 8.67 },
  },
];
