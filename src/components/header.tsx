import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Search from "./search/search";

import styles from "./styles/header.module.css";
import { NavLink } from "react-router";

interface Props {
  withSearch?: boolean;
}

function Header({ withSearch = true }: Props) {
  return (
    <AppBar position="sticky" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <NavLink to="/">
        <Typography
          variant="h6"
          noWrap
          component="div"
          className={styles.title}
        >
          OMDb
        </Typography>
        </NavLink>
        <Box className={styles.searchContainer}>
          {withSearch ? <Search /> : <></>}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
