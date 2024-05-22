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
    }));
    return data;
  }
);

export const subredditSlice = createSlice({
  name: 'subreddit',
  initialState: { data: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddit.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSubreddit.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSubreddit.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default subredditSlice.reducer;