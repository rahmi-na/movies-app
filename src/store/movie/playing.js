import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlaying: {},
};

export const nowPlaying = createSlice({
  name: "nowPlaying",
  initialState,
  reducers: {
    setNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
  },
});

export const { setNowPlaying } = nowPlaying.actions;
export default nowPlaying.reducer;
