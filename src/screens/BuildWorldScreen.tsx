import React from 'react';
import LevelGame from '../components/LevelGame';
import TileMatchGame from '../games/TileMatchGame';

export default function BuildWorldScreen() {
  return <LevelGame titleAr="مطابقة الفواكه" titleEn="Fruit Match" background="#6E2436" maxLevel={10} Game={TileMatchGame} />;
}
