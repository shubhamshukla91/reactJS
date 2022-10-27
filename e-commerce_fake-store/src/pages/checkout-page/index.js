import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Checkout = () => {
  const [state, setstate] = useState(0);
  const history = useHistory();
  let count = localStorage.getItem("cartcount");
  let address = localStorage.getItem("address");
  let total = localStorage.getItem("carttotal");
  let itemcount = localStorage.getItem("cartitem");
  const handleClick = () => {
    setstate(1);
    setTimeout(handleClick2, 6000);
  };
  const handleClick2 = () => {
    localStorage.setItem("cartcount", 0);
    localStorage.setItem("carttotal", 0);
    localStorage.setItem("cartitem", 0);
    for (let i = 0; i < itemcount; i++) {
      localStorage.removeItem("itemname" + i);
      localStorage.removeItem("itemprice" + i);
      localStorage.removeItem("itemimage" + i);
      localStorage.removeItem("itemquantity" + i);
    }
    return history.push("/home");
  };
  return (
    <>
      {state == 0 && <button onClick={handleClick}>Confirm Order</button>}
      {state == 1 && (
        <h2>
          Your order for {count} items has been placed successfully,will be
          delivered at {address} in 3-4 working days. The total payable amount
          will be {total}$.
        </h2>
      )}
    </>
  );
};
export default Checkout;