import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./youmaylike.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const YouMayAlsoLike = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setCoins(response.data.coins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };
    fetchTrendingCoins();
  }, []);

  return (
    <div className="you-may-also-like">
      <h3>You May Also Like</h3>
      <div className="carousel">
        {coins.map((coin) => (
          <div className="carousel-item" key={coin.item.id}>
            <div className="coin-header">
              <img src={coin.item.small} alt={coin.item.name} />
              <p>{coin.item.name}</p>
            </div>
            <p className="coin-price">${coin.item.price_btc.toFixed(6)} BTC</p>
            <div className="coin-graph">
              <CoinGraph coinId={coin.item.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component to render the coin's graph
const CoinGraph = ({ coinId }) => {
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    const fetchCoinHistory = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30`
        );
        const prices = response.data.prices.map((price) => price[1]);
        setHistoricalData(prices);
      } catch (error) {
        console.error("Error fetching coin history:", error);
      }
    };

    fetchCoinHistory();
  }, [coinId]);

  // Chart data and options
  const data = {
    labels: Array.from({ length: historicalData.length }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Price in USD",
        data: historicalData,
        fill: false,
        borderColor: "#36A2EB",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Days",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (USD)",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default YouMayAlsoLike;
