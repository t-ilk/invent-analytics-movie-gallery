import {
  Divider,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IMovieType } from "../api/types";
import { useDispatch, useSelector } from "../store/hooks";
import { useState } from "react";

function Search() {
  const type = useSelector((store) => store.movieData.type);
  const dispatch = useDispatch();

  const setType = (type: IMovieType) => {
    dispatch({ type: "SET_TYPE", payload: type });
  };
  const setPageNumber = (page: number) => {
    dispatch({ type: "SET_PAGE", payload: page });
  };
  const setName = (name: string) => {
    dispatch({ type: "SET_NAME", payload: name });
  };

  const [search, setSearch] = useState<string>("");

  const handleSearchClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    setPageNumber(1);
    setName(search);
  };

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(event.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
      }}
    >
      <FormControl>
        <InputLabel id="select-label">Type</InputLabel>
        <Select
          labelId="select-label"
          value={type}
          label="Type"
          onChange={(event) => setType(event.target.value as IMovieType)}
        >
          <MenuItem value={""}>All</MenuItem>
          <MenuItem value={"movie"}>Movies</MenuItem>
          <MenuItem value={"series"}>Series</MenuItem>
          <MenuItem value={"episode"}>Episodes</MenuItem>
        </Select>
      </FormControl>
      <Divider />
      <InputBase
        placeholder="Search Movies"
        endAdornment={
          <IconButton type="button" onClick={handleSearchClick}>
            <SearchIcon />
          </IconButton>
        }
        onChange={handleInputChange}
      />
    </Paper>
  );
}

export default Search;
