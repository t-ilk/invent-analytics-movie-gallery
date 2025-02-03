import { combineReducers, createStore } from "redux";
import movieReducer from "./movie-reducer";


const rootReducer = combineReducers({
  movieData: movieReducer,
});

export const store = createStore(rootReducer);
