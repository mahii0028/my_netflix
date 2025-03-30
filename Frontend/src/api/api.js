import axios from "axios";

// Base URL for your backend
const BASE_URL = "http://localhost:4000/api/v1/user";

// Axios instance for your backend
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Backend API functions
export const userRegister = (userData) => axiosInstance.post("/register", userData);
export const userLogin = (userData) => axiosInstance.post("/login", userData);
export const userLogout = () => axiosInstance.get("/logout");

// TMDB API configuration
const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
  },
});

// TMDB API functions
export const nowPlayingMovies = () => tmdbInstance.get("/movie/now_playing");
export const popularMovies = () => tmdbInstance.get("/movie/popular");
export const topRatedMovies = () => tmdbInstance.get("/movie/top_rated");
export const upComingMovies = () => tmdbInstance.get("/movie/upcoming");