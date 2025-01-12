import React, { useEffect, useState } from "react";
import { FaBitcoin } from "react-icons/fa";  
import axios from "axios";
import "./dashboard.css";

const Dashboard = () => {
  const [bitcoinData, setBitcoinData] = useState({
    usd: 0,
    usdChange: 0,
    inr: 0,
  });

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true"
        );
        const data = response.data.bitcoin;
        setBitcoinData({
          usd: data.usd,
          usdChange: data.usd_24h_change,
          inr: data.inr, 
        });
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      }
    };
    fetchBitcoinData();
  }, []);

  return (
    <div className="hero-section">
      <div className="overview">
      <div className="header">
        <img className="imag" src="bitcoin-logo.png"/>  
        <h1>
            Bitcoin <span className="btc"><sup>BTC</sup></span>
            <div className="rank">
                <span>Rank #1</span>
            </div>
        </h1>
      </div>

        <div className="price-info">
          <h2>${bitcoinData.usd.toLocaleString()}</h2>
          <p className={bitcoinData.usdChange >= 0 ? "positive light-green" : "negative light-green"}>
            {bitcoinData.usdChange.toFixed(2)}%  <span className="black">(24)h</span>
          </p>
        </div>
        <h3>₹{bitcoinData.inr.toLocaleString()}</h3>
      </div>

      <div className="chart">
        <iframe
          src="https://s.tradingview.com/widgetembed/?symbol=BITSTAMP:BTCUSD&interval=1D&hidesidetoolbar=1&theme=light"
          width="100%"
          height="400"
          title="Bitcoin Chart"
        />
      </div>
    </div>
  );
};

export default Dashboard;
