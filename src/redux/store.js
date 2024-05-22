// store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import subredditReducer from './subredditSlice'; // import the subreddit reducer

export default configureStore({
  reducer: {
    search: searchReducer,
    subreddit: subredditReducer, // include the subreddit reducer in your Redux store
  },
});