import axios from 'axios';
import { USERNAME_UPDATE } from './types';

export const createNewGame = () => {};

export const joinGame = () => {};

export const onUsernameUpdate = (value) => {
  return {
    type: USERNAME_UPDATE,
    payload: { value }
  };
};
