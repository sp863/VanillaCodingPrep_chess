import Unit from "./Unit.js";
import { ROOK_MOVE_RANGE_DY, ROOK_MOVE_RANGE_DX } from "../config.js";

export default class Rook extends Unit {
  constructor(y, x, type, color) {
    super(y, x, type, color);
    this._rangeDY = ROOK_MOVE_RANGE_DY;
    this._rangeDX = ROOK_MOVE_RANGE_DX;
  }
}
