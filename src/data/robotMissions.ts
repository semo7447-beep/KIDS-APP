import { Zone } from '../types/mission';

export type Dir = 'forward' | 'left' | 'right';

export type RobotMission = {
  id: string;
  number: number;
  image: ReturnType<typeof require>;
  imageRatio: number;
  forwardZone: Zone;
  leftZone: Zone;
  rightZone: Zone;
  clearZone: Zone;
  playZone: Zone;
  backZone: Zone;
  slotsZone: Zone;
  slotCount: number;
  startPoint: { left: number; top: number };
  goalPoint: { left: number; top: number };
  solution: Dir[];
};

export const ROBOT_MISSIONS: RobotMission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/robot/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    forwardZone: { left: 4.78, top: 72.37, width: 13.82, height: 8.07 },
    leftZone: { left: 21.25, top: 72.37, width: 13.82, height: 8.07 },
    rightZone: { left: 36.13, top: 72.37, width: 13.82, height: 8.07 },
    clearZone: { left: 51.01, top: 72.37, width: 13.82, height: 8.07 },
    playZone: { left: 68.54, top: 84.63, width: 26.57, height: 5.08 },
    backZone: { left: 1.59, top: 95.1, width: 26.03, height: 4.19 },
    slotsZone: { left: 3.72, top: 84.63, width: 63.76, height: 5.08 },
    slotCount: 6,
    startPoint: { left: 14.88, top: 56.82 },
    goalPoint: { left: 67.48, top: 47.85 },
    solution: ['forward', 'forward', 'left', 'forward', 'forward'],
  },
];
