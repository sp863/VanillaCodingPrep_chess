import * as model from "./model.js";
import View from "./View.js";

View.createBoard();
model.playersInit();
console.log(model.gameData.playerWhitePieceList);
console.log(model.gameData.playerBlackPieceList);
