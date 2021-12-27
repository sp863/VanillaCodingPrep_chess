import King from "./pieces/King.js";
import Queen from "./pieces/Queen.js";
import Bishop from "./pieces/Bishop.js";
import Knight from "./pieces/Knight.js";
import Rook from "./pieces/Rook.js";
import WhitePawn from "./pieces/PawnWhite.js";
import BlackPawn from "./pieces/PawnBlack.js";

export const gameData = {
  playerWhitePieceList: new Map(),
  playerBlackPieceList: new Map(),
};

export const playersInit = function () {
  playerWhiteInit();
  playerBlackInit();
};

const playerWhiteInit = function () {
  gameData.playerWhitePieceList.set("wk0", new King(7, 4, "king", "white"));
  gameData.playerWhitePieceList.set("wq0", new Queen(7, 3, "queen", "white"));
  gameData.playerWhitePieceList.set("wb1", new Bishop(7, 2, "bishop", "white"));
  gameData.playerWhitePieceList.set("wb2", new Bishop(7, 5, "bishop", "white"));
  gameData.playerWhitePieceList.set("wn1", new Knight(7, 1, "knight", "white"));
  gameData.playerWhitePieceList.set("wn2", new Knight(7, 6, "knight", "white"));
  gameData.playerWhitePieceList.set("wr1", new Rook(7, 0, "rook", "white"));
  gameData.playerWhitePieceList.set("wr2", new Rook(7, 7, "rook", "white"));
  for (let i = 0; i < 8; i++) {
    gameData.playerWhitePieceList.set(
      `wp${i + 1}`,
      new WhitePawn(6, i, "pawn", "white")
    );
  }
};

const playerBlackInit = function (board) {
  gameData.playerBlackPieceList.set("bk0", new King(0, 4, "king", "black"));
  gameData.playerBlackPieceList.set("bq0", new Queen(0, 3, "queen", "black"));
  gameData.playerBlackPieceList.set("bb1", new Bishop(0, 2, "bishop", "black"));
  gameData.playerBlackPieceList.set("bb2", new Bishop(0, 5, "bishop", "black"));
  gameData.playerBlackPieceList.set("bn1", new Knight(0, 1, "knight", "black"));
  gameData.playerBlackPieceList.set("bn2", new Knight(0, 6, "knight", "black"));
  gameData.playerBlackPieceList.set("br1", new Rook(0, 0, "rook", "black"));
  gameData.playerBlackPieceList.set("br2", new Rook(0, 7, "rook", "black"));
  for (let i = 0; i < 8; i++) {
    gameData.playerBlackPieceList.set(
      `bp${i + 1}`,
      new BlackPawn(1, i, "pawn", "black")
    );
  }
};
