class ChessView {
  #board = document.getElementById("chessboard");

  createBoard() {
    for (let i = 0; i < 8; i++) {
      const row = this.#board.insertRow();
      for (let j = 0; j < 8; j++) {
        const cell = row.insertCell();
        cell.textContent = "xx";
      }
    }
  }
}

export default new ChessView();
