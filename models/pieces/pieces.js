const { mongoose } = require("../../system/mongoose");

var PieceDiscriminator = { discriminatorKey: "kind" };

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

var PieceSchema = new mongoose.Schema(
  {
    type: String,
    color: String,
  },
  PieceDiscriminator
);

PieceSchema.methods.getType = () => {
  return this.type;
};

PieceSchema.methods.getColor = () => {
  return this.color;
};

var Piece = mongoose.model("Piece", PieceSchema);

module.exports = {
  Piece,
  PieceSchema,
  PieceType,
  PieceColor,
  PieceDiscriminator,
};
