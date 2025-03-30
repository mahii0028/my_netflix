import React from "react";
import { useSelector } from "react-redux";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Upcoming from "./Upcoming";
import { Box } from "@mui/material";

const MovieList = () => {
  const nowPlaying = useSelector((state) => state.movie.nowPlayingMovies);
  const popular = useSelector((state) => state.movie.popularMovies);
  const topRated = useSelector((state) => state.movie.topRatedMovies);
  const upcoming = useSelector((state) => state.movie.upComingMovies);

  return (
    <Box sx={{ backgroundColor: "#141414", padding: "20px" }}>
      <NowPlaying nowPlaying={nowPlaying} />
      <Popular popular={popular} />
      <TopRated topRated={topRated} />
      <Upcoming upcoming={upcoming} />
    </Box>
  );
};

export default MovieList;
