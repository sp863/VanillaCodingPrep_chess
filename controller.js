import * as model from "./model.js";
import View from "./View.js";

View.createBoard();
model.playersInit(View.getBoard());
console.log(model.gameData.playerWhitePieceList);
console.log(model.gameData.playerBlackPieceList);

for (const [key, value] of model.gameData.playerWhitePieceList) {
  console.log(key, value._y, value._x);
}
