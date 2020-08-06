const { mongoose } = require("../../system/mongoose");
const { Piece, PieceType, PieceDiscriminator } = require("./pieces");
const { Cell } = require("../cells");

var KingSchema = new mongoose.Schema({}, PieceDiscriminator);

KingSchema.statics.initialize = (color, x, y) => {
  var king = new King();
  king.color = color;
  king.type = PieceType.king;
  king.x = x;
  king.y = y;
  return king;
};

KingSchema.methods.getValidMoves = function (board) {
  // TODO: Change this to only add the space if it wouldn't put the king in check
  let currentX = this.x;
  let currentY = this.y;
  let validMoves = [];
  // basic logic for movement, since the king can only capture in specific ways this
  // is basic for all cardinal directions and diagonals for now
  // one space forward
  if (board.canMovePieceTo(this, currentX + 1, currentY)) {
    validMoves.push(Cell.initialize(currentX + 1, currentY));
  }

  // one space diagonal left forward
  if (board.canMovePieceTo(this, currentX + 1, currentY - 1)) {
    validMoves.push(Cell.initialize(currentX + 1, currentY - 1));
  }

  // one space diagonal right forward
  if (board.canMovePieceTo(this, currentX + 1, currentY + 1)) {
    validMoves.push(Cell.initialize(currentX + 1, currentY + 1));
  }

  // one space backward
  if (board.canMovePieceTo(this, currentX - 1, currentY)) {
    validMoves.push(Cell.initialize(currentX - 1, currentY));
  }

  // one space diagonal left backward
  if (board.canMovePieceTo(this, currentX - 1, currentY - 1)) {
    validMoves.push(Cell.initialize(currentX - 1, currentY - 1));
  }

  // one space diagonal right backward
  if (board.canMovePieceTo(this, currentX - 1, currentY + 1)) {
    validMoves.push(Cell.initialize(currentX - 1, currentY + 1));
  }

  // one space right
  if (board.canMovePieceTo(this, currentX, currentY + 1)) {
    validMoves.push(Cell.initialize(currentX, currentY + 1));
  }

  // one space left
  if (board.canMovePieceTo(this, currentX, currentY - 1)) {
    validMoves.push(Cell.initialize(currentX, currentY - 1));
  }

  return validMoves;
};

var King = Piece.discriminator("King", KingSchema);

module.exports = { King };
