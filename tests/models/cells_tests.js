const { assert } = require("chai");
const { PieceColor } = require("../../models/pieces/pieces");
const { Pawn } = require("../../models/pieces/pawns");
const { Rook } = require("../../models/pieces/rooks");
const { Bishop } = require("../../models/pieces/bishops");
const { Knight } = require("../../models/pieces/knights");
const { King } = require("../../models/pieces/kings");
const { Queen } = require("../../models/pieces/queens");
const { TestHelpers } = require("../helpers");

/*
TODO:
    Write tests that specifically check whether a piece exists on a certain cell of the board
*/

describe("initialize player pieces", () => {
  it("should test white piece placement on board", () => {
    let board = TestHelpers.initEmptyBoard();
    let whitePawn1 = Pawn.initialize(PieceColor.white, 0, 1);
    let whitePawn2 = Pawn.initialize(PieceColor.white, 1, 1);
    let whitePawn3 = Pawn.initialize(PieceColor.white, 2, 1);
    let whitePawn4 = Pawn.initialize(PieceColor.white, 3, 1);
    let whitePawn5 = Pawn.initialize(PieceColor.white, 4, 1);
    let whitePawn6 = Pawn.initialize(PieceColor.white, 5, 1);
    let whitePawn7 = Pawn.initialize(PieceColor.white, 6, 1);
    let whitePawn8 = Pawn.initialize(PieceColor.white, 7, 1);
    let whiteRook1 = Rook.initialize(PieceColor.white, 0, 0);
    let whiteRook2 = Rook.initialize(PieceColor.white, 7, 0);
    let whiteKnight1 = Knight.initialize(PieceColor.white, 1, 0);
    let whiteKnight2 = Knight.initialize(PieceColor.white, 6, 0);
    let whiteBishop1 = Bishop.initialize(PieceColor.white, 2, 0);
    let whiteBishop2 = Bishop.initialize(PieceColor.white, 5, 0);
    let whiteQueen = Queen.initialize(PieceColor.white, 3, 0);
    let whiteKing = King.initialize(PieceColor.white, 4, 0);

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

  it("should test black piece placement on board", () => {
    let board = TestHelpers.initEmptyBoard();
    let blackPawn1 = Pawn.initialize(PieceColor.black, 0, 6);
    let blackPawn2 = Pawn.initialize(PieceColor.black, 1, 6);
    let blackPawn3 = Pawn.initialize(PieceColor.black, 2, 6);
    let blackPawn4 = Pawn.initialize(PieceColor.black, 3, 6);
    let blackPawn5 = Pawn.initialize(PieceColor.black, 4, 6);
    let blackPawn6 = Pawn.initialize(PieceColor.black, 5, 6);
    let blackPawn7 = Pawn.initialize(PieceColor.black, 6, 6);
    let blackPawn8 = Pawn.initialize(PieceColor.black, 7, 6);
    let blackRook1 = Rook.initialize(PieceColor.black, 0, 7);
    let blackRook2 = Rook.initialize(PieceColor.black, 7, 7);
    let blackKnight1 = Knight.initialize(PieceColor.black, 7, 1);
    let blackKnight2 = Knight.initialize(PieceColor.black, 7, 6);
    let blackBishop1 = Bishop.initialize(PieceColor.black, 7, 2);
    let blackBishop2 = Bishop.initialize(PieceColor.black, 7, 5);
    let blackQueen = Queen.initialize(PieceColor.black, 7, 3);
    let blackKing = King.initialize(PieceColor.black, 7, 4);

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
