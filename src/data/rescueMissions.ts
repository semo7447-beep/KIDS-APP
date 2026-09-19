import { Mission } from '../types/mission';

export const RESCUE_MISSIONS: Mission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/rescue/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    options: [
      { id: 'cutter', correct: false, left: 14.35, top: 77.15, width: 20.19, height: 12.56 },
      { id: 'hammer', correct: false, left: 36.66, top: 77.15, width: 20.19, height: 12.56 },
      { id: 'key', correct: false, left: 58.45, top: 77.15, width: 20.19, height: 12.56 },
      { id: 'saw', correct: true, left: 79.49, top: 77.15, width: 19.66, height: 12.56 },
    ],
    confirmZone: { left: 69.08, top: 90.91, width: 29.76, height: 5.98 },
    previousZone: { left: 1.59, top: 90.91, width: 26.03, height: 5.98 },
  },
];
