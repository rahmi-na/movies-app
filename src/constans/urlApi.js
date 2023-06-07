export const BASE_URL = "https://api.themoviedb.org/3";

// Movie
export const POPULAR_MOVIES = BASE_URL + "/movie/popular";
export const TRENDING_MOVIES = BASE_URL + "/trending/movie/week?api_key=";
export const HORROR_MOVIES = BASE_URL + "/discover/movie?with_genres=27";
export const NOW_PLAYING_MOVIES = BASE_URL + "/movie/now_playing";

// TV
export const POPULAR_TV =
  BASE_URL + "/discover/tv?sort_by=popularity.desc&with_original_language=en";
export const ACTION_TV =
  BASE_URL +
  "/discover/tv?api_key=THE_KEY&sort_by=popularity.desc&page=1&with_original_language=en&with_genres=10759";
export const CRIME_TV = BASE_URL + "/discover/tv?with_genres=80";
export const ANIMATION_TV = BASE_URL + "/discover/tv?with_genres=16";
export const MYSTERY_TV = BASE_URL + "/discover/tv?with_genres=9648";
export const DRAMA_TV = BASE_URL + "/discover/tv?page=3&with_genres=18";

// Account
export const API_KEY = "5358b39964010814018850edbc55a689";
export const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzU4YjM5OTY0MDEwODE0MDE4ODUwZWRiYzU1YTY4OSIsInN1YiI6IjYzZWY0NWRlY2RkYmJjMDA4NGI4MzdlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.atydM_Mm4NfaP-1UnaxoOrtU0P2FaMPFV5jnm_9k4Sg";
