import { Zone } from '../types/mission';

export type CoopMission = {
  id: string;
  number: number;
  image: ReturnType<typeof require>;
  imageRatio: number;
  pieceZones: Zone[];
  startZone: Zone;
  previousZone: Zone;
};

export const COOP_MISSIONS: CoopMission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/coop/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    pieceZones: [
      { left: 1.06, top: 66.39, width: 10.63, height: 5.38 },
      { left: 75.98, top: 63.7, width: 13.28, height: 5.38 },
      { left: 75.98, top: 69.38, width: 13.28, height: 6.58 },
    ],
    startZone: { left: 30.29, top: 89.42, width: 39.32, height: 6.58 },
    previousZone: { left: 1.06, top: 92.4, width: 26.03, height: 5.98 },
  },
];
