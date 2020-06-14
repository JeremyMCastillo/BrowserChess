import { Piece, PieceType } from './pieces';
import { Cell } from './cells';

class Rook extends Piece {
  constructor(color) {
    super(PieceType.rook, color);
  }

  getValidMoves(board) {
    var currentX = this.x;
    var currentY = this.y;
    var validMoves = [];
    var i = 0;

    for (i = currentX - 1; i >= 0; i -= 1) {
      if (board.hasPieceAt(i, currentY)) {
        if (board.matrix[i][currentY].piece.getColor() !== this.color) {
          validMoves.push(new Cell(i, currentY));
        }
        break;
      } else {
        validMoves.push(new Cell(i, currentY));
      }
    }

    for (i = currentX + 1; i < 8; i += 1) {
      if (board.hasPieceAt(i, currentY)) {
        if (board.matrix[i][currentY].piece.getColor() !== this.color) {
          validMoves.push(new Cell(i, currentY));
        }
        break;
      } else {
        validMoves.push(new Cell(i, currentY));
      }
    }

    for (i = currentY - 1; i >= 0; i -= 1) {
      if (board.hasPieceAt(currentX, i)) {
        if (board.matrix[currentX][i].piece.getColor() !== this.color) {
          validMoves.push(new Cell(currentX, i));
        }
        break;
      } else {
        validMoves.push(new Cell(currentX, i));
      }
    }

    for (i = currentY + 1; i < 8; i += 1) {
      if (board.hasPieceAt(currentY, i)) {
        if (board.matrix[currentY][i].piece.getColor() !== this.color) {
          validMoves.push(new Cell(currentY, i));
        }
        break;
      } else {
        validMoves.push(new Cell(currentY, i));
      }
    }

    return validMoves;
  }
}

module.exports = { Rook };
