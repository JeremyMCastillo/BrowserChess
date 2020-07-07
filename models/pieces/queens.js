const { Piece, PieceType } = require('./pieces');
const { Rook } = require('./rooks');
const { Bishop } = require('./bishops');

class Queen extends Piece {
  constructor(color, x, y) {
    super(PieceType.queen, color);
    this.x = x;
    this.y = y;
  }

  getValidMoves(board) {
    let currentX = this.x;
    let currentY = this.y;
    let validMoves = [];

    // Borrow and combine movesets from rook and bishop.
    let tempRook = new Rook(this.color, currentX, currentY);
    let tempBishop = new Bishop(this.color, currentX, currentY);

    validMoves = tempRook
      .getValidMoves(board)
      .concat(tempBishop.getValidMoves(board));

    return validMoves;
  }
}

module.exports = { Queen };
