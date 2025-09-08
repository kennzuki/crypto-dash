import { useState, useEffect } from 'react';
import CoinCard from "./components/CoinCard";
import LimitCard from "./components/LimitCard";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[limit,setLimit] = useState(10);

  useEffect(() => {
    async function fetchCoins() {
      try {
        const response = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
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
  }, [limit]);

  return (
    <div className='bg-black max-w-full flex flex-col justify-center items-center p-16'>
      <section className='flex gap-4 justify-between place-items-center items-center w-full p-4'>
        <h1 className='text-4xl font-bold mb-8 text-white'>Crypto Dashboard</h1>
        <p className='text-white p-4'>Powered by CoinGecko API</p>
        <LimitCard limit={limit} onLimitChange={setLimit} />
      </section>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {coins.map((coin) => (
           <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
