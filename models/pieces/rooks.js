const { mongoose } = require("../../system/mongoose");

const { Piece, PieceType, PieceDiscriminator } = require("./pieces");
const { Cell } = require("../cells");

var RookSchema = new mongoose.Schema({}, PieceDiscriminator);

RookSchema.statics.initialize = (color, x, y) => {
  let rook = new Rook();
  rook.x = x;
  rook.y = y;
  rook.color = color;
  rook.type = PieceType.rook;
  return rook;
};

RookSchema.methods.getValidMoves = function (board) {
  let currentX = this.x;
  let currentY = this.y;
  let validMoves = [];
  let i = 0;

  for (i = currentX - 1; i >= 0; i -= 1) {
    if (board.hasPieceAt(i, currentY)) {
      if (board.matrix[i][currentY].piece.getColor() !== this.color) {
        validMoves.push(Cell.initialize(i, currentY));
      }
      break;
    } else {
      validMoves.push(Cell.initialize(i, currentY));
    }
  }

  for (i = currentX + 1; i < 8; i += 1) {
    if (board.hasPieceAt(i, currentY)) {
      if (board.matrix[i][currentY].piece.getColor() !== this.color) {
        validMoves.push(Cell.initialize(i, currentY));
      }
      break;
    } else {
      validMoves.push(Cell.initialize(i, currentY));
    }
  }

  for (i = currentY - 1; i >= 0; i -= 1) {
    if (board.hasPieceAt(currentX, i)) {
      if (board.matrix[currentX][i].piece.getColor() !== this.color) {
        validMoves.push(Cell.initialize(currentX, i));
      }
      break;
    } else {
      validMoves.push(Cell.initialize(currentX, i));
    }
  }

  for (i = currentY + 1; i < 8; i += 1) {
    if (board.hasPieceAt(currentY, i)) {
      if (board.matrix[currentY][i].piece.getColor() !== this.color) {
        validMoves.push(Cell.initialize(currentY, i));
      }
      break;
    } else {
      validMoves.push(Cell.initialize(currentY, i));
    }
  }

  return validMoves;
};

var Rook = Piece.discriminator("Rook", RookSchema);

module.exports = { Rook };
