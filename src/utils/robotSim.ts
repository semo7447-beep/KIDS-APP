import { Dir, Facing } from '../data/robotMissions';

const FACINGS: Facing[] = ['up', 'right', 'down', 'left'];

export function turnFacing(facing: Facing, dir: 'left' | 'right'): Facing {
  const idx = FACINGS.indexOf(facing);
  if (dir === 'right') return FACINGS[(idx + 1) % 4];
  return FACINGS[(idx + 3) % 4];
}

export function moveDelta(facing: Facing): { dc: number; dr: number } {
  switch (facing) {
    case 'up':
      return { dc: 0, dr: -1 };
    case 'down':
      return { dc: 0, dr: 1 };
    case 'left':
      return { dc: -1, dr: 0 };
    case 'right':
      return { dc: 1, dr: 0 };
  }
}

export function facingAngle(facing: Facing): number {
  switch (facing) {
    case 'up':
      return 0;
    case 'right':
      return 90;
    case 'down':
      return 180;
    case 'left':
      return 270;
  }
}

// Shortest angular path from `current` (any accumulated degrees) to the
// nearest equivalent of `targetMod360`, so returning "home" never spins
// the long way around after several turns.
export function shortestAngleTo(current: number, targetMod360: number): number {
  const targetMod = ((targetMod360 % 360) + 360) % 360;
  const currentMod = ((current % 360) + 360) % 360;
  let diff = targetMod - currentMod;
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;
  return current + diff;
}

export type SimStep = {
  command: Dir;
  outcome: 'turned' | 'moved' | 'blocked' | 'goal';
  col: number;
  row: number;
  facing: Facing;
};

export type Cell = { col: number; row: number };

// Walks the full command list against the grid, stopping early on the
// first obstacle hit or the moment the goal cell is reached — any
// sequence that physically reaches the goal without hitting an
// obstacle counts as a win, not just an exact match to a stored solution.
export function simulateRobot(
  commands: Dir[],
  start: Cell,
  startFacing: Facing,
  cols: number,
  rows: number,
  obstacles: Cell[],
  goal: Cell
): SimStep[] {
  const obstacleKeys = new Set(obstacles.map((o) => `${o.col},${o.row}`));
  let col = start.col;
  let row = start.row;
  let facing = startFacing;
  const steps: SimStep[] = [];

  for (const command of commands) {
    if (command === 'left' || command === 'right') {
      facing = turnFacing(facing, command);
      steps.push({ command, outcome: 'turned', col, row, facing });
      continue;
    }

    const delta = moveDelta(facing);
    const nextCol = col + delta.dc;
    const nextRow = row + delta.dr;
    const outOfBounds = nextCol < 0 || nextCol >= cols || nextRow < 0 || nextRow >= rows;
    const blocked = outOfBounds || obstacleKeys.has(`${nextCol},${nextRow}`);

    if (blocked) {
      steps.push({ command, outcome: 'blocked', col, row, facing });
      break;
    }

    col = nextCol;
    row = nextRow;
    const reachedGoal = col === goal.col && row === goal.row;
    steps.push({ command, outcome: reachedGoal ? 'goal' : 'moved', col, row, facing });
    if (reachedGoal) break;
  }

  return steps;
}
