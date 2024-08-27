import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  // Other store configurations (middleware, enhancers) can be added here
});

export default store;
