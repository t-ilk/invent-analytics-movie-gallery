import { FormControl, MenuItem, Select } from "@mui/material";
import { IMovieType } from "../../api/types";
import { useDispatch, useSelector } from "../../store/hooks";

function SearchSelect() {
  const type = useSelector((store) => store.movieData.type);
  const dispatch = useDispatch();

  const setType = (type: IMovieType) => {
    dispatch({ type: "SET_TYPE", payload: type });
  };

  return (
    <FormControl>
      <Select
        value={type}
        onChange={(event) => setType(event.target.value as IMovieType)}
        displayEmpty
      >
        <MenuItem value={""}>All</MenuItem>
        <MenuItem value={"movie"}>Movies</MenuItem>
        <MenuItem value={"series"}>Series</MenuItem>
        <MenuItem value={"episode"}>Episodes</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SearchSelect;
