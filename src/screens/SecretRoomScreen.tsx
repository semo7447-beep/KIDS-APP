import React from 'react';
import LevelGame from '../components/LevelGame';
import TableTennisGame from '../games/TableTennisGame';

export default function SecretRoomScreen() {
  return <LevelGame titleAr="بطل تنس الطاولة" titleEn="Table Tennis Champ" background="#5A2A14" maxLevel={8} Game={TableTennisGame} />;
}
