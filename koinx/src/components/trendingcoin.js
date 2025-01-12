import React, { useEffect, useState } from "react";
import axios from "axios";
import "./trendingcoin.css";

const TrendingCoins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setCoins(response.data.coins.slice(0, 2));
        setError(null);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
        setError("Failed to fetch trending coins. Please try again later.");
      } finally {
        setLoading(false);
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
        <a className="get-started-btn" href="https://www.koinx.com/">
          Get Started
        </a>
      </div>

      {/* Trending Coins */}
      <h3>Trending Coins (24h)</h3>
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.item.id}>
              <p>
                <strong>{coin.item.name}</strong> ({coin.item.symbol.toUpperCase()})
              </p>
              <span>Value: {coin.item.price_btc.toFixed(4)} BTC</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TrendingCoins;
