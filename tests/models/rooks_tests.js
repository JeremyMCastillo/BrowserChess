const { assert } = require("chai");
const { PieceType, PieceColor } = require("../../models/pieces/pieces");
const { Rook } = require("../../models/pieces/rooks");
const { TestHelpers } = require("../helpers");

describe("Rooks model", () => {
  describe("create operations", () => {
    it("should successfully create a Rook.initialize", () => {
      let rook = Rook.initialize(PieceColor.white, 4, 3);

      assert.isNotNull(rook);
      assert.equal(rook.type, PieceType.rook);
      assert.equal(rook.color, PieceColor.white);
    });
  });

  describe("rook movement", () => {
    it("should test Rook movement on an empty board", () => {
      let rook = Rook.initialize(PieceColor.white, 4, 3);
      let board = TestHelpers.initEmptyBoard();
      let possibleMoves = rook.getValidMoves(board);

      assert.isTrue(possibleMoves.length > 0);
      assert.equal(possibleMoves.length, 14);
    });

    it("should be able to capture an opposing piece", () => {
      let whiteRook = Rook.initialize(PieceColor.white, 4, 3);
      let blackRook = Rook.initialize(PieceColor.black, 0, 3);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(whiteRook);
      board.setPiece(blackRook);

      // Act
      let validMoves = whiteRook.getValidMoves(board);

      // Assert
      assert.isTrue(validMoves.some((cell) => cell.x === 0 && cell.y === 3));
    });

    it("should not be able to capture a friendly piece", () => {
      let whiteRook = Rook.initialize(PieceColor.white, 4, 3);
      let whiteRook2 = Rook.initialize(PieceColor.white, 0, 3);
      let board = TestHelpers.initEmptyBoard();
      board.setPiece(whiteRook);
      board.setPiece(whiteRook2);

      // Act
      let validMoves = whiteRook.getValidMoves(board);

      // Assert
      assert.isFalse(validMoves.some((cell) => cell.x === 0 && cell.y === 3));
    });
  });
});
