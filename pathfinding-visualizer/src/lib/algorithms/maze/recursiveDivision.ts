import { GridType, TileType, SpeedType } from "../../../utils/types";
import { horizontelDivision } from "./horizontelDivision";
import { verticalDivision } from "./verticalDivision";

export async function recursiveDivision({
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
  if (height <= 1 || width <= 1) {
    return;
  }
  if (height > width) {
    await horizontelDivision({
      grid,
      startTile,
      endTile,
      row,
      col,
      height,
      width,
      setIsDisabled,
      speed,
    });
  } else {
    await verticalDivision({
      grid,
      startTile,
      endTile,
      row,
      col,
      height,
      width,
      setIsDisabled,
      speed,
    });
  }
}
