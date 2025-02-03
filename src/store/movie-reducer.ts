import { UnknownAction } from "redux";
import { IMovieType } from "../api/types";

interface IMovieState {
  year: string;
  name: string;
  page: number;
  type: IMovieType | "";
}

const initialState: IMovieState = {
  year: "",
  name: "Pokemon",
  page: 1,
  type: "",
};

export default (state = initialState, { type, payload }: UnknownAction) => {
  switch (type) {
    case "SET_NAME":
      return { ...state, name: payload as string };
    case "SET_YEAR":
      return { ...state, year: payload as string };
    case "SET_TYPE":
      return { ...state, type: payload as IMovieType | "" };
    case "SET_PAGE":
      return { ...state, page: payload as number };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
