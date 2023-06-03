import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discover: {},
};

export const discover = createSlice({
  name: "discover",
  initialState,
  reducers: {
    setDiscover: (state, action) => {
      state.discover = action.payload;
    },
  },
});

export const { setDiscover } = discover.actions;
export default discover.reducer;
