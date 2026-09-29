import React from 'react';
import LevelGame from '../components/LevelGame';
import MiniGolfGame, { COURSES } from '../games/MiniGolfGame';

export default function RescueScreen() {
  return <LevelGame titleAr="الجولف الصغير" titleEn="Mini Golf" background="#3FA36B" maxLevel={COURSES.length} Game={MiniGolfGame} />;
}
