import { GridType, TileType } from "../../../utils/types";
import { isEqual, dropFromQueue, checkStack } from "../../../utils/helper";
import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";

export const dijkstra = (
  grid: GridType,
  startTile: TileType,
  endTile: TileType
) => {
  const traversedTiles: TileType[] = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;
  const unTraversedTiles: TileType[] = [base];

  while (unTraversedTiles.length > 0) {
    // Sort tiles by distance (smallest distance first)
    unTraversedTiles.sort((a, b) => a.distance - b.distance);
    const currentTile = unTraversedTiles.shift();

    if (currentTile) {
      if (currentTile.isWall) continue;
      if (currentTile.distance === Infinity) break;

      currentTile.isTraversed = true;
      traversedTiles.push(currentTile);

      if (isEqual(currentTile, endTile)) break;

      const neighbors = getUntraversedNeighbors(grid, currentTile);
      for (const neighbor of neighbors) {
        const newDistance = currentTile.distance + 1;
        if (newDistance < neighbor.distance) {
          dropFromQueue(neighbor, unTraversedTiles); // Ensure no duplicate entries in the queue
          neighbor.distance = newDistance;
          neighbor.parent = currentTile;
          unTraversedTiles.push(neighbor);
        }
      }
    }
  }

  const path: TileType[] = [];
  let current = grid[endTile.row][endTile.col];

  // Check if a path exists before backtracking
  while (current && current.parent !== undefined) {
    current.isPath = true;
    path.unshift(current);
    current = current.parent;
  }

  // Handle case where no path exists
  if (current && isEqual(current, startTile)) {
    path.unshift(current);
  } else if (!isEqual(current, startTile)) {
    console.error("No valid path exists from startTile to endTile.");
  }

  return { traversedTiles, path };
};
