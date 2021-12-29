import { BOARD_LENGTH } from "../config.js";

export default class Unit {
  _y;
  _x;
  _rangeDY;
  _rangeDX;
  _type;
  _color;
  _distanceToTarget;
  _direction;
  constructor(y, x, type, color, id) {
    this._y = y;
    this._x = x;
    this._type = type;
    this._color = color;
  }

  _checkBoardRange(y, x) {
    if (y < 0 || y >= BOARD_LENGTH || x < 0 || x >= BOARD_LENGTH) {
      return false;
    }
    return true;
  }
}
