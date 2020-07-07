const { Board } = require('../models/board');

class TestHelpers {
  static initEmptyBoard() {
    let board = new Board();
    board.initializeEmptyBoard();

    return board;
  }
}

module.exports = { TestHelpers };
