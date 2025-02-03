import { IMovie } from "../api/types";

function Movie({ movie }: { movie: IMovie }) {
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>Release Date: {movie.Year}</p>
      <p>IMDb ID: {movie.imdbID}</p>
    </div>
  );
}

export default Movie;
