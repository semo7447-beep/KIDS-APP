import { Zone } from '../types/mission';

export type SpeedTarget = Zone & { id: string; isTarget: boolean };

export type SpeedMission = {
  id: string;
  number: number;
  image: ReturnType<typeof require>;
  imageRatio: number;
  items: SpeedTarget[];
  startZone: Zone;
  timeSeconds: number;
};

export const SPEED_MISSIONS: SpeedMission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/speed/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    timeSeconds: 10,
    items: [
      { id: 'penguin1', isTarget: true, left: 1.59, top: 53.53, width: 15.94, height: 9.57 },
      { id: 'cat', isTarget: false, left: 18.07, top: 53.53, width: 15.94, height: 9.57 },
      { id: 'elephant', isTarget: false, left: 34.54, top: 53.53, width: 15.94, height: 9.57 },
      { id: 'chick', isTarget: false, left: 51.01, top: 53.53, width: 15.94, height: 9.57 },
      { id: 'car', isTarget: false, left: 67.48, top: 53.53, width: 15.94, height: 9.57 },
      { id: 'penguin2', isTarget: true, left: 83.95, top: 53.53, width: 15.41, height: 9.57 },
    ],
    startZone: { left: 30.82, top: 92.11, width: 39.32, height: 6.58 },
  },
];
