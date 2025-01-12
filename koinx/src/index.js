import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from'./App.js';
import reportWebVitals from './reportWebVitals.js'; // Ensure extension is included

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Log performance metrics or send them to an analytics service
reportWebVitals(console.log);
