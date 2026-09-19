import { Zone } from '../types/mission';

export type Dir = 'forward' | 'left' | 'right';
export type Facing = 'up' | 'down' | 'left' | 'right';

export type RobotTemplate = {
  characterId: string;
  cols: number;
  rows: number;
  obstacles: { col: number; row: number }[];
  start: { col: number; row: number };
  startFacing: Facing;
  goal: { col: number; row: number };
  solution: Dir[];
  slotCount: number;
};

export type RobotMission = {
  id: string;
  number: number;
  image?: ReturnType<typeof require>;
  imageRatio?: number;
  forwardZone?: Zone;
  leftZone?: Zone;
  rightZone?: Zone;
  clearZone?: Zone;
  playZone?: Zone;
  backZone?: Zone;
  slotsZone?: Zone;
  slotCount?: number;
  startPoint?: { left: number; top: number };
  goalPoint?: { left: number; top: number };
  solution: Dir[];
  template?: RobotTemplate;
};

export const ROBOT_MISSIONS: RobotMission[] = [
  {
    id: 'mission1',
    number: 1,
    image: require('../../assets/missions/robot/mission1_full.jpg'),
    imageRatio: 941 / 1672,
    forwardZone: { left: 4.78, top: 72.37, width: 13.82, height: 8.07 },
    leftZone: { left: 21.25, top: 72.37, width: 13.82, height: 8.07 },
    rightZone: { left: 36.13, top: 72.37, width: 13.82, height: 8.07 },
    clearZone: { left: 51.01, top: 72.37, width: 13.82, height: 8.07 },
    playZone: { left: 68.54, top: 84.63, width: 26.57, height: 5.08 },
    backZone: { left: 1.59, top: 95.1, width: 26.03, height: 4.19 },
    slotsZone: { left: 3.72, top: 84.63, width: 63.76, height: 5.08 },
    slotCount: 6,
    startPoint: { left: 14.88, top: 56.82 },
    goalPoint: { left: 67.48, top: 47.85 },
    solution: ['forward', 'forward', 'left', 'forward', 'forward'],
  },
  {
    "id": "mission2",
    "number": 2,
    "solution": [
      "forward",
      "forward",
      "left",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 3,
      "obstacles": [
        {
          "col": 1,
          "row": 1
        },
        {
          "col": 0,
          "row": 2
        },
        {
          "col": 3,
          "row": 1
        }
      ],
      "start": {
        "col": 4,
        "row": 0
      },
      "startFacing": "left",
      "goal": {
        "col": 2,
        "row": 2
      },
      "solution": [
        "forward",
        "forward",
        "left",
        "forward",
        "forward"
      ],
      "slotCount": 6
    }
  },
  {
    "id": "mission3",
    "number": 3,
    "solution": [
      "left",
      "forward",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 4,
      "obstacles": [
        {
          "col": 1,
          "row": 0
        }
      ],
      "start": {
        "col": 5,
        "row": 0
      },
      "startFacing": "left",
      "goal": {
        "col": 5,
        "row": 3
      },
      "solution": [
        "left",
        "forward",
        "forward",
        "forward"
      ],
      "slotCount": 5
    }
  },
  {
    "id": "mission4",
    "number": 4,
    "solution": [
      "left",
      "left",
      "forward",
      "forward",
      "forward",
      "right",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 4,
      "obstacles": [
        {
          "col": 3,
          "row": 2
        },
        {
          "col": 1,
          "row": 3
        },
        {
          "col": 4,
          "row": 0
        }
      ],
      "start": {
        "col": 5,
        "row": 1
      },
      "startFacing": "right",
      "goal": {
        "col": 2,
        "row": 0
      },
      "solution": [
        "left",
        "left",
        "forward",
        "forward",
        "forward",
        "right",
        "forward"
      ],
      "slotCount": 8
    }
  },
  {
    "id": "mission5",
    "number": 5,
    "solution": [
      "forward",
      "forward",
      "forward",
      "forward",
      "left",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 3,
      "obstacles": [
        {
          "col": 5,
          "row": 1
        }
      ],
      "start": {
        "col": 5,
        "row": 0
      },
      "startFacing": "left",
      "goal": {
        "col": 1,
        "row": 2
      },
      "solution": [
        "forward",
        "forward",
        "forward",
        "forward",
        "left",
        "forward",
        "forward"
      ],
      "slotCount": 8
    }
  },
  {
    "id": "mission6",
    "number": 6,
    "solution": [
      "left",
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 3,
      "obstacles": [
        {
          "col": 5,
          "row": 1
        },
        {
          "col": 1,
          "row": 0
        },
        {
          "col": 5,
          "row": 2
        }
      ],
      "start": {
        "col": 3,
        "row": 1
      },
      "startFacing": "left",
      "goal": {
        "col": 4,
        "row": 1
      },
      "solution": [
        "left",
        "left",
        "forward"
      ],
      "slotCount": 4
    }
  },
  {
    "id": "mission7",
    "number": 7,
    "solution": [
      "left",
      "left",
      "forward",
      "forward",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 4,
      "obstacles": [
        {
          "col": 4,
          "row": 1
        },
        {
          "col": 4,
          "row": 0
        }
      ],
      "start": {
        "col": 4,
        "row": 3
      },
      "startFacing": "right",
      "goal": {
        "col": 0,
        "row": 3
      },
      "solution": [
        "left",
        "left",
        "forward",
        "forward",
        "forward",
        "forward"
      ],
      "slotCount": 7
    }
  },
  {
    "id": "mission8",
    "number": 8,
    "solution": [
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 4,
      "obstacles": [
        {
          "col": 1,
          "row": 0
        },
        {
          "col": 1,
          "row": 3
        },
        {
          "col": 0,
          "row": 0
        }
      ],
      "start": {
        "col": 3,
        "row": 1
      },
      "startFacing": "down",
      "goal": {
        "col": 3,
        "row": 3
      },
      "solution": [
        "forward",
        "forward"
      ],
      "slotCount": 3
    }
  },
  {
    "id": "mission9",
    "number": 9,
    "solution": [
      "left",
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 4,
      "obstacles": [
        {
          "col": 1,
          "row": 0
        },
        {
          "col": 0,
          "row": 2
        }
      ],
      "start": {
        "col": 2,
        "row": 2
      },
      "startFacing": "up",
      "goal": {
        "col": 2,
        "row": 3
      },
      "solution": [
        "left",
        "left",
        "forward"
      ],
      "slotCount": 4
    }
  },
  {
    "id": "mission10",
    "number": 10,
    "solution": [
      "left",
      "forward",
      "forward",
      "left",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 5,
      "rows": 4,
      "obstacles": [
        {
          "col": 4,
          "row": 3
        },
        {
          "col": 1,
          "row": 0
        }
      ],
      "start": {
        "col": 1,
        "row": 3
      },
      "startFacing": "down",
      "goal": {
        "col": 3,
        "row": 1
      },
      "solution": [
        "left",
        "forward",
        "forward",
        "left",
        "forward",
        "forward"
      ],
      "slotCount": 7
    }
  },
  {
    "id": "mission11",
    "number": 11,
    "solution": [
      "forward",
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 4,
      "obstacles": [
        {
          "col": 4,
          "row": 3
        },
        {
          "col": 2,
          "row": 0
        },
        {
          "col": 3,
          "row": 3
        }
      ],
      "start": {
        "col": 3,
        "row": 1
      },
      "startFacing": "down",
      "goal": {
        "col": 4,
        "row": 2
      },
      "solution": [
        "forward",
        "left",
        "forward"
      ],
      "slotCount": 4
    }
  },
  {
    "id": "mission12",
    "number": 12,
    "solution": [
      "left",
      "forward",
      "left",
      "forward",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 3,
      "obstacles": [
        {
          "col": 2,
          "row": 1
        }
      ],
      "start": {
        "col": 3,
        "row": 1
      },
      "startFacing": "right",
      "goal": {
        "col": 0,
        "row": 0
      },
      "solution": [
        "left",
        "forward",
        "left",
        "forward",
        "forward",
        "forward"
      ],
      "slotCount": 7
    }
  },
  {
    "id": "mission13",
    "number": 13,
    "solution": [
      "right",
      "forward",
      "left",
      "forward",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 5,
      "rows": 3,
      "obstacles": [
        {
          "col": 2,
          "row": 2
        },
        {
          "col": 1,
          "row": 0
        },
        {
          "col": 3,
          "row": 2
        }
      ],
      "start": {
        "col": 0,
        "row": 0
      },
      "startFacing": "right",
      "goal": {
        "col": 3,
        "row": 1
      },
      "solution": [
        "right",
        "forward",
        "left",
        "forward",
        "forward",
        "forward"
      ],
      "slotCount": 7
    }
  },
  {
    "id": "mission14",
    "number": 14,
    "solution": [
      "right",
      "forward",
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 3,
      "obstacles": [
        {
          "col": 4,
          "row": 1
        }
      ],
      "start": {
        "col": 4,
        "row": 2
      },
      "startFacing": "up",
      "goal": {
        "col": 5,
        "row": 1
      },
      "solution": [
        "right",
        "forward",
        "left",
        "forward"
      ],
      "slotCount": 5
    }
  },
  {
    "id": "mission15",
    "number": 15,
    "solution": [
      "left",
      "forward",
      "left",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 5,
      "rows": 4,
      "obstacles": [
        {
          "col": 4,
          "row": 1
        },
        {
          "col": 4,
          "row": 2
        },
        {
          "col": 0,
          "row": 3
        }
      ],
      "start": {
        "col": 2,
        "row": 0
      },
      "startFacing": "up",
      "goal": {
        "col": 1,
        "row": 2
      },
      "solution": [
        "left",
        "forward",
        "left",
        "forward",
        "forward"
      ],
      "slotCount": 6
    }
  },
  {
    "id": "mission16",
    "number": 16,
    "solution": [
      "forward",
      "forward",
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 5,
      "rows": 3,
      "obstacles": [
        {
          "col": 0,
          "row": 1
        }
      ],
      "start": {
        "col": 0,
        "row": 2
      },
      "startFacing": "right",
      "goal": {
        "col": 2,
        "row": 1
      },
      "solution": [
        "forward",
        "forward",
        "left",
        "forward"
      ],
      "slotCount": 5
    }
  },
  {
    "id": "mission17",
    "number": 17,
    "solution": [
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 5,
      "rows": 4,
      "obstacles": [
        {
          "col": 0,
          "row": 0
        }
      ],
      "start": {
        "col": 4,
        "row": 2
      },
      "startFacing": "right",
      "goal": {
        "col": 4,
        "row": 1
      },
      "solution": [
        "left",
        "forward"
      ],
      "slotCount": 3
    }
  },
  {
    "id": "mission18",
    "number": 18,
    "solution": [
      "forward",
      "forward",
      "right",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 3,
      "obstacles": [
        {
          "col": 2,
          "row": 1
        }
      ],
      "start": {
        "col": 2,
        "row": 0
      },
      "startFacing": "right",
      "goal": {
        "col": 4,
        "row": 2
      },
      "solution": [
        "forward",
        "forward",
        "right",
        "forward",
        "forward"
      ],
      "slotCount": 6
    }
  },
  {
    "id": "mission19",
    "number": 19,
    "solution": [
      "left",
      "forward",
      "forward",
      "right",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 3,
      "obstacles": [
        {
          "col": 1,
          "row": 1
        },
        {
          "col": 2,
          "row": 2
        }
      ],
      "start": {
        "col": 1,
        "row": 0
      },
      "startFacing": "down",
      "goal": {
        "col": 3,
        "row": 2
      },
      "solution": [
        "left",
        "forward",
        "forward",
        "right",
        "forward",
        "forward"
      ],
      "slotCount": 7
    }
  },
  {
    "id": "mission20",
    "number": 20,
    "solution": [
      "left",
      "left",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 3,
      "obstacles": [
        {
          "col": 3,
          "row": 2
        },
        {
          "col": 2,
          "row": 1
        },
        {
          "col": 5,
          "row": 1
        }
      ],
      "start": {
        "col": 1,
        "row": 0
      },
      "startFacing": "left",
      "goal": {
        "col": 3,
        "row": 0
      },
      "solution": [
        "left",
        "left",
        "forward",
        "forward"
      ],
      "slotCount": 5
    }
  },
  {
    "id": "mission21",
    "number": 21,
    "solution": [
      "right",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 5,
      "rows": 4,
      "obstacles": [
        {
          "col": 1,
          "row": 0
        }
      ],
      "start": {
        "col": 4,
        "row": 0
      },
      "startFacing": "right",
      "goal": {
        "col": 4,
        "row": 2
      },
      "solution": [
        "right",
        "forward",
        "forward"
      ],
      "slotCount": 4
    }
  },
  {
    "id": "mission22",
    "number": 22,
    "solution": [
      "left",
      "forward",
      "left",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 3,
      "obstacles": [
        {
          "col": 0,
          "row": 1
        },
        {
          "col": 3,
          "row": 1
        }
      ],
      "start": {
        "col": 1,
        "row": 2
      },
      "startFacing": "down",
      "goal": {
        "col": 2,
        "row": 0
      },
      "solution": [
        "left",
        "forward",
        "left",
        "forward",
        "forward"
      ],
      "slotCount": 6
    }
  },
  {
    "id": "mission23",
    "number": 23,
    "solution": [
      "forward",
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 4,
      "obstacles": [
        {
          "col": 4,
          "row": 2
        },
        {
          "col": 5,
          "row": 0
        }
      ],
      "start": {
        "col": 3,
        "row": 0
      },
      "startFacing": "down",
      "goal": {
        "col": 4,
        "row": 1
      },
      "solution": [
        "forward",
        "left",
        "forward"
      ],
      "slotCount": 4
    }
  },
  {
    "id": "mission24",
    "number": 24,
    "solution": [
      "forward",
      "right",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 4,
      "obstacles": [
        {
          "col": 2,
          "row": 2
        },
        {
          "col": 0,
          "row": 2
        }
      ],
      "start": {
        "col": 2,
        "row": 1
      },
      "startFacing": "left",
      "goal": {
        "col": 1,
        "row": 0
      },
      "solution": [
        "forward",
        "right",
        "forward"
      ],
      "slotCount": 4
    }
  },
  {
    "id": "mission25",
    "number": 25,
    "solution": [
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 4,
      "obstacles": [
        {
          "col": 3,
          "row": 1
        },
        {
          "col": 3,
          "row": 3
        }
      ],
      "start": {
        "col": 0,
        "row": 2
      },
      "startFacing": "down",
      "goal": {
        "col": 1,
        "row": 2
      },
      "solution": [
        "left",
        "forward"
      ],
      "slotCount": 3
    }
  },
  {
    "id": "mission26",
    "number": 26,
    "solution": [
      "left",
      "forward",
      "left",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 3,
      "obstacles": [
        {
          "col": 4,
          "row": 2
        },
        {
          "col": 1,
          "row": 2
        }
      ],
      "start": {
        "col": 3,
        "row": 1
      },
      "startFacing": "right",
      "goal": {
        "col": 1,
        "row": 0
      },
      "solution": [
        "left",
        "forward",
        "left",
        "forward",
        "forward"
      ],
      "slotCount": 6
    }
  },
  {
    "id": "mission27",
    "number": 27,
    "solution": [
      "right",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 3,
      "obstacles": [
        {
          "col": 0,
          "row": 1
        },
        {
          "col": 2,
          "row": 1
        }
      ],
      "start": {
        "col": 0,
        "row": 2
      },
      "startFacing": "up",
      "goal": {
        "col": 1,
        "row": 2
      },
      "solution": [
        "right",
        "forward"
      ],
      "slotCount": 3
    }
  },
  {
    "id": "mission28",
    "number": 28,
    "solution": [
      "left",
      "left",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 4,
      "obstacles": [
        {
          "col": 2,
          "row": 2
        }
      ],
      "start": {
        "col": 1,
        "row": 0
      },
      "startFacing": "left",
      "goal": {
        "col": 3,
        "row": 0
      },
      "solution": [
        "left",
        "left",
        "forward",
        "forward"
      ],
      "slotCount": 5
    }
  },
  {
    "id": "mission29",
    "number": 29,
    "solution": [
      "left",
      "forward",
      "left",
      "forward",
      "forward",
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 4,
      "obstacles": [
        {
          "col": 5,
          "row": 2
        },
        {
          "col": 2,
          "row": 3
        }
      ],
      "start": {
        "col": 3,
        "row": 3
      },
      "startFacing": "right",
      "goal": {
        "col": 1,
        "row": 3
      },
      "solution": [
        "left",
        "forward",
        "left",
        "forward",
        "forward",
        "left",
        "forward"
      ],
      "slotCount": 8
    }
  },
  {
    "id": "mission30",
    "number": 30,
    "solution": [
      "forward",
      "forward",
      "forward",
      "left",
      "forward",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 5,
      "rows": 4,
      "obstacles": [
        {
          "col": 3,
          "row": 1
        },
        {
          "col": 3,
          "row": 2
        }
      ],
      "start": {
        "col": 0,
        "row": 0
      },
      "startFacing": "down",
      "goal": {
        "col": 3,
        "row": 3
      },
      "solution": [
        "forward",
        "forward",
        "forward",
        "left",
        "forward",
        "forward",
        "forward"
      ],
      "slotCount": 8
    }
  },
  {
    "id": "mission31",
    "number": 31,
    "solution": [
      "left",
      "forward",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 5,
      "rows": 4,
      "obstacles": [
        {
          "col": 4,
          "row": 1
        },
        {
          "col": 0,
          "row": 2
        },
        {
          "col": 0,
          "row": 0
        }
      ],
      "start": {
        "col": 3,
        "row": 3
      },
      "startFacing": "right",
      "goal": {
        "col": 3,
        "row": 0
      },
      "solution": [
        "left",
        "forward",
        "forward",
        "forward"
      ],
      "slotCount": 5
    }
  },
  {
    "id": "mission32",
    "number": 32,
    "solution": [
      "right",
      "forward",
      "forward",
      "right",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 5,
      "rows": 4,
      "obstacles": [
        {
          "col": 0,
          "row": 2
        },
        {
          "col": 1,
          "row": 1
        },
        {
          "col": 0,
          "row": 0
        }
      ],
      "start": {
        "col": 4,
        "row": 3
      },
      "startFacing": "down",
      "goal": {
        "col": 2,
        "row": 1
      },
      "solution": [
        "right",
        "forward",
        "forward",
        "right",
        "forward",
        "forward"
      ],
      "slotCount": 7
    }
  },
  {
    "id": "mission33",
    "number": 33,
    "solution": [
      "left",
      "left",
      "forward",
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 3,
      "obstacles": [
        {
          "col": 0,
          "row": 2
        },
        {
          "col": 2,
          "row": 1
        }
      ],
      "start": {
        "col": 3,
        "row": 1
      },
      "startFacing": "down",
      "goal": {
        "col": 2,
        "row": 0
      },
      "solution": [
        "left",
        "left",
        "forward",
        "left",
        "forward"
      ],
      "slotCount": 6
    }
  },
  {
    "id": "mission34",
    "number": 34,
    "solution": [
      "forward",
      "forward",
      "right",
      "forward",
      "forward",
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 4,
      "obstacles": [
        {
          "col": 0,
          "row": 3
        },
        {
          "col": 2,
          "row": 3
        },
        {
          "col": 4,
          "row": 0
        }
      ],
      "start": {
        "col": 5,
        "row": 3
      },
      "startFacing": "left",
      "goal": {
        "col": 2,
        "row": 1
      },
      "solution": [
        "forward",
        "forward",
        "right",
        "forward",
        "forward",
        "left",
        "forward"
      ],
      "slotCount": 8
    }
  },
  {
    "id": "mission35",
    "number": 35,
    "solution": [
      "left",
      "left",
      "forward",
      "forward",
      "right",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 4,
      "obstacles": [
        {
          "col": 2,
          "row": 1
        },
        {
          "col": 1,
          "row": 2
        }
      ],
      "start": {
        "col": 0,
        "row": 2
      },
      "startFacing": "down",
      "goal": {
        "col": 2,
        "row": 0
      },
      "solution": [
        "left",
        "left",
        "forward",
        "forward",
        "right",
        "forward",
        "forward"
      ],
      "slotCount": 8
    }
  },
  {
    "id": "mission36",
    "number": 36,
    "solution": [
      "right",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 4,
      "obstacles": [
        {
          "col": 5,
          "row": 2
        },
        {
          "col": 5,
          "row": 1
        },
        {
          "col": 2,
          "row": 1
        }
      ],
      "start": {
        "col": 4,
        "row": 0
      },
      "startFacing": "right",
      "goal": {
        "col": 4,
        "row": 1
      },
      "solution": [
        "right",
        "forward"
      ],
      "slotCount": 3
    }
  },
  {
    "id": "mission37",
    "number": 37,
    "solution": [
      "right",
      "forward",
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 4,
      "obstacles": [
        {
          "col": 3,
          "row": 3
        },
        {
          "col": 2,
          "row": 0
        },
        {
          "col": 0,
          "row": 0
        }
      ],
      "start": {
        "col": 0,
        "row": 1
      },
      "startFacing": "up",
      "goal": {
        "col": 1,
        "row": 0
      },
      "solution": [
        "right",
        "forward",
        "left",
        "forward"
      ],
      "slotCount": 5
    }
  },
  {
    "id": "mission38",
    "number": 38,
    "solution": [
      "forward",
      "forward",
      "right",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 3,
      "obstacles": [
        {
          "col": 4,
          "row": 1
        }
      ],
      "start": {
        "col": 1,
        "row": 1
      },
      "startFacing": "right",
      "goal": {
        "col": 3,
        "row": 2
      },
      "solution": [
        "forward",
        "forward",
        "right",
        "forward"
      ],
      "slotCount": 5
    }
  },
  {
    "id": "mission39",
    "number": 39,
    "solution": [
      "left",
      "forward",
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 4,
      "obstacles": [
        {
          "col": 1,
          "row": 0
        },
        {
          "col": 1,
          "row": 1
        }
      ],
      "start": {
        "col": 2,
        "row": 1
      },
      "startFacing": "down",
      "goal": {
        "col": 3,
        "row": 0
      },
      "solution": [
        "left",
        "forward",
        "left",
        "forward"
      ],
      "slotCount": 5
    }
  },
  {
    "id": "mission40",
    "number": 40,
    "solution": [
      "left",
      "left",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 4,
      "obstacles": [
        {
          "col": 5,
          "row": 2
        }
      ],
      "start": {
        "col": 0,
        "row": 1
      },
      "startFacing": "left",
      "goal": {
        "col": 2,
        "row": 1
      },
      "solution": [
        "left",
        "left",
        "forward",
        "forward"
      ],
      "slotCount": 5
    }
  },
  {
    "id": "mission41",
    "number": 41,
    "solution": [
      "forward",
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 4,
      "obstacles": [
        {
          "col": 0,
          "row": 1
        },
        {
          "col": 3,
          "row": 0
        }
      ],
      "start": {
        "col": 1,
        "row": 0
      },
      "startFacing": "down",
      "goal": {
        "col": 2,
        "row": 1
      },
      "solution": [
        "forward",
        "left",
        "forward"
      ],
      "slotCount": 4
    }
  },
  {
    "id": "mission42",
    "number": 42,
    "solution": [
      "right",
      "forward",
      "right",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 5,
      "rows": 3,
      "obstacles": [
        {
          "col": 0,
          "row": 0
        }
      ],
      "start": {
        "col": 3,
        "row": 1
      },
      "startFacing": "right",
      "goal": {
        "col": 1,
        "row": 2
      },
      "solution": [
        "right",
        "forward",
        "right",
        "forward",
        "forward"
      ],
      "slotCount": 6
    }
  },
  {
    "id": "mission43",
    "number": 43,
    "solution": [
      "right",
      "forward",
      "forward",
      "forward",
      "right",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 3,
      "obstacles": [
        {
          "col": 2,
          "row": 2
        },
        {
          "col": 4,
          "row": 2
        },
        {
          "col": 1,
          "row": 1
        }
      ],
      "start": {
        "col": 0,
        "row": 0
      },
      "startFacing": "up",
      "goal": {
        "col": 3,
        "row": 2
      },
      "solution": [
        "right",
        "forward",
        "forward",
        "forward",
        "right",
        "forward",
        "forward"
      ],
      "slotCount": 8
    }
  },
  {
    "id": "mission44",
    "number": 44,
    "solution": [
      "right",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 5,
      "rows": 3,
      "obstacles": [
        {
          "col": 4,
          "row": 2
        },
        {
          "col": 0,
          "row": 2
        }
      ],
      "start": {
        "col": 3,
        "row": 0
      },
      "startFacing": "up",
      "goal": {
        "col": 4,
        "row": 0
      },
      "solution": [
        "right",
        "forward"
      ],
      "slotCount": 3
    }
  },
  {
    "id": "mission45",
    "number": 45,
    "solution": [
      "left",
      "left",
      "forward",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 4,
      "obstacles": [
        {
          "col": 5,
          "row": 1
        },
        {
          "col": 2,
          "row": 1
        }
      ],
      "start": {
        "col": 4,
        "row": 3
      },
      "startFacing": "down",
      "goal": {
        "col": 4,
        "row": 0
      },
      "solution": [
        "left",
        "left",
        "forward",
        "forward",
        "forward"
      ],
      "slotCount": 6
    }
  },
  {
    "id": "mission46",
    "number": 46,
    "solution": [
      "left",
      "forward",
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 4,
      "obstacles": [
        {
          "col": 4,
          "row": 1
        },
        {
          "col": 0,
          "row": 2
        },
        {
          "col": 0,
          "row": 3
        }
      ],
      "start": {
        "col": 1,
        "row": 2
      },
      "startFacing": "down",
      "goal": {
        "col": 2,
        "row": 1
      },
      "solution": [
        "left",
        "forward",
        "left",
        "forward"
      ],
      "slotCount": 5
    }
  },
  {
    "id": "mission47",
    "number": 47,
    "solution": [
      "left",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 3,
      "obstacles": [
        {
          "col": 1,
          "row": 0
        },
        {
          "col": 1,
          "row": 1
        }
      ],
      "start": {
        "col": 1,
        "row": 2
      },
      "startFacing": "down",
      "goal": {
        "col": 2,
        "row": 2
      },
      "solution": [
        "left",
        "forward"
      ],
      "slotCount": 3
    }
  },
  {
    "id": "mission48",
    "number": 48,
    "solution": [
      "left",
      "forward",
      "forward",
      "right",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 3,
      "obstacles": [
        {
          "col": 1,
          "row": 0
        },
        {
          "col": 3,
          "row": 1
        },
        {
          "col": 0,
          "row": 1
        }
      ],
      "start": {
        "col": 2,
        "row": 0
      },
      "startFacing": "left",
      "goal": {
        "col": 1,
        "row": 2
      },
      "solution": [
        "left",
        "forward",
        "forward",
        "right",
        "forward"
      ],
      "slotCount": 6
    }
  },
  {
    "id": "mission49",
    "number": 49,
    "solution": [
      "left",
      "left",
      "forward",
      "forward",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 4,
      "rows": 3,
      "obstacles": [
        {
          "col": 0,
          "row": 1
        },
        {
          "col": 1,
          "row": 2
        },
        {
          "col": 2,
          "row": 2
        }
      ],
      "start": {
        "col": 0,
        "row": 0
      },
      "startFacing": "left",
      "goal": {
        "col": 3,
        "row": 0
      },
      "solution": [
        "left",
        "left",
        "forward",
        "forward",
        "forward"
      ],
      "slotCount": 6
    }
  },
  {
    "id": "mission50",
    "number": 50,
    "solution": [
      "forward",
      "forward",
      "right",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 6,
      "rows": 4,
      "obstacles": [
        {
          "col": 5,
          "row": 2
        },
        {
          "col": 2,
          "row": 0
        }
      ],
      "start": {
        "col": 5,
        "row": 3
      },
      "startFacing": "left",
      "goal": {
        "col": 3,
        "row": 2
      },
      "solution": [
        "forward",
        "forward",
        "right",
        "forward"
      ],
      "slotCount": 5
    }
  },
  {
    "id": "mission51",
    "number": 51,
    "solution": [
      "right",
      "forward"
    ],
    "template": {
      "characterId": "robo",
      "cols": 5,
      "rows": 4,
      "obstacles": [
        {
          "col": 1,
          "row": 0
        }
      ],
      "start": {
        "col": 1,
        "row": 1
      },
      "startFacing": "right",
      "goal": {
        "col": 1,
        "row": 2
      },
      "solution": [
        "right",
        "forward"
      ],
      "slotCount": 3
    }
  }
];
