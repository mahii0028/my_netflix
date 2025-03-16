import React, { Fragment, useState } from "react";
import Header from "../components/Header";
import netflixBanner from "../assets/netflix_banner.jpg";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";

const Login = () => {
  const [login, setLogin] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img className="w-full" src={netflixBanner} alt="netflixBanner" />
        <Fragment>
          {login ? (
            <LoginPage setLogin={setLogin} />
          ) : (
            <SignUpPage setLogin={setLogin} />
          )}
        </Fragment>
      </div>
    </div>
  );
};

export default Login;
