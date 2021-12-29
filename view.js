import { BOARD_LENGTH } from "./config.js";

class ChessView {
  #board = document.getElementById("chessboard");

  createBoard() {
    for (let i = 0; i < BOARD_LENGTH; i++) {
      const row = this.#board.insertRow();
      for (let j = 0; j < BOARD_LENGTH; j++) {
        const cell = row.insertCell();
      }
    }
    this.designBoard();
  }

  designBoard() {
    for (let i = 0; i < BOARD_LENGTH; i++) {
      for (let j = 0; j < BOARD_LENGTH; j++) {
        if (i % 2 === 0) {
          if (j % 2 === 0) {
            this.#board.rows[i].cells[j].style.backgroundColor = "#ffe8d6";
          } else {
            this.#board.rows[i].cells[j].style.backgroundColor = "#b98b73";
          }
        } else {
          if (j % 2 === 0) {
            this.#board.rows[i].cells[j].style.backgroundColor = "#b98b73";
          } else {
            this.#board.rows[i].cells[j].style.backgroundColor = "#ffe8d6";
          }
        }
      }
    }
  }

  updateBoard(gameData) {
    for (const [key, piece] of gameData.totalPieceList) {
      const y = piece._y;
      const x = piece._x;
      const targetTile = this.#board.rows[y].cells[x];
      targetTile.innerHTML = this.generatePieceHTML(key, piece);
    }
  }

  clearBoard() {
    this.#board.innerHTML = "";
  }

  generatePieceHTML(key, piece) {
    return `
    <span class="${key}">
      <img
        class="chess-piece"
        alt="${piece._color} ${piece._type} piece"
        src="img/${piece._color}_${piece._type}.png"
      />
    </span>
    `;
  }

  // addMovePieceHandler(handler) {
  //   this.#board.addEventListener("click", function() {

  //   });
  // }

  removeMovePieceHandler(handler) {
    this.#board.removeEventListener("click", handler);
  }

  // addTargetTileHandler(status) {
  //   this.#board.addEventListener("click", function (e) {
  //     if (!status.validPiece) return;
  //     console.log(e.target);
  //   });
  // }

  // removeTargetTileHandler() {
  //   this.#board.removeEventListener("click", this.addMovePieceHandler);
  //   console.log("removed");
  // }

  tileEmpty(tileY, tileX) {
    const tempBoard = document.getElementById("chessboard");
    // console.log(tempBoard.rows[tileY].cells[tileX]);
    return tempBoard.rows[tileY].cells[tileX].children[0] === undefined;
  }

  getPieceOnTile(tile) {
    const [tileY, tileX] = tile;
    const tempBoard = document.getElementById("chessboard");
    return tempBoard.rows[tileY].cells[tileX].children[0];
  }

  getBoard() {
    return this.#board;
  }
}

export default new ChessView();
