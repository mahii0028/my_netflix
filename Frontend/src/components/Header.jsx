import React from "react";
import netflixLogo from "../assets/netflix_logo.png";

const Header = () => {
  return (
    <div className="absolute z-10 flex w-[100%] items-center justify-between px-4 bg-gradient-to-b from-black">
      <img className="w-48" src={netflixLogo} alt="netflixLogo" />
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium text-white ">Mahesh mern</h1>
        <div className="ml-4">
          <button className="bg-red-800 text-white px-4 py-2 cursor-pointer">
            Logout
          </button>
          <button className="bg-red-800 text-white px-4 py-2 ml-2 cursor-pointer">
            Search Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
