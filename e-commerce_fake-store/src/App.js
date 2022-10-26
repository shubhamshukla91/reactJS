import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Login from "./pages/login-page";
import Signup from "./pages/signup-page";
import Home from "./pages/home-page";
import ProductDetails from "./pages/productdetail-page";
import Cart from "./pages/cart-page";
import Checkout from "./pages/checkout-page";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/product-detail/:id" component={ProductDetails} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;