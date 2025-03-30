import React from "react";
import MovieCard from "./MovieCard";
import { Box, Typography } from "@mui/material";

const NowPlaying = ({ nowPlaying }) => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px", color: "#fff" }}>
        Now Playing Movies
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: "15px", // Adjust gap for smaller cards
          paddingBottom: "10px",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
        }}
      >
        {nowPlaying.map((movie) => (
          <Box
            key={movie.id}
            sx={{
              flex: "0 0 auto",
              width: "170px", // Set width for smaller cards
            }}
          >
            <MovieCard movie={movie} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NowPlaying;
