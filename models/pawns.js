import { Piece, PieceType } from "./pieces";
import { Cell } from "./cells";

class Pawn extends Piece {
  constructor(color, x, y) {
    super(PieceType.pawn, color);
    this.x = x;
    this.y = y;
  }

  getValidMoves(board) {
    let currentX = this.x;
    let currentY = this.y;
    let validMoves = [];
    let i = 0;
    // logic for move
    for (i = 0; i <= 1; i += 1) {
      if (board.hasPieceAt(currentX + 1, currentY + 1)) {
        if (board.matrix[currentX + 1][currentY + 1].piece.getColor() !== this.color) {
          // when capturing a piece we can change files
          validMoves.push(new Cell(currentX + 1, currentY + 1));
        }
        break;
      } else if (board.hasPieceAt(currentX + 1, currentY - 1)) {
        if (board.matrix[currentX + 1][currentY - 1].piece.getColor() !== this.color) {
          // when capturing a piece we can change files
          validMoves.push(new Cell(currentX + 1, currentY - 1));
        }
        break;
      } else {
        // unless capturing a piece, move along the same file
        // keep the same index of its y position and changing its x index by +=1
        validMoves.push(new Cell(currentX + 1, currentY));
      }
    }
    return validMoves;
  }
  // TODO: Implement logic for reaching final row in any file to extend any other piece
}

module.exports = { Pawn };
