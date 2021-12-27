class ChessView {
  #board = document.getElementById("chessboard");

  createBoard() {
    for (let i = 0; i < 8; i++) {
      const row = this.#board.insertRow();
      for (let j = 0; j < 8; j++) {
        const cell = row.insertCell();
      }
    }
  }

  updateBoard(gameData) {
    for (const [key, piece] of gameData.playerWhitePieceList) {
      const y = piece._y;
      const x = piece._x;
      const targetTile = this.#board.rows[y].cells[x];
      targetTile.innerHTML = this.generatePieceHTML(key, piece);
    }
    for (const [key, piece] of gameData.playerBlackPieceList) {
      const y = piece._y;
      const x = piece._x;
      const targetTile = this.#board.rows[y].cells[x];
      targetTile.innerHTML = this.generatePieceHTML(key, piece);
    }
  }

  generatePieceHTML(key, piece) {
    return `
    <span class="${key}">
      <img
        class="chess-piece-image"
        alt="${piece._color} ${piece._type} piece"
        src="img/${piece._color}_${piece._type}.png"
      />
    </span>
    `;
  }

  getBoard() {
    return this.#board;
  }
}

export default new ChessView();
