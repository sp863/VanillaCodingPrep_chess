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

// const controlMove = function () {
//   View.addMovePieceHandler(movePieceHandler);
//   View.removeMovePieceHandler(movePieceHandler);
//   // if (gamePlayStatus.validPiece) checkMove();
// };

// const controlTile = function () {
//   View.addTargetTileHandler(gamePlayStatus);
// };

gameInit();
console.log(model.gameData.playerWhitePieceList);
console.log(model.gameData.playerBlackPieceList);
console.log(model.gameData.totalPieceList);

// //King
console.log("-------------- King --------------");
// model.unitMove("wk0", [2, 7], View.tileEmpty, View.getPieceOnTile);
// //Queen
console.log("-------------- Queen --------------");
// model.unitMove("wq0", [2, 7], View.tileEmpty, View.getPieceOnTile);
// //Bishop
console.log("-------------- Bishop --------------");
// model.unitMove("wb1", [2, 7], View.tileEmpty, View.getPieceOnTile);
// //Knight
console.log("-------------- Knight --------------");
// model.unitMove("wn1", [2, 7], View.tileEmpty, View.getPieceOnTile);
// //Rook
console.log("-------------- Rook --------------");
// model.unitMove("wr1", [2, 7], View.tileEmpty, View.getPieceOnTile);
//Pawn
console.log("-------------- White Pawn --------------");
// model.unitMove("wp5", [5, 4], View.tileEmpty, View.getPieceOnTile); //true -> one tile
// model.unitMove("wp5", [4, 4], View.tileEmpty, View.getPieceOnTile); //false -> two tiles
// model.unitMove("wp5", [5, 5], View.tileEmpty, View.getPieceOnTile); //false
// model.unitMove("wp5", [5, 3], View.tileEmpty, View.getPieceOnTile); //false
console.log("-------------- Black Pawn --------------");
// model.unitMove("bp5", [2, 4], View.tileEmpty, View.getPieceOnTile); //false
