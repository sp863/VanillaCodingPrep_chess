import Unit from "./Unit.js";
import {
  WHITE_PAWN_MOVE_RANGE_DY,
  WHITE_PAWN_MOVE_RANGE_DX,
} from "../config.js";

export default class WhitePawn extends Unit {
  constructor(y, x, type, color) {
    super(y, x, type, color);
    this._rangeDY = WHITE_PAWN_MOVE_RANGE_DY;
    this._rangeDX = WHITE_PAWN_MOVE_RANGE_DX;
  }
}
