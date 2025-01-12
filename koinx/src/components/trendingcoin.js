import React, { useEffect, useState } from "react";
import axios from "axios";
import "./trendingcoin.css";

const TrendingCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setCoins(response.data.coins.slice(0, 3));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };
    fetchTrendingCoins();
  }, []);

  return (
    <div className="trending-coins">
      {/* Advertisement Section */}
      <div className="advertisement">
        <h3>Get Started with KoinX for FREE</h3>
        <p>Track your crypto portfolio and taxes easily.</p>
        <a className="get-started-btn" href="https://www.koinx.com/">Get Started</a>
      </div>

      {/* Trending Coins */}
      <h3>Trending Coins (24h)</h3>
      <ul>
        {coins.map((coin) => (
          <li key={coin.item.id}>
            <img src={coin.item.small} alt={coin.item.name} />
            <p>{coin.item.name} ({coin.item.symbol.toUpperCase()})</p>
            <span>{coin.item.price_btc.toFixed(4)} BTC</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
