export type ContainerType = 'chest' | 'door' | 'drawer' | 'safe';

export type GearPuzzle = {
  kind: 'gears';
  gears: { teeth: number; target: number }[];
};

export type SliderPuzzle = {
  kind: 'slider';
  bolts: number;
};

export type DialPuzzle = {
  kind: 'dial';
  digits: number;
  target?: number[];
  chainedFrom?: string;
};

export type LockPuzzle = GearPuzzle | SliderPuzzle | DialPuzzle;

export type LockLevel = {
  id: string;
  number: number;
  pairId: string;
  containerType: ContainerType;
  puzzle: LockPuzzle;
  revealCode?: number[];
  promptAr: string;
  promptEn: string;
};
