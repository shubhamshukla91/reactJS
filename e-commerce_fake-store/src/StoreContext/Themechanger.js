import React from "react";
import { useContext } from "react";
import { ThemeContextProvider } from "./ThemeContext";

const Themechanger = () => {
  const { setColors } = useContext(ThemeContextProvider);
  const options = [
    { value: "default", label: "Default" },
    { value: "black",   label: "Black" },
    { value: "white",   label: "White" },
    { value: "red",     label: "Red" },
    { value: "blue",    label: "Blue" },
  ];
  return (
    <div>
      <label for="cars">Choose a Theme background: </label>
      <select onChange={(e) => setColors(e.target.value)}>
      {options.map((option)=>{
        return(
          <option key={option.label}>{option.value}</option>
        )
      })}
        {/* <option value="default">Default</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option> */}
      </select>
    </div>
  );
};

export default Themechanger;
