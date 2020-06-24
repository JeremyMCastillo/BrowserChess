const { assert } = require('chai');
const { PieceType, PieceColor } = require('../../models/pieces');
const { Knights } = require('../../models/knights');
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
});
