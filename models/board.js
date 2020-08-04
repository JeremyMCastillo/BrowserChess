const _ = require("lodash");
const { Cell, CellSchema } = require("./cells");
const {
  Pawn,
  Rook,
  Knight,
  Bishop,
  Queen,
  King,
  PieceColor,
} = require("./pieces");

const { mongoose } = require("../system/mongoose");

var BoardSchema = new mongoose.Schema({
  boardId: mongoose.ObjectId,
  date: {
    type: Date,
    default: Date.now,
  },
  game_code: String,
  // Instantiating player ID on board generation
  // player_1: [Player, {playerId: mongoose.ObjectId}],
  // player_2: [Player, {playerId: mongoose.ObjectId}]
  // Intantiate board with player class and it's properties
  player_1: Object,
  player_2: Object,

  /* matrix:
    Where we initialize with a 2D array and hashes represent initial spaces
    occupied by our piece classes
    [
        [#,#,#,#,#,#,#,#],
        [#,#,#,#,#,#,#,#],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [#,#,#,#,#,#,#,#],
        [#,#,#,#,#,#,#,#],
    ]
    */
  matrix: [[CellSchema]],
  turn: String,
});

BoardSchema.pre("save", function (next) {
  if (
    !this.matrix ||
    typeof this.matrix === typeof undefined ||
    this.matrix === null ||
    this.matrix.length === 0
  ) {
    this.initializeEmptyBoard();
    this.populate();
  }

  next();
});

BoardSchema.methods.initializeEmptyBoard = function () {
  // Initialize the 2D matrix with the player assigned to their beginning side
  this.matrix = _.range(8).map((x) =>
    _.range(8).map((y) => Cell.initialize(x, y))
  );
};

BoardSchema.methods.populate = function () {
  // Populate the board with the full set of cells
  // Begin with correct pieces for each player
  // append pieces to the correct cell
  this.setPiece(Pawn.initialize(PieceColor.white, 0, 1));
  this.setPiece(Pawn.initialize(PieceColor.white, 1, 1));
  this.setPiece(Pawn.initialize(PieceColor.white, 2, 1));
  this.setPiece(Pawn.initialize(PieceColor.white, 3, 1));
  this.setPiece(Pawn.initialize(PieceColor.white, 4, 1));
  this.setPiece(Pawn.initialize(PieceColor.white, 5, 1));
  this.setPiece(Pawn.initialize(PieceColor.white, 6, 1));
  this.setPiece(Pawn.initialize(PieceColor.white, 7, 1));
  this.setPiece(new Rook(PieceColor.white, 0, 0));
  this.setPiece(new Rook(PieceColor.white, 7, 0));
  this.setPiece(new Knight(PieceColor.white, 1, 0));
  this.setPiece(new Knight(PieceColor.white, 6, 0));
  this.setPiece(new Bishop(PieceColor.white, 2, 0));
  this.setPiece(new Bishop(PieceColor.white, 5, 0));
  this.setPiece(new Queen(PieceColor.white, 3, 0));
  this.setPiece(new King(PieceColor.white, 4, 0));

  this.setPiece(Pawn.initialize(PieceColor.black, 0, 6));
  this.setPiece(Pawn.initialize(PieceColor.black, 1, 6));
  this.setPiece(Pawn.initialize(PieceColor.black, 2, 6));
  this.setPiece(Pawn.initialize(PieceColor.black, 3, 6));
  this.setPiece(Pawn.initialize(PieceColor.black, 4, 6));
  this.setPiece(Pawn.initialize(PieceColor.black, 5, 6));
  this.setPiece(Pawn.initialize(PieceColor.black, 6, 6));
  this.setPiece(Pawn.initialize(PieceColor.black, 7, 6));
  this.setPiece(new Rook(PieceColor.black, 0, 7));
  this.setPiece(new Rook(PieceColor.black, 7, 7));
  this.setPiece(new Knight(PieceColor.black, 1, 7));
  this.setPiece(new Knight(PieceColor.black, 6, 7));
  this.setPiece(new Bishop(PieceColor.black, 2, 7));
  this.setPiece(new Bishop(PieceColor.black, 5, 7));
  this.setPiece(new Queen(PieceColor.black, 3, 7));
  this.setPiece(new King(PieceColor.black, 4, 7));
};

BoardSchema.methods.toJson = function () {
  var board = this;
  var boardObject = board.toObject();
  // grid id, player 1 id, player 2 id
  return _.pick(boardObject, ["player_1", "player_2", "game_code", "matrix"]);
};

// Returns true if there is a piece occupying the cell located at
// parameters x and y. The piece property of an unoccupied cell is null.
BoardSchema.methods.hasPieceAt = function (x, y) {
  return this.matrix[x][y].piece !== null;
};

// Places piece on the board based on the pieces x and y properties
BoardSchema.methods.setPiece = function (piece) {
  this.matrix[piece.x][piece.y].piece = piece;
};

// Moves a piece from one cell to another
// TODO: Need to check if move is valid and also update graveyards if piece is captured
BoardSchema.methods.movePiece = function (piece, cell) {
  this.matrix[piece.x][piece.y].piece = null;
  piece.x = cell.x;
  piece.y = cell.y;
  this.setPiece(piece);
};

// Returns true if the board is empty
BoardSchema.methods.isEmpty = function () {
  return !this.matrix.some((rows) => rows.some((cell) => cell.piece !== null));
};

function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

BoardSchema.methods.generateBoardId = function () {
  let code = makeid(6);
  return Board.findOne({ game_code: code }).then((matchedBoard) => {
    if (!matchedBoard) {
      this.game_code = code;
      return this;
    }
    return this.generateBoardId();
  });
};

var Board = mongoose.model("Board", BoardSchema);

module.exports = { Board };
