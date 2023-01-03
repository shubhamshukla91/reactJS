import React from "react";
import { useContext } from "react";
import { DataContextCoinRanking } from "../../ContextCoinRanking/ContextCoinRanking";
import { useNavigate } from "react-router-dom";

const ListCurrency = ({ splicedItems, referenceCurrencies, flagData }) => {
  const { setDetailed } = useContext(DataContextCoinRanking);
  let history = useNavigate();
  console.log("referenceCurrencies", flagData);
  return (
    <div
      style={{
        background: "#eee",
        width: "50%",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <h1>List of all cryptocurrencies</h1>
      <>
        {
          <>
            {splicedItems?.map((e, i) => (
              <div
                style={{
                  padding: "5px 0 0  11.5em",
                  textAlign: "left",
                  gap: "10px",
                  margin: "10px 0 0 0 ",
                }}
              >
                <p>
                  <span style={{ fontWeight: "bold" }}>{i + 1}.</span> Name:{" "}
                  {e.name}
                </p>
                <p>Market capital: {e?.marketCap}</p>
                <p>
                  Price:{" "}
                  <b>
                    {referenceCurrencies?.currencySign}{" "}
                    {referenceCurrencies?.currencyPrice
                      ? e?.price * referenceCurrencies?.currencyPrice
                      : e?.price}
                  </b>{" "}
                  (in {referenceCurrencies.currencyName})
                </p>
                <p>Rank :{e.rank}</p>
                <p
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  Icon : <img src={e.iconUrl} alt={i} height="50px" />
                </p>
                <button
                  onClick={() => {
                    let d = splicedItems?.filter((ee, index) => index == i);
                    setDetailed(d);
                    history("/detailpage");
                  }}
                >
                  Details
                </button>
              </div>
            ))}
          </>
        }
      </>
    </div>
  );
};

export default ListCurrency;