import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const nowPlaying = useSelector((state) => state.movie.nowPlayingMovies);

  // Ensure nowPlaying is not empty and has at least 5 items
  if (!nowPlaying || nowPlaying.length < 5) {
    return <div>Loading...</div>; // Show a fallback UI
  }

  const { overview, id, title } = nowPlaying[4];

  return (
    <div>
      <VideoTitle overview={overview} title={title} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
