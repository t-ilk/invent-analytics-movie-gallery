import { Box, Modal, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import styles from "../styles/year-modal.module.css";

interface Props {
  modalOpen: boolean;
  handleModalClose: () => void;
  yearQuery: string;
  setYearQuery: (year: string) => void;
  handleYearChange: () => void;
}

function YearModal({
  modalOpen,
  handleModalClose,
  yearQuery,
  setYearQuery,
  handleYearChange,
}: Props) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    handleYearChange();
    handleModalClose();
  };

  return (
    <Modal open={modalOpen} onClose={handleModalClose}>
      <Box className={styles.modalWindow}>
        <Stack className={styles.windowLayout}>
          <Box className={styles.button} onClick={handleModalClose}>
            <CloseIcon />
          </Box>
          <Box className={styles.inputContainer}>
            <TextField
              className={styles.input}
              label="Write a Year"
              value={yearQuery}
              onChange={(event) => setYearQuery(event.target.value)}
              onBlur={handleYearChange}
              onKeyDown={handleKeyDown}
            />
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
}

export default YearModal;
