import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  TextField,
  Box,
  Card,
  CardContent,
  Typography,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchMovies = () => {
  const [inputMovie, setInputMovie] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const allMovies = useSelector((state) => state.movie?.allMovies || []);

  const filteredMovies = allMovies.filter((movie) => {
    const inputWords = inputMovie.toLowerCase().split(" ").filter(Boolean);
    const title = movie.title.toLowerCase();
    return inputWords.every((word) => title.includes(word));
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        px: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 600, position: "relative" }}>
        <TextField
          placeholder="Search Movies"
          variant="outlined"
          fullWidth
          value={inputMovie}
          onChange={(e) => setInputMovie(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)} // prevent instant close
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              borderRadius: "50px",
              backgroundColor: "#fff",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
              px: 2,
            },
          }}
          sx={{
            mb: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ccc",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4285f4",
            },
          }}
        />

        {inputMovie && filteredMovies.length > 0 && isFocused && (
          <Card
            sx={{
              mt: 1,
              borderRadius: "20px",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
              maxHeight: 200,
              overflowY: "auto",
              position: "absolute",
              width: "100%",
              zIndex: 10,
            }}
          >
            <CardContent sx={{ p: 0 }}>
              {filteredMovies.map((movie, i) => (
                <Box
                  key={i}
                  sx={{
                    px: 2,
                    py: 1.5,
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                    },
                    "&:last-child": {
                      borderBottom: "none",
                    },
                  }}
                >
                  <Typography variant="body1">{movie.title}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default SearchMovies;
