import { GridType, TileType } from "./types";
import { START_TILE_CONFIGURATION, END_TILE_CONFIGURATION } from "./constants";
import { TILE_STYLE } from "./constants";

export const resetGrid = ({
  grid,
  startTile = START_TILE_CONFIGURATION,
  endTile = END_TILE_CONFIGURATION,
}: {
  grid: GridType;
  startTile?: TileType;
  endTile?: TileType;
}) => {
  for (let row = 0; row < MAX_ROWS; row++) {
    for (let col = 0; col < MAX_COLS; col++) {
      const tile = grid[row][col];
      tile.distance = Infinity;
      tile.isPath = false;
      tile.isWall = false;
      tile.isParent = false;
      tile.isTraversed = false;

      if (!isEqual(startTile, tile) && !isEqual(endTile, tile)) {
        const tileElement = document.getElementById(`${tile.row}-${tile.col}`);
        if (tileElement) {
          tileElement.className = TILE_STYLE;
        }

        if (tile.row == MAX_ROWS - 1) {
          tileElement?.className.add("border-b");
        }

        if (tile.col == 0) {
          tileElement?.className.add("border-l");
        }
      }
    }
  }
};
