import {
  LANDING_FORM_UPDATE,
  CREATE_NEW_GAME,
  NETWORK_ERROR,
  LOADING,
  JOIN_GAME
} from '../actions/types';
const INITIAL_STATE = {
  player_1: '',
  player_2: '',
  username: '',
  gameCode: '',
  loading: false,
  error: '',
  board: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LANDING_FORM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOADING:
      return { ...state, loading: true };
    case CREATE_NEW_GAME:
      return {
        ...state,
        loading: false,
        board: action.payload.board,
        player_1: action.payload.board.player_1[0].name.username
      };
    case JOIN_GAME:
      return {
        ...state,
        loading: false,
        board: action.payload.board,
        player_1: action.payload.board.player_1[0].name.username,
        player_2: action.payload.board.player_2[0].name.username
      };
    case NETWORK_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
