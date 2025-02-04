import { useState } from "react";
import { useDispatch } from "../../store/hooks";

export function useFilter() {
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

  return {
    modalOpen,
    yearQuery,
    setYearQuery,
    handleModalClose,
    handleYearChange,
    handleModalOpen,
  };
}
