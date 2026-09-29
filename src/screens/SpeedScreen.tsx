import React from 'react';
import LevelGame from '../components/LevelGame';
import OrnamentsGame from '../games/OrnamentsGame';

export default function SpeedScreen() {
  return <LevelGame titleAr="كرات الزينة" titleEn="Ornament Pop" background="#6B2A24" maxLevel={10} Game={OrnamentsGame} />;
}
