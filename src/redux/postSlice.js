import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPost = createAsyncThunk(
  'posts/fetchPost',
  async ({ subreddit, postId }) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${postId}.json`);
    const data = await response.json();
    return data[0].data.children[0].data; // Adjust this based on the API response structure
  }
);

// Add the extraReducers field to your slice to handle the async thunk:
const postsSlice = createSlice({
  name: 'posts',
  initialState: { post: null, status: 'idle', error: null },
  reducers: {
    // ...other reducers...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add the fetched post to the state
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;