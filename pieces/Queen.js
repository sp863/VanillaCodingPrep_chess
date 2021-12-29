import Unit from "./Unit.js";
import {
  QUEEN_MOVE_RANGE_DY,
  QUEEN_MOVE_RANGE_DX,
  QUEEN_DIRECTION_MAX,
  BOARD_LENGTH,
} from "../config.js";

export default class Queen extends Unit {
  constructor(y, x, type, color) {
    super(y, x, type, color);
    this._rangeDY = QUEEN_MOVE_RANGE_DY;
    this._rangeDX = QUEEN_MOVE_RANGE_DX;
  }

  _isValidMove(tile, tileEmpty) {
    // console.log(this._isValidRange(tile), this._noObstacle(tileEmpty));
    return this._isValidRange(tile) && this._noObstacle(tileEmpty);
  }

  _isValidRange(tile) {
    const [tileY, tileX] = tile;
    for (let i = 0; i < QUEEN_DIRECTION_MAX; i++) {
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
      const tempY = this._y + QUEEN_MOVE_RANGE_DY[this._direction] * i;
      const tempX = this._x + QUEEN_MOVE_RANGE_DX[this._direction] * i;
      if (!tileEmpty(tempY, tempX)) return false;
    }
    return true;
  }
}
