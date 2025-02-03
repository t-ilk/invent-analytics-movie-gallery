import { useEffect, useState } from "react";
import { Grid2, Stack } from "@mui/material";
import { omdbService } from "../api/omdb-service";
import Movie from "../components/movie";
import { IMovie } from "../api/types";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from "../store/hooks";
import Search from "../components/search";
import Filter from "../components/filter";
import Pagination from "../components/pagination";

const PAGE_SIZE = 10;

function Home() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState<IMovie[]>([]);

  const name = useSelector((store) => store.movieData.name);
  const year = useSelector((store) => store.movieData.year);
  const type = useSelector((store) => store.movieData.type);
  const pageNumber = useSelector((store) => store.movieData.page);

  const [totalPageCount, setTotalPageCount] = useState<number>(1);

  useEffect(() => {
    const getMovies = async () => {
      const response = await omdbService().getMovies({
        name,
        pageNumber,
        type,
        year,
      });
      if (!response || !response.result) {
        navigate("/404");
        return;
      }

      setMovies(response.result);
      setTotalPageCount(Math.ceil(response.totalResults / PAGE_SIZE));
    };

    getMovies();
  }, [name, pageNumber, type, year]);

  const displayMovies = () =>
    movies.map((movie) => {
      return (
        <Grid2 key={movie.imdbID}>
          <NavLink to={`/movie/${movie.imdbID}`}>
            <Movie key={movie.imdbID} movie={movie} />
          </NavLink>
        </Grid2>
      );
    });

  return (
    <>
      <Stack spacing={2}>
        <Search />
        <Filter />
        <Grid2 container spacing={2}>
          {displayMovies()}
        </Grid2>
        <Pagination totalPageCount={totalPageCount} />
      </Stack>
    </>
  );
}

export default Home;
