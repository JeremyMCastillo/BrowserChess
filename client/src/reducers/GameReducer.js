import { PIECE_SELECTED, VALID_MOVES } from "../actions/types";
const INITIAL_STATE = {
  selectedPiece: {},
  validMoves: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PIECE_SELECTED:
      return { ...state, selectedPiece: action.payload.piece };
    case VALID_MOVES:
      return { ...state, validMoves: action.payload.validMoves };
    default:
      return state;
  }
};
