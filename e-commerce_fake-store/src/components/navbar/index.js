import "./index.css";
import { Link } from "react-router-dom";

const Navbar = ({ variant, cartcount }) => {
  // const cartcount =
  return (
    <div className="nav">
      <div className="navitems">
        <span className="logo">COMPANY LOGO</span>
        {variant === "notloggedin" && (
          <button className="started">
            {" "}
            <Link to={"/signup"}>Get Started</Link>{" "}
          </button>
        )}
        {variant === "loggedin" && <p>Your cart has {cartcount} items</p>}
        {variant === "loggedin" && (
          <button className="started">
            {" "}
            <Link to={"/cart"}>Cart</Link>{" "}
          </button>
        )}
      </div>
    </div>
  );
};
export default Navbar;