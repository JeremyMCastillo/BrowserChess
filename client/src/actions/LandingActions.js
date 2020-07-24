import axios from 'axios';
import {
  LANDING_FORM_UPDATE,
  CREATE_NEW_GAME,
  JOIN_GAME,
  NETWORK_ERROR,
  LOADING
} from './types';

export const createNewGame = (username) => {
  const body = { username };

  return (dispatch) => {
    dispatch({
      type: LOADING,
      payload: {}
    });
    axios
      .post('/board/new-game', body)
      .then((response) => {
        console.log(response);
        let { board, player } = response.data;
        dispatch({
          type: CREATE_NEW_GAME,
          payload: { board, player }
        });
      })
      .catch((err) => {
        dispatch({
          type: NETWORK_ERROR,
          payload: { error: err.message }
        });
      });
  };
};

export const joinGame = (username, gameCode) => {
  const body = { username, gameCode };

  return (dispatch) => {
    dispatch({
      type: LOADING,
      payload: {}
    });
    axios
      .post('/board/join-game', body)
      .then((response) => {
        console.log(response);
        let { board, player } = response.data;
        dispatch({
          type: JOIN_GAME,
          payload: { board, player }
        });
      })
      .catch((err) => {
        console.log(err.response.status);
        dispatch({
          type: NETWORK_ERROR,
          payload: {
            error:
              err.response.status === 404
                ? "We couldn't find a game with that code, please try again."
                : err.message
          }
        });
      });
  };
};

export const loadBoard = (gameCode, username) => {
  return (dispatch) => {
    axios
      .get(`/board/${gameCode}/${username}`)
      .then((response) => {
        let { board, player } = response.data;
        dispatch({
          type: JOIN_GAME,
          payload: { board, player }
        });
      })
      .catch((error) => {
        dispatch({
          type: NETWORK_ERROR,
          payload: {
            error: error.message
          }
        });
      });
  };
};

export const onRegisterFieldUpdate = ({ prop, value }) => {
  return {
    type: LANDING_FORM_UPDATE,
    payload: { prop, value }
  };
};
