const { assert } = require('chai');
const { PieceColor } = require('../../models/pieces');
const { Rook } = require('../../models/rooks');
const { TestHelpers } = require('../helpers');

describe('Rooks model', () => {
  describe('create operations', () => {
    it('should successfully create a new rook', () => {
      let rook = new Rook(PieceColor.white, 4, 3);
      let board = TestHelpers.initEmptyBoard();
      let possibleMoves = rook.getValidMoves(board);

      assert.isTrue(possibleMoves.length > 0);
    });
  });
});
