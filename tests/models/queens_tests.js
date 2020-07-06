const { assert } = require('chai');
const { PieceType, PieceColor } = require('../../models/pieces/pieces');
const { Queen } = require('../../models/pieces/queens');
const { TestHelpers } = require('../helpers');

describe('Pawns model', () => {
  describe('create operations', () => {
    it('should successfully create a new pawn', () => {
      let queen = new Queen(PieceColor.white, 4, 3);

      assert.isNotNull(queen);
      assert.equal(queen.type, PieceType.queen);
      assert.equal(queen.color, PieceColor.white);
    });
  });

  describe('queen movement', () => {
    it('should test queen movement on an empty board', () => {
      let queen = new Queen(PieceColor.white, 4, 3);
      let board = TestHelpers.initEmptyBoard();
      let possibleMoves = queen.getValidMoves(board);

      assert.isTrue(possibleMoves.length > 0);
      assert.equal(possibleMoves.length, 27);
    });

    it('should be able to capture an opposing diagonal piece', () => {
      let queen = new Queen(PieceColor.white, 3, 4);
      let queen2 = new Queen(PieceColor.black, 4, 3);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(queen);
      board.setPiece(queen2);

      // Act
      let validMoves = queen.getValidMoves(board);

      // Assert
      assert.isTrue(validMoves.some((cell) => cell.x === 4 && cell.y === 3));
    });

    it('should be able to capture an opposing rank piece', () => {
      let queen = new Queen(PieceColor.white, 3, 4);
      let queen2 = new Queen(PieceColor.black, 4, 4);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(queen);
      board.setPiece(queen2);

      // Act
      let validMoves = queen.getValidMoves(board);

      // Assert
      assert.isTrue(validMoves.some((cell) => cell.x === 4 && cell.y === 4));
    });

    it('should be able to capture an opposing file piece', () => {
      let queen = new Queen(PieceColor.white, 3, 4);
      let queen2 = new Queen(PieceColor.black, 3, 3);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(queen);
      board.setPiece(queen2);

      // Act
      let validMoves = queen.getValidMoves(board);

      // Assert
      assert.isTrue(validMoves.some((cell) => cell.x === 3 && cell.y === 3));
    });

    it('should not be able to capture a friendly diagonal piece', () => {
      let queen = new Queen(PieceColor.white, 3, 4);
      let queen2 = new Queen(PieceColor.white, 4, 3);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(queen);
      board.setPiece(queen2);

      // Act
      let validMoves = queen.getValidMoves(board);

      // Assert
      assert.isFalse(validMoves.some((cell) => cell.x === 4 && cell.y === 3));
    });

    it('should not be able to capture a friendly rank piece', () => {
      let queen = new Queen(PieceColor.white, 3, 4);
      let queen2 = new Queen(PieceColor.white, 4, 4);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(queen);
      board.setPiece(queen2);

      // Act
      let validMoves = queen.getValidMoves(board);

      // Assert
      assert.isFalse(validMoves.some((cell) => cell.x === 4 && cell.y === 4));
    });

    it('should not be able to capture a friendly file piece', () => {
      let queen = new Queen(PieceColor.white, 3, 4);
      let queen2 = new Queen(PieceColor.white, 3, 3);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(queen);
      board.setPiece(queen2);

      // Act
      let validMoves = queen.getValidMoves(board);

      // Assert
      assert.isFalse(validMoves.some((cell) => cell.x === 3 && cell.y === 3));
    });
  });
});
