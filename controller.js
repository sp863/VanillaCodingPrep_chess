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
  gamePlayStatus.currentKing =
    model.gameData.playerWhitePieceList.get(WHITE_KING_ID);
  gamePlayStatus.noToCastling = false;
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
        if (model.checkCastling(gamePlayStatus, View.tileEmpty)) {
          updateAfterMovement();
          resetGamePlayStatus();
        }
      }
    }
  } else {
    const id = gamePlayStatus.currentPiece;
    const tile = [targetTR.rowIndex, targetTD.cellIndex];
    if (model.unitMove(id, tile, View.tileEmpty, View.getElementOnTile)) {
      model.checkPawnPromotion(id);
      updateAfterMovement();
    }
    resetGamePlayStatus();
  }
};

const resetGamePlayStatus = function () {
  gamePlayStatus.currentPiece = "";
  gamePlayStatus.noToCastling = false;
};

const updateAfterMovement = function () {
  model.updateTotalList();
  View.resetBoard(model.gameData);
  updateTurn();
  model.updateKingOnCheck(View.tileEmpty, View.getElementOnTile);
  View.renderOnCheckStatus(gamePlayStatus.currentKing);
  if (model.isCheckMate(gamePlayStatus.turn)) {
    View.renderGameOverPage(gamePlayStatus.turn);
  }
};

const updateTurn = function () {
  if (gamePlayStatus.turn === "white") {
    gamePlayStatus.turn = "black";
    gamePlayStatus.currentKing =
      model.gameData.playerBlackPieceList.get(BLACK_KING_ID);
  } else {
    gamePlayStatus.turn = "white";
    gamePlayStatus.currentKing =
      model.gameData.playerWhitePieceList.get(WHITE_KING_ID);
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
console.log(gamePlayStatus.currentKing);
