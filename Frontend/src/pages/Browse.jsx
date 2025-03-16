import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <Fragment>
      <Header />
      <div></div>
    </Fragment>
  );
};

export default Browse;
