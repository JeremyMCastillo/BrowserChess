const { assert } = require('chai');
const { Board } = require('../../models/board');
const { Player } = require('../../models/players');

describe('Boards model', () => {
  describe('create operations', () => {
    it('should successfully create a new board', () => {
      let board = new Board();
      assert.isNotNull(board);
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
