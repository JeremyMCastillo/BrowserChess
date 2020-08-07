import { PIECE_SELECTED, VALID_MOVES } from "./types";

export const selectPiece = (piece) => {
  return {
    type: PIECE_SELECTED,
    payload: { piece }
  };
};

export const registerValidMoves = (validMoves) => {
  return {
    type: VALID_MOVES,
    payload: { validMoves }
  };
};
