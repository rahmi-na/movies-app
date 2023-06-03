import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trending: {},
};

export const trending = createSlice({
  name: "trending",
  initialState,
  reducers: {
    setTrending: (state, action) => {
      state.trending = action.payload;
    },
  },
});

export const { setTrending } = trending.actions;
export default trending.reducer;
