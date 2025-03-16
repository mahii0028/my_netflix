import React, { Fragment, useState } from "react";
import Header from "../components/Header";
import netflixBanner from "../assets/netflix_banner.jpg";
import LoginPage from "../components/LoginPage";


const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img className="w-full" src={netflixBanner} alt="netflixBanner" />
        <Fragment>
          <LoginPage />
        </Fragment>
      </div>
    </div>
  );
};

export default Login;
