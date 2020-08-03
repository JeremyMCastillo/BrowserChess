const { Piece, PieceType } = require("./pieces");
const { Cell } = require("../cells");

class King extends Piece {
  constructor(color, x, y) {
    super(PieceType.king, color, x, y);
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
    // one space forward
    if (board.hasPieceAt(currentX + 1, currentY)) {
      if (
        board.matrix[currentX + 1][currentY].piece.getColor() !== this.color
      ) {
        validMoves.push(new Cell(currentX + 1, currentY));
      }
    } else {
      validMoves.push(new Cell(currentX + 1, currentY));
    }

    // one space diagonal left forward
    if (board.hasPieceAt(currentX + 1, currentY - 1)) {
      if (
        board.matrix[currentX + 1][currentY + 1].piece.getColor() !== this.color
      ) {
        validMoves.push(new Cell(currentX + 1, currentY - 1));
      }
    } else {
      validMoves.push(new Cell(currentX + 1, currentY - 1));
    }

    // one space diagonal right forward
    if (board.hasPieceAt(currentX + 1, currentY + 1)) {
      if (
        board.matrix[currentX + 1][currentY + 1].piece.getColor() !== this.color
      ) {
        validMoves.push(new Cell(currentX + 1, currentY + 1));
      }
    } else {
      validMoves.push(new Cell(currentX + 1, currentY + 1));
    }

    // one space backward
    if (board.hasPieceAt(currentX - 1, currentY)) {
      if (
        board.matrix[currentX + 1][currentY].piece.getColor() !== this.color
      ) {
        validMoves.push(new Cell(currentX - 1, currentY));
      }
    } else {
      validMoves.push(new Cell(currentX - 1, currentY));
    }

    // one space diagonal left backward
    if (board.hasPieceAt(currentX - 1, currentY - 1)) {
      if (
        board.matrix[currentX - 1][currentY - 1].piece.getColor() !== this.color
      ) {
        validMoves.push(new Cell(currentX - 1, currentY - 1));
      }
    } else {
      validMoves.push(new Cell(currentX - 1, currentY - 1));
    }

    // one space diagonal right backward
    if (board.hasPieceAt(currentX - 1, currentY + 1)) {
      if (
        board.matrix[currentX - 1][currentY + 1].piece.getColor() !== this.color
      ) {
        validMoves.push(new Cell(currentX - 1, currentY + 1));
      }
    } else {
      validMoves.push(new Cell(currentX - 1, currentY + 1));
    }

    // one space right
    if (board.hasPieceAt(currentX, currentY + 1)) {
      if (
        board.matrix[currentX][currentY + 1].piece.getColor() !== this.color
      ) {
        validMoves.push(new Cell(currentX, currentY + 1));
      }
    } else {
      validMoves.push(new Cell(currentX, currentY + 1));
    }

    // one space left
    if (board.hasPieceAt(currentX, currentY - 1)) {
      if (
        board.matrix[currentX][currentY - 1].piece.getColor() !== this.color
      ) {
        validMoves.push(new Cell(currentX, currentY - 1));
      }
    } else {
      validMoves.push(new Cell(currentX, currentY - 1));
    }
    return validMoves;
  }
}

module.exports = { King };
