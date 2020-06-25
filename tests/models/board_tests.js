const { assert } = require('chai');
const { Board } = require('../../models/board');


describe('Boards model', () => {
    describe('create operations', () => {
      it('should successfully create a new board', () => {
        let board = new Board()
        assert.isNotNull(board);
      });
    });
  });