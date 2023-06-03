import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  action: {},
};

export const action = createSlice({
  name: "action",
  initialState,
  reducers: {
    setActionTv: (state, action) => {
      state.action = action.payload;
    },
  },
});

export const { setActionTv } = action.actions;
export default action.reducer;
