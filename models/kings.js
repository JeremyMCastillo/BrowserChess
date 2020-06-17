import { Piece, PieceType } from "./pieces";
import { Cell } from "./cells";

class King extends Piece {
  constructor(color, x, y) {
    super(PieceType.pawn, color);
    this.x = x;
    this.y = y;
  }

  getValidMoves(board) {
    let currentX = this.x;
    let currentY = this.y;
    let validMoves = [];
    // logic for move
    for (let i = 0; i < 1; i++) {
      return null
    }
    return validMoves;
  }
}

module.exports = { King };