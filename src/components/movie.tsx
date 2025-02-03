import { IMovie } from "../api/types";
import { Box, Typography } from "@mui/material";

function Movie({ movie }: { movie: IMovie }) {
  return (
    <Box>
      <Box component="img" src={movie.Poster} alt={movie.Title} />
      <Typography variant="h4">{movie.Title}</Typography>
      <Typography variant="h6">Release Date: {movie.Year}</Typography>
      <Typography variant="h6">IMDb ID: {movie.imdbID}</Typography>
    </Box>
  );
}

export default Movie;
