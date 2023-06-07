import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actionTv: {},
};

export const actionTv = createSlice({
  name: "actionTv",
  initialState,
  reducers: {
    setActionTv: (state, actionTv) => {
      state.actionTv = actionTv.payload;
    },
  },
});

export const { setActionTv } = actionTv.actions;
export default actionTv.reducer;
