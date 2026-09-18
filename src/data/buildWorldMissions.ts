import { Mission } from '../types/mission';

export const BUILDWORLD_MISSIONS: Mission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/buildworld/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    options: [
      { id: 'house', correct: true, left: 14.88, top: 77.15, width: 15.94, height: 8.07 },
      { id: 'shop', correct: true, left: 31.88, top: 77.15, width: 13.28, height: 8.07 },
      { id: 'garden', correct: true, left: 46.23, top: 77.15, width: 13.28, height: 8.07 },
    ],
    confirmZone: { left: 28.69, top: 49.64, width: 41.45, height: 14.35 },
    previousZone: { left: 1.59, top: 93.01, width: 26.03, height: 5.98 },
  },
];
