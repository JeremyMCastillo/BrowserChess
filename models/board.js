const _ = require('lodash');

import Player from './players';
// import Cell from './cells';

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
    //Intantiate board with player class and it's properties
    player_1: [Player],
    player_2: [Player]

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
});

BoardSchema.methods.init = function() {
    // Initialize the 2D matrix with the player assigned to their beginning side
    return null
};

BoardSchema.methods.populate = function() {
    // Populate the board with the full set of cells
    // Begin with correct pieces for each player 
    // append pieces to the correct cell
    return null
};

BoardSchema.methods.toJson = function () {
    var board = this;
    var boardObject = board.toObject();
                            // grid id, player 1 id, player 2 id
    return _.pick(boardObject, ['_id', 'player_1', 'player_2']); 
};

var Board = mongoose.model('Board', BoardSchema);

module.exports = { Board };