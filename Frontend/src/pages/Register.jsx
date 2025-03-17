import React, { Fragment } from "react";
import netflixBanner from "../assets/netflix_banner.jpg";
import SignUpPage from "../components/SignUpPage";
import Header from "../components/Header";

const Register = () => {
  return (
    <div className="relative w-full h-screen">
      <Header />
      <img
        className="absolute w-full h-full object-cover"
        src={netflixBanner}
        alt="netflixBanner"
      />
      <Fragment>
        <SignUpPage />
      </Fragment>
    </div>
  );
};

export default Register;
