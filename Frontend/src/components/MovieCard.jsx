import * as React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function MovieCard({ movie }) {
  return (
    <Card
      sx={{
        position: "relative",
        width: 170,
        height: 300,
        overflow: "hidden",
        borderRadius: "10px",
        transform: "scale(1)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)", // Slight zoom effect on hover
        },
      }}
    >
      <CardActionArea
        sx={{
          height: "100%", // Ensure CardActionArea takes full card height
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%", // Ensure Box takes full height
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7))",
              zIndex: 1,
            },
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
            style={{
              width: "100%",
              height: "100%", // Image takes full height of the card
              objectFit: "cover",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              zIndex: 2,
              color: "#fff",
              fontSize: "12px", // Small font for movie title
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              maxWidth: "150px", // Title won't overflow the card width
            }}
          >
            {movie.title}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
