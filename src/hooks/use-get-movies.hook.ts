import { useEffect, useState } from "react";
import { omdbService } from "../api/omdb-service";
import { IMovie } from "../api/types";
import { useNavigate } from "react-router";
import { useSelector } from "../store/hooks";

const PAGE_SIZE = 10;

export function useGetMovies() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState<IMovie[]>([]);

  const name = useSelector((store) => store.movieData.name);
  const year = useSelector((store) => store.movieData.year);
  const type = useSelector((store) => store.movieData.type);
  const pageNumber = useSelector((store) => store.movieData.page);

  const [totalPageCount, setTotalPageCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const response = await omdbService().getMovies({
          name,
          pageNumber,
          type,
          year,
        });
        if (!response || !response.result) {
          throw new Error("Error getting movies");
        }

        setMovies(response.result);
        setTotalPageCount(Math.ceil(response.totalResults / PAGE_SIZE));
      } catch (error) {
        console.error("Error getting movies", error);
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [name, pageNumber, type, year]);

  return { movies, totalPageCount, loading };
}
