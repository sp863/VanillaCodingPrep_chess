import Unit from "./Unit.js";
import { KNIGHT_MOVE_RANGE_DY, KNIGHT_MOVE_RANGE_DX } from "../config.js";

export default class Knight extends Unit {
  constructor(y, x, type, color) {
    super(y, x, type, color);
    this._rangeDY = KNIGHT_MOVE_RANGE_DY;
    this._rangeDX = KNIGHT_MOVE_RANGE_DX;
  }
}
