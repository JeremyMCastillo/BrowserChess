const pieceTypes = {
  ...require("./pieces"),
  ...require("./pawns"),
  ...require("./rooks"),
  ...require("./knights"),
  ...require("./bishops"),
  ...require("./queens"),
  ...require("./kings")
};

const PieceTypeMapping = {
  [pieceTypes.PieceType.pawn]: pieceTypes.Pawn,
  [pieceTypes.PieceType.rook]: pieceTypes.Rook,
  [pieceTypes.PieceType.knight]: pieceTypes.Knight,
  [pieceTypes.PieceType.bishop]: pieceTypes.Bishop,
  [pieceTypes.PieceType.queen]: pieceTypes.Queen,
  [pieceTypes.PieceType.king]: pieceTypes.King
};

module.exports = {
  ...pieceTypes,
  PieceTypeMapping
};
