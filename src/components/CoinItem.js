import React from 'react';

const CoinItem = ({ coins, index, searchTerm, darkMode }) => {
    const highlightMatch = (text, term) => {
        if (!term) return text;
        const regex = new RegExp(`(${term})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    };

    return (
        <div className={`coin-row ${darkMode ? 'dark' : 'light'}`}>
            <p>{index}</p> {/* Serial Number */}
            <div className='img-symbol'>
                <img src={coins.image} alt={coins.name} />
                <p
                    dangerouslySetInnerHTML={{
                        __html: highlightMatch(
                            coins.symbol.toUpperCase(),
                            searchTerm.toUpperCase()
                        ),
                    }}
                    style={{ color: darkMode ? '#f5f5f5' : '#000' }}
                />
            </div>
            <p style={{ color: darkMode ? '#f5f5f5' : '#000' }}>${coins.current_price.toLocaleString()}</p>
            <p style={{ color: darkMode ? '#f5f5f5' : '#000' }}>
                {coins.price_change_percentage_24h.toFixed(2)}%
            </p>
            <p className='hide-mobile' style={{ color: darkMode ? '#f5f5f5' : '#000' }}>
                ${coins.total_volume.toLocaleString()}
            </p>
            <p className='hide-mobile' style={{ color: darkMode ? '#f5f5f5' : '#000' }}>
                ${coins.market_cap.toLocaleString()}
            </p>
        </div>
    );
};

export default CoinItem;