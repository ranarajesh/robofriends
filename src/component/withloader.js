import React from "react";
import Loader from "./loader";
const WithLoader = ({ show, children }) => {
  return show ? children : <Loader />;
};

export default WithLoader;
