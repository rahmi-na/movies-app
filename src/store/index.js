import { configureStore } from "@reduxjs/toolkit";
import popular from "./movie/popular";
import trending from "./movie/trending";
import horror from "./movie/horror";
import nowPlaying from "./movie/playing";
import discover from "./televisi/discover";
import action from "./televisi/action";

export const store = configureStore({
  reducer: {
    // movie
    popular: popular,
    trending: trending,
    horror: horror,
    nowPlaying: nowPlaying,

    // televisi
    discover: discover,
    action: action,
  },
});
