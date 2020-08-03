const { Piece, PieceType, PieceColor } = require("./pieces");
const { Cell } = require("../cells");

class Pawn extends Piece {
  constructor(color, x, y) {
    super(PieceType.pawn, color, x, y);
    this.x = x;
    this.y = y;
  }

  getValidMoves(board) {
    let currentX = this.x;
    let currentY = this.y;
    let validMoves = [];
    let direction = this.color === PieceColor.white ? 1 : -1;
    // TODO: Implement "First Move" where pawn can jump two spaces on first move.

    // logic for move
    if (!board.hasPieceAt(currentX, currentY + direction)) {
      validMoves.push(new Cell(currentX, currentY + direction));
    }

    // when capturing a piece we can change files
    if (currentX < 8 && board.hasPieceAt(currentX + 1, currentY + direction)) {
      if (
        board.matrix[currentX + 1][currentY + direction].piece.getColor() !==
        this.color
      ) {
        // when capturing a piece we can change files
        validMoves.push(new Cell(currentX + 1, currentY + direction));
      }
    }
    if (currentX > 1 && board.hasPieceAt(currentX - 1, currentY + direction)) {
      if (
        board.matrix[currentX - 1][currentY + direction].piece.getColor() !==
        this.color
      ) {
        // when capturing a piece we can change files
        validMoves.push(new Cell(currentX - 1, currentY + direction));
      }
    }

    return validMoves;
  }
  // TODO: Implement logic for reaching final row in any file to extend any other piece
}

module.exports = { Pawn };
