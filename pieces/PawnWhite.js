import Unit from "./Unit.js";
import {
  WHITE_PAWN_MOVE_RANGE_DY,
  WHITE_PAWN_MOVE_RANGE_DX,
} from "../config.js";

export default class Pawn extends Unit {
  #rangeDY = WHITE_PAWN_MOVE_RANGE_DY;
  #rangeDX = WHITE_PAWN_MOVE_RANGE_DX;

  constructor(y, x, type, color) {
    super(y, x, type, color);
  }
}
