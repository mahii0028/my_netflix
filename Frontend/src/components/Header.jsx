import React from "react";
import { useSelector, useDispatch } from "react-redux";
import netflixLogo from "../assets/netflix_logo.png";
import { setUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../api/api";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await userLogout(); // Logout api call
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="absolute z-10 flex w-[100%] items-center justify-between px-4 bg-gradient-to-b from-black">
      <img className="w-48" src={netflixLogo} alt="netflixLogo" />
      {user?.userName && (
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium text-white ">{user?.userName}</h1>
          <div className="ml-4">
            <button
              onClick={logoutHandler}
              className="bg-red-800 text-white px-4 py-2 cursor-pointer"
            >
              Logout
            </button>
            <button className="bg-red-800 text-white px-4 py-2 ml-2 cursor-pointer">
              Search Movie
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
