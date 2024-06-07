// store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import subredditReducer from './subredditSlice'; // import the subreddit reducer
import postReducer from './postDetailsSlice'
import allReducer from './allSlice'; 
import postDetailsReducer from './postDetailsSlice'; // import the postDetails reducer

export default configureStore({
  reducer: {
    search: searchReducer,
    subreddit: subredditReducer,
    post: postReducer, // include the post reducer in your Redux store
    all: allReducer,
    postDetails: postDetailsReducer, // include the postDetails reducer in your Redux store

  },
});