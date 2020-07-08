const { assert } = require('chai');
const { Board } = require('../../models/board');
const { Player } = require('../../models/players');

describe('Boards model', () => {
  describe('create operations', () => {
    it('should successfully create a new board', () => {
      let board = new Board();
      assert.isNotNull(board);
    });

    it('should initialze a board with an empty matrix, with x and y in the right order', () => {
      let board = new Board();
      board.init();

      assert.equal(board.matrix.length, 8);
      assert.equal(board.matrix[0].length, 8);
      assert.equal(board.matrix[2][3].x, 2);
      assert.equal(board.matrix[2][3].y, 3);
    });

    it('should save a new board to the database', (done) => {
      let board = new Board();
      let player = new Player('test');
      board.player_1 = player;
      board
        .generateBoardId()
        .then((newBoard) => newBoard.save())
        .then(() => done())
        .catch((err) => {
          assert.fail(err);
        });
    });
  });
});
