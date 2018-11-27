import { combineReducers } from 'redux';
import myreducer from './reducer';

const rootReducer = combineReducers({
  post: myreducer
});

export default rootReducer;