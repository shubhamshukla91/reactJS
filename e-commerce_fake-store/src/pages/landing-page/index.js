import { useContext } from "react";
import Navbar from "../../components/navbar";
import { ThemeContextProvider } from "../../StoreContext/ThemeContext";
import "./index.css";

const LandingPage = () => {
  const { colors } = useContext(ThemeContextProvider);

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
      password: "1234q",
      confirmpassword: "1234q",
      address: "demo nagar, demo city",
    },
    {
      fullname: "shubham shukla",
      email: "shubham.shukla@gmail.com",
      username: "shubham11",
      password: "123EZSx",
      confirmpassword: "123ESZx",
      address: "Vivekanandnagar, Sultanpur city",
    },
  ];
  localStorage.setItem("alluserdata", JSON.stringify(alluserdata));
  return (
    <div style={{ height: "96.6vh" }} id={colors}>
      <Navbar variant={"notloggedin"} />
      <h1>Welcome to Fake Store</h1>
      <h3>This is made using Fake Store Api</h3>
    </div>
  );
};
export default LandingPage;