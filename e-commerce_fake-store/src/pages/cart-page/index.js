import Navbar from "../../components/navbar";
import Product from "../../components/product-card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContextProvider } from "../../StoreContext/ThemeContext";

const Cart = () => {
  const { colors } = useContext(ThemeContextProvider);

  let count = localStorage.getItem("cartitem");
  const allData = [];
  for (let i = 0; i < count; i++) {
    const data = {
      name: localStorage.getItem("itemname" + i),
      price: localStorage.getItem("itemprice" + i),
      image: localStorage.getItem("itemimage" + i),
      itemquantity: localStorage.getItem("itemquantity" + i),
    };
    allData.push(data);
  }
  // console.log(allData);
  return (
    <div style={{ height: "94vh" }} id={colors}>
      {count == 0 && (
        <>
          <h1>Cart is Empty, Add some Items</h1>
          <button>
            <Link to={"/home"}>Go to shop</Link>
          </button>
        </>
      )}

      {count != 0 && (
        <>
          <h1>Cart has {localStorage.getItem("cartcount")} items</h1>
          <h3>Your Total is {localStorage.getItem("carttotal")}$</h3>
          <button>
            <Link to={"/checkout"}>continue to checkout</Link>
          </button>
          {allData.map((data) => (
            <Product
              title={data.name}
              price={data.price}
              image={data.image}
              itemquantity={data.itemquantity}
              variant={"cart"}
            />
          ))}
        </>
      )}
    </div>
  );
};
export default Cart;