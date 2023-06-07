import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  crimeTv: {},
};

export const crimeTv = createSlice({
  name: "crimeTv",
  initialState,
  reducers: {
    setCrimeTv: (state, crimeTv) => {
      state.crimeTv = crimeTv.payload;
    },
  },
});

export const { setCrimeTv } = crimeTv.actions;
export default crimeTv.reducer;
