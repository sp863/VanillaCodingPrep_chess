import * as model from "./model.js";
import View from "./View.js";

model.playersInit();
View.createBoard();
View.updateBoard(model.gameData);
console.log(model.gameData.playerWhitePieceList);
console.log(model.gameData.playerBlackPieceList);
