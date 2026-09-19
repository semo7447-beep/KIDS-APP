import React from 'react';
import MissionScreen from '../components/MissionScreen';
import { SECRETROOM_MISSIONS } from '../data/secretRoomMissions';

export default function SecretRoomScreen() {
  return <MissionScreen missions={SECRETROOM_MISSIONS} />;
}
