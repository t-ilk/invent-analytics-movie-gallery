import { Box, IconButton, Modal, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
  return (
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
  );
}

export default YearModal;
