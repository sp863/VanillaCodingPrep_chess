import Unit from "./Unit.js";
import { ROOK_MOVE_RANGE_DY, ROOK_MOVE_RANGE_DX } from "../config.js";

export default class Rook extends Unit {
  #rangeDY = ROOK_MOVE_RANGE_DY;
  #rangeDX = ROOK_MOVE_RANGE_DX;
  constructor(y, x, type, color) {
    super(y, x, type, color);
  }
}
