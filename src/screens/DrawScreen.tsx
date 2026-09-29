import React from 'react';
import LevelGame from '../components/LevelGame';
import ColorByNumberGame, { COLOR_BY_NUMBER_LEVELS } from '../games/ColorByNumberGame';

export default function DrawScreen() {
  return <LevelGame titleAr="لوّن بالأرقام" titleEn="Color by Number" background="#6E3A1E" maxLevel={COLOR_BY_NUMBER_LEVELS} Game={ColorByNumberGame} />;
}
