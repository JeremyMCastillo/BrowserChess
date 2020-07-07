import { combineReducers } from 'redux';
import LandingReducer from './LandingReducer';

export default combineReducers({
  landing: LandingReducer
});
