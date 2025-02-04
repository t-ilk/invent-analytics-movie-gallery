import { Box, Typography } from "@mui/material";

import styles from "../styles/movie-detail-info.module.css";

interface Props {
  plot: string;
}

function Plot({ plot }: Props) {
  return (
    <Box className={styles.infoField}>
      <Typography variant="body1" className={styles.plotText}>
        {plot}
      </Typography>
    </Box>
  );
}

export default Plot;
