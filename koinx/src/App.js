import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Dashboard from './components/dashboard.js';
import TrendingCoins from './components/trendingcoin.js';
import Performance from './components/performance.js';
import Sentiment from './components/sentiment.js';
import AboutSection from './components/aboutsection.js';
import Tokenomics from './components/tokenomics.js';
import TeamMembers from './components/teamMember.js';
import YouMayAlsoLike from './components/youmaylike.js';
import CryptoTypesPage from './components/cryptotype.js';
import FreeToolsPage from './components/freetools.js';
import ResourceCenterPage from './components/resourcecenter.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        {/* <Route path="/crypto-type"  /> */}
        <Route path="/free-tools"  />
        <Route path="/resource-center" />
        <Route
          path="/"
          element={
            <>
              <div className="main-content">
                <Dashboard />
                <TrendingCoins />
              </div>
              <Performance />
              <Sentiment />
              <AboutSection />
              <Tokenomics />
              <TeamMembers />
              <YouMayAlsoLike />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
