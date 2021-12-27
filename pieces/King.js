import Unit from "./Unit.js";
import { KING_MOVE_RANGE_DY, KING_MOVE_RANGE_DX } from "../config.js";

export default class King extends Unit {
  #rangeDY = KING_MOVE_RANGE_DY;
  #rangeDX = KING_MOVE_RANGE_DX;
  constructor(y, x, type, color) {
    super(y, x, type, color);
  }
}
