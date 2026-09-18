export type MissionOption = {
  id: string;
  image: ReturnType<typeof require>;
  labelAr: string;
  labelEn: string;
  correct: boolean;
};

export type DetectiveMission = {
  id: string;
  number: number;
  titleAr: string;
  titleEn: string;
  questionAr: string;
  questionEn: string;
  instructionAr: string;
  instructionEn: string;
  sceneImage: ReturnType<typeof require>;
  options: MissionOption[];
  hintAr: string;
  hintEn: string;
};

export const DETECTIVE_MISSIONS: DetectiveMission[] = [
  {
    id: 'mission1',
    number: 1,
    titleAr: 'المهمة الأولى',
    titleEn: 'Mission One',
    questionAr: 'أين الشيء المفقود؟',
    questionEn: 'Where is the missing thing?',
    instructionAr: 'لاحظ الصورة جيدًا واكتشف ما الذي اختفى من على الطاولة!',
    instructionEn: 'Look closely and find out what disappeared from the desk!',
    sceneImage: require('../../assets/missions/detective/before_after.jpg'),
    hintAr: 'الملاحظة تصنع الفارق!',
    hintEn: 'Observation makes the difference!',
    options: [
      { id: 'car', image: require('../../assets/missions/detective/car.jpg'), labelAr: 'السيارة', labelEn: 'The car', correct: true },
      { id: 'cup', image: require('../../assets/missions/detective/cup.jpg'), labelAr: 'الكوب', labelEn: 'The cup', correct: false },
      { id: 'lens', image: require('../../assets/missions/detective/lens.jpg'), labelAr: 'العدسة', labelEn: 'The lens', correct: false },
      { id: 'plant', image: require('../../assets/missions/detective/plant.jpg'), labelAr: 'النبتة', labelEn: 'The plant', correct: false },
    ],
  },
];
