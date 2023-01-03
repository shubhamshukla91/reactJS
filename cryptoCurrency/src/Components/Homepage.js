import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { DataContextCoinRanking } from "../ContextCoinRanking/ContextCoinRanking";
import CurrencyChanger from "./Currency/CurrencyChanger";
import ListCurrency from "./Currency/ListCurrency";
import { useLocation } from "react-router-dom";

const Homepage = () => {
  let location = useLocation();
//   console.log(location);
  const { data, setData, referenceCurrencies } = useContext(
    DataContextCoinRanking
  );
  let [flagData, setFlagData] = useState({
    data: [],
    d: {},
  });
  const fetchPromise = fetch(`https://api.coinranking.com/v2/coins`);

  useEffect(() => {
    let fetchPromise2;
    fetchPromise2 = fetch(
      `https://api.coinranking.com/v2/coins?referenceCurrencyUuid=${referenceCurrencies.currencyType}`
    );

    fetchPromise2
      .then((response) => {
        const jsonPromise2 = response.json();
        jsonPromise2.then((data) => {
          console.log(data);
          if (data.status === "success") {
            let dd = data?.data?.coins.splice(0, 15);
            let d = dd?.map((ee) => ee.referenceCurrencies);
            console.log(d);
            setFlagData((old) => {
              return {
                data: d,
                d: data?.data?.stats,
              };
            });
          } else {
            alert("api failed due to network issue");
          }
        });
      })
      .catch((err) => alert(err, "please refresh api failed"));
  }, [referenceCurrencies]);

  useEffect(() => {
    fetchPromise.then((response) => {
      const jsonPromise = response.json();
      jsonPromise.then((data) => {
        console.log(data);
        setData(data?.data?.coins.splice(0, 15));
      });
    });
  }, []);
  console.log(data);

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        background: "",
        overflowX: "auto",
        display: "flex",
      }}
    >
      <ListCurrency
        flagData={flagData}
        splicedItems={data}
        referenceCurrencies={referenceCurrencies}
      />
      <CurrencyChanger history={location} flagData={flagData} data={data} />
    </div>
  );
};

export default Homepage;