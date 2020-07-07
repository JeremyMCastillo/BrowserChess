const { assert } = require('chai');
const { PieceType, PieceColor } = require('../../models/pieces/pieces');
const { Bishop } = require('../../models/pieces/bishops');
const { TestHelpers } = require('../helpers');

describe('Bishops model', () => {
  describe('create operations', () => {
    it('should successfully create a new bishop', () => {
      let bishop = new Bishop(PieceColor.white, 4, 3);

      assert.isNotNull(bishop);
      assert.equal(bishop.type, PieceType.bishop);
      assert.equal(bishop.color, PieceColor.white);
    });
  });

  describe('bishop movement', () => {
    it('should test bishop movement on an empty board', () => {
      let bishop = new Bishop(PieceColor.white, 4, 3);
      let board = TestHelpers.initEmptyBoard();
      let possibleMoves = bishop.getValidMoves(board);

      assert.isTrue(possibleMoves.length > 0);
      assert.equal(possibleMoves.length, 13);
    });

    it('should be able to capture an opposing piece', () => {
      let bishop = new Bishop(PieceColor.white, 3, 4);
      let bishop2 = new Bishop(PieceColor.black, 4, 3);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(bishop);
      board.setPiece(bishop2);

      // Act
      let validMoves = bishop.getValidMoves(board);

      // Assert
      assert.isTrue(validMoves.some((cell) => cell.x === 4 && cell.y === 3));
    });

    it('should not be able to capture a friendly piece', () => {
      let bishop = new Bishop(PieceColor.white, 3, 4);
      let bishop2 = new Bishop(PieceColor.white, 4, 3);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(bishop);
      board.setPiece(bishop2);

      // Act
      let validMoves = bishop.getValidMoves(board);

      // Assert
      assert.isFalse(validMoves.some((cell) => cell.x === 4 && cell.y === 3));
    });
  });
});
