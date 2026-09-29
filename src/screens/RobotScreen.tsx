import React from 'react';
import LevelGame from '../components/LevelGame';
import LatheGame from '../games/LatheGame';

export default function RobotScreen() {
  return <LevelGame titleAr="الخرّاط الصغير" titleEn="Little Woodturner" background="#5A2E16" maxLevel={8} Game={LatheGame} />;
}
