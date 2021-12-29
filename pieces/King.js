import Unit from "./Unit.js";
import {
  KING_MOVE_RANGE_DY,
  KING_MOVE_RANGE_DX,
  KING_DIRECTION_MAX,
} from "../config.js";

export default class King extends Unit {
  constructor(y, x, type, color) {
    super(y, x, type, color);
    this._rangeDY = KING_MOVE_RANGE_DY;
    this._rangeDX = KING_MOVE_RANGE_DX;
  }

  _isValidMove(tile, _) {
    return this._isValidRange(tile);
  }

  _isValidRange(tile) {
    const [tileY, tileX] = tile;
    for (let i = 0; i < KING_DIRECTION_MAX; i++) {
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
