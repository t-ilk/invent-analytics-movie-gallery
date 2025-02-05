import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "../store/hooks";

import styles from "./styles/not-found.module.css";
import { NavLink } from "react-router";

function NotFound() {
  const dispatch = useDispatch();
  const resetStore = () => {
    dispatch({ type: "RESET" });
  };

  useEffect(() => {
    resetStore();
  }, []);
  return (
    <Box className={styles.container}>
      <Typography variant="h4" className={styles.text}>
        404 Not Found
      </Typography>
      <Typography variant="h6" className={styles.text}>
        Perhaps you should start over :(
      </Typography>

      <NavLink to="/" className={styles.link}>
        <Typography variant="h6" className={styles.text}>
          Go home
        </Typography>
      </NavLink>
    </Box>
  );
}

export default NotFound;
