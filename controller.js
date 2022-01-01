import * as model from "./model.js";
import View from "./View.js";
import { WHITE_KING_ID, BLACK_KING_ID } from "./config.js";

const gamePlayStatus = {
  turn: "white",
  currentPiece: "",
  currentKing: "",
  noToCastling: false,
};

const gameInit = function () {
  View.clearBoard();
  model.playersInit();
  model.updateTotalList();
  View.createBoard();
  View.updateBoard(model.gameData);
  gamePlayStatusInit();
  View.updateTurnInfo(gamePlayStatus.turn);
};

const gamePlayStatusInit = function () {
  gamePlayStatus.turn = "white";
  gamePlayStatus.currentPiece = "";
};

const controlGame = function (e) {
  const targetTR = e.target.closest("tr");
  const targetTD = e.target.closest("td");
  if (gamePlayStatus.currentPiece === "") {
    if (
      targetTD.children[0] !== undefined &&
      model.gameData.totalPieceList.get(targetTD.children[0].className)
        ._color === gamePlayStatus.turn
    ) {
      gamePlayStatus.currentPiece = targetTD.children[0].className;
      if (!gamePlayStatus.noToCastling) {
        if (
          model.checkCastling(
            gamePlayStatus.currentPiece,
            gamePlayStatus.turn,
            View.tileEmpty,
            gamePlayStatus
          )
        ) {
          model.updateTotalList();
          View.resetBoard(model.gameData);
          updateTurn();
          model.updateKingOnCheck(View.tileEmpty, View.getElementOnTile);
          if (model.isCheckMate(gamePlayStatus.turn)) {
            View.renderGameOverPage(gamePlayStatus.turn);
          }
          gamePlayStatus.currentPiece = "";
          gamePlayStatus.noToCastling = false;
        }
      }
    }
  } else {
    const id = gamePlayStatus.currentPiece;
    const tile = [targetTR.rowIndex, targetTD.cellIndex];
    if (model.unitMove(id, tile, View.tileEmpty, View.getElementOnTile)) {
      model.checkPawnPromotion(id);
      model.updateTotalList();
      View.resetBoard(model.gameData);
      updateTurn();
      model.updateKingOnCheck(View.tileEmpty, View.getElementOnTile);
      // View.renderOnCheckStatus(gamePlayStatus.currentKing);
      if (model.isCheckMate(gamePlayStatus.turn)) {
        View.renderGameOverPage(gamePlayStatus.turn);
      }
    }
    gamePlayStatus.currentPiece = "";
    gamePlayStatus.noToCastling = false;
  }
};

const updateTurn = function () {
  if (gamePlayStatus.turn === "white") {
    gamePlayStatus.turn = "black";
    gamePlayStatus.currentKing = BLACK_KING_ID;
  } else {
    gamePlayStatus.turn = "white";
    gamePlayStatus.currentKing = WHITE_KING_ID;
  }
  View.updateTurnInfo(gamePlayStatus.turn);
};

gameInit();
View.addBoardMovementHandler(controlGame);
View.addRestartHandler(gameInit);

//////////////////////////////////////////////////////////
// TESTING
console.log(model.gameData.playerWhitePieceList);
console.log(model.gameData.playerBlackPieceList);
console.log(model.gameData.totalPieceList);

// KING ON CHECK TESTING
// console.log(model.isBlackKingOnCheck(View.tileEmpty, View.getElementOnTile));
// console.log(model.isWhiteKingOnCheck(View.tileEmpty, View.getElementOnTile));

// PROMOTION TESTING
// model.pawnPromotion("wp1", "queen");
// model.updateTotalList();
// View.updateBoard(model.gameData);

// MOVE TESTING
// //King
// console.log("-------------- King --------------");
// model.unitMove("wk0", [2, 7], View.tileEmpty, View.getElementOnTile);
// //Queen
// console.log("-------------- Queen --------------");
// model.unitMove("wq0", [2, 7], View.tileEmpty, View.getElementOnTile);
// //Bishop
// console.log("-------------- Bishop --------------");
// model.unitMove("wb1", [2, 7], View.tileEmpty, View.getElementOnTile);
// //Knight
// console.log("-------------- Knight --------------");
// model.unitMove("wn1", [2, 7], View.tileEmpty, View.getElementOnTile);
// //Rook
// console.log("-------------- Rook --------------");
// model.unitMove("wr1", [2, 7], View.tileEmpty, View.getElementOnTile);
//Pawn
// console.log("-------------- White Pawn --------------");
// model.unitMove("wp5", [5, 4], View.tileEmpty, View.getElementOnTile); //true -> one tile
// model.unitMove("wp5", [4, 4], View.tileEmpty, View.getElementOnTile); //false -> two tiles
// model.unitMove("wp5", [5, 5], View.tileEmpty, View.getElementOnTile); //false
// model.unitMove("wp5", [5, 3], View.tileEmpty, View.getElementOnTile); //false
// console.log("-------------- Black Pawn --------------");
// model.unitMove("bp5", [2, 4], View.tileEmpty, View.getElementOnTile); //false
