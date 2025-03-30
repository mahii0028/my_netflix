import React from "react";
import MovieCard from "./MovieCard";
import { Box, Typography } from "@mui/material";

const TopRated = ({ topRated }) => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px", color: "#fff" }}>
        Top Rated Movies
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto", // Enables horizontal scrolling
          gap: "15px", // Space between cards
          paddingBottom: "10px",
          scrollBehavior: "smooth", // Smooth scrolling behavior
          "&::-webkit-scrollbar": {
            height: "8px", // Horizontal scrollbar height
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888", // Scrollbar thumb color
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555", // Scrollbar thumb hover effect
          },
        }}
      >
        {topRated.map((movie) => (
          <Box
            key={movie.id}
            sx={{
              flex: "0 0 auto", // Prevent shrinking of cards
              width: "170px", // Card width
            }}
          >
            <MovieCard movie={movie} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopRated;
