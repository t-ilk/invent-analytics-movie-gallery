import { Stack } from "@mui/material";
import { useSelector, useDispatch } from "../store/hooks";
import { Pagination as MUIPagination } from "@mui/material";
import styles from "./styles/pagination.module.css";

interface Props {
  totalPageCount: number;
}

function Pagination({ totalPageCount }: Props) {
  const pageNumber = useSelector((store) => store.movieData.page);
  const dispatch = useDispatch();
  const setPageNumber = (page: number) => {
    dispatch({ type: "SET_PAGE", payload: page });
  };

  const handlePageChange = async (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  return (
    <Stack direction="row" spacing={2} className={styles.container}>
      <MUIPagination
        count={totalPageCount}
        page={pageNumber}
        onChange={(_event: React.ChangeEvent<unknown>, pageNumber: number) =>
          handlePageChange(pageNumber)
        }
        boundaryCount={2}
        variant="outlined"
        size="large"
      />
    </Stack>
  );
}

export default Pagination;
