const { mongoose } = require("../../system/mongoose");
const { Piece, PieceType, PieceDiscriminator } = require("./pieces");
const { Cell } = require("../cells");

var KnightSchema = new mongoose.Schema({}, PieceDiscriminator);

KnightSchema.statics.initialize = (color, x, y) => {
  let knight = new Knight();
  knight.color = color;
  knight.type = PieceType.knight;
  knight.x = x;
  knight.y = y;
  return knight;
};

KnightSchema.methods.getValidMoves = function (board) {
  let currentX = this.x;
  let currentY = this.y;
  let validMoves = [];
  // forward / left
  if (board.hasPieceAt(currentX + 2, currentY - 1)) {
    if (
      board.matrix[currentX + 2][currentY - 1].piece.getColor() !== this.color
    ) {
      validMoves.push(Cell.initialize(currentX + 2, currentY - 1));
    }
  } else {
    validMoves.push(Cell.initialize(currentX + 2, currentY - 1));
  }

  // forward / right
  if (board.hasPieceAt(currentX + 2, currentY + 1)) {
    if (
      board.matrix[currentX + 2][currentY + 1].piece.getColor() !== this.color
    ) {
      validMoves.push(Cell.initialize(currentX + 2, currentY + 1));
    }
  } else {
    validMoves.push(Cell.initialize(currentX + 2, currentY + 1));
  }

  // right / advance
  if (board.hasPieceAt(currentX + 1, currentY + 2)) {
    if (
      board.matrix[currentX + 1][currentY + 2].piece.getColor() !== this.color
    ) {
      validMoves.push(Cell.initialize(currentX + 1, currentY + 2));
    }
  } else {
    validMoves.push(Cell.initialize(currentX + 1, currentY + 2));
  }

  // right /retreat
  if (board.hasPieceAt(currentX - 1, currentY + 2)) {
    if (
      board.matrix[currentX - 1][currentY + 2].piece.getColor() !== this.color
    ) {
      validMoves.push(Cell.initialize(currentX - 1, currentY + 2));
    }
  } else {
    validMoves.push(Cell.initialize(currentX - 1, currentY + 2));
  }

  // back / right
  if (board.hasPieceAt(currentX - 2, currentY + 1)) {
    if (
      board.matrix[currentX - 2][currentY + 1].piece.getColor() !== this.color
    ) {
      validMoves.push(Cell.initialize(currentX - 2, currentY + 1));
    }
  } else {
    validMoves.push(Cell.initialize(currentX - 2, currentY + 1));
  }

  // back / left
  if (board.hasPieceAt(currentX - 2, currentY - 1)) {
    if (
      board.matrix[currentX - 2][currentY - 1].piece.getColor() !== this.color
    ) {
      validMoves.push(Cell.initialize(currentX - 2, currentY - 1));
    }
  } else {
    validMoves.push(Cell.initialize(currentX - 2, currentY - 1));
  }

  // left /advance
  if (board.hasPieceAt(currentX + 1, currentY + 2)) {
    if (
      board.matrix[currentX + 1][currentY + 2].piece.getColor() !== this.color
    ) {
      validMoves.push(Cell.initialize(currentX + 1, currentY + 2));
    }
  } else {
    validMoves.push(Cell.initialize(currentX + 1, currentY + 2));
  }

  // left / retreat
  if (board.hasPieceAt(currentX - 1, currentY - 2)) {
    if (
      board.matrix[currentX - 1][currentY - 2].piece.getColor() !== this.color
    ) {
      validMoves.push(Cell.initialize(currentX - 1, currentY - 2));
    }
  } else {
    validMoves.push(Cell.initialize(currentX - 1, currentY - 2));
  }

  return validMoves;
};

var Knight = Piece.discriminator("Knight", KnightSchema);

module.exports = { Knight };
