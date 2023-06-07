import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animationTv: {},
};

export const animationTv = createSlice({
  name: "animationTv",
  initialState,
  reducers: {
    setAnimationTv: (state, animationTv) => {
      state.animationTv = animationTv.payload;
    },
  },
});

export const { setAnimationTv } = animationTv.actions;
export default animationTv.reducer;
