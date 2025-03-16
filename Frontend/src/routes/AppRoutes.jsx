import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/brows" element={<Header />} />
    </Routes>
  );
};

export default AppRoutes;
