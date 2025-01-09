import { TileType } from "./types";
import { isEqual } from "./helper";

export const IsInQueue = (tile: TileType, queue: TileType[]) => {
  for (let i = 0; i < queue.length; i++) {
    if (isEqual(tile, queue[i])) return true;
  }
  return false;
};
