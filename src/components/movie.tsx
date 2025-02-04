import { IMovie } from "../api/types";
import { Box, Card, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import styles from "./styles/movie.module.css";

function Movie({ movie }: { movie: IMovie }) {
  const handleIMDbClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <Card className={styles.card}>
      <Stack justifyContent={"space-between"} className={styles.layout}>
        <Box
          component="img"
          src={movie.Poster}
          alt={movie.Title}
          className={styles.image}
        />
        <Box className={styles.textContainer}>
          <Box className={styles.titleContainer}>
            <Typography variant="h6" lineHeight={1.2}>
              {movie.Title}
            </Typography>
          </Box>
          <Stack direction={{ md: "row" }} spacing={2}>
            <Typography variant="body1">{movie.Year}</Typography>
            <NavLink
              className={styles.link}
              target="_blank"
              to={`https://www.imdb.com/title/${movie.imdbID}`}
              onClick={handleIMDbClick}
            >
              <Typography className={styles.linkText} variant="body1">
                IMDb Page
                <NavigateNextIcon fontSize="medium" />
              </Typography>
            </NavLink>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
}

export default Movie;
