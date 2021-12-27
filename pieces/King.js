import Unit from "./Unit.js";
import { KING_MOVE_RANGE_DY, KING_MOVE_RANGE_DX } from "../config.js";

export default class King extends Unit {
  constructor(y, x, type, color) {
    super(y, x, type, color);
    this._rangeDY = KING_MOVE_RANGE_DY;
    this._rangeDX = KING_MOVE_RANGE_DX;
  }
}
