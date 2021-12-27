import Unit from "./Unit.js";
import { QUEEN_MOVE_RANGE_DY, QUEEN_MOVE_RANGE_DX } from "../config.js";

export default class Queen extends Unit {
  constructor(y, x, type, color) {
    super(y, x, type, color);
    this._rangeDY = QUEEN_MOVE_RANGE_DY;
    this._rangeDX = QUEEN_MOVE_RANGE_DX;
  }
}
