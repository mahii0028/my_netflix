import React, { Fragment } from "react";
import Header from "../components/Header";
import netflixBanner from "../assets/netflix_banner.jpg";
import LoginPage from "../components/LoginPage";

const Login = () => {
  return (
    <div className="relative w-full h-screen">
      <Header />
      <img
        className="absolute w-full h-full object-cover"
        src={netflixBanner}
        alt="netflixBanner"
      />
      <Fragment>
        <LoginPage />
      </Fragment>
    </div>
  );
};

export default Login;
