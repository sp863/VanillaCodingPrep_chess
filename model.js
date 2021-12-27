import King from "./pieces/King.js";
import Queen from "./pieces/Queen.js";
import Bishop from "./pieces/Bishop.js";
import Knight from "./pieces/Knight.js";
import Rook from "./pieces/Rook.js";
import Pawn from "./pieces/Pawn.js";

export const gameData = {
  playerWhitePieceList: new Map(),
  playerBlackPieceList: new Map(),
};

export const updateBoard = function () {};

export const playersInit = function (board) {
  playerWhiteInit(board);
  playerBlackInit(board);
};

const playerWhiteInit = function (board) {
  gameData.playerWhitePieceList.set(
    document.querySelector(".wk0"),
    new King(7, 4, "king", "white", ".wk0")
  );
  gameData.playerWhitePieceList.set(
    document.querySelector(".wq0"),
    new Queen(7, 3, "queen", "white", ".wq0")
  );
  gameData.playerWhitePieceList.set(
    document.querySelector(".wb1"),
    new Bishop(7, 2, "bishop", "white", ".wb1")
  );
  gameData.playerWhitePieceList.set(
    document.querySelector(".wb2"),
    new Bishop(7, 5, "bishop", "white", ".wb2")
  );
  gameData.playerWhitePieceList.set(
    document.querySelector(".wn1"),
    new Knight(7, 1, "knight", "white", ".wn1")
  );
  gameData.playerWhitePieceList.set(
    document.querySelector(".wn2"),
    new Knight(7, 6, "knight", "white", ".wn2")
  );
  gameData.playerWhitePieceList.set(
    document.querySelector(".wr1"),
    new Rook(7, 0, "rook", "white", ".wr1")
  );
  gameData.playerWhitePieceList.set(
    document.querySelector(".wr2"),
    new Rook(7, 7, "rook", "white", ".wr2")
  );
  for (let i = 0; i < 8; i++) {
    gameData.playerWhitePieceList.set(
      document.querySelector(`wp${i + 1}`),
      new Pawn(6, i, "pawn", "white", `wp${i + 1}`)
    );
  }
};

const playerBlackInit = function (board) {
  gameData.playerBlackPieceList.set(
    board.querySelector("bk0"),
    new King(0, 4, "king", "black", "bk0")
  );
  gameData.playerBlackPieceList.set(
    board.querySelector("bq0"),
    new Queen(0, 3, "queen", "black", "bq0")
  );
  gameData.playerBlackPieceList.set(
    board.querySelector("bb1"),
    new Bishop(0, 2, "bishop", "black", "bb1")
  );
  gameData.playerBlackPieceList.set(
    board.querySelector("bb2"),
    new Bishop(0, 5, "bishop", "black", "bb2")
  );
  gameData.playerBlackPieceList.set(
    board.querySelector("bn1"),
    new Knight(0, 1, "knight", "black", "bn1")
  );
  gameData.playerBlackPieceList.set(
    board.querySelector("bn2"),
    new Knight(0, 6, "knight", "black", "bn2")
  );
  gameData.playerBlackPieceList.set(
    board.querySelector("br1"),
    new Rook(0, 0, "rook", "black", "br1")
  );
  gameData.playerBlackPieceList.set(
    board.querySelector("br2"),
    new Rook(0, 7, "rook", "black", "br2")
  );
  for (let i = 0; i < 8; i++) {
    gameData.playerBlackPieceList.set(
      board.querySelector(`bp${i + 1}`),
      new Pawn(1, i, "pawn", "black", `bp${i + 1}`)
    );
  }
};
