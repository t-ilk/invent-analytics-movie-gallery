import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { omdbService } from "../api/omdb-service";
import { IMovieDetail } from "../api/types";
import { Box, Typography } from "@mui/material";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovieDetail | null>(null);

  useEffect(() => {
    if (!id) return;

    const getMovie = async () => {
      const response = await omdbService().getMovieDetail(id);
      if (response) setMovie(response);
    };

    getMovie();
  }, []);

  return (
    <Box>
      {movie ? (
        <Box>
          <Box component="img" src={movie.Poster} alt={movie.Title} />
          <Typography variant="h4">{movie.Title}</Typography>
          <Typography variant="h6">Release Date: {movie.Year}</Typography>
          <Typography variant="h6">IMDb ID: {movie.imdbID}</Typography>
          <Typography variant="h6">Rated: {movie.Rated}</Typography>
          <Typography variant="h6">Runtime: {movie.Runtime}</Typography>
          <Typography variant="h6">Genre: {movie.Genre}</Typography>
          <Typography variant="h6">Director: {movie.Director}</Typography>
          <Typography variant="h6">Writer: {movie.Writer}</Typography>
          <Typography variant="h6">Actors: {movie.Actors}</Typography>
          <Typography variant="h6">Plot: {movie.Plot}</Typography>
          <Typography variant="h6">Language: {movie.Language}</Typography>
          <Typography variant="h6">Country: {movie.Country}</Typography>
          <Typography variant="h6">Awards: {movie.Awards}</Typography>
          <Typography variant="h6">Metascore: {movie.Metascore}</Typography>
          <Typography variant="h6">IMDb Rating: {movie.imdbRating}</Typography>
          <Typography variant="h6">IMDb Votes: {movie.imdbVotes}</Typography>
          <Typography variant="h6">Type: {movie.Type}</Typography>
          <Typography variant="h6">DVD: {movie.DVD}</Typography>
          <Typography variant="h6">Box Office: {movie.BoxOffice}</Typography>
          <Typography variant="h6">Production: {movie.Production}</Typography>
          <Typography variant="h6">Website: {movie.Website}</Typography>
        </Box>
      ) : (
        <Typography variant="h4">Loading...</Typography>
      )}
    </Box>
  );
}

export default MovieDetail;
