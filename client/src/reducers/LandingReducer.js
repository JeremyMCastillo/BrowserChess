import {
  LANDING_FORM_UPDATE,
  CREATE_NEW_GAME,
  NETWORK_ERROR,
  LOADING,
  JOIN_GAME
} from '../actions/types';
const INITIAL_STATE = {
  showNewGameForm: false,
  showJoinGameForm: false,
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
        ...INITIAL_STATE,
        loading: false,
        board: action.payload.board
      };
    case JOIN_GAME:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: false,
        board: action.payload.board
      };
    case NETWORK_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
