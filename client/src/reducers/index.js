import { combineReducers } from 'redux';
import LandingReducer from './LandingReducer';
import GameReducer from './GameReducer';

export default combineReducers({
  landing: LandingReducer,
  gameState: GameReducer
});
