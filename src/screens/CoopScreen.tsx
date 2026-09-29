import React from 'react';
import LevelGame from '../components/LevelGame';
import MiningGame from '../games/MiningGame';

export default function CoopScreen() {
  return <LevelGame titleAr="منجم الكريستال" titleEn="Crystal Mine" background="#1E1A33" maxLevel={10} Game={MiningGame} />;
}
