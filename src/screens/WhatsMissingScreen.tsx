import React from 'react';
import MissionScreen from '../components/MissionScreen';
import { WHATSMISSING_MISSIONS } from '../data/whatsMissingMissions';

export default function WhatsMissingScreen() {
  return <MissionScreen missions={WHATSMISSING_MISSIONS} />;
}
