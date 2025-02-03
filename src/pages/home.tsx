import { useEffect, useState } from "react";
import {
  Box,
  Grid2,
  Button,
  Stack,
  Paper,
  InputBase,
  IconButton,
  Divider,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import { omdbService } from "../api/omdb-service";
import Movie from "../components/movie";
import { IMovie, IMovieType } from "../api/types";
import { NavLink, useNavigate, useSearchParams } from "react-router";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";

const PAGE_SIZE = 10;

function Home() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [movies, setMovies] = useState<IMovie[]>([]);
  const [name, setName] = useState<string>("Pokemon");
  const [year, setYear] = useState<string>("");
  const [type, setType] = useState<IMovieType | "">("");

  const [totalPageCount, setTotalPageCount] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(
    searchParams.get("page") ? parseInt(searchParams.get("page")!) : 1
  );

  const [yearQuery, setYearQuery] = useState<string>("");

  useEffect(() => {
    const getMovies = async () => {
      const response = await omdbService().getMovies({
        name,
        pageNumber,
        type,
        year,
      });
      if (!response || !response.result) {
        navigate("/404");
        return;
      }

      setMovies(response.result);
      setTotalPageCount(Math.ceil(response.totalResults / PAGE_SIZE));
    };

    getMovies();
  }, [name, pageNumber, type, year]);

  const handlePageChange = async (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  const handleNextPage = async () => {
    if (pageNumber < totalPageCount) handlePageChange(pageNumber + 1);
  };

  const handlePreviousPage = async () => {
    if (pageNumber > 1) handlePageChange(pageNumber - 1);
  };

  const [search, setSearch] = useState<string>("");

  const handleSearchClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    handlePageChange(1);
    setName(search);
  };

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(event.target.value);
  };

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleYearChange = () => {
    setYearQuery("");
    if (!yearQuery || yearQuery.length < 4) {
      setYear("");
      return;
    }
    setYear(yearQuery);
  };

  const displayMovies = () =>
    movies.map((movie) => {
      return (
        <Grid2 key={movie.imdbID}>
          <NavLink to={`/movie/${movie.imdbID}`}>
            <Box>
              <Movie key={movie.imdbID} movie={movie} />
            </Box>
          </NavLink>
        </Grid2>
      );
    });

  return (
    <>
      <Stack spacing={2}>
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
        <Box>
          <IconButton type="button" onClick={handleModalOpen}>
            <FilterListIcon />
          </IconButton>
        </Box>
        <Grid2 container spacing={2}>
          {displayMovies()}
        </Grid2>
        <Stack direction="row" spacing={2}>
          {pageNumber > 1 ? (
            <Button onClick={handlePreviousPage}>Previous Page</Button>
          ) : (
            <></>
          )}

          {pageNumber < totalPageCount ? (
            <Button onClick={handleNextPage}>Next Page</Button>
          ) : (
            <></>
          )}
        </Stack>
      </Stack>
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "red",
          }}
        >
          <Stack>
            <IconButton
              sx={{ alignSelf: "end" }}
              type="button"
              onClick={handleModalClose}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                background: "white",
              }}
            >
              <TextField
                label="Year"
                value={yearQuery}
                onChange={(event) => setYearQuery(event.target.value)}
                onBlur={handleYearChange}
              />
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

export default Home;
