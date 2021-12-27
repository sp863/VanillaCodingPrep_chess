import Unit from "./Unit.js";
import { KNIGHT_MOVE_RANGE_DY, KNIGHT_MOVE_RANGE_DX } from "../config.js";

export default class Knight extends Unit {
  #rangeDY = KNIGHT_MOVE_RANGE_DY;
  #rangeDX = KNIGHT_MOVE_RANGE_DX;
  constructor(y, x, type, color) {
    super(y, x, type, color);
  }
}
