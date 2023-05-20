import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popular: {},
};

export const popular = createSlice({
    name: "popular", 
    initialState,
    reducers: {
        setPopular: (state, action) => {
            state.popular = action.payload;
        },
    },
});

export const { setPopular } = popular.actions;
export default popular.reducer;