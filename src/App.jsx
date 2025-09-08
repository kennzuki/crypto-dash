import { useState, useEffect, use } from 'react';

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
    <div className="bg-black max-w-full flex flex-col justify-center items-center p-16">
      <h1 className="text-4xl font-bold mb-8 text-white">Crypto Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {coins.map((coin) => (
            <div
              key={coin.id}
              className="bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <h2 className="text-lg font-semibold text-white">
                {coin.name} ({coin.symbol})
              </h2>
              <p className="text-gray-400">Rank: {coin.market_cap_rank}</p>
              <p className="text-gray-400">Price: ${coin.current_price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
