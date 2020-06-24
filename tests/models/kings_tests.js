const { assert } = require('chai');
const { PieceType, PieceColor } = require('../../models/pieces');
const { King } = require('../../models/kings');
const { TestHelpers } = require('../helpers');

describe('Kings model', () => {
    describe('create operations', () => {
      it('should successfully create a new king', () => {
        let king = new King(PieceColor.white, 4, 3);
  
        assert.isNotNull(king);
        assert.equal(king.type, PieceType.king);
        assert.equal(king.color, PieceColor.white);
      });
    });

    describe('King movement', () => {
        it('should test king movement on an empty board', () => {
          let king = new King(PieceColor.white, 4, 3);
          let board = TestHelpers.initEmptyBoard();
          let possibleMoves = king.getValidMoves(board);
    
          assert.isTrue(possibleMoves.length > 0);
          assert.equal(possibleMoves.length, 8);
      });
   });
});
