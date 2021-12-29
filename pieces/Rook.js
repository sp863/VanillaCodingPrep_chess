import Unit from "./Unit.js";
import {
  ROOK_MOVE_RANGE_DY,
  ROOK_MOVE_RANGE_DX,
  ROOK_DIRECTION_MAX,
  BOARD_LENGTH,
} from "../config.js";

export default class Rook extends Unit {
  constructor(y, x, type, color) {
    super(y, x, type, color);
    this._rangeDY = ROOK_MOVE_RANGE_DY;
    this._rangeDX = ROOK_MOVE_RANGE_DX;
  }

  _isValidRange(tile) {
    const [tileY, tileX] = tile;
    for (let i = 0; i < ROOK_DIRECTION_MAX; i++) {
      for (let j = 1; j < BOARD_LENGTH; j++) {
        const tempY = this._y + this._rangeDY[i] * j;
        const tempX = this._x + this._rangeDX[i] * j;
        if (this._checkBoardRange(tempY, tempX)) {
          if (tempY === tileY && tempX === tileX) {
            this._direction = i;
            this._distanceToTarget = j;
            return true;
          }
        }
      }
    }
    return false;
  }

  _noObstacle(tileEmpty) {
    for (let i = 1; i < this._distanceToTarget; i++) {
      const tempY = this._y + ROOK_MOVE_RANGE_DY[this._direction] * i;
      const tempX = this._x + ROOK_MOVE_RANGE_DX[this._direction] * i;
      if (!tileEmpty(tempY, tempX)) return false;
    }
    return true;
  }
}
