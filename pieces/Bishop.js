import Unit from "./Unit.js";
import { BISHOP_MOVE_RANGE_DY, BISHOP_MOVE_RANGE_DX } from "../config.js";

export default class Bishop extends Unit {
  #rangeDY = BISHOP_MOVE_RANGE_DY;
  #rangeDX = BISHOP_MOVE_RANGE_DX;
  constructor(y, x, type, color) {
    super(y, x, type, color);
  }
}
