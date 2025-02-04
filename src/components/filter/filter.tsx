import { Box } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import YearModal from "./year-modal";
import { useFilter } from "./use-filter.hook";

import styles from "../styles/filter.module.css";

function Filter() {
  const {
    modalOpen,
    yearQuery,
    setYearQuery,
    handleModalClose,
    handleYearChange,
    handleModalOpen,
  } = useFilter();

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
