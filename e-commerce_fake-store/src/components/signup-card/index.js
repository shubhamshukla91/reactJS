import "./index.css";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupCard = () => {
  const history = useHistory();
  var existingusers = JSON.parse(localStorage.getItem("alluserdata"));
  const [userdata, setuserdata] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
    address: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    if (userdata.fullname === "") {
      return alert("Please Enter Name");
    } else if (userdata.email === "") {
      return alert("Please enter Email");
    } else if (userdata.username === "") {
      return alert("Please enter Username");
    } else if (userdata.password === "") {
      return alert("Please enter Password");
    } else if (userdata.confirmpassword === "") {
      return alert("Please enter Confirmation Password");
    } else if (!(userdata.password === userdata.confirmpassword)) {
      return alert("Please check passwords are not matching");
    } else if (userdata.address === "") {
      return alert("Please enter Address");
    } else {
      existingusers.push(userdata);
      localStorage.setItem("alluserdata", JSON.stringify(existingusers));
      localStorage.setItem("isSignedup", true);
      alert("User added successfully!")
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
            value={userdata.fullname}
            onChange={(e) =>
              setuserdata((prevstate) => {
                return { ...prevstate, fullname: e.target.value };
              })
            }
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            className="inputfields"
            value={userdata.email}
            onChange={(e) =>
              setuserdata((prevstate) => {
                return { ...prevstate, email: e.target.value };
              })
            }
          ></input>
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            className="inputfields"
            value={userdata.username}
            onChange={(e) =>
              setuserdata((prevstate) => {
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
            value={userdata.password}
            onChange={(e) =>
              setuserdata((prevstate) => {
                return { ...prevstate, password: e.target.value };
              })
            }
          ></input>
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            className="inputfields"
            value={userdata.confirmpassword}
            onChange={(e) =>
              setuserdata((prevstate) => {
                return { ...prevstate, confirmpassword: e.target.value };
              })
            }
          ></input>
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            className="inputfields"
            value={userdata.address}
            onChange={(e) =>
              setuserdata((prevstate) => {
                return { ...prevstate, address: e.target.value };
              })
            }
          ></input>
        </div>
        <div>
          <p>
            Already have an account, Login <Link to={"/login"}>Here</Link>
          </p>
          <input type="submit" className="inputfields"></input>
        </div>
      </form>
    </div>
  );
};
export default SignupCard;