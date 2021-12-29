import Unit from "./Unit.js";
import {
  BISHOP_MOVE_RANGE_DY,
  BISHOP_MOVE_RANGE_DX,
  BISHOP_DIRECTION_MAX,
  BOARD_LENGTH,
} from "../config.js";

export default class Bishop extends Unit {
  #distanceToTarget;
  #direction;
  constructor(y, x, type, color) {
    super(y, x, type, color);
    this._rangeDY = BISHOP_MOVE_RANGE_DY;
    this._rangeDX = BISHOP_MOVE_RANGE_DX;
  }

  _isValidRange(tile) {
    const [tileY, tileX] = tile;
    for (let i = 0; i < BISHOP_DIRECTION_MAX; i++) {
      for (let j = 1; j < BOARD_LENGTH; j++) {
        const tempY = this._y + this._rangeDY[i] * j;
        const tempX = this._x + this._rangeDX[i] * j;
        if (this._checkBoardRange(tempY, tempX)) {
          if (tempY == tileY && tempX == tileX) {
            this.#direction = i;
            this.#distanceToTarget = j;
            return true;
          }
        }
      }
    }
    return false;
  }

  _noObstacle(tileEmpty) {
    for (let i = 1; i < this.#distanceToTarget; i++) {
      const tempY = this._y + BISHOP_MOVE_RANGE_DY[this.#direction] * i;
      const tempX = this._x + BISHOP_MOVE_RANGE_DX[this.#direction] * i;
      if (!tileEmpty(tempY, tempX)) return false;
    }
    return true;
  }
}
