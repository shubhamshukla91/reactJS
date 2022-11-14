import { useParams } from "react-router-dom";
import Product from "../../components/product-card";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../../components/navbar";

const ProductDetails = () => {
  const params = useParams();

  const [productDetail, setProductDetail] = React.useState([]);

  // api varibale
  const api = "https://fakestoreapi.com/";

  const getProductDetail = useCallback(async () => {
    const response = await fetch(`${api}` + "products/" + `${params.id}`);
    const data = await response.json();
    setProductDetail(data);
  }, []);

  useEffect(() => {
    getProductDetail();
  }, [getProductDetail]);
  console.log(productDetail.title);
  return (
    <>
      <Navbar
        variant={"loggedin"}
        cartcount={localStorage.getItem("cartcount")}
      />
      <h1>Product Details</h1>
      <Product
        variant={"detail"}
        id={productDetail.id}
        title={productDetail.title}
        price={productDetail.price}
        description={productDetail.description}
        category={productDetail.category}
        image={productDetail.image}
      />
    </>
  );
};
export default ProductDetails;