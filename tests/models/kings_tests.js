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
});
