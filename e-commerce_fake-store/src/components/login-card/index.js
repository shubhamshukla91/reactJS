import "./index.css";
import { Link, useHistory } from "react-router-dom";
import React, { useContext, useState } from "react";
import { ThemeContextProvider } from "../../StoreContext/ThemeContext";

const LoginCard = () => {
  const history = useHistory();
  const { colors } = useContext(ThemeContextProvider);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  var existingUsers = JSON.parse(localStorage.getItem("alluserdata"));

  const submitHandler = () => {
    existingUsers.filter((users) => {
      if (
        users.username === login.username &&
        users.password === login.password
      ) {
        localStorage.setItem("isLoggedin", true);
        localStorage.setItem("isSignedup", true);
        history.push("/home");
      } else if (users.username === "" || users.password === "") {
        alert("Enter Username and Password carefully");
      } else {
        return false;
      }
      return true;
    });
  };
  return (
    <div className="login" id={colors}>
      <h1>log-in</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            className="inputfields"
            value={login.username}
            onChange={(e) =>
              setLogin((prevstate) => {
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
              setLogin((prevstate) => {
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