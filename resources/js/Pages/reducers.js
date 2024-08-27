import { combineReducers } from 'redux';
import counterReducer from './Features/Counter';
// Import other reducers as needed

const rootReducer = combineReducers({
  counter: counterReducer,
  // Other reducers can be added here
});

export default rootReducer;
