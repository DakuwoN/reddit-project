// subredditSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSubreddit = createAsyncThunk(
  'subreddit/fetchSubreddit',
  async (subreddit) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const json = await response.json();
    
    const data = json.data.children.map((post) => ({
      title: post.data.title,
      imageUrl: post.data.url,
      content: post.data.selftext,
      subreddit: post.data.subreddit,
      postId: post.data.id,
    }));
    return { subreddit, data };
  }
);

export const subredditSlice = createSlice({
  name: 'subreddit',
  initialState: { data: {}, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddit.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSubreddit.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data[action.payload.subreddit] = action.payload.data;
      })
      .addCase(fetchSubreddit.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default subredditSlice.reducer;