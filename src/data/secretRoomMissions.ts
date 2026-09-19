import { Mission } from '../types/mission';

export const SECRETROOM_MISSIONS: Mission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/secretroom/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    options: [
      { id: 'red', correct: true, left: 29.23, top: 84.63, width: 14.35, height: 7.48 },
      { id: 'blue', correct: false, left: 44.1, top: 84.63, width: 14.35, height: 7.48 },
      { id: 'green', correct: false, left: 58.98, top: 84.63, width: 14.35, height: 7.48 },
      { id: 'yellow', correct: false, left: 73.86, top: 84.63, width: 14.35, height: 7.48 },
    ],
    confirmZone: { left: 75.98, top: 91.81, width: 23.38, height: 3.89 },
    previousZone: { left: 1.06, top: 91.81, width: 23.91, height: 3.89 },
  },
];
