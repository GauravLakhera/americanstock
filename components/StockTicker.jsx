'use client'
import React, { useEffect, useState } from 'react';

const API_KEY = 'd25i1fhr01qns40f1sugd25i1fhr01qns40f1sv0';
const STOCKS = [
  'AAPL', 'GOOGL', 'MSFT', 'TSLA', 'AMZN',
  'META',       // Meta Platforms (Facebook)
  'NVDA',       // Nvidia
  'NFLX',       // Netflix
  'BRK.B',      // Berkshire Hathaway
  'JPM',        // JPMorgan Chase
];


const StockTicker = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const promises = STOCKS.map(async (symbol) => {
          const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
          const data = await res.json();
          return { symbol, price: data.c };
        });
        const results = await Promise.all(promises);
        setPrices(results);
      } catch (error) {
        console.error('Error fetching stock prices:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker-wrapper fixed top-0 z-[999] bg-black text-white">
      <div className="ticker">
        {prices.length === 0 ? (
          'Loading stock prices...'
        ) : (
          prices.map(stock =>
            (!stock.price || stock.price === 0) ? (
              <span key={stock.symbol} className="ticker-item">
                {stock.symbol}: N/A &nbsp;&nbsp;|&nbsp;&nbsp;
              </span>
            ) : (
              <span key={stock.symbol} className="ticker-item">
                {stock.symbol}: ${stock.price.toFixed(2)} &nbsp;&nbsp;|&nbsp;&nbsp;
              </span>
            )
          )
        )}
      </div>
    </div>
  );
};

export default StockTicker;
