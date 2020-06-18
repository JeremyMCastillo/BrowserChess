const { Piece, PieceType } = require('./pieces');
const { Cell } = require('./cells');

class Knight extends Piece {
  constructor(color, x, y) {
    super(PieceType.knight, color);
    this.x = x;
    this.y = y;
  }

  getValidMoves(board) {
    let currentX = this.x;
    let currentY = this.y;
    let validMoves = [];
    for (let i = 0; i < 1; i++) {
      // forward / left
      if (board.hasPieceAt(currentX + 2, currentY - 1)) {
        if (
          board.matrix[currentX + 2][currentY - 1].piece.getColor() !==
          this.color
        ) {
          validMoves.push(new Cell(currentX + 2, currentY - 1));
        }
        break;
        // forward / right
      } else if (board.hasPieceAt(currentX + 2, currentY + 1)) {
        if (
          board.matrix[currentX + 2][currentY + 1].piece.getColor() !==
          this.color
        ) {
          validMoves.push(new Cell(currentX + 2, currentY + 1));
        }
        break;
        // right / advance
      } else if (board.hasPieceAt(currentX + 1, currentY + 2)) {
        if (
          board.matrix[currentX + 1][currentY + 2].piece.getColor() !==
          this.color
        ) {
          validMoves.push(new Cell(currentX + 1, currentY + 2));
        }
        break;
        // right /retreat
      } else if (board.hasPieceAt(currentX - 1, currentY + 2)) {
        if (
          board.matrix[currentX - 1][currentY + 2].piece.getColor() !==
          this.color
        ) {
          validMoves.push(new Cell(currentX - 1, currentY + 2));
        }
        break;
        // back / right
      } else if (board.hasPieceAt(currentX - 2, currentY + 1)) {
        if (
          board.matrix[currentX - 2][currentY + 1].piece.getColor() !==
          this.color
        ) {
          validMoves.push(new Cell(currentX - 2, currentY + 1));
        }
        break;
        // back / left
      } else if (board.hasPieceAt(currentX - 2, currentY - 1)) {
        if (
          board.matrix[currentX - 2][currentY - 1].piece.getColor() !==
          this.color
        ) {
          validMoves.push(new Cell(currentX - 2, currentY - 1));
        }
        break;
        // left /advance
      } else if (board.hasPieceAt(currentX + 1, currentY + 2)) {
        if (
          board.matrix[currentX + 1][currentY + 2].piece.getColor() !==
          this.color
        ) {
          validMoves.push(new Cell(currentX + 1, currentY + 2));
        }
        break;
        // left / retreat
      } else if (board.hasPieceAt(currentX - 1, currentY - 2)) {
        if (
          board.matrix[currentX - 1][currentY - 2].piece.getColor() !==
          this.color
        ) {
          validMoves.push(new Cell(currentX - 1, currentY - 2));
        }
        break;
      }
    }
    return validMoves;
  }
}

module.exports = { Knight };
