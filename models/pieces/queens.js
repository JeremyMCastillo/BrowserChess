const { mongoose } = require("../../system/mongoose");
const { Piece, PieceType, PieceDiscriminator } = require("./pieces");
const { Rook } = require("./rooks");
const { Bishop } = require("./bishops");

var QueenSchema = new mongoose.Schema({}, PieceDiscriminator);

QueenSchema.statics.initialize = (color, x, y) => {
  var queen = new Queen();
  queen.color = color;
  queen.type = PieceType.queen;
  queen.x = x;
  queen.y = y;
  return queen;
};

QueenSchema.methods.getValidMoves = (board) => {
  let currentX = this.x;
  let currentY = this.y;
  let validMoves = [];

  // Borrow and combine movesets from rook and bishop.
  let tempRook = Rook.initialize(this.color, currentX, currentY);
  let tempBishop = Bishop.initialize(this.color, currentX, currentY);

  validMoves = tempRook
    .getValidMoves(board)
    .concat(tempBishop.getValidMoves(board));

  return validMoves;
};

var Queen = Piece.discriminator("Queen", QueenSchema);

module.exports = { Queen };
