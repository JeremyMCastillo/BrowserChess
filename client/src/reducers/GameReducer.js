import { PIECE_SELECTED } from '../actions/types';
const INITIAL_STATE = {
  selectedPiece: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PIECE_SELECTED:
      return { ...state, selectedPiece: action.payload.piece };
    default:
      return state;
  }
};
