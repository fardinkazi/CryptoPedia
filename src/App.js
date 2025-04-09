import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Coins from './components/Coins';
import Coin from './routes/Coin';
import Navbar from './components/Navbar';

function App() {
  // State to store the list of coins fetched from the API
  const [coins, setCoins] = useState([]);

  // State to handle the dark mode toggle (default is dark mode)
  const [darkMode, setDarkMode] = useState(true);

  // API URL to fetch the coins' data from CoinGecko API
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // Setting the fetched coins data into the state
        setCoins(response.data);
      })
      .catch((error) => {
        // If there's an error during the fetch, log it to the console
        console.log(error);
      });
  }, []); // Empty dependency array ensures this effect runs only once after component mounts

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      {/* Navbar component receives darkMode as a prop to adjust its styles accordingly */}
      <Navbar darkMode={darkMode} />

      {/* Button to toggle between light and dark mode */}
      <button
        onClick={toggleDarkMode}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          padding: '8px 16px',
          borderRadius: '6px',
          backgroundColor: darkMode ? '#ffffff20' : '#00000010',
          color: darkMode ? '#fff' : '#000',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000,
          fontWeight: 'bold',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease'
        }}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Setting up the Routes */}
      <Routes>
        {/* Default route to display the list of coins */}
        <Route path='/' element={<Coins coins={coins} darkMode={darkMode} />} />
        
        {/* Route for individual coin details */}
        <Route path='/coin' element={<Coin />}>
          {/* Dynamic route for each coin based on its ID */}
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;