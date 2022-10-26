import "./index.css";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";

const SignupCard = () => {
  const history = useHistory();

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (fullname === "") {
      return alert("Please Enter Name");
    } else if (email === "") {
      return alert("Please enter Email");
    } else if (username === "") {
      return alert("Please enter Username");
    } else if (password === "") {
      return alert("Please enter Password");
    } else if (confirmpassword === "") {
      return alert("Please enter Confirmation Password");
    } else if (!(password === confirmpassword)) {
      return alert("Please check passwords are not matching!");
    } else if (address === "") {
      return alert("Please enter Address");
    } else {
      localStorage.setItem("name", fullname);
      localStorage.setItem("email", email);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("address", address);
      localStorage.setItem("isSignedup", true);
      return history.push("/login");
    }
  };
  return (
    <div className="signup">
      <h1>sign-up</h1>
      <h3>Enter Your Details</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input
            type="text"
            className="inputfields"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            className="inputfields"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
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
          <label>Confirm Password</label>
          <input
            type="password"
            className="inputfields"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            className="inputfields"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
        <div>
          <p>
            Already have an account? Login <Link to={"/login"}>Here</Link>
          </p>
          {/* <label>submit</label> */}
          <input type="submit" className="inputfields"></input>
        </div>
      </form>
    </div>
  );
};
export default SignupCard;