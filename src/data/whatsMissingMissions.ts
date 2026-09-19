import { Mission } from '../types/mission';

export const WHATSMISSING_MISSIONS: Mission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/whatsmissing/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    options: [
      { id: 'bear', correct: true, left: 1.59, top: 72.37, width: 19.13, height: 11.66 },
      { id: 'car', correct: false, left: 21.79, top: 72.37, width: 18.6, height: 11.66 },
      { id: 'ball', correct: false, left: 41.44, top: 72.37, width: 18.6, height: 11.66 },
      { id: 'blocks', correct: false, left: 61.11, top: 72.37, width: 18.6, height: 11.66 },
      { id: 'dino', correct: false, left: 80.55, top: 72.37, width: 18.6, height: 11.66 },
    ],
    confirmZone: { left: 73.32, top: 93.3, width: 26.03, height: 5.98 },
    previousZone: { left: 1.59, top: 93.3, width: 26.03, height: 5.98 },
  },
];
