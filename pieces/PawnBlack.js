import Unit from "./Unit.js";
import {
  BLACK_PAWN_MOVE_RANGE_DY,
  BLACK_PAWN_MOVE_RANGE_DX,
} from "../config.js";

export default class BlackPawn extends Unit {
  constructor(y, x, type, color) {
    super(y, x, type, color);
    this._rangeDY = BLACK_PAWN_MOVE_RANGE_DY;
    this._rangeDX = BLACK_PAWN_MOVE_RANGE_DX;
  }
}
