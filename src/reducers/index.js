import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import videoReducer from './videoReducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  imageReducer,
  videoReducer
});

export default rootReducer;
