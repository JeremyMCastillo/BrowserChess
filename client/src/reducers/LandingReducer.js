import { USERNAME_UPDATE } from '../actions/types';
const INITIAL_STATE = {
  showNewGameForm: false,
  showJoinGameForm: false,
  username: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_UPDATE:
      return { ...state, username: action.payload.username };
    default:
      return state;
  }
};
