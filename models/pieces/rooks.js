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
    if (board.canMovePieceTo(this, i, currentY)) {
      validMoves.push(Cell.initialize(i, currentY));
      if (board.matrix[i][currentY].piece !== null) {
        break;
      }
    } else {
      break;
    }
  }

  for (i = currentX + 1; i < 8; i += 1) {
    if (board.canMovePieceTo(this, i, currentY)) {
      validMoves.push(Cell.initialize(i, currentY));
      if (board.matrix[i][currentY].piece !== null) {
        break;
      }
    } else {
      break;
    }
  }

  for (i = currentY - 1; i >= 0; i -= 1) {
    if (board.canMovePieceTo(this, currentX, i)) {
      validMoves.push(Cell.initialize(currentX, i));
      if (board.matrix[currentX][i].piece !== null) {
        break;
      }
    } else {
      break;
    }
  }

  for (i = currentY + 1; i < 8; i += 1) {
    if (board.canMovePieceTo(this, currentX, i)) {
      validMoves.push(Cell.initialize(currentX, i));
      if (board.matrix[currentX][i].piece !== null) {
        break;
      }
    } else {
      break;
    }
  }

  return validMoves;
};

var Rook = Piece.discriminator("Rook", RookSchema);

module.exports = { Rook };
