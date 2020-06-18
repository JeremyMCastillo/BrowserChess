const { Piece, PieceType } = require('./pieces');
const { Cell } = require('./cells');

class King extends Piece {
  constructor(color, x, y) {
    super(PieceType.king, color);
    this.x = x;
    this.y = y;
  }

  getValidMoves(board) {
    // TODO: Change this to only add the space if it wouldn't put the king in check
    let currentX = this.x;
    let currentY = this.y;
    let validMoves = [];
    // basic logic for movement, since the king can only capture in specific ways this
    // is basic for all cardinal directions and diagonals for now
    for (let i = 0; i < 1; i++) {
      // one space forward
      if (board.hasPieceAt(currentX + 1, currentY)) {
        if (
          board.matrix[currentX + 1][currentY].piece.getColor() !== this.color
        ) {
          validMoves.push(new Cell(currentX + 1, currentY));
        }
        break;
        // one space diagonal left forward
      } else if (board.hasPieceAt(currentX + 1, currentY - 1)) {
        if (
          board.matrix[currentX + 1][currentY + 1].piece.getColor() !==
          this.color
        ) {
          validMoves.push(new Cell(currentX + 1, currentY - 1));
        }
        break;
        // one space diagonal right forward
      } else if (board.hasPieceAt(currentX + 1, currentY + 1)) {
        if (
          board.matrix[currentX + 1][currentY + 1].piece.getColor() !==
          this.color
        ) {
          validMoves.push(new Cell(currentX + 1, currentY + 1));
        }
        break;
        // one space backward
      } else if (board.hasPieceAt(currentX - 1, currentY)) {
        if (
          board.matrix[currentX + 1][currentY].piece.getColor() !== this.color
        ) {
          validMoves.push(new Cell(currentX - 1, currentY));
        }
        break;
        // one space diagonal left backward
      } else if (board.hasPieceAt(currentX - 1, currentY - 1)) {
        if (
          board.matrix[currentX - 1][currentY - 1].piece.getColor() !==
          this.color
        ) {
          validMoves.push(new Cell(currentX - 1, currentY - 1));
        }
        break;
        // one space diagonal right backward
      } else if (board.hasPieceAt(currentX - 1, currentY + 1)) {
        if (
          board.matrix[currentX - 1][currentY + 1].piece.getColor() !==
          this.color
        ) {
          validMoves.push(new Cell(currentX - 1, currentY + 1));
        }
        break;
        // one space right
      } else if (board.hasPieceAt(currentX, currentY + 1)) {
        if (
          board.matrix[currentX][currentY + 1].piece.getColor() !== this.color
        ) {
          validMoves.push(new Cell(currentX, currentY + 1));
        }
        break;
        // one space left
      } else if (board.hasPieceAt(currentX, currentY - 1)) {
        if (
          board.matrix[currentX][currentY - 1].piece.getColor() !== this.color
        ) {
          validMoves.push(new Cell(currentX, currentY - 1));
        }
        break;
      }
    }
    return validMoves;
  }
}

module.exports = { King };
