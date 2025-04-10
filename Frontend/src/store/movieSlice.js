import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upComingMovies: [],
  allMovies: [], // New state for all movies combined
  isSearchMovie: false,
  trailerMovie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
      state.allMovies = [...state.allMovies, ...action.payload]; // Add to allMovies
    },
    getPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
      state.allMovies = [...state.allMovies, ...action.payload]; // Add to allMovies
    },
    getTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
      state.allMovies = [...state.allMovies, ...action.payload]; // Add to allMovies
    },
    getUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
      state.allMovies = [...state.allMovies, ...action.payload]; // Add to allMovies
    },
    handleSearchMovie: (state) => {
      state.isSearchMovie = !state.isSearchMovie;
    },
    resetAllMovies: (state) => {
      state.allMovies = []; // Optional: Add a reset function to clear all movies
    },
    getTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
  },
});

export const {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
  handleSearchMovie,
  resetAllMovies,
  getTrailerMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
