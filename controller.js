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
  model.updateTotalList();
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

gameInit();

//////////////////////////////////////////////////////////
// TESTING
// console.log(model.gameData.playerWhitePieceList);
// console.log(model.gameData.playerBlackPieceList);
// console.log(model.gameData.totalPieceList);

// KING ON CHECK TESTING
// console.log(model.isBlackKingOnCheck(View.tileEmpty, View.getElementOnTile));
// console.log(model.isWhiteKingOnCheck(View.tileEmpty, View.getElementOnTile));

// PROMOTION TESTING
model.pawnPromotion("wp1", "queen");
model.updateTotalList();
View.updateBoard(model.gameData);

// MOVE TESTING
// //King
console.log("-------------- King --------------");
// model.unitMove("wk0", [2, 7], View.tileEmpty, View.getElementOnTile);
// //Queen
console.log("-------------- Queen --------------");
// model.unitMove("wq0", [2, 7], View.tileEmpty, View.getElementOnTile);
// //Bishop
console.log("-------------- Bishop --------------");
// model.unitMove("wb1", [2, 7], View.tileEmpty, View.getElementOnTile);
// //Knight
console.log("-------------- Knight --------------");
// model.unitMove("wn1", [2, 7], View.tileEmpty, View.getElementOnTile);
// //Rook
console.log("-------------- Rook --------------");
// model.unitMove("wr1", [2, 7], View.tileEmpty, View.getElementOnTile);
//Pawn
console.log("-------------- White Pawn --------------");
// model.unitMove("wp5", [5, 4], View.tileEmpty, View.getElementOnTile); //true -> one tile
// model.unitMove("wp5", [4, 4], View.tileEmpty, View.getElementOnTile); //false -> two tiles
// model.unitMove("wp5", [5, 5], View.tileEmpty, View.getElementOnTile); //false
// model.unitMove("wp5", [5, 3], View.tileEmpty, View.getElementOnTile); //false
console.log("-------------- Black Pawn --------------");
// model.unitMove("bp5", [2, 4], View.tileEmpty, View.getElementOnTile); //false
