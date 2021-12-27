import Unit from "./Unit.js";
import {
  BLACK_PAWN_MOVE_RANGE_DY,
  BLACK_PAWN_MOVE_RANGE_DX,
} from "../config.js";

export default class Pawn extends Unit {
  #rangeDY = BLACK_PAWN_MOVE_RANGE_DY;
  #rangeDX = BLACK_PAWN_MOVE_RANGE_DX;
  constructor(y, x, type, color) {
    super(y, x, type, color);
  }
}
