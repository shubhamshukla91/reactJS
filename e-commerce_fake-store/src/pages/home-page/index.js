import React, { useEffect, useCallback } from "react";
import Product from "../../components/product-card";
import Navbar from "../../components/navbar";
// import {useHistory } from "react-router-dom";

const Home = () => {
  const [allProducts, setAllProducts] = React.useState([]);
  const [search, setSearch] = React.useState("");
  // const history = useHistory();

  // api varibale
  const api = "https://fakestoreapi.com/";

  const getAllProducts = useCallback(async () => {
    const response = await fetch(`${api}` + "products");
    const data = await response.json();
    setAllProducts(data);
  }, []);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  return (
    <>
      <Navbar
        variant={"loggedin"}
        cartcount={localStorage.getItem("cartcount")}
      />
      <div>
        <label>Search</label>
        <input
          type="text"
          placeholder="search..."
          className="inputfields"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <h1>
        Welcome {JSON.parse(localStorage.getItem("alluserdata")).fullname}
      </h1>
      {allProducts
        .filter((product) => {
          if (search === "") {
            return product;
          } else if (
            product.title.toLowerCase().includes(search.toLowerCase())
          ) {
            return product;
          }
        })
        .map((product) => (
          <Product
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating.rate}
            count={product.rating.count}
            variant={"home"}
          />
        ))}
    </>
  );
};
export default Home;