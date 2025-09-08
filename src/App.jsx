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
    
    </div>
  );
}

export default App;
