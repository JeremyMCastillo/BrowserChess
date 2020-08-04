const { mongoose } = require("../system/mongoose");
const { PieceSchema } = require("./pieces");

var CellSchema = new mongoose.Schema({
  x: Number,
  y: Number,
  piece: PieceSchema,
});

CellSchema.statics.initialize = (x, y) => {
  let cell = new Cell();
  cell.x = x;
  cell.y = y;
  cell.piece = null;
  return cell;
};

CellSchema.methods.setPiece = (piece) => {
  this.piece = piece;
};

var Cell = mongoose.model("Cell", CellSchema);

module.exports = { Cell, CellSchema };
