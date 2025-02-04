import { Divider, Paper } from "@mui/material";
import SearchSelect from "./search-select";
import SearchInput from "./search-input";

import styles from "../styles/search.module.css";

function Search() {
  return (
    <Paper component="form" className={styles.container}>
      <SearchSelect />
      <Divider />
      <SearchInput />
    </Paper>
  );
}

export default Search;
