import React, { useEffect, useState } from "react";
import axios from "axios";
import "./performance.css";
import Fundamentals from "./fundamentals.js";
const Performance = () => {
  const [data, setData] = useState({
    low24h: 0,
    high24h: 0,
    low52w: 0,
    high52w: 0,
    currentPrice: 0,
  });

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );

        const marketData = response.data.market_data;

        setData({
          low24h: marketData.low_24h.usd,
          high24h: marketData.high_24h.usd,
          low52w: marketData.atl.usd, // Assuming ATL as 52-week low
          high52w: marketData.ath.usd, // Assuming ATH as 52-week high
          currentPrice: marketData.current_price.usd,
        });
      } catch (error) {
        console.error("Error fetching performance data:", error);
      }
    };

    fetchPerformanceData();
  }, []);

  const calculatePosition = (value, min, max) => {
    if (max === min) return 50; // Prevent division by zero
    return ((value - min) / (max - min)) * 100;
  };

  const todayPosition = calculatePosition(
    data.currentPrice,
    data.low24h,
    data.high24h
  );

  const yearPosition = calculatePosition(
    data.currentPrice,
    data.low52w,
    data.high52w
  );

  return (
    <div className="performance">
      <h3>Performance</h3>

      {/* Graph for Today's Low and High */}
      <div className="graph-container">
        <div className="label">
          <span>Low: ${data.low24h.toLocaleString("en-US")}</span>
          <span>High: ${data.high24h.toLocaleString("en-US")}</span>
        </div>
        <div className="graph">
          <div className="bar">
            <div
              className="current-marker"
              style={{ left: `${todayPosition}%` }}
              title={`Current Price: $${data.currentPrice.toLocaleString("en-US")}`}
            ></div>
          </div>
        </div>
      </div>

      {/* Graph for 52 Week Low and High */}
      <div className="graph-container">
        <div className="label">
          <span>Low: ${data.low52w.toLocaleString("en-US")}</span>
          <span>High: ${data.high52w.toLocaleString("en-US")}</span>
        </div>
        <div className="graph">
          <div className="bar">
            <div
              className="current-marker"
              style={{ left: `${yearPosition}%` }}
              title={`Current Price: $${data.currentPrice.toLocaleString("en-US")}`}
            ></div>
          </div>
        </div>
      </div>
      <Fundamentals/>
    </div>
  );
};

export default Performance;
