import * as model from "./model.js";
import View from "./View.js";

const gamePlayStatus = {
  turn: "w",
  validPiece: false,
  currentPiece: "",
};

const gameInit = function () {
  View.clearBoard();
  model.playersInit();
  View.createBoard();
  View.updateBoard(model.gameData);
};

const movePieceHandler = function (e) {
  if (!e.target.closest("span")) return;
  const pieceId = e.target.closest("span").className;
  if (pieceId[0] !== gamePlayStatus.turn) return;
  gamePlayStatus.validPiece = true;
  gamePlayStatus.currentPiece = pieceId;
};

const controlMove = function () {
  View.addMovePieceHandler(movePieceHandler);
  View.removeMovePieceHandler(movePieceHandler);
  // if (gamePlayStatus.validPiece) checkMove();
};
const checkMove = function () {
  console.log("are you running");
};

// const controlTile = function () {
//   View.addTargetTileHandler(gamePlayStatus);
// };

gameInit();
controlMove();

console.log(model.gameData.playerWhitePieceList);
console.log(model.gameData.playerBlackPieceList);
console.log(model.gameData.totalPieceList);
