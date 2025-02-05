import { useDispatch } from "../../store/hooks";
import { useState } from "react";

export function useSearchInput() {
  const dispatch = useDispatch();

  const setName = (name: string) => {
    dispatch({ type: "SET_NAME", payload: name });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const [search, setSearch] = useState<string>("");

  const handleSearchClick = async (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    reset();
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
