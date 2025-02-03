import { client } from "./client";
import { IMovie } from "./types";

export function omdbService() {
  const axiosClient = client;

  async function getMovies({
    name,
    type,
    year,
    pageNumber = 1,
  }: {
    name: string;
    type?: string;
    year?: string;
    pageNumber?: number;
  }): Promise<{
    result: IMovie[];
    totalResults: number;
  } | void> {
    try {
      const response = await axiosClient.get("", {
        params: { s: name, type, y: year, page: pageNumber },
      });

      if (!response || !response.data) throw new Error("No Response Data!");
      if (response.data.Response === false)
        throw new Error(response.data.Error);

      return {
        result: response.data.Search,
        totalResults: Number(response.data.totalResults),
      };
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function getMovieDetail(id: string): Promise<IMovie | void> {
    try {
      const response = await axiosClient.get("", {
        params: { i: id },
      });

      if (!response || !response.data) throw new Error("No Response Data!");
      if (response.data.Response === false)
        throw new Error(response.data.Error);

      return response.data;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return { getMovies, getMovieDetail };
}
