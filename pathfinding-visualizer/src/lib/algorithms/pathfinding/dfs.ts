import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { checkStack, isEqual } from "../../../utils/helper";
import { GridType, TileType } from "../../../utils/types";

export const dfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
  const traversedTiles: TileType[] = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;
  const untraversedTiles: TileType[] = [base];

  while (untraversedTiles.length > 0) {
    const currentTile = untraversedTiles.pop();
    if (!currentTile) continue;
    if (currentTile.isWall) continue;
    if (currentTile.distance === Infinity) break;
    currentTile.isTraversed = true;
    traversedTiles.push(currentTile);
    if (isEqual(currentTile, endTile)) break;

    const neighbors = getUntraversedNeighbors(grid, currentTile);
    for (const neighbor of neighbors) {
      if (!checkStack(neighbor, untraversedTiles)) {
        neighbor.distance = currentTile.distance + 1;
        neighbor.parent = currentTile;
        untraversedTiles.push(neighbor);
      }
    }
  }

  const path: TileType[] = [];
  let current = grid[endTile.row]?.[endTile.col] || null;

  while (current && current.parent) {
    current.isPath = true;
    path.unshift(current);
    current = current.parent;
  }

  if (current && isEqual(current, startTile)) {
    current.isPath = true;
    path.unshift(current);
  }

  return { traversedTiles, path };
};
