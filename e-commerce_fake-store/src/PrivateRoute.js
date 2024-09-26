import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("isLoggedin"));
  return token ? children : <Redirect to={"/login"} />;
};
export default PrivateRoute;
