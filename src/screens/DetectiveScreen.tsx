import React from 'react';
import MissionScreen from '../components/MissionScreen';
import { DETECTIVE_MISSIONS } from '../data/detectiveMissions';

export default function DetectiveScreen() {
  return <MissionScreen missions={DETECTIVE_MISSIONS} worldId="detective" />;
}
