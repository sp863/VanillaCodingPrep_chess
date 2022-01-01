import King from "./pieces/King.js";
import Queen from "./pieces/Queen.js";
import Bishop from "./pieces/Bishop.js";
import Knight from "./pieces/Knight.js";
import Rook from "./pieces/Rook.js";
import WhitePawn from "./pieces/PawnWhite.js";
import BlackPawn from "./pieces/PawnBlack.js";
import * as kons from "./config.js";

/////////////////////////////////////////////////////////////////////////////////////
// GAME DATA
/////////////////////////////////////////////////////////////////////////////////////
export const gameData = {
  playerWhitePieceList: new Map(),
  playerBlackPieceList: new Map(),
  totalPieceList: new Map(),
  promotionChoice: ["queen", "bishop", "knight", "rook"],
};

/////////////////////////////////////////////////////////////////////////////////////
// PLAYER AND PIECES INITIALIZATION
/////////////////////////////////////////////////////////////////////////////////////
export const playersInit = function () {
  gameData.playerWhitePieceList = new Map();
  gameData.playerBlackPieceList = new Map();
  gameData.totalPieceList = new Map();
  playerWhiteInit();
  playerBlackInit();
};

export const updateTotalList = function () {
  gameData.totalPieceList = new Map([
    ...gameData.playerWhitePieceList,
    ...gameData.playerBlackPieceList,
  ]);
};

const playerWhiteInit = function () {
  gameData.playerWhitePieceList.set(
    kons.WHITE_KING_ID,
    new King(7, 4, "king", "white")
  );
  gameData.playerWhitePieceList.set(
    kons.WHITE_QUEEN_ID,
    new Queen(7, 3, "queen", "white")
  );
  gameData.playerWhitePieceList.set(
    kons.WHITE_BISHOP1_ID,
    new Bishop(7, 2, "bishop", "white")
  );
  gameData.playerWhitePieceList.set(
    kons.WHITE_BISHOP2_ID,
    new Bishop(7, 5, "bishop", "white")
  );
  gameData.playerWhitePieceList.set(
    kons.WHITE_KNIGHT1_ID,
    new Knight(7, 1, "knight", "white")
  );
  gameData.playerWhitePieceList.set(
    kons.WHITE_KNIGHT2_ID,
    new Knight(7, 6, "knight", "white")
  );
  gameData.playerWhitePieceList.set(
    kons.WHITE_ROOK1_ID,
    new Rook(7, 0, "rook", "white")
  );
  gameData.playerWhitePieceList.set(
    kons.WHITE_ROOK2_ID,
    new Rook(7, 7, "rook", "white")
  );
  for (let i = 0; i < 8; i++) {
    gameData.playerWhitePieceList.set(
      `wp${i + 1}`,
      new WhitePawn(6, i, "pawn", "white")
    );
  }
};

const playerBlackInit = function (board) {
  gameData.playerBlackPieceList.set(
    kons.BLACK_KING_ID,
    new King(0, 4, "king", "black")
  );
  gameData.playerBlackPieceList.set(
    kons.BLACK_QUEEN_ID,
    new Queen(0, 3, "queen", "black")
  );
  gameData.playerBlackPieceList.set(
    kons.BLACK_BISHOP1_ID,
    new Bishop(0, 2, "bishop", "black")
  );
  gameData.playerBlackPieceList.set(
    kons.BLACK_BISHOP2_ID,
    new Bishop(0, 5, "bishop", "black")
  );
  gameData.playerBlackPieceList.set(
    kons.BLACK_KNIGHT1_ID,
    new Knight(0, 1, "knight", "black")
  );
  gameData.playerBlackPieceList.set(
    kons.BLACK_KNIGHT2_ID,
    new Knight(0, 6, "knight", "black")
  );
  gameData.playerBlackPieceList.set(
    kons.BLACK_ROOK1_ID,
    new Rook(0, 0, "rook", "black")
  );
  gameData.playerBlackPieceList.set(
    kons.BLACK_ROOK2_ID,
    new Rook(0, 7, "rook", "black")
  );
  for (let i = 0; i < 8; i++) {
    gameData.playerBlackPieceList.set(
      `bp${i + 1}`,
      new BlackPawn(1, i, "pawn", "black")
    );
  }
};

/////////////////////////////////////////////////////////////////////////////////////
// UNIT MOVEMENT
/////////////////////////////////////////////////////////////////////////////////////
export const unitMove = function (id, tile, tileEmpty, getElementOnTile) {
  const unit = gameData.totalPieceList.get(id);
  const [tileY, tileX] = tile;
  const oppElement = getElementOnTile(tile);
  if (unit._isValidMove(tile, tileEmpty) && this.isOpponent(unit, oppElement)) {
    unit._y = tileY;
    unit._x = tileX;
    if (oppElement) {
      const targetPiece = gameData.totalPieceList.get(oppElement.className);
      const targetId = oppElement.className;
      if (targetPiece._color === "white")
        gameData.playerWhitePieceList.delete(targetId);
      else gameData.playerBlackPieceList.delete(targetId);
    }
    unit._isMoved = true;
    return true;
  }
  return false;
};

