import { Box, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import YearModal from "./year-modal";
import { useDispatch } from "../store/hooks";

import styles from "./styles/filter.module.css";

function Filter() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [yearQuery, setYearQuery] = useState<string>("");

  const dispatch = useDispatch();
  const setYear = (year: string) => {
    dispatch({ type: "SET_YEAR", payload: year });
  };
  const handleYearChange = () => {
    setYearQuery("");
    if (!yearQuery || yearQuery.length < 4) {
      setYear("");
      return;
    }

    setYear(yearQuery);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.button} onClick={handleModalOpen}>
        <FilterListIcon />
      </Box>
      <YearModal
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
        yearQuery={yearQuery}
        setYearQuery={setYearQuery}
        handleYearChange={handleYearChange}
      />
    </Box>
  );
}

export default Filter;
