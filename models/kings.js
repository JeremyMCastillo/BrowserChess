const { Piece, PieceType } = require('./pieces');
const { Cell } = require('./cells');

class King extends Piece {
  constructor(color, x, y) {
    super(PieceType.king, color);
    this.x = x;
    this.y = y;
  }

  getValidMoves(board) {
    //TODO: Change this to only add the space if it wouldn't put the king in check
    let currentX = this.x;
    let currentY = this.y;
    let validMoves = [];
    // basic logic for movement, since the king can only capture in specific ways this
    // is basic for all cardinal directions and diagonals for now
    for (let i = 0; i < 1; i++) {
      // one space forward
      validMoves.push(new Cell(currentX + 1, currentY))
      // one space diagonal left forward
      validMoves.push(new Cell(currentX + 1, currentY - 1))
      // one space diagonal right forward
      validMoves.push(new Cell(currentX + 1, currentY + 1))
      // one space backward
      validMoves.push(new Cell(currentX - 1, currentY))
      //one space diagonal left backward
      validMoves.push(new Cell(currentX - 1, currentY - 1))
      //one space diagonal right backward
      validMoves.push(new Cell(currentX - 1, currentY + 1))
      //one space right
      validMoves.push(new Cell(currentX, currentY + 1))
      //one space left
      validMoves.push(new Cell(currentX, currentY - 1))
    }
    return validMoves;
  }
}

module.exports = { King };