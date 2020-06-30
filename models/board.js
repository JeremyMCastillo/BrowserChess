const _ = require('lodash');

const { mongoose } = require('../system/mongoose');

var BoardSchema = new mongoose.Schema({
  boardId: mongoose.ObjectId,
  date: {
    type: Date,
    default: Date.now
  },
  // Instantiating player ID on board generation
  // player_1: [Player, {playerId: mongoose.ObjectId}],
  // player_2: [Player, {playerId: mongoose.ObjectId}]
  // Intantiate board with player class and it's properties
  player_1: [Object],
  player_2: [Object],

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
  matrix: [[Object]]
});

BoardSchema.methods.init = function () {
  // Initialize the 2D matrix with the player assigned to their beginning side
  return null;
};

BoardSchema.methods.populate = function () {
  // Populate the board with the full set of cells
  // Begin with correct pieces for each player
  // append pieces to the correct cell
  return null;
};

BoardSchema.methods.toJson = function () {
  var board = this;
  var boardObject = board.toObject();
  // grid id, player 1 id, player 2 id
  return _.pick(boardObject, ['_id', 'player_1', 'player_2']);
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

// Returns true if the board is empty
BoardSchema.methods.isEmpty = function () {
  return !this.matrix.some((rows) => rows.some((cell) => cell.piece !== null));
};

var Board = mongoose.model('Board', BoardSchema);

module.exports = { Board };
