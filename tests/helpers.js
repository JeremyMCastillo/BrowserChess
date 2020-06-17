const { Board } = require('../models/board');
const { Cell } = require('../models/cells');

class TestHelpers {
  static initEmptyBoard() {
    let board = new Board();
    board.matrix = [];
    for (let i = 0; i < 8; i += 1) {
      let row = [];
      for (let j = 0; j < 8; j += 1) {
        let cell = new Cell(i, j);
        row.push(cell);
      }
      board.matrix.push(row);
    }

    return board;
  }
}

module.exports = { TestHelpers };
