const { mongoose } = require("../../system/mongoose");
const {
  Piece,
  PieceType,
  PieceColor,
  PieceDiscriminator
} = require("./pieces");
const { Cell } = require("../cells");

// TODO: Refactor piece inheritence using discriminators. http://thecodebarbarian.com/2015/07/24/guide-to-mongoose-discriminators
var PawnSchema = new mongoose.Schema({}, PieceDiscriminator);

PawnSchema.statics.initialize = (color, x, y) => {
  let pawn = new Pawn();
  pawn.x = x;
  pawn.y = y;
  pawn.color = color;
  pawn.type = PieceType.pawn;
  return pawn;
};

PawnSchema.methods.getValidMoves = (board) => {
  let currentX = this.x;
  let currentY = this.y;
  let validMoves = [];
  let direction = this.color === PieceColor.white ? 1 : -1;
  // TODO: Implement "First Move" where pawn can jump two spaces on first move.

  // logic for move
  if (!board.hasPieceAt(currentX, currentY + direction)) {
    validMoves.push(Cell.initialize(currentX, currentY + direction));
  }

  // when capturing a piece we can change files
  if (currentX < 8 && board.hasPieceAt(currentX + 1, currentY + direction)) {
    if (
      board.matrix[currentX + 1][currentY + direction].piece.getColor() !==
      this.color
    ) {
      // when capturing a piece we can change files
      validMoves.push(Cell.initialize(currentX + 1, currentY + direction));
    }
  }
  if (currentX > 1 && board.hasPieceAt(currentX - 1, currentY + direction)) {
    if (
      board.matrix[currentX - 1][currentY + direction].piece.getColor() !==
      this.color
    ) {
      // when capturing a piece we can change files
      validMoves.push(Cell.initialize(currentX - 1, currentY + direction));
    }
  }

  return validMoves;
};
// TODO: Implement logic for reaching final row in any file to extend any other piece

var Pawn = Piece.discriminator("Pawn", PawnSchema);

module.exports = { Pawn };
