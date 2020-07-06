const { assert } = require('chai');
const { PieceColor } = require('../../models/pieces/pieces');
const { Pawn } = require('../../models/pieces/pawns');
const { Rook } = require('../../models/pieces/rooks');
const { Bishop } = require('../../models/pieces/bishops');
const { Knight } = require('../../models/pieces/knights');
const { King } = require('../../models/pieces/kings');
const { Queen } = require('../../models/pieces/queens');
const { TestHelpers } = require('../helpers');

/*
TODO:
    Write tests that specifically check whether a piece exists on a certain cell of the board
*/

describe('initialize player pieces', () => {
  it('should test white piece placement on board', () => {
    let board = TestHelpers.initEmptyBoard();
    let whitePawn1 = new Pawn(PieceColor.white, 0, 1);
    let whitePawn2 = new Pawn(PieceColor.white, 1, 1);
    let whitePawn3 = new Pawn(PieceColor.white, 2, 1);
    let whitePawn4 = new Pawn(PieceColor.white, 3, 1);
    let whitePawn5 = new Pawn(PieceColor.white, 4, 1);
    let whitePawn6 = new Pawn(PieceColor.white, 5, 1);
    let whitePawn7 = new Pawn(PieceColor.white, 6, 1);
    let whitePawn8 = new Pawn(PieceColor.white, 7, 1);
    let whiteRook1 = new Rook(PieceColor.white, 0, 0);
    let whiteRook2 = new Rook(PieceColor.white, 7, 0);
    let whiteKnight1 = new Knight(PieceColor.white, 1, 0);
    let whiteKnight2 = new Knight(PieceColor.white, 6, 0);
    let whiteBishop1 = new Bishop(PieceColor.white, 2, 0);
    let whiteBishop2 = new Bishop(PieceColor.white, 5, 0);
    let whiteQueen = new Queen(PieceColor.white, 3, 0);
    let whiteKing = new King(PieceColor.white, 4, 0);

    board.setPiece(whitePawn1);
    board.setPiece(whitePawn2);
    board.setPiece(whitePawn3);
    board.setPiece(whitePawn4);
    board.setPiece(whitePawn5);
    board.setPiece(whitePawn6);
    board.setPiece(whitePawn7);
    board.setPiece(whitePawn8);
    board.setPiece(whiteRook1);
    board.setPiece(whiteRook2);
    board.setPiece(whiteKnight1);
    board.setPiece(whiteKnight2);
    board.setPiece(whiteBishop1);
    board.setPiece(whiteBishop2);
    board.setPiece(whiteQueen);
    board.setPiece(whiteKing);

    // Act
    let validMoves = whitePawn1.getValidMoves(board);

    // Assert
    assert.isTrue(validMoves.some((cell) => cell.x === 0 && cell.y === 2));
    assert.isFalse(board.isEmpty());
  });

  it('should test black piece placement on board', () => {
    let board = TestHelpers.initEmptyBoard();
    let blackPawn1 = new Pawn(PieceColor.black, 0, 6);
    let blackPawn2 = new Pawn(PieceColor.black, 1, 6);
    let blackPawn3 = new Pawn(PieceColor.black, 2, 6);
    let blackPawn4 = new Pawn(PieceColor.black, 3, 6);
    let blackPawn5 = new Pawn(PieceColor.black, 4, 6);
    let blackPawn6 = new Pawn(PieceColor.black, 5, 6);
    let blackPawn7 = new Pawn(PieceColor.black, 6, 6);
    let blackPawn8 = new Pawn(PieceColor.black, 7, 6);
    let blackRook1 = new Rook(PieceColor.black, 0, 7);
    let blackRook2 = new Rook(PieceColor.black, 7, 7);
    let blackKnight1 = new Knight(PieceColor.black, 7, 1);
    let blackKnight2 = new Knight(PieceColor.black, 7, 6);
    let blackBishop1 = new Bishop(PieceColor.black, 7, 2);
    let blackBishop2 = new Bishop(PieceColor.black, 7, 5);
    let blackQueen = new Queen(PieceColor.black, 7, 3);
    let blackKing = new King(PieceColor.black, 7, 4);

    board.setPiece(blackPawn1);
    board.setPiece(blackPawn2);
    board.setPiece(blackPawn3);
    board.setPiece(blackPawn4);
    board.setPiece(blackPawn5);
    board.setPiece(blackPawn6);
    board.setPiece(blackPawn7);
    board.setPiece(blackPawn8);
    board.setPiece(blackRook1);
    board.setPiece(blackRook2);
    board.setPiece(blackKnight1);
    board.setPiece(blackKnight2);
    board.setPiece(blackBishop1);
    board.setPiece(blackBishop2);
    board.setPiece(blackQueen);
    board.setPiece(blackKing);

    // Act
    let validMoves = blackPawn1.getValidMoves(board);

    // Assert
    assert.isTrue(validMoves.some((cell) => cell.x === 0 && cell.y === 5));

    // TODO:
    // Write a helper in helpers.js for checking an empty board
    // assert.isFalse(TestHelpers.board.isEmpty());
  });
});
