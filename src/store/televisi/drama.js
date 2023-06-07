import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dramaTv: {},
};

export const dramaTv = createSlice({
  name: "dramaTv",
  initialState,
  reducers: {
    setDramaTv: (state, action) => {
      state.dramaTv = action.payload;
    },
  },
});

export const { setDramaTv } = dramaTv.actions;
export default dramaTv.reducer;
