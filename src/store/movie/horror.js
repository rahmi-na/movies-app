import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  horror: {},
};

export const horror = createSlice({
  name: "horror",
  initialState,
  reducers: {
    setHorror: (state, action) => {
      state.horror = action.payload;
    },
  },
});

export const { setHorror } = horror.actions;
export default horror.reducer;
