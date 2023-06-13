import { configureStore } from "@reduxjs/toolkit";
import popular from "./movie/popular";
import trending from "./movie/trending";
import horror from "./movie/horror";
import nowPlaying from "./movie/playing";
import discover from "./movie/discover";
import upcoming from "./movie/upcoming";
import actionTv from "./televisi/action";
import crimeTv from "./televisi/crime";
import animationTv from "./televisi/animation";
import mysteryTv from "./televisi/mystery";
import dramaTv from "./televisi/drama";
import trendingTv from "./televisi/trending";
import popularTv from "./televisi/popular";

export const store = configureStore({
  reducer: {
    // movie
    popular: popular,
    trending: trending,
    horror: horror,
    nowPlaying: nowPlaying,
    discover: discover,
    upcoming: upcoming,

    // televisi
    popularTv: popularTv,
    trendingTv: trendingTv,
    actionTv: actionTv,
    crimeTv: crimeTv,
    animationTv: animationTv,
    mysteryTv: mysteryTv,
    dramaTv: dramaTv,
  },
});
