class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setPiece(piece) {
    this.piece = piece;
  }
}

module.exports = { Cell };
