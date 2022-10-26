import Navbar from "../../components/navbar";
import "./index.css";

const LandingPage = () => {
  localStorage.setItem("isLoggedin", false);
  localStorage.setItem("isSignedup", false);
  localStorage.setItem("cartcount", 0);
  localStorage.setItem("carttotal", 0);
  return (
    <>
      <Navbar variant={"notloggedin"} />
      <h1>Welcome to Fake Store</h1>
      <h3>This is made using Fake Store Api</h3>
    </>
  );
};
export default LandingPage;