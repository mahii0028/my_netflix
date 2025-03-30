import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useMovies = (movieApi, movieType) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await movieApi();

        if (res.status === 200) {
          const movieData = res.data.results; // Access the 'results' field from response
          dispatch(movieType(movieData)); // Dispatch the movie data to Redux store
        } else {
          console.log("API Error:", res.status); // Log if status is not 200
        }
      } catch (error) {
        console.log("Fetch error:", error); // Log any error that occurs during the fetch
      }
    };

    fetchMovieDetails(); // Fetch movies when the component mounts
  }, [dispatch, movieApi, movieType]); // Dependencies for useEffect
};

export default useMovies;
