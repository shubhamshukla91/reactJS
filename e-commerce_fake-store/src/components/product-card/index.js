import "./index.css";
import { Link } from "react-router-dom";
import React from "react";

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
}) => {
  const cartcount = Number(localStorage.getItem("cartcount"));
  const carttotal = Number(localStorage.getItem("carttotal"));
  const handleClick = () => {
    localStorage.setItem("cartcount", cartcount + 1);
    window.location.reload(false);
    localStorage.setItem("itemname" + cartcount, title);
    localStorage.setItem("itemprice" + cartcount, price);
    localStorage.setItem("itemimage" + cartcount, image);
    localStorage.setItem("carttotal", carttotal + price);
  };
  return (
    <>
      <div className="card">
        <p>Product Name: {title}</p>
        <p>Price: {price}$</p>
        <img src={image} alt="Product image" height="150" width="150" />
        {variant === "detail" && <p>Description : {description}</p>}
        {variant === "detail" && <p>Category : {category}</p>}
        {variant === "home" && (
          <p>
            {" "}
            Rating : {rating}, Rated By :{count}
          </p>
        )}
        {variant === "home" && (
          <button>
            <Link to={"/product-detail/" + `${id}`}>More information</Link>
          </button>
        )}
        {variant === "detail" && (
          <button onClick={handleClick}>Add to Cart</button>
        )}
      </div>
    </>
  );
};
export default Product;