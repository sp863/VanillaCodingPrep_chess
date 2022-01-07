import { BOARD_LENGTH } from "./config.js";

class ChessView {
  #board = document.getElementById("chessboard");

  clearBoard() {
    this.#board.innerHTML = "";
  }

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

  resetBoard(gameData) {
    this.clearBoard();
    this.createBoard();
    this.designBoard();
    this.updateBoard(gameData);
  }

  toggleHighLightPiece(img) {
    img.classList.toggle("picked-piece");
  }

  updateTurnInfo(turn) {
    const turnInfo = document.querySelector(".turn-info");
    turnInfo.textContent = `${turn} turn`;
    if (turn === "white") {
      turnInfo.style.backgroundColor = "#edf2f4";
      turnInfo.style.color = "#343a40";
    } else {
      turnInfo.style.backgroundColor = "#073b4c";
      turnInfo.style.color = "#f8f9fa";
    }
  }

  renderGameOverPage(turn) {
    let winner;
    if (turn === "white") winner = "black";
    else winner = "white";
    document.querySelector(".game-over-page").classList.add("open");
    document.querySelector(
      ".checkmate-message"
    ).textContent = `CheckMate on Player ${winner}`;
    this.#board.classList.add("closed");
  }

  renderOnCheckStatus(king) {
    if (king._onCheck) {
      document.querySelector(".on-check-status").style.backgroundColor =
        "#d00000";
      return;
    }
    document.querySelector(".on-check-status").style.backgroundColor = "white";
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

  addBoardMovementHandler(handler) {
    this.#board.addEventListener("click", function (e) {
      handler(e);
    });
  }

  addRestartHandler(handler) {
    const restartBtn = document.querySelector(".restart-btn");
    restartBtn.addEventListener("click", function (e) {
      handler();
      document.querySelector(".game-over-page").classList.remove("open");
      document.getElementById("chessboard").classList.remove("closed");
    });
  }

  tileEmpty(tileY, tileX) {
    const tempBoard = document.getElementById("chessboard");
    // console.log(tempBoard.rows[tileY].cells[tileX]);
    return tempBoard.rows[tileY].cells[tileX].children[0] === undefined;
  }

  getElementOnTile(tile) {
    const [tileY, tileX] = tile;
    const tempBoard = document.getElementById("chessboard");
    return tempBoard.rows[tileY].cells[tileX].children[0];
  }

  getBoard() {
    return this.#board;
  }
}

export default new ChessView();
