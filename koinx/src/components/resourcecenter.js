import React, { useState, useEffect } from 'react';
import './resourcecenter.css'
const ResourceCenterPage = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Fetch data for market trends or other resource data.
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((response) => response.json())
      .then((data) => setResources(data))
      .catch((error) => console.error('Error fetching resources:', error));
  }, []);

  return (
    <div className='resource-center'>
      <h1>Resource Center (Market Data)</h1>
      <table>
        <thead>
          <tr>
            <th>Coin Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {resources.length > 0 ? (
            resources.map((resource, index) => (
              <tr key={index}>
                <td>{resource.name}</td>
                <td>{resource.symbol.toUpperCase()}</td>
                <td>${resource.current_price}</td>
                <td>${resource.market_cap.toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResourceCenterPage;
