import { GridType, TileType } from "./types";
import { MAX_ROWS, MAX_COLS } from "./constants";

const getHeuristicVal = (currentTile: TileType, endTile: TileType) => {
  const manHattenDistance = 1;
  const row = Math.abs(currentTile.row - endTile.row);
  const col = Math.abs(currentTile.col - endTile.col);
  return manHattenDistance * (row + col);
};

export const heuristics = (grid: GridType, endTile: TileType) => {
  const heuristic = [];
  for (let i = 0; i < MAX_ROWS; i++) {
    const row = [];
    for (let j = 0; j < MAX_COLS; j++) {
      row.push(getHeuristicVal(grid[i][j], endTile));
    }
    heuristic.push(row);
  }
  return heuristic;
};

export const initFunctionCost = () => {
  const functionCost = [];
  for (let i = 0; i < MAX_ROWS; i++) {
    const row = [];
    for (let j = 0; j < MAX_COLS; j++) {
      row.push(Infinity);
    }
    functionCost.push(row);
  }
  return functionCost;
};
