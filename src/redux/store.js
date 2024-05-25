// store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import subredditReducer from './subredditSlice'; // import the subreddit reducer
import postReducer from './postSlice'
import allReducer from './allSlice'; 

export default configureStore({
  reducer: {
    search: searchReducer,
    subreddit: subredditReducer,
    posts: postReducer, // include the post reducer in your Redux store
    all: allReducer,

  },
});