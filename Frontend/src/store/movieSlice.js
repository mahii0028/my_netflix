import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: [], // Changed from null to empty array
  popularMovies: [],
  topRatedMovies: [],
  upComingMovies: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload; // Update with API payload
    },
    getPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
  },
});

export const {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
