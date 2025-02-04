import { NavLink } from "react-router";
import { Box, Stack, Typography } from "@mui/material";

import styles from "../styles/movie-detail-title.module.css";

interface Props {
  title: string;
  year: string;
  runtime: string;
  imdbID: string;
}

function MovieDetailTitle({ title, year, runtime, imdbID }: Props) {
  const formatDuration = (duration: string) => {
    const durationInMinutes = duration.split(" ")[0];
    const [hours, minutes] = [
      Math.floor(parseInt(durationInMinutes) / 60),
      parseInt(durationInMinutes) % 60,
    ];

    if (hours === 0) return `${minutes}m`;
    if (minutes === 0) return `${hours}h`;
    return `${hours}h ${minutes}m`;
  };

  return (
    <Box className={styles.titleContainer}>
      <Typography variant="h4">{title}</Typography>
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <Typography variant="body1">{year}</Typography>
        <Typography variant="body1">{formatDuration(runtime)}</Typography>
        <NavLink
          className={styles.link}
          to={`https://www.imdb.com/title/${imdbID}`}
          target="_blank"
        >
          <Typography className={styles.linkText} variant="body1">
            IMDb Page
          </Typography>
        </NavLink>
      </Stack>
    </Box>
  );
}

export default MovieDetailTitle;
