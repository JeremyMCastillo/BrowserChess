const { assert } = require("chai");
const { PieceType, PieceColor } = require("../../models/pieces/pieces");
const { King } = require("../../models/pieces/kings");
const { Knight } = require("../../models/pieces/knights");
const { TestHelpers } = require("../helpers");

describe("Kings model", () => {
  describe("create operations", () => {
    it("should successfully create a King.initialize", () => {
      let king = King.initialize(PieceColor.white, 4, 3);

      assert.isNotNull(king);
      assert.equal(king.type, PieceType.king);
      assert.equal(king.color, PieceColor.white);
    });
  });

  describe("King movement", () => {
    it("should test king movement on an empty board", () => {
      let king = King.initialize(PieceColor.white, 4, 3);
      let board = TestHelpers.initEmptyBoard();
      let possibleMoves = king.getValidMoves(board);

      assert.isTrue(possibleMoves.length > 0);
      assert.equal(possibleMoves.length, 8);
    });

    it("should be able to capture an opposing piece", () => {
      let whiteKing = King.initialize(PieceColor.white, 3, 1);
      let blackKnight = Knight.initialize(PieceColor.black, 2, 2);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(whiteKing);
      board.setPiece(blackKnight);

      // Act
      let validMoves = whiteKing.getValidMoves(board);

      // Assert
      assert.isTrue(validMoves.some((cell) => cell.x === 2 && cell.y === 2));
    });

    it("should not be able to capture a friendly piece", () => {
      let whiteKing = King.initialize(PieceColor.white, 3, 4);
      let whiteKnight = Knight.initialize(PieceColor.white, 2, 2);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(whiteKing);
      board.setPiece(whiteKnight);

      // Act
      let validMoves = whiteKing.getValidMoves(board);

      // Assert
      assert.isFalse(validMoves.some((cell) => cell.x === 2 && cell.y === 2));
    });
  });
});
