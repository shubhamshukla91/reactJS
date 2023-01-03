import React, { createContext, useState } from "react";

export const DataContextCoinRanking = createContext(null);
const ContextCoinRanking = ({ children }) => {
  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [referenceCurrencies, setRefernceCurrencies] = useState({
    currencyType: "yhjMzLPhuIDl",
    currencySign: "$",
    currencyName: "USD",
    currencyPrice: "",
  });
  const [detailed, setDetailed] = useState([]);

  return (
    <DataContextCoinRanking.Provider
      value={{
        data,
        setData,
        currency,
        setCurrency,
        setRefernceCurrencies,
        referenceCurrencies,
        setDetailed,
        detailed,
      }}
    >
      {children}
    </DataContextCoinRanking.Provider>
  );
};

export default ContextCoinRanking;
