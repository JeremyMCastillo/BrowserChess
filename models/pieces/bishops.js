const { mongoose } = require("../../system/mongoose");
const { Piece, PieceType, PieceDiscriminator } = require("./pieces");
const { Cell } = require("../cells");

var BishopSchema = new mongoose.Schema({}, PieceDiscriminator);

BishopSchema.statics.initialize = (color, x, y) => {
  var bishop = new Bishop();
  bishop.color = color;
  bishop.type = PieceType.bishop;
  bishop.x = x;
  bishop.y = y;
  return bishop;
};

BishopSchema.methods.getValidMoves = function (board) {
  let currentX = this.x;
  let currentY = this.y;
  let validMoves = [];
  let i = currentX - 1;
  let j = currentY - 1;

  // Moves down and left
  while (i >= 0 && j >= 0) {
    if (board.canMovePieceTo(this, i, j)) {
      validMoves.push(Cell.initialize(i, j));
      if (board.matrix[i][j].piece !== null) {
        break;
      }
    } else {
      break;
    }
    i -= 1;
    j -= 1;
  }

  // Moves up and left
  i = currentX - 1;
  j = currentY + 1;
  while (i >= 0 && j < 8) {
    if (board.canMovePieceTo(this, i, j)) {
      validMoves.push(Cell.initialize(i, j));
      if (board.matrix[i][j].piece !== null) {
        break;
      }
    } else {
      break;
    }
    i -= 1;
    j += 1;
  }

  // Moves up and right
  i = currentX + 1;
  j = currentY + 1;
  while (i < 8 && j < 8) {
    if (board.canMovePieceTo(this, i, j)) {
      validMoves.push(Cell.initialize(i, j));
      if (board.matrix[i][j].piece !== null) {
        break;
      }
    } else {
      break;
    }
    i += 1;
    j += 1;
  }

  // Moves down and right
  i = currentX + 1;
  j = currentY - 1;
  while (i < 8 && j >= 0) {
    if (board.canMovePieceTo(this, i, j)) {
      validMoves.push(Cell.initialize(i, j));
      if (board.matrix[i][j].piece !== null) {
        break;
      }
    } else {
      break;
    }
    i += 1;
    j -= 1;
  }

  return validMoves;
};

var Bishop = Piece.discriminator("Bisop", BishopSchema);

module.exports = { Bishop };
