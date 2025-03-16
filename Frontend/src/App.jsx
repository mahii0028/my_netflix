import React, { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Fragment>
      <AppRoutes />
      <Toaster />
    </Fragment>
  );
};

export default App;
