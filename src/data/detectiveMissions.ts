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
    imageRatio: 1312 / 1199,
    options: [
      { id: 'car', correct: true, left: 24.54, top: 69.89, width: 12.8, height: 13.18 },
      { id: 'cup', correct: false, left: 38.87, top: 69.89, width: 12.8, height: 13.18 },
      { id: 'lens', correct: false, left: 53.35, top: 69.89, width: 12.8, height: 13.18 },
      { id: 'plant', correct: false, left: 67.68, top: 69.89, width: 12.8, height: 13.18 },
    ],
    confirmZone: { left: 78.89, top: 87.57, width: 20.2, height: 7.92 },
    previousZone: { left: 1.14, top: 87.57, width: 15.62, height: 7.92 },
  },
];
