import React, { useContext, useEffect } from "react";
import { useState } from "react";
import BarChart from 'react-bar-chart';
import { DataContextCoinRanking } from "../../ContextCoinRanking/ContextCoinRanking";

const CurrencyChanger = ({ flagData, variant }) => {
  const {
    currency,
    setCurrency,
    setRefernceCurrencies,
    detailed,
    referenceCurrencies,
    data,
  } = useContext(DataContextCoinRanking);
  let [oldData, setOldData] = useState("yhjMzLPhuIDl");
  const [run, setRun] = useState("");
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const [graph, setGraph] = useState([]);
  useEffect(() => {
    const fetchPromise = fetch(
      "https://api.coinranking.com/v2/reference-currencies",
      {
        method: "GET",
        headers: {
          "x-access-token":
            "coinranking5ce2a3bce0c7c7d9dfd63ca4c347c0ddefe91d840be36d85",
        },
      }
    );
    fetchPromise.then((response) => {
      const jsonPromise = response.json();
      jsonPromise.then((data) => {
        setCurrency(data?.data?.currencies);
      });
    });
  }, []);

  useEffect(() => {
    if (run == "runs") {
      let fetchPromisePrice;
      fetchPromisePrice = fetch(
        `https://api.coinranking.com/v2/coin/${oldData}/price?referenceCurrencyUuid=${referenceCurrencies.currencyType}`,
        {
          method: "GET",
          headers: {
            "x-access-token":
              "coinranking5ce2a3bce0c7c7d9dfd63ca4c347c0ddefe91d840be36d85",
          },
        }
      );
      let d = referenceCurrencies.currencyType;
      setOldData(d);
      // console.log("____", oldData);
      // console.log("____", referenceCurrencies.currencyType);
      fetchPromisePrice.then((response) => {
        const jsonPromise = response.json();
        jsonPromise.then((datas) => {
          if (datas.status == "success") {
            // console.log(
            //   "referenceCurrencies",
            //   Number(data[0]?.price),
            //   datas?.data?.price
            // );
            setRefernceCurrencies((eee) => {
              return {
                ...eee,
                currencyPrice: datas?.data?.price,
              };
            });
          }
        });
      });
    }
    setRun("");
  }, [oldData, run]);

  useEffect(() => {
    if (run == "runs") {
      let barFetch = fetch(
        `https://api.coinranking.com/v2/coin/${referenceCurrencies.currencyType}/history`,
        {
          method: "GET",
          headers: {
            "x-access-token":
              "coinranking5ce2a3bce0c7c7d9dfd63ca4c347c0ddefe91d840be36d85",
            timePeriod: "7d",
          },
        }
      );

      barFetch.then((response) => {
        const jsonPromise = response.json();
        // console.log('from response',jsonPromise);
        const barChart = [];
        jsonPromise.then((datas) => {
          if (datas.status == "success") {
            datas.data.history.map((item) => {
              const iData = {
                text: new Date(item.timestamp),
                value: Number(item.price),
              };
              barChart.push(iData);
            });
            setGraph(barChart);
          } 
        });
      });
    }
  }, [run]);

  const getCoinCurrencies = (e) => {
    // console.log(currency);
    let d = currency.filter((ee) => ee.symbol == e.target.value);
    d = d.map((data) => data);
    // console.log(d);
    setRefernceCurrencies((eee) => {
      return {
        currencyType: d[0]?.uuid,
        currencySign: d[0]?.sign,
        currencyName: d[0]?.name,
        currencyPrice: d[0]?.price,
      };
    });
    setRun("runs");
  };
  // console.log("____", referenceCurrencies);
 
  return (
    <>
      <div style={{ background: "#ee12", width: "50%", fontSize: "1em" }}>
        <label for="coins">Choose a type : </label>
        <select
          style={{
            fontSize: "1em",
            width: "20em",
            height: "3em",
            margin: "5em 0 0 0",
          }}
          name="coins"
          id="coins"
          onChange={getCoinCurrencies}
        >
          {currency?.map((e) => (
            <>
              <option value={e?.symbol}>
                {e?.name}-{e?.symbol}
              </option>
            </>
          ))}
        </select>

        {variant === "details" && (
          <div style={{ margin: "2em 0 0 0 " }}>
            <h1> Details of Coins</h1>
            <div
              style={{
                margin: "2em 0 0 0 ",
                background: "#FFF",
                width: "800px",
              }}
            >
              {detailed?.map((ee) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "baseline",
                    justifyContent: "center",
                    margin: "auto",
                    width: "300px",
                    gap: "10px",
                  }}
                >
                  {/* {console.log(ee)} */}
                  <p>
                    <b>Name :</b> {ee?.name}
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <b>Icon</b>:
                    <img src={ee?.iconUrl} height="50px" width="50px" />
                  </p>
                  <p>
                    <b>WebsiteUrl</b>:
                    <a href={ee?.coinrankingUrl}>{ee?.coinrankingUrl}</a>
                  </p>
                  <p>
                    <b>Marketcap :</b> {ee?.marketCap}
                  </p>
                  <p>
                    <b>Price :</b>
                    {referenceCurrencies?.currencyPrice
                      ? ee?.price * referenceCurrencies?.currencyPrice
                      : ee?.price}{" "}
                    (in {referenceCurrencies.currencyName})
                  </p>
                  <p>
                    <b>Rank :</b> {ee?.rank}
                  </p>
                  <p>
                    <b>Total no of totalExchanges : </b>
                    {flagData?.d?.totalExchanges}
                  </p>
                  <p>
                    <b>Total no of totalMarkets : </b>
                    {flagData?.d?.totalMarkets}
                  </p>
                </div>
              ))}
            </div>
            <h1> Coin Price History</h1>
            <BarChart width={4000} height={400} margin={margin} data={graph} />
          </div>
        )}
      </div>
    </>
  );
};

export default CurrencyChanger;