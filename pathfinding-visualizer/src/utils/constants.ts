import { MazeSelectType, SpeedSelectType } from "./types";
import { AlgorithmSelectType } from "./types";

export const MAX_ROWS = 59;
export const MAX_COLS = 69;

export const START_TILE_CONFIGURATION = {
  row: 1,
  col: 1,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isTraversed: false,
  parents: null,
};

export const END_TILE_CONFIGURATION = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isTraversed: false,
  parents: null,
};

export const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-indigo-900";
export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-teal-100"; // Soft teal
export const START_TILE_STYLE =
  TILE_STYLE +
  " bg-green-300 shadow-[0_-8px_16px_#39FF14,0_8px_16px_#39FF14,-8px_0_16px_#39FF14,8px_0_16px_#39FF14]"; // Light mint green
export const END_TILE_STYLE =
  TILE_STYLE +
  " bg-rose-300 bg-rose-300 shadow-[0_-8px_16px_#FDA4AF,0_8px_16px_#FDA4AF,-8px_0_16px_#FDA4AF,8px_0_16px_#FDA4AF]"; // Soft rose pink
export const WALL_TILE_STYLE = TILE_STYLE + " bg-indigo-300"; // Very light gray
export const PATH_TILE_STYLE = TILE_STYLE + " bg-orange-500 animate-pulse"; // Light indigo

export const MAZES: MazeSelectType[] = [
  { name: "No Maze", value: "NONE" },
  { name: "Binary Tree", value: "BINARY_TREE" },
  { name: "Recursive Division", value: "RECURSIVE_DIVISION" },
];

export const SPEEDS: SpeedSelectType[] = [
  { name: "Slow", value: 2 },
  { name: "Medium", value: 1 },
  { name: "Fast", value: 0.5 },
];

export const SLEEP_TIME = 8;
export const EXTENDED_SLEEP_TIME = 30;

export const PATHFINDING_ALGORITHMS: AlgorithmSelectType[] = [
  { name: "Dijkstra", value: "DIJKSTRA" },
  { name: "BFS", value: "BFS" },
  { name: "A-Star", value: "A_STAR" },
  { name: "DFS", value: "DFS" },
];
