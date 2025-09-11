import { useState, useEffect } from 'react';
import HomePage from "./pages/homePage";
import AboutPage from "./pages/about";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import NotFoundPage from "./pages/notFound";
import CoinDetailPage from "./pages/coinDetail";



const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const[order, setOrder] = useState('market_cap_desc');

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
    <div>
      <Header />
     <Routes>
      <Route path="/" element={<HomePage coins={coins} loading={loading} error={error} limit={limit} setLimit={setLimit} filter={filter} setFilter={setFilter} order={order} setOrder={setOrder} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coin/:id" element={<CoinDetailPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
   
    
  );
}

export default App;
