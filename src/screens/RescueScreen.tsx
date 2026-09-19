import React from 'react';
import MissionScreen from '../components/MissionScreen';
import { RESCUE_MISSIONS } from '../data/rescueMissions';

export default function RescueScreen() {
  return <MissionScreen missions={RESCUE_MISSIONS} worldId="rescue" />;
}
