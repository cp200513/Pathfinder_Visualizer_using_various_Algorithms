import { GridType, TileType, SpeedType } from "../../../utils/types";
import { getRandInt } from "../../../utils/helper";
import { WALL_TILE_STYLE } from "../../../utils/constants";
import { recursiveDivision } from "./recursiveDivision";
import { isEqual, sleep } from "../../../utils/helper";
import { SPEEDS } from "../../../utils/constants";

export async function horizontelDivision({
  grid,
  startTile,
  endTile,
  row,
  col,
  height,
  width,
  setIsDisabled,
  speed,
}: {
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
  row: number;
  col: number;
  height: number;
  width: number;
  setIsDisabled: (isDisabled: boolean) => void;
  speed: SpeedType;
}) {
  const makeWallAt = row + getRandInt(0, height - 1) * 2 + 1;

  const makePassageAt = col + getRandInt(0, width) * 2;

  for (let i = 0; i < 2 * width - 1; i++) {
    if (makePassageAt !== col + i) {
      if (
        !isEqual(startTile, grid[makeWallAt][col + i]) &&
        !isEqual(endTile, grid[makeWallAt][col + i])
      ) {
        grid[makeWallAt][col + i].isWall = true;
        const tileElement = document.getElementById(`${makeWallAt}-${col + i}`);
        if (tileElement) {
          tileElement.className = `${WALL_TILE_STYLE} animate-wall`;
          await sleep(10 * SPEEDS.find((s) => s.value === speed)!.value - 5);
        }
      }
    }
  }

  // Recursively divide the sections above and below the wall
  await recursiveDivision({
    grid,
    startTile,
    endTile,
    row,
    col,
    height: (makeWallAt - row + 1) / 2,
    width,
    setIsDisabled,
    speed,
  });

  await recursiveDivision({
    grid,
    startTile,
    endTile,
    row: makeWallAt + 1,
    col,
    height: height - (makeWallAt - row + 1) / 2,
    width,
    setIsDisabled,
    speed,
  });
}
