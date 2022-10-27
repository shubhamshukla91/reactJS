import "./index.css";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";

const LoginCard = () => {
  const history = useHistory();

  const [login, setlogin] = useState({
    username: "",
    password: "",
  });
  var existingusers = JSON.parse(localStorage.getItem("alluserdata"));

  const submitHandler = () => {
    existingusers.filter((users) => {
      if (
        users.username === login.username &&
        users.password === login.password
      ) {
        localStorage.setItem("isLoggedin", true);
        localStorage.setItem("isSignedup", true);
        history.push("/home");
      } else if (users.username === "" || users.password === "") {
        alert("Enter Username and Password carefully");
      }
    });
  };
  return (
    <div className="login">
      <h1>log-in</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            className="inputfields"
            value={login.username}
            onChange={(e) =>
              setlogin((prevstate) => {
                return { ...prevstate, username: e.target.value };
              })
            }
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            className="inputfields"
            value={login.password}
            onChange={(e) =>
              setlogin((prevstate) => {
                return { ...prevstate, password: e.target.value };
              })
            }
          ></input>
        </div>
        <div>
          <p>
            Don't have an account, SignUp <Link to={"/signup"}>Here</Link>
          </p>
          <input type="submit" className="inputfields"></input>
        </div>
      </form>
    </div>
  );
};
export default LoginCard;