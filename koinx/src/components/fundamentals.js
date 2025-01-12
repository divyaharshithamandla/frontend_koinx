import React, { useEffect, useState } from "react";
import axios from "axios";
import "./fundamentals.css";

const Fundamentals = () => {
  const [data, setData] = useState({
    price: 0,
    marketCap: 0,
    low24h: 0,
    high24h: 0,
    marketCapRank: 0,
    marketCapDominance: 0,
    volume: 0,
    ath: { price: 0, change: 0, date: "" },
    atl: { price: 0, change: 0, date: "" },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false"
        );

        const coinData = response.data;
        setData({
          price: coinData.market_data.current_price.usd,
          marketCap: coinData.market_data.market_cap.usd,
          low24h: coinData.market_data.low_24h.usd,
          high24h: coinData.market_data.high_24h.usd,
          marketCapRank: coinData.market_cap_rank,
          marketCapDominance: coinData.market_data.market_cap_change_percentage_24h,
          volume: coinData.market_data.total_volume.usd,
          ath: {
            price: coinData.market_data.ath.usd,
            change: coinData.market_data.ath_change_percentage.usd,
            date: coinData.market_data.ath_date.usd,
          },
          atl: {
            price: coinData.market_data.atl.usd,
            change: coinData.market_data.atl_change_percentage.usd,
            date: coinData.market_data.atl_date.usd,
          },
        });
      } catch (error) {
        console.error("Error fetching fundamentals data:", error);
      }
    };

    fetchData();
  }, []);

  const formatNumber = (num) => num.toLocaleString("en-US");

  return (
    <div className="fundamentals">
      <h3>Fundamentals</h3>
      <div className="fundamentals-grid">
        <div className="item">
          <div className="row">
            <p>Bitcoin Price</p>
            <p>${formatNumber(data.price)}</p>
          </div>
        </div>
        <div className="item">
          <div className="row">
            <p>Market Cap</p>
            <p>${formatNumber(data.marketCap)}</p>
          </div>
        </div>
        <div className="item">
          <div className="row">
            <p>24h Low / 24h High</p>
            <p>
              ${formatNumber(data.low24h)} / ${formatNumber(data.high24h)}
            </p>
          </div>
        </div>
        <div className="item">
          <div className="row">
            <p>Market Cap Dominance</p>
            <p>{data.marketCapDominance.toFixed(2)}%</p>
          </div>
        </div>
        <div className="item">
          <div className="row">
            <p>Trading Volume</p>
            <p>${formatNumber(data.volume)}</p>
          </div>
        </div>
        <div className="item">
          <div className="row">
            <p>All-Time High</p>
            <p>
              ${formatNumber(data.ath.price)}{" "}
              <span className={data.ath.change < 0 ? "negative" : "positive"}>
                {data.ath.change.toFixed(2)}%
              </span>
            </p>
          </div>
          <small>{new Date(data.ath.date).toDateString()}</small>
        </div>
        <div className="item">
          <div className="row">
            <p>Market Cap Rank</p>
            <p>#{data.marketCapRank}</p>
          </div>
        </div>
        <div className="item">
          <div className="row">
            <p>All-Time Low</p>
            <p>
              ${formatNumber(data.atl.price)}{" "}
              <span className={data.atl.change > 0 ? "positive" : "negative"}>
                {data.atl.change.toFixed(2)}%
              </span>
            </p>
          </div>
          <small>{new Date(data.atl.date).toDateString()}</small>
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
