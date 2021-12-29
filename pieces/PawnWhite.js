import Unit from "./Unit.js";
import {
  WHITE_PAWN_MOVE_RANGE_DY,
  WHITE_PAWN_MOVE_RANGE_DX,
  PAWN_DIRECTION_MAX,
} from "../config.js";

export default class WhitePawn extends Unit {
  #rangeStartIdx = 0;

  constructor(y, x, type, color) {
    super(y, x, type, color);
    this._rangeDY = WHITE_PAWN_MOVE_RANGE_DY;
    this._rangeDX = WHITE_PAWN_MOVE_RANGE_DX;
  }

  _updatePawnRange(tile, tileEmpty) {
    const [y, x] = tile;
    if (this._isMoved) this.#rangeStartIdx = 1;
    if (x !== this._x && tileEmpty(y, x)) this.#rangeStartIdx = 3;
  }

  _isValidMove(tile, tileEmpty) {
    this._updatePawnRange(tile, tileEmpty);
    return this._isValidRange(tile);
  }

  _isValidRange(tile) {
    const [tileY, tileX] = tile;
    for (let i = this.#rangeStartIdx; i < PAWN_DIRECTION_MAX; i++) {
      const tempY = this._y + this._rangeDY[i];
      const tempX = this._x + this._rangeDX[i];
      if (this._checkBoardRange(tempY, tempX)) {
        if (tempY === tileY && tempX === tileX) {
          this.#rangeStartIdx = 0;
          return true;
        }
      }
    }
    this.#rangeStartIdx = 0;
    return false;
  }
}
