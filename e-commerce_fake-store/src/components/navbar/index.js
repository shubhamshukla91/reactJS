import "./index.css";
import { Link } from "react-router-dom";
import { ThemeContextProvider } from "../../StoreContext/ThemeContext";
import { useContext } from "react";
import Themechanger from "../../StoreContext/Themechanger";

const Navbar = ({ variant, cartcount }) => {
  const { colors } = useContext(ThemeContextProvider);
  return (
    <div className="nav" id={colors}>
      <div className="navitems" id={"nav" + colors}>
        <span className="logo" id={"nav" + colors}>
          COMPANY LOGO
        </span>
        {variant === "notloggedin" && (
          <button className="started">
            {" "}
            <Link to={"/signup"}>Get Started</Link>{" "}
          </button>
        )}
        {variant === "loggedin" && <p>Your cart has {cartcount} items</p>}
        {variant === "loggedin" && (
          <button className="started" id={"nav" + colors}>
            {" "}
            <Link id={"nav" + colors} to={"/cart"}>
              Cart
            </Link>{" "}
          </button>
        )}
        <Themechanger />
      </div>
    </div>
  );
};
export default Navbar;