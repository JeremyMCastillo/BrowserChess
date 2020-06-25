const { assert } = require('chai');
const { PieceType, PieceColor } = require('../../models/pieces');
const { Pawn } = require('../../models/pawns');
const { TestHelpers } = require('../helpers');

describe('Pawns model', () => {
  describe('create operations', () => {
    it('should successfully create a new pawn', () => {
      let pawn = new Pawn(PieceColor.white, 4, 3);

      assert.isNotNull(pawn);
      assert.equal(pawn.type, PieceType.pawn);
      assert.equal(pawn.color, PieceColor.white);
    });
  });

  describe('pawn movement', () => {
    it('should test pawn movement on an empty board', () => {
      let pawn = new Pawn(PieceColor.white, 4, 3);
      let board = TestHelpers.initEmptyBoard();
      let possibleMoves = pawn.getValidMoves(board);

      assert.isTrue(possibleMoves.length > 0);
      assert.equal(possibleMoves.length, 1);
    });

    it('should be able to capture an opposing piece', () => {
      let whitePawn = new Pawn(PieceColor.white, 3, 4);
      let blackPawn = new Pawn(PieceColor.black, 2, 5);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(whitePawn);
      board.setPiece(blackPawn);

      // Act
      let validMoves = whitePawn.getValidMoves(board);

      // Assert
      assert.isTrue(validMoves.some((cell) => cell.x === 2 && cell.y === 5));
    });

    it('should not be able to capture a friendly piece', () => {
      let whitePawn = new Pawn(PieceColor.white, 3, 4);
      let whitePawn2 = new Pawn(PieceColor.white, 2, 5);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(whitePawn);
      board.setPiece(whitePawn2);

      // Act
      let validMoves = whitePawn.getValidMoves(board);

      // Assert
      assert.isFalse(validMoves.some((cell) => cell.x === 2 && cell.y === 5));
    });
  });
});
