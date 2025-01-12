import React, { useEffect, useState } from 'react';
import './sentimentsection.css';

const SentimentSection = () => {
  const [keyEvents, setKeyEvents] = useState([]);
  const [analystData, setAnalystData] = useState({
    buy: 76,
    hold: 14,
    sell: 10,
  });

  // Sample events to display when no events are available
  const sampleEvents = [
    {
      title: 'Crypto Conference 2025',
      description: 'An annual conference bringing together crypto enthusiasts worldwide.',
      website: 'https://sample-event.com/crypto-conference',
      moreInfo: 'Details about the event: This event will feature prominent speakers from the crypto industry, with discussions on the future of decentralized finance.',
    },
    {
      title: 'Blockchain Hackathon',
      description: 'A hackathon to develop innovative blockchain solutions.',
      website: 'https://sample-event.com/blockchain-hackathon',
      moreInfo: 'The hackathon will bring together developers and innovators to work on solving real-world blockchain challenges.',
    },
    {
      title: 'Bitcoin Meetup',
      description: 'Local meetup for Bitcoin investors and developers.',
      website: 'https://sample-event.com/bitcoin-meetup',
      moreInfo: 'An informal meetup for enthusiasts to discuss the latest Bitcoin trends, news, and trading strategies.',
    },
    {
      title: 'DeFi Workshop',
      description: 'Learn about decentralized finance in this workshop.',
      website: 'https://sample-event.com/defi-workshop',
      moreInfo: 'Hands-on sessions will guide participants through the basics of DeFi protocols and how they can participate in decentralized finance.',
    },
    {
      title: 'NFT Art Exhibition',
      description: 'Showcasing the latest trends in NFT art.',
      website: 'https://sample-event.com/nft-art',
      moreInfo: 'The exhibition will highlight the intersection of art and technology, showcasing the work of leading NFT artists.',
    },
  ];

  // Fetch key events from CoinGecko API
  useEffect(() => {
    const fetchKeyEvents = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/events');
        const data = await response.json();

        if (data && data.data && data.data.length > 0) {
          setKeyEvents(data.data.slice(0, 5)); // Display up to 5 events
        } else {
          console.log('No events available at the moment. Using sample data.');
          setKeyEvents(sampleEvents); // Use sample events when no events are available
        }
      } catch (error) {
        console.error('Error fetching key events:', error);
        setKeyEvents(sampleEvents); // Use sample events in case of an error
      }
    };

    fetchKeyEvents();
  }, []);

  const [visibleEvents, setVisibleEvents] = useState({});

  const toggleEventDetails = (index) => {
    setVisibleEvents((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Determine the highest percentage
  const highestPercentage = Math.max(
    analystData.buy,
    analystData.hold,
    analystData.sell
  );

  return (
    <div className="sentiment-section">
      <h1>Sentiment</h1>
      <br />
      {/* Key Events Section */}
      <div className="key-events-container">
        <h3>Key Events</h3>
        <div className="key-events-slider">
          {keyEvents.map((event, index) => (
            <div key={index} className="event-card">
              <h4>{event.title}</h4>
              <p>{event.description || 'No description available'}</p>
              {/* {event.website && (
                <a href={event.website} target="_blank" rel="noopener noreferrer">
                  Learn more
                </a>
              )} */}

              {/* Button to toggle more information */}
              <button onClick={() => toggleEventDetails(index)}>
                {visibleEvents[index] ? 'Show Less' : 'Show More'}
              </button>

              {/* Hidden paragraph with more information */}
              {visibleEvents[index] && <p>{event.moreInfo}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Sentiment Analysis Section */}
      <div className="sentiment">
        <h3>Analyst Estimates</h3>
        <br />
        <div className="sentiment-content">
          {/* Left: Circle with Highest Percentage */}
          <div className="highest-percentage">
            <div
              className="circle"
              style={{
                background: `conic-gradient(#4caf50 ${highestPercentage}%, #ddd ${highestPercentage}%)`,
              }}
            >
              <span>{highestPercentage}%</span>
            </div>
          </div>

          {/* Right: Horizontal Bars */}
          <div className="sentiment-bars">
            <div className="bar">
              <span>Buy</span>
              <div
                className="horizontal-bar buy"
                style={{ width: `${analystData.buy}%` }}
              ></div>
            </div>
            <div className="bar">
              <span>Hold</span>
              <div
                className="horizontal-bar hold"
                style={{ width: `${analystData.hold}%` }}
              ></div>
            </div>
            <div className="bar">
              <span>Sell</span>
              <div
                className="horizontal-bar sell"
                style={{ width: `${analystData.sell}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentSection;
