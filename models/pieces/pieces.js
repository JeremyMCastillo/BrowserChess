const PieceType = {
  pawn: "pawn",
  rook: "rook",
  knight: "knight",
  bishop: "bishop",
  king: "king",
  queen: "queen",
};

const PieceColor = {
  white: "white",
  black: "black",
};

class Piece {
  constructor(type, color, x, y) {
    if (!PieceType[type]) {
      throw Error("Invalid Piece Type");
    }
    if (!PieceColor[color]) {
      throw Error("Invalid Piece Color");
    }

    this.type = type;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  getType() {
    return this.type;
  }

  getColor() {
    return this.color;
  }

  updateMove(movement) {
    this.movement = movement;
  }
}

module.exports = { Piece, PieceType, PieceColor };
