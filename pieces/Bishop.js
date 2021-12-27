import Unit from "./Unit.js";
import { BISHOP_MOVE_RANGE_DY, BISHOP_MOVE_RANGE_DX } from "../config.js";

export default class Bishop extends Unit {
  constructor(y, x, type, color) {
    super(y, x, type, color);
    this._rangeDY = BISHOP_MOVE_RANGE_DY;
    this._rangeDX = BISHOP_MOVE_RANGE_DX;
  }
}
