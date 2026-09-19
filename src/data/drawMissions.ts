import { Zone } from '../types/mission';

export type DrawMission = {
  id: string;
  number: number;
  image: ReturnType<typeof require>;
  imageRatio: number;
  canvasZone: Zone;
  eraserZone: Zone;
  confirmZone: Zone;
  previousZone: Zone;
  nextZone: Zone;
  colorZones: (Zone & { color: string })[];
};

export const DRAW_MISSIONS: DrawMission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/draw/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    canvasZone: { left: 31.88, top: 46.06, width: 37.2, height: 17.34 },
    eraserZone: { left: 1.59, top: 80.14, width: 21.25, height: 7.18 },
    confirmZone: { left: 69.08, top: 80.14, width: 29.23, height: 7.18 },
    previousZone: { left: 1.59, top: 93.3, width: 26.03, height: 5.38 },
    nextZone: { left: 73.32, top: 93.3, width: 26.03, height: 5.38 },
    colorZones: [
      { color: '#FF5E5E', left: 24.97, top: 80.14, width: 7.97, height: 7.18 },
      { color: '#4A6CF7', left: 32.94, top: 80.14, width: 7.97, height: 7.18 },
      { color: '#FFC93D', left: 40.91, top: 80.14, width: 7.97, height: 7.18 },
      { color: '#3FD68D', left: 48.88, top: 80.14, width: 7.97, height: 7.18 },
      { color: '#9B5DE5', left: 56.85, top: 80.14, width: 7.97, height: 7.18 },
    ],
  },
];
