import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mysteryTv: {},
};

export const mysteryTv = createSlice({
  name: "mysteryTv",
  initialState,
  reducers: {
    setMysteryTv: (state, mysteryTv) => {
      state.mysteryTv = mysteryTv.payload;
    },
  },
});

export const { setMysteryTv } = mysteryTv.actions;
export default mysteryTv.reducer;
