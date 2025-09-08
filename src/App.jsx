import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCoins() {
      try {
        const response = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCoins(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCoins();
  }, []);

  return (
    <div className='bg-black max-w-full flex flex-col justify-center items-center p-16'>
      <section className='flex gap-4 justify-between place-items-center items-center w-full p-4'>
        <h1 className='text-4xl font-bold mb-8 text-white'>Crypto Dashboard</h1>
        <p className='text-white p-4'>Powered by CoinGecko API</p>
      </section>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {coins.map((coin) => (
            <div key={coin.id} className='bg-gray-800 p-4 rounded-lg shadow-md space-y-2'>
              
              <div className="flex gap-2">
                <img className='w-12 h-12 text-center' src={coin.image} alt={coin.name} />
                <div className="flex flex-col gap-2">
                  <h2 className='text-lg font-semibold text-white'>{coin.name}</h2>
                <p className='text-gray-400'>{coin.symbol.toUpperCase()}</p>
                </div>
                
              </div>
              
              <p className='text-gray-400'>Rank: {coin.market_cap_rank}</p>
              <p className='text-gray-400'>Mrkt Cap: {coin.market_cap.toLocaleString()}</p>
              <p className='text-gray-400'>Price: {coin.current_price.toLocaleString()}</p>
              <p className= {coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}>Price Change:{coin.price_change_percentage_24h.toFixed(2)}%</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
