import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "../store/hooks";

function NotFound() {
  const dispatch = useDispatch();
  const resetStore = () => {
    dispatch({ type: "RESET" });
  };

  useEffect(() => {
    resetStore();
  }, []);
  return (
    <Box>
      <Typography variant="h4">404 Not Found</Typography>
    </Box>
  );
}

export default NotFound;
