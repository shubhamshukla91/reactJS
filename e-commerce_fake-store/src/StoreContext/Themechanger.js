import React from "react";
import { useContext } from "react";
import { ThemeContextProvider } from "./ThemeContext";

const Themechanger = () => {
  const { setColors } = useContext(ThemeContextProvider);

  return (
    <div>
      <label for="cars">Choose a Theme background: </label>
      <select onChange={(e) => setColors(e.target.value)}>
        <option value="default">Default</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};

export default Themechanger;