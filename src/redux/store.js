// store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import subredditReducer from './subredditSlice'; // import the subreddit reducer
import postReducer from './postDetailsSlice'
import allReducer from './allSlice'; 

export default configureStore({
  reducer: {
    search: searchReducer,
    subreddit: subredditReducer,
    post: postReducer, // include the post reducer in your Redux store
    all: allReducer,

  },
});