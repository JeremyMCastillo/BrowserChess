const { assert } = require('chai');
const { PieceType, PieceColor } = require('../../models/pieces');
const { Knight } = require('../../models/knights');
const { Pawn } = require('../../models/pawns');
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

        it('should be able to capture an opposing piece', () => {
          let whiteKnight = new Knight(PieceColor.white, 3, 4);
          let blackPawn = new Pawn(PieceColor.black, 3, 1);
          let board = TestHelpers.initEmptyBoard();
          board.setPiece(whiteKnight);
          board.setPiece(blackPawn);
    
          // Act
          let validMoves = whitePawn.getValidMoves(board);
    
          // Assert
          assert.isTrue(validMoves.some((cell) => cell.x === 3 && cell.y === 1));
        });
    
        it('should not be able to capture a friendly piece', () => {
          let whiteKnight = new Knight(PieceColor.white, 3, 4);
          let whitePawn = new Pawn(PieceColor.white, 3, 1);
          let board = TestHelpers.initEmptyBoard();
          board.setPiece(whiteKnight);
          board.setPiece(whitePawn);
    
          // Act
          let validMoves = whitePawn.getValidMoves(board);
    
          // Assert
          assert.isFalse(validMoves.some((cell) => cell.x === 3 && cell.y === 1));
        });
      });
});
