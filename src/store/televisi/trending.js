import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingTv: {},
};

export const trendingTv = createSlice({
  name: "trendingTv",
  initialState,
  reducers: {
    setTrendingTv: (state, trendingTv) => {
      state.trendingTv = trendingTv.payload;
    },
  },
});

export const { setTrendingTv } = trendingTv.actions;
export default trendingTv.reducer;