export const isOpponent = function (unit, oppElement) {
  if (!oppElement) return true;
  const targetPiece = gameData.totalPieceList.get(oppElement.className);
  if (targetPiece._color !== unit._color) return true;
  else return false;
};

/////////////////////////////////////////////////////////////////////////////////////
// KING ON CHECK
/////////////////////////////////////////////////////////////////////////////////////
export const isCheckMate = function (turn) {
  let king;
  if (turn === "white") {
    king = gameData.playerBlackPieceList.get(kons.BLACK_KING_ID);
  } else {
    king = gameData.playerWhitePieceList.get(kons.WHITE_KING_ID);
  }
  if (king._onCheck === true) {
    console.log("checkmate");
    return true;
  }
  return false;
};

export const updateKingOnCheck = function (tileEmpty, getElementOnTile) {
  isWhiteKingOnCheck(tileEmpty, getElementOnTile);
  isBlackKingOnCheck(tileEmpty, getElementOnTile);
};

export const isWhiteKingOnCheck = function (tileEmpty, getElementOnTile) {
  const king = gameData.playerWhitePieceList.get(kons.WHITE_KING_ID);
  const kingTile = [king._y, king._x];
  const kingElement = getElementOnTile(kingTile);
  for (const [_, unit] of gameData.playerBlackPieceList) {
    if (
      unit._isValidMove(kingTile, tileEmpty) &&
      isOpponent(unit, kingElement)
    ) {
      king._onCheck = true;
      console.log("white king on check " + king._onCheck);
      return;
    }
  }
  king._onCheck = false;
};

export const isBlackKingOnCheck = function (tileEmpty, getElementOnTile) {
  const king = gameData.playerBlackPieceList.get(kons.BLACK_KING_ID);
  const kingTile = [king._y, king._x];
  const kingElement = getElementOnTile(kingTile);
  for (const [_, unit] of gameData.playerWhitePieceList) {
    if (
      unit._isValidMove(kingTile, tileEmpty) &&
      isOpponent(unit, kingElement)
    ) {
      king._onCheck = true;
      console.log("black king on check " + king._onCheck);
      return;
    }
  }
  king._onCheck = false;
};

/////////////////////////////////////////////////////////////////////////////////////
// PAWN PROMOTION
/////////////////////////////////////////////////////////////////////////////////////
export const checkPawnPromotion = function (id) {
  const unit = gameData.totalPieceList.get(id);
  if (unit._type !== "pawn") return;
  if (unit._y !== 7 && unit._y !== 0) return;
  let promoteTo = "";
  while (true) {
    promoteTo = Number(prompt(kons.PAWN_PROMOTION_MESSAGE));
    if (promoteTo >= 1 && promoteTo <= 4) break;
  }
  promotePawn(id, gameData.promotionChoice[promoteTo - 1]);
};

export const promotePawn = function (pawnId, promoteTo) {
  const pawn = gameData.totalPieceList.get(pawnId);
  const color = pawn._color;
  if (color === "white") {
    gameData.playerWhitePieceList.delete(pawnId);
    gameData.playerWhitePieceList.set(
      newUnitId(color, promoteTo),
      newUnit(pawn, promoteTo)
    );
  } else {
    gameData.playerBlackPieceList.delete(pawnId);
    gameData.playerBlackPieceList.set(
      newUnitId(color, promoteTo),
      newUnit(pawn, promoteTo)
    );
  }
  gameData.totalPieceList.delete(pawnId);
};

const newUnit = function (pawn, promoteTo) {
  if (promoteTo === "queen") {
    return new Queen(pawn._y, pawn._x, `${promoteTo}`, `${pawn._color}`);
  } else if (promoteTo === "bishop") {
    return new Bishop(pawn._y, pawn._x, `${promoteTo}`, `${pawn._color}`);
  } else if (promoteTo === "knight") {
    return new Knight(pawn._y, pawn._x, `${promoteTo}`, `${pawn._color}`);
  } else if (promoteTo === "rook") {
    return new Rook(pawn._y, pawn._x, `${promoteTo}`, `${pawn._color}`);
  }
  return;
};

const newUnitId = function (color, promoteTo) {
  let id = "";
  const firstLetter = color[0];
  const secondLetter = promoteTo === "knight" ? promoteTo[1] : promoteTo[0];
  const thirdLetter =
    [...gameData.totalPieceList.keys()].filter(function (key) {
      return key[0] === firstLetter && key[1] === secondLetter;
    }).length +
    1 +
    "";
  id = firstLetter + secondLetter + thirdLetter;
  return id;
};

