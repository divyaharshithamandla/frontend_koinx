import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cryptotype.css';

const CryptoTypesPage = () => {
  const [cryptoTypes, setCryptoTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoTypes = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/categories');
        // Limit to the first 10 categories
        setCryptoTypes(response.data.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto types:', error);
        setLoading(false);
      }
    };

    fetchCryptoTypes();
  }, []);

  return (
    <div className="crypto-types-page">
      <h1>Crypto Types</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="crypto-types-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {cryptoTypes.map((type, index) => (
              <tr key={index}>
                <td>{type.name}</td>
                <td>{type.market_cap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CryptoTypesPage;
