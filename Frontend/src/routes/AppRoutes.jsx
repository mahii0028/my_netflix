import React from "react";
import { Routes, Route } from "react-router-dom";
import Browse from "../pages/Browse";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
};

export default AppRoutes;
