import { GridType, TileType } from "../../../utils/types";
import { isEqual } from "../../../utils/helper";
import { IsInQueue } from "../../../utils/IsInQueue";
import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";

export const bfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
  const traversedTiles: TileType[] = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;
  const untraversed = [base];

  while (untraversed.length) {
    const tile = untraversed.shift() as TileType;
    if (tile.isWall) continue;
    if (tile.distance === Infinity) break;
    tile.isTraversed = true;
    traversedTiles.push(tile);
    if (isEqual(tile, endTile)) break;

    const neighbors = getUntraversedNeighbors(grid, tile);
    for (let i = 0; i < neighbors.length; i++) {
      if (!IsInQueue(neighbors[i], untraversed)) {
        const nei = neighbors[i];
        nei.distance = tile.distance + 1;
        nei.parent = tile;
        untraversed.push(nei);
      }
    }
  }

  const path = [];
  let tile: TileType | null = grid[endTile.row][endTile.col];
  while (tile && tile.parent) {
    tile.isPath = true;
    path.unshift(tile);
    tile = tile.parent;
  }
  // Include the start tile in the path
  if (tile) path.unshift(tile);

  return { traversedTiles, path };
};
