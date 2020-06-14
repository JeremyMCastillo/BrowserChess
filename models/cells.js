class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.piece = null;
  }

  setPiece(piece) {
    this.piece = piece;
  }
}

module.exports = { Cell };
