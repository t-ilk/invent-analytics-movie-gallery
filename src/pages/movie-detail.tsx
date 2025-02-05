import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { omdbService } from "../api/omdb-service";
import { IMovieDetail } from "../api/types";
import { Box, Typography } from "@mui/material";
import Header from "../components/header";
import MovieDetailInfo from "../components/movie-detail/movie-detail-info";
import MovieDetailTitle from "../components/movie-detail/movie-detail-title";
import Footer from "../components/footer";

import styles from "./styles/movie-detail.module.css";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovieDetail | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate("/404");
      return;
    }

    const getMovie = async () => {
      try {
        const response = await omdbService().getMovieDetail(id);
        if (!response) throw new Error("Error getting movie");
        setMovie(response);
      } catch (error) {
        console.error("Error getting movie", error);
      } finally {
        window.scrollTo(0, 0);
      }
    };

    getMovie();
  }, []);

  return (
    <Box className={styles.container}>
      <Header withSearch={false} />
      <Box className={styles.layout}>
        {movie ? (
          <Box>
            <MovieDetailTitle
              title={movie.Title}
              year={movie.Year}
              runtime={movie.Runtime}
              imdbID={movie.imdbID}
            />
            <MovieDetailInfo
              poster={movie.Poster}
              title={movie.Title}
              genre={movie.Genre}
              plot={movie.Plot}
              director={movie.Director}
              writer={movie.Writer}
              actors={movie.Actors}
              imdbRating={movie.imdbRating}
              metascore={movie.Metascore}
              ratings={movie.Ratings}
            />
          </Box>
        ) : (
          <Typography variant="h4">Loading...</Typography>
        )}
      </Box>
      <Footer />
    </Box>
  );
}

export default MovieDetail;
