import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import MovieContainer from "../components/MovieContainer";
import SearchMovies from "../components/SearchMovies";
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upComingMovies,
} from "../api/api";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from "../store/movieSlice";
import useMovies from "../hooks/useMovies";

const Browse = () => {
  const { user } = useSelector((state) => state.user);
  const isSearchMovie = useSelector((state) => state.movie.isSearchMovie);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  useMovies(nowPlayingMovies, getNowPlayingMovies);
  useMovies(popularMovies, getPopularMovies);
  useMovies(topRatedMovies, getTopRatedMovies);
  useMovies(upComingMovies, getUpComingMovies);

  return (
    <Fragment>
      <Header />
      {isSearchMovie ? (
        <SearchMovies />
      ) : (
        <div>
          <MainContainer />
          <MovieContainer />
        </div>
      )}
    </Fragment>
  );
};

export default Browse;
