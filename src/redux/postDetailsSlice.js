/* eslint-disable no-undef */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPostDetails = createAsyncThunk(
  'postDetails/fetchPostDetails',
  async ({subreddit, postId}) => {
    /* eslint-disable no-undef */
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${postId}.json`);
    const data = await response.json();
    return data[0].data.children[0].data;
  }
);

const postDetailsSlice = createSlice({
  name: 'postDetails',
  initialState: { post: {}, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.post = action.payload;
      })
      .addCase(fetchPostDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postDetailsSlice.reducer;