import { Box, Grid2 } from "@mui/material";
import Ratings from "./ratings";
import Genre from "./genre";
import Plot from "./plot";
import Contributers from "./contributors";

import styles from "../styles/movie-detail-info.module.css";

interface Props {
  poster: string;
  title: string;
  genre: string;
  plot: string;
  director: string;
  writer: string;
  actors: string;
  imdbRating: string;
  metascore: string;
  ratings: { Source: string; Value: string }[];
}

function MovieDetailInfo({
  poster,
  title,
  genre,
  plot,
  director,
  writer,
  actors,
  imdbRating,
  metascore,
  ratings,
}: Props) {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ sm: 12, md: 3 }}>
        <Box
          className={styles.image}
          component="img"
          src={poster}
          alt={title}
        />
      </Grid2>
      <Grid2 size={{ sm: 12, md: 9 }}>
        <Genre genre={genre} />
        <Plot plot={plot} />
        <Contributers director={director} writer={writer} actors={actors} />
        <Ratings
          imdbRating={imdbRating}
          metascore={metascore}
          ratings={ratings}
        />
      </Grid2>
    </Grid2>
  );
}

export default MovieDetailInfo;
