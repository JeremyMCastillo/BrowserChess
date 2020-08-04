const { Piece, PieceType } = require("./pieces");
const { Cell } = require("../cells");

class Bishop extends Piece {
  constructor(color, x, y) {
    super(PieceType.bishop, color);
    this.x = x;
    this.y = y;
  }

  getValidMoves(board) {
    let currentX = this.x;
    let currentY = this.y;
    let validMoves = [];
    let i = currentX - 1;
    let j = currentY - 1;

    // Moves down and left
    while (i >= 0 && j >= 0) {
      if (board.hasPieceAt(i, j)) {
        if (board.matrix[i][j].piece.getColor() !== this.color) {
          validMoves.push(Cell.initialize(i, j));
        }
        break;
      } else {
        validMoves.push(Cell.initialize(i, j));
      }
      i -= 1;
      j -= 1;
    }

    // Moves up and left
    i = currentX - 1;
    j = currentY + 1;
    while (i >= 0 && j < 8) {
      if (board.hasPieceAt(i, j)) {
        if (board.matrix[i][j].piece.getColor() !== this.color) {
          validMoves.push(Cell.initialize(i, j));
        }
        break;
      } else {
        validMoves.push(Cell.initialize(i, j));
      }
      i -= 1;
      j += 1;
    }

    // Moves up and right
    i = currentX + 1;
    j = currentY + 1;
    while (i < 8 && j < 8) {
      if (board.hasPieceAt(i, j)) {
        if (board.matrix[i][j].piece.getColor() !== this.color) {
          validMoves.push(Cell.initialize(i, j));
        }
        break;
      } else {
        validMoves.push(Cell.initialize(i, j));
      }
      i += 1;
      j += 1;
    }

    // Moves down and right
    i = currentX + 1;
    j = currentY - 1;
    while (i < 8 && j >= 0) {
      if (board.hasPieceAt(i, j)) {
        if (board.matrix[i][j].piece.getColor() !== this.color) {
          validMoves.push(Cell.initialize(i, j));
        }
        break;
      } else {
        validMoves.push(Cell.initialize(i, j));
      }
      i += 1;
      j -= 1;
    }

    return validMoves;
  }
}

module.exports = { Bishop };
