import React from 'react';
import MissionScreen from '../components/MissionScreen';
import { BUILDWORLD_MISSIONS } from '../data/buildWorldMissions';

export default function BuildWorldScreen() {
  return <MissionScreen missions={BUILDWORLD_MISSIONS} />;
}
