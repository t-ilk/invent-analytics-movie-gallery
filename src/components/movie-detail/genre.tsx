import { Box, Stack, Typography } from "@mui/material";

import styles from "../styles/movie-detail-info.module.css";

interface Props {
  genre: string;
}

function Genre({ genre }: Props) {
  const formatGenre = () => {
    return genre.split(", ").map((item) => (
      <Box key={item} className={styles.genreItem}>
        <Typography>{item}</Typography>
      </Box>
    ));
  };

  return (
    <Box className={styles.genreContainer}>
      <Stack direction="row" spacing={2}>
        {formatGenre()}
      </Stack>
    </Box>
  );
}

export default Genre;
