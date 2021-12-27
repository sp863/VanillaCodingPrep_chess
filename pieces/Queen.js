import Unit from "./Unit.js";
import { QUEEN_MOVE_RANGE_DY, QUEEN_MOVE_RANGE_DX } from "../config.js";

export default class Queen extends Unit {
  #rangeDY = QUEEN_MOVE_RANGE_DY;
  #rangeDX = QUEEN_MOVE_RANGE_DX;
  constructor(y, x, type, color) {
    super(y, x, type, color);
  }
}
