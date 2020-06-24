const { assert } = require('chai');
const { PieceType, PieceColor } = require('../../models/pieces');
const { Knight } = require('../../models/knights');
const { TestHelpers } = require('../helpers');

describe('Knights model', () => {
    describe('create operations', () => {
      it('should successfully create a new knight', () => {
        let knight = new Knight(PieceColor.white, 4, 3);
  
        assert.isNotNull(knight);
        assert.equal(knight.type, PieceType.knight);
        assert.equal(knight.color, PieceColor.white);
      });
    });
    describe('Knight movement', () => {
        it('should test knight movement on an empty board', () => {
          let knight = new Knight(PieceColor.white, 5, 5);
          let board = TestHelpers.initEmptyBoard();
          let possibleMoves = knight.getValidMoves(board);
    
          assert.isTrue(possibleMoves.length > 0);
          assert.equal(possibleMoves.length, 8);
        });
      });
});
