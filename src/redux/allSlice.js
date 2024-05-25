import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchAll = createAsyncThunk('all/fetchAll', async () => {
  const response = await fetch('https://www.reddit.com/r/all.json');
  const data = await response.json();
  return data.data.children.map(child => child.data);
});

const allSlice = createSlice({
  name: 'all',
  initialState: { posts: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAll.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default allSlice.reducer;