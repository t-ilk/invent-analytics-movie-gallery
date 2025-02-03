import { client } from "./client";
import { IMovie } from "./types";

export function omdbService() {
  const axiosClient = client;

  async function getMovies({
    name,
    queryParams = {},
    pageNumber = 1,
  }: {
    name: string;
    queryParams?: { type?: string; year?: string };
    pageNumber?: number;
  }): Promise<IMovie[] | void> {
    try {
      const response = await axiosClient.get("", {
        params: { s: name, ...queryParams, page: pageNumber },
      });

      if (!response || !response.data) throw new Error("No Response Data!");
      if (response.data.Response === false)
        throw new Error(response.data.Error);

      return response.data.Search;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return { getMovies };
}
