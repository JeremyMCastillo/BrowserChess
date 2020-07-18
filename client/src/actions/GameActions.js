import { PIECE_SELECTED } from './types';

export const selectPiece = (piece) => {
  return {
    type: PIECE_SELECTED,
    payload: { piece }
  };
};
