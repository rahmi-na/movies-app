import { configureStore } from "@reduxjs/toolkit";
import popular from "./popular";
import trending from "./trending";
import horror from "./horror";
import nowPlaying from "./playing";
import discover from "./discover";

export const store = configureStore({
  reducer: {
    popular: popular,
    trending: trending,
    horror: horror,
    nowPlaying: nowPlaying,
    discover: discover,
  },
});
