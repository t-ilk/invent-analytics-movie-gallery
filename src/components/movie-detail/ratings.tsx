import { Box, Stack, Typography } from "@mui/material";

import styles from "../styles/movie-detail-info.module.css";

interface Props {
  imdbRating: string;
  metascore: string;
  ratings: { Source: string; Value: string }[];
}

function Ratings({ imdbRating, metascore, ratings }: Props) {
  return (
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
  );
}

export default Ratings;
