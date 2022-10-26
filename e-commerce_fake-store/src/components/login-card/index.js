import "./index.css";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";

const LoginCard = () => {
  const history = useHistory();

  // const[userDetails, setUserDeatails]=useState

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    if (
      localStorage.getItem("username") === username &&
      localStorage.getItem("password") === password
    ) {
      localStorage.setItem("isLoggedin", true);
      return history.push("/home");
    } else {
      return alert("Wrong Username or Password");
    }
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
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            className="inputfields"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <p>
            Don't have an account? SignUp <Link to={"/signup"}>Here</Link>
          </p>
          {/* <label>submit</label> */}
          <input type="submit" className="inputfields"></input>
        </div>
      </form>
    </div>
  );
};
export default LoginCard;