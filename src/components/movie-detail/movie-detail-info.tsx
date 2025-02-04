import { Box, Grid2, Stack, Typography } from "@mui/material";

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
  const formatGenre = () => {
    return genre.split(", ").map((item) => (
      <Box key={item} className={styles.genreItem}>
        <Typography>{item}</Typography>
      </Box>
    ));
  };

  const formatContributors = (contributors: string) => {
    return contributors.split(", ").map((item, index, self) => (
      <Stack direction="row" spacing={1} alignItems={"center"} key={item}>
        <Typography variant="body1" noWrap>
          {item}
        </Typography>
        {index < self.length - 1 && <Typography variant="body1">•</Typography>}
      </Stack>
    ));
  };

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
        <Box className={styles.genreContainer}>
          <Stack direction="row" spacing={2}>
            {formatGenre()}
          </Stack>
        </Box>
        <Box className={styles.infoField}>
          <Typography variant="body1" className={styles.plotText}>
            {plot}
          </Typography>
        </Box>

        <Box className={styles.infoField}>
          <Stack direction="row" spacing={1}>
            <Typography variant="body1">Director</Typography>
            {formatContributors(director)}
          </Stack>

          <Stack direction="row" spacing={1}>
            <Typography variant="body1">Writers</Typography>
            {formatContributors(writer)}
          </Stack>

          <Stack direction="row" spacing={1}>
            <Typography variant="body1">Stars</Typography>
            {formatContributors(actors)}
          </Stack>
        </Box>
        <Box className={styles.infoField}>
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <Typography variant="body1">IMDb </Typography>
            <Typography variant="body1">{imdbRating}</Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <Typography variant="body1">Metascore </Typography>
            <Typography variant="body1">{metascore}</Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <Typography variant="body1">Rotten Tomatoes</Typography>
            <Typography variant="body1">
              {ratings.find((rating) => rating.Source === "Rotten Tomatoes")
                ?.Value ?? "N/A"}
            </Typography>
          </Stack>
        </Box>
      </Grid2>
    </Grid2>
  );
}

export default MovieDetailInfo;
