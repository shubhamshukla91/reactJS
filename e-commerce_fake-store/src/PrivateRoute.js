import React from "react";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("isLoggedin"));
  //console.log(token);
  return token ? children : <Redirect to={"/login"} />;
};
export default PrivateRoute;