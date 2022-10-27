import Navbar from "../../components/navbar";
import "./index.css";

const LandingPage = () => {
  localStorage.setItem("isLoggedin", false);
  localStorage.setItem("isSignedup", false);
  localStorage.setItem("cartcount", 0);
  localStorage.setItem("carttotal", 0);
  localStorage.setItem("cartitem", 0);
  var alluserdata = [
    {
      fullname: "demo narayan",
      email: "demo@gmail.com",
      username: "demo11",
      password: "1234",
      confirmpassword: "1234",
      address: "demo nagar, demo city",
    },
  ];
  localStorage.setItem("alluserdata", JSON.stringify(alluserdata));
  return (
    <>
      <Navbar variant={"notloggedin"} />
      <h1>Welcome to Fake Store</h1>
      <h3>This is made using Fake Store Api</h3>
    </>
  );
};
export default LandingPage;