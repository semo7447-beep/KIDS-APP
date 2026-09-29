import React from 'react';
import LevelGame from '../components/LevelGame';
import MazeGame from '../games/MazeGame';

export default function WhatsMissingScreen() {
  return <LevelGame titleAr="متاهة الكرة" titleEn="Ball Maze" background="#E2C28C" textColor="#4A2A10" maxLevel={8} Game={MazeGame} />;
}
