import * as model from "./model.js";
import View from "./View.js";

const gameInit = function () {
  View.clearBoard();
  model.playersInit();
  View.createBoard();
  View.updateBoard(model.gameData);
};

gameInit();
console.log(model.gameData.playerWhitePieceList);
console.log(model.gameData.playerBlackPieceList);
