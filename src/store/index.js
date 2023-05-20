import { configureStore } from "@reduxjs/toolkit";
import popular from "./popular";

export const store = configureStore({
    reducer: {
        popular: popular,
    },
});