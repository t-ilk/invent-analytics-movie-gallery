import {
  useSelector as reduxUseSelector,
  useDispatch as reduxUseDispatch,
} from "react-redux";
import { AppDispatch, RootState } from "./types";

export const useSelector = reduxUseSelector.withTypes<RootState>();
export const useDispatch = reduxUseDispatch.withTypes<AppDispatch>();
