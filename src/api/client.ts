import axios from "axios";

const baseURL =
  "https://www.omdbapi.com/?" +
  "apikey=" +
  import.meta.env.VITE_OMDB_API_KEY +
  "&";

export const client = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});
