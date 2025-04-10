import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../store/movieSlice";

const useMovieById = (movieApi, id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return; // Avoid unnecessary API calls

    const fetchMovieById = async () => {
      try {
        const res = await movieApi(id);
        const trailer = res?.data?.results?.filter(
          (item) => item.type === "Trailer"
        );

        dispatch(
          getTrailerMovie(
            trailer.length > 0 ? trailer[0] : res?.data?.results?.[0] || null
          )
        );
      } catch (error) {
        console.error("Error fetching movie by ID:", error);
      }
    };

    fetchMovieById();
  }, [id, movieApi, dispatch]); // Dependencies to re-run effect if values change
};

export default useMovieById;
