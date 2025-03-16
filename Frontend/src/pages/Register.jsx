import React, { Fragment } from "react";
import netflixBanner from "../assets/netflix_banner.jpg";
import SignUpPage from "../components/SignUpPage";
import Header from "../components/Header";

const Register = () => {
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img className="w-full" src={netflixBanner} alt="netflixBanner" />
        <Fragment>
          <SignUpPage />
        </Fragment>
      </div>
    </div>
  );
};

export default Register;
