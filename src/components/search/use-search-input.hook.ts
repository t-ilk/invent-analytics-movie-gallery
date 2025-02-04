import { useDispatch } from "../../store/hooks";
import { useState } from "react";

export function useSearchInput() {
  const dispatch = useDispatch();

  const setPageNumber = (page: number) => {
    dispatch({ type: "SET_PAGE", payload: page });
  };
  const setName = (name: string) => {
    dispatch({ type: "SET_NAME", payload: name });
  };

  const [search, setSearch] = useState<string>("");

  const handleSearchClick = async (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    if (search === "") return;
    handleSearchClick(event);
  };

  return {
    handleSearchClick,
    handleInputChange,
    handleKeyDown,
  };
}
