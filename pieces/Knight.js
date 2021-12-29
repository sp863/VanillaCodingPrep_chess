import Unit from "./Unit.js";
import {
  KNIGHT_MOVE_RANGE_DY,
  KNIGHT_MOVE_RANGE_DX,
  KNIGHT_DIRECTION_MAX,
} from "../config.js";

export default class Knight extends Unit {
  constructor(y, x, type, color) {
    super(y, x, type, color);
    this._rangeDY = KNIGHT_MOVE_RANGE_DY;
    this._rangeDX = KNIGHT_MOVE_RANGE_DX;
  }

  _isValidMove(tile, _) {
    return this._isValidRange(tile);
  }

  _isValidRange(tile) {
    const [tileY, tileX] = tile;
    for (let i = 0; i < KNIGHT_DIRECTION_MAX; i++) {
      const tempY = this._y + this._rangeDY[i];
      const tempX = this._x + this._rangeDX[i];
      if (this._checkBoardRange(tempY, tempX)) {
        if (tempY === tileY && tempX === tileX) {
          return true;
        }
      }
    }
    return false;
  }
}
