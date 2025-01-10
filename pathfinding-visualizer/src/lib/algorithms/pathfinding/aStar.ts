import { GridType, TileType } from "../../../utils/types";
import { heuristics, initFunctionCost } from "../../../utils/heuristics";
import { isEqual, dropFromQueue } from "../../../utils/helper";
import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";

export const aStar = (
  grid: GridType,
  startTile: TileType,
  endTile: TileType
) => {
  const traversedTiles: TileType[] = [];
  const heuristicCost = heuristics(grid, endTile);
  const functionCost = initFunctionCost();

  const base = grid[startTile.row][startTile.col];
  base.distance = 0;

  functionCost[base.row][base.col] =
    base.distance + heuristicCost[base.row][base.col];
  base.isTraversed = true;

  const unTraversedTiles = [base];

  while (unTraversedTiles.length > 0) {
    // Sort based on function cost and tie-breaking on distance
    unTraversedTiles.sort((a, b) => {
      if (functionCost[a.row][a.col] === functionCost[b.row][b.col]) {
        return a.distance - b.distance;
      }
      return functionCost[a.row][a.col] - functionCost[b.row][b.col];
    });

    const currentTile = unTraversedTiles.shift();
    if (!currentTile) break;

    // Skip walls or tiles with infinite distance
    if (currentTile.isWall) continue;

    if (currentTile.distance === Infinity) break;

    currentTile.isTraversed = true;
    traversedTiles.push(currentTile);

    // If we reached the end tile, stop
    if (isEqual(currentTile, endTile)) break;

    const neighbors = getUntraversedNeighbors(grid, currentTile);

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      const distanceToNeighbor = currentTile.distance + 1;

      if (distanceToNeighbor < neighbor.distance) {
        dropFromQueue(neighbor, unTraversedTiles); // Remove it from unTraversedTiles if already present
        neighbor.distance = distanceToNeighbor;
        functionCost[neighbor.row][neighbor.col] =
          neighbor.distance + heuristicCost[neighbor.row][neighbor.col];
        neighbor.parent = currentTile; // Set parent for path tracking
        unTraversedTiles.push(neighbor);
      }
    }
  }

  // Construct the path by backtracking from the endTile
  const path: TileType[] = [];
  let current = grid[endTile.row]?.[endTile.col] || null;

  while (current && current.parent) {
    path.unshift(current);
    current.isPath = true;
    current = current.parent;
  }

  // Ensure startTile is included in the path
  if (current) {
    path.unshift(current);
    current.isPath = true;
  }

  return { traversedTiles, path };
};
