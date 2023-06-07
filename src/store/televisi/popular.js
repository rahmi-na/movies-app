import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularTv: {},
};

export const popularTv = createSlice({
  name: "popularTv",
  initialState,
  reducers: {
    setPopularTv: (state, popularTv) => {
      state.popularTv = popularTv.payload;
    },
  },
});

export const { setPopularTv } = popularTv.actions;
export default popularTv.reducer;
