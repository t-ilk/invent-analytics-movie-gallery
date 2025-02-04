import { Box, Stack, Typography } from "@mui/material";

import styles from "../styles/movie-detail-info.module.css";

interface Props {
  director: string;
  writer: string;
  actors: string;
}

function Contributers({ director, writer, actors }: Props) {
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
  );
}

export default Contributers;
