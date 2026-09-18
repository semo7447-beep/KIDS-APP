import React from 'react';
import MissionScreen from '../components/MissionScreen';
import { PREDICT_MISSIONS } from '../data/predictMissions';

export default function PredictScreen() {
  return <MissionScreen missions={PREDICT_MISSIONS} />;
}
