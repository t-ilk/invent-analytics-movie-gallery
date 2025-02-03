import { useEffect, useState } from "react";
import { omdbService } from "./api/omdb-service";
import Movie from "./components/movie";
import { IMovie } from "./api/types";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await omdbService().getMovies({ name: "Pokemon" });
      if (response) setMovies(response);
    };

    getMovies();
  }, []);

  const displayMovies = () =>
    movies.map((movie) => {
      return <Movie key={movie.imdbID} movie={movie} />;
    });

  return <div>{displayMovies()}</div>;
}

export default App;
