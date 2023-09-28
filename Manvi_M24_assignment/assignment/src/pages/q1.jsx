

import React, { useState, useEffect } from 'react';

function App() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        setPrices(prevPrices => [...prevPrices, { price: data.bpi.USD.rate, time: new Date() }]);
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      }
    };

    const intervalId = setInterval(fetchBitcoinPrice, 6000); // Update every minute

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Bitcoin Price</h2>
      {prices.length > 0 ? (
        <table className='table'>
          <thead>
            <tr>
              <th>Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((data, index) => (
              <tr key={index}>
                <td>{data.time.toLocaleTimeString()}</td>
                <td>{data.price} USD</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

