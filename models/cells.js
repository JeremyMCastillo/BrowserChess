const { mongoose } = require("../system/mongoose");

class Cell extends mongoose.SchemaType {
  // TODO: https://mongoosejs.com/docs/customschematypes.html
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.piece = null;
  }

  setPiece(piece) {
    this.piece = piece;
  }
}

module.exports = { Cell };
