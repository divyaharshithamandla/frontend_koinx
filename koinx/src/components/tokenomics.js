import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import "./tokenomics.css";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
  const [tokenomicsData, setTokenomicsData] = useState(null);

  useEffect(() => {
    // Fetch tokenomics data from CoinGecko API (example: for Bitcoin)
    axios
      .get("https://api.coingecko.com/api/v3/coins/bitcoin") // Replace with appropriate coin ID if needed
      .then((response) => {
        // Extract required tokenomics data from the response
        const tokenData = response.data;
        setTokenomicsData({
          investors: tokenData.market_data.total_supply ? 80 : 0, // Example fallback logic for total_supply
          founders: 20,
        });
      })
      .catch((error) => {
        console.error("Error fetching tokenomics data:", error);
        // Fallback to sample data if API call fails
        setTokenomicsData({
          investors: 80,
          founders: 20,
        });
      });
  }, []);

  // If tokenomics data isn't available, show a loading message
  if (!tokenomicsData) {
    return <div>Loading...</div>;
  }

  // Data for the doughnut chart
  const data = {
    labels: ["Investors", "Founders"],
    datasets: [
      {
        data: [
          tokenomicsData.investors,
          tokenomicsData.founders,
        ],
        backgroundColor: ["#32CD32", "#93DC5C"],
        hoverBackgroundColor: ["#008000", "#008000"],
      },
    ],
  };

  return (
    <div className="tokenomics">
      <h3>Tokenomics</h3>
      <div className="content">
        <div className="chart-container">
          <Doughnut data={data} />
        </div>
        <div className="info-container">
          <div className="percentages">
            <div>
              <strong>Croudsale investors: </strong>{tokenomicsData.investors}%
            </div>
            <div>
              <strong>Foundation: </strong>{tokenomicsData.founders}%
            </div>
          </div>
        </div>
          <div className="description">
            <p>
              Tokenomics refers to the distribution of tokens within a project or ecosystem. It defines how the total supply is divided among various stakeholders, such as investors, founders, the marketing team, and reserves. Understanding tokenomics is crucial for evaluating the sustainability and growth potential of a cryptocurrency or blockchain project. By allocating resources effectively, tokenomics ensures that each party has a fair share of the tokens, which helps in driving the success of the project in the long term.
            </p>
          </div>
        
      </div>
    </div>
  );
};

export default Tokenomics;
