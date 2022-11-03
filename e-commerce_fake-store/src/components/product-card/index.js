import "./index.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  count,
  variant,
  itemquantity,
}) => {
  const [quantity, setquantity] = useState("");
 
  const cartcount = Number(localStorage.getItem("cartcount"));
  const carttotal = Number(localStorage.getItem("carttotal"));
  const cartitem = Number(localStorage.getItem("cartitem"));
  let cartDetails=[];
  const handleClick = (e) => {
    if (quantity < 1) {
      alert("Please select a valid quantity");
    } else {
      localStorage.setItem("cartcount", cartcount + Number(quantity));
      localStorage.setItem("cartitem", cartitem + 1);
      // window.location.reload(false);
      localStorage.setItem("itemname" + cartitem, title);
      localStorage.setItem("itemprice" + cartitem, price);
      localStorage.setItem("itemimage" + cartitem, image);
      localStorage.setItem("itemquantity" + cartitem, quantity);
      localStorage.setItem("carttotal", carttotal + quantity * price);
      
      cartDetails.push({cartcount: cartcount+Number(quantity),
        cartitem: cartitem+1,
        itemname: title,
        itemprice: price,
        itemimage: image,
        itemquantity: quantity,
        carttotal: carttotal + quantity * price,})
    }
    
      localStorage.setItem("cartDetails", JSON.stringify(cartDetails));
  };

  return (
    <>
      <div className="card">
        <p>Product Name: {title}</p>
        {variant === "cart" && <p>Quantity: {itemquantity}</p>}
        <p>Price: {price}$</p>
        <img src={image} alt="product" height="150" width="150" loading="lazy" />
        {variant === "detail" && <p>{description}</p>}
        {variant === "detail" && <p>{category}</p>}
        {variant === "home" && (
          <p>
            {" "}
            Rating: {rating}, Rated By:{count}
          </p>
        )}
        {variant === "home" && (
          <button>
            <Link to={"/product-detail/" + `${id}`}>More information</Link>
          </button>
        )}
        {variant === "detail" && (
          <>
            <div>
              <label>Quantity</label>
              <input
                type="number"
                className="inputfields"
                value={quantity}
                onChange={(e) => setquantity(e.target.value)}
                placeholder="00"
              ></input>
            </div>
            <button onClick={handleClick}>
              <Link to={{ pathname: "/home" }}>Add to Cart</Link>
            </button>
          </>
        )}
      </div>
    </>
  );
};
export default Product;