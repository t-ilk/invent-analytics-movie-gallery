import { Box, Grid2, Stack, Typography } from "@mui/material";
import Movie from "../components/movie";
import { NavLink } from "react-router";
import Filter from "../components/filter/filter";
import Pagination from "../components/pagination";
import Header from "../components/header";
import Footer from "../components/footer";

import styles from "./styles/home.module.css";
import { useGetMovies } from "../hooks/use-get-movies.hook";

function Home() {
  const { movies, totalPageCount, loading } = useGetMovies();

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
