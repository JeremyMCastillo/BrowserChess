import axios from 'axios';
import { USERNAME_UPDATE } from './types';

export const createNewGame = () => {};

export const joinGame = () => {};

export const onRegisterFieldUpdate = ({ prop, value }) => {
  return {
    type: USERNAME_UPDATE,
    payload: { prop, value },
  };
};