/////////////////////////////////////////////////////////////////////////////////////
// Castling
/////////////////////////////////////////////////////////////////////////////////////
export const checkCastling = function (id, turn, tileEmpty) {
  const unit = gameData.totalPieceList.get(id);
  if (unit._type !== "king" && unit._type !== "rook") return false;
  let king, kingSideRook, queenSideRook;
  if (turn === "white") {
    king = gameData.playerWhitePieceList.get(kons.WHITE_KING_ID);
    kingSideRook = gameData.playerWhitePieceList.get(kons.WHITE_ROOK2_ID);
    queenSideRook = gameData.playerWhitePieceList.get(kons.WHITE_ROOK1_ID);
  } else {
    king = gameData.playerBlackPieceList.get(kons.BLACK_KING_ID);
    kingSideRook = gameData.playerBlackPieceList.get(kons.BLACK_ROOK2_ID);
    queenSideRook = gameData.playerBlackPieceList.get(kons.BLACK_ROOK1_ID);
  }
  return isCastlingPossible(king, kingSideRook, queenSideRook, tileEmpty);
};

const isCastlingPossible = function (
  king,
  kingSideRook,
  queenSideRook,
  tileEmpty
) {
  const kingSide = isKingSidePossible(king, kingSideRook, tileEmpty);
  const queenSide = isQueenSidePossible(king, queenSideRook, tileEmpty);
  if (!kingSide && !queenSide) return false;

  if (kingSide && queenSide) {
    let castlingChoice;
    while (true) {
      castlingChoice = Number(prompt(kons.ASK_CASTLING_MESSAGE));
      if (castlingChoice === 1 || castlingChoice === 2) break;
    }
    if (castlingChoice === 1) {
      let castlingSide;
      while (true) {
        castlingSide = Number(prompt(kons.ASK_CASTLING_SIDE_MESSAGE));
        if (castlingSide === 1 || castlingSide === 2) break;
      }
      if (castlingSide === 1) {
        kingSideCastling(king, kingSideRook);
        return true;
      } else {
        queenSideCastling(king, queenSideRook);
        return true;
      }
    }
  } else if (kingSide || queenSide) {
    let castlingChoice;
    while (true) {
      castlingChoice = Number(prompt(kons.ASK_CASTLING_MESSAGE));
      if (castlingChoice === 1 || castlingChoice === 2) break;
    }
    if (castlingChoice === 1) {
      if (kingSide) {
        kingSideCastling(king, kingSideRook);
        return true;
      } else if (queenSide) {
        queenSideCastling(king, queenSideRook);
        return true;
      }
    }
  }
  return false;
};

const isKingSidePossible = function (king, kingSideRook, tileEmpty) {
  if (!kingSideRook) return false;
  const y = king._y;
  const kingTileX = kingSideRook._x - 1;
  const rookTileX = king._x + 1;
  //1 king rook both isMoved false?
  const bothNotMoved = !king._isMoved && !kingSideRook._isMoved;
  //2 king rook between empty?
  const kingBetweenRookEmpty =
    tileEmpty(y, kingTileX) && tileEmpty(y, rookTileX);
  //3 will king's target tile be on check?
  const willKingBeOnCheck = isTileOnCheck(king, kingTileX, tileEmpty);
  if (bothNotMoved && kingBetweenRookEmpty && !willKingBeOnCheck) {
    return true;
  }
  return false;
};

const isQueenSidePossible = function (king, queenSideRook, tileEmpty) {
  if (!queenSideRook) return false;
  const y = king._y;
  const kingTileX = queenSideRook._x + 2;
  const rookTileX = king._x - 1;
  const extraTileX = queenSideRook._x + 1;
  //1 king rook both isMoved false?
  const bothNotMoved = !queenSideRook._isMoved && !queenSideRook._isMoved;
  //2 king rook between empty?
  const kingBetweenRookEmpty =
    tileEmpty(y, kingTileX) &&
    tileEmpty(y, rookTileX) &&
    tileEmpty(y, extraTileX);
  //3 will king's target tile be on check?
  const willKingBeOnCheck = isTileOnCheck(king, kingTileX, tileEmpty);
  if (bothNotMoved && kingBetweenRookEmpty && !willKingBeOnCheck) {
    return true;
  }
  return false;
};

const kingSideCastling = function (king, kingSideRook) {
  const beforeKingX = king._x;
  const beforeRookX = kingSideRook._x;
  king._x = beforeRookX - 1;
  kingSideRook._x = beforeKingX + 1;
  king._isMoved = true;
  kingSideRook._isMoved = true;
};

const queenSideCastling = function (king, queenSideRook) {
  const beforeKingX = king._x;
  const beforeRookX = queenSideRook._x;
  king._x = beforeRookX + 2;
  queenSideRook._x = beforeKingX - 1;
  king._isMoved = true;
  queenSideRook._isMoved = true;
};

const isTileOnCheck = function (king, kingTileX, tileEmpty) {
  let opponentList;
  if (king._color === "white") {
    opponentList = gameData.playerBlackPieceList;
  } else {
    opponentList = gameData.playerWhitePieceList;
  }
  const kingTile = [king._y, kingTileX];
  for (const [_, unit] of opponentList) {
    if (unit._isValidMove(kingTile, tileEmpty)) {
      console.log("tile will be on check " + king._onCheck);
      return true;
    }
  }
  return false;
};
