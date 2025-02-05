import { useEffect, useState } from "react";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import { omdbService } from "../api/omdb-service";
import Movie from "../components/movie";
import { IMovie } from "../api/types";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from "../store/hooks";
import Filter from "../components/filter/filter";
import Pagination from "../components/pagination";
import Header from "../components/header";
import Footer from "../components/footer";

import styles from "./styles/home.module.css";

const PAGE_SIZE = 10;

function Home() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState<IMovie[]>([]);

  const name = useSelector((store) => store.movieData.name);
  const year = useSelector((store) => store.movieData.year);
  const type = useSelector((store) => store.movieData.type);
  const pageNumber = useSelector((store) => store.movieData.page);

  const [totalPageCount, setTotalPageCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const response = await omdbService().getMovies({
          name,
          pageNumber,
          type,
          year,
        });
        if (!response || !response.result) {
          throw new Error("Error getting movies");
        }

        setMovies(response.result);
        setTotalPageCount(Math.ceil(response.totalResults / PAGE_SIZE));
      } catch (error) {
        console.error("Error getting movies", error);
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [name, pageNumber, type, year]);

  const displayMovies = () =>
    movies.map((movie) => {
      return (
        <Grid2 key={movie.imdbID} size={{ xs: 6, sm: 4, md: 3 }}>
          <NavLink to={`/movie/${movie.imdbID}`}>
            <Movie key={movie.imdbID} movie={movie} />
          </NavLink>
        </Grid2>
      );
    });

  return (
    <>
      <Box className={styles.container}>
        <Header />
        <Filter />
        <Stack spacing={2} className={styles.pageLayout}>
          {loading ? (
            <Typography variant="h4">Loading...</Typography>
          ) : (
            <>
              <Grid2 container spacing={4}>
                {displayMovies()}
              </Grid2>
              <Pagination totalPageCount={totalPageCount} />{" "}
            </>
          )}
        </Stack>
        <Footer />
      </Box>
    </>
  );
}

export default Home;
