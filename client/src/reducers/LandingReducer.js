import { USERNAME_UPDATE } from '../actions/types';
const INITIAL_STATE = {
  showNewGameForm: false,
  showJoinGameForm: false,
  username: '',
  gameCode: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
