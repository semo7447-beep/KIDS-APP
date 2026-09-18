import { Mission } from '../types/mission';

export const PREDICT_MISSIONS: Mission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/predict/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    options: [
      { id: 'breaks', correct: false, left: 32.41, top: 67.58, width: 21.79, height: 12.56 },
      { id: 'watches', correct: false, left: 55.26, top: 67.58, width: 21.79, height: 12.56 },
      { id: 'catches', correct: true, left: 78.11, top: 67.58, width: 21.79, height: 12.56 },
    ],
    confirmZone: { left: 34.01, top: 82.84, width: 36.13, height: 4.78 },
    previousZone: { left: 1.06, top: 92.7, width: 23.91, height: 5.38 },
  },
];
