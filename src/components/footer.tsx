import { Box, Stack, Typography } from "@mui/material";

import styles from "./styles/footer.module.css";

function Footer() {
  return (
    <Box className={styles.footer}>
      <Stack spacing={2}>
        <Typography variant="h3" align="center">
          OBDb
        </Typography>
        <Typography variant="h5" align="center">
          This is a very humble footer :)
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
