import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/search.module.css";
import { useSearchInput } from "./use-search-input.hook";

function SearchInput() {
  const { handleSearchClick, handleInputChange, handleKeyDown } =
    useSearchInput();

  return (
    <InputBase
      className={styles.input}
      placeholder="Search Movies"
      endAdornment={
        <IconButton type="button" onClick={handleSearchClick}>
          <SearchIcon />
        </IconButton>
      }
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
  );
}

export default SearchInput;
