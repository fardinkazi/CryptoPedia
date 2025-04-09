import React, { useState } from 'react';
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';
import './Coins.css';

const Coins = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCoins = props.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='container'>
            <input
                type='text'
                placeholder='Search coins...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`search-input ${props.darkMode ? 'dark' : ''}`}
            />

            <div>
                <div className={`heading ${props.darkMode ? 'dark' : 'light'}`}>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {filteredCoins.map((coin, index) => (
                    <Link to={`/coin/${coin.id}`} key={coin.id}>
                        <CoinItem
                            coins={coin}
                            index={index + 1}
                            searchTerm={searchTerm}
                            darkMode={props.darkMode}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Coins;