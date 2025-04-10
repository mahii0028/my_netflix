import React from "react";
import { useSelector, useDispatch } from "react-redux";
import netflixLogo from "../assets/netflix_logo.png";
import { setUser } from "../store/userSlice";
import { handleSearchMovie } from "../store/movieSlice";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../api/api";
import toast from "react-hot-toast";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const isSearchMovie = useSelector((state) => state.movie.isSearchMovie);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await userLogout(); // Logout api call
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error:", error);
    }
  };

  return (
    <div className="absolute z-10 flex w-full items-center justify-between px-4 bg-gradient-to-b from-black">
      <img
        className="w-32 sm:w-40 md:w-48 lg:w-56 object-contain"
        src={netflixLogo}
        alt="netflixLogo"
      />
      {user?.userName && (
        <div className="flex items-center justify-between">
          <h1 className="text-sm sm:text-base md:text-lg font-medium text-white">
            {user?.userName}
          </h1>
          <div className="ml-2 sm:ml-4">
            <button
              onClick={logoutHandler}
              className="bg-red-800 text-white px-2 sm:px-4 py-1 sm:py-2 cursor-pointer"
            >
              Logout
            </button>
            <button
              onClick={() => dispatch(handleSearchMovie())}
              className="bg-red-800 text-white px-2 sm:px-4 py-1 sm:py-2 ml-2 cursor-pointer"
            >
              {isSearchMovie ? "Home" : "Search Movie"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
