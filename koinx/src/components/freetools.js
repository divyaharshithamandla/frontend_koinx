import React, { useState, useEffect } from 'react';
import "./freetools.css";
const FreeToolsPage = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    // Fetch trending coins data
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then((response) => response.json())
      .then((data) => setTools(data.coins))
      .catch((error) => console.error('Error fetching trending tools:', error));
  }, []);

  return (
    <div className='free-tools'>
      <h1>Free Tools (Trending Coins)</h1>
      <ul>
        {tools.length > 0 ? (
          tools.map((tool, index) => (
            <li key={index}>
              <img src={tool.item.small} alt={tool.item.name} />
              <p>{tool.item.name}</p>
              <p>Symbol: {tool.item.symbol}</p>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default FreeToolsPage;
