const { assert } = require("chai");
const { PieceType, PieceColor } = require("../../models/pieces/pieces");
const { Knight } = require("../../models/pieces/knights");
const { Pawn } = require("../../models/pieces/pawns");
const { TestHelpers } = require("../helpers");

describe("Knights model", () => {
  describe("create operations", () => {
    it("should successfully create a Knight.initialize", () => {
      let knight = Knight.initialize(PieceColor.white, 4, 3);

      assert.isNotNull(knight);
      assert.equal(knight.type, PieceType.knight);
      assert.equal(knight.color, PieceColor.white);
    });
  });

  describe("Knight movement", () => {
    it("should test knight movement on an empty board", () => {
      let knight = Knight.initialize(PieceColor.white, 5, 5);
      let board = TestHelpers.initEmptyBoard();
      let possibleMoves = knight.getValidMoves(board);

      assert.isTrue(possibleMoves.length > 0);
      assert.equal(possibleMoves.length, 8);
    });

    it("should be able to capture an opposing piece", () => {
      let whiteKnight = Knight.initialize(PieceColor.white, 3, 4);
      let blackPawn = Pawn.initialize(PieceColor.black, 2, 2);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(whiteKnight);
      board.setPiece(blackPawn);

      // Act
      let validMoves = whiteKnight.getValidMoves(board);

      // Assert
      assert.isTrue(validMoves.some((cell) => cell.x === 2 && cell.y === 2));
    });

    it("should not be able to capture a friendly piece", () => {
      let whiteKnight = Knight.initialize(PieceColor.white, 3, 4);
      let whitePawn = Pawn.initialize(PieceColor.white, 3, 1);
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
