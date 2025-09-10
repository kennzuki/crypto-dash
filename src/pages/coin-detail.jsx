import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { useParams } from 'react-router';
const API_URL = import.meta.env.VITE_API_COIN_URL;

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({ id });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCoin() {
      try {
        const response = await fetch(`${API_URL}${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch coin data');
        }
        const data = await response.json();
        setCoin(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCoin();
  }, [id]);

  return (
    <div className='flex flex-col items-center space-y-4 p-16'>
      <Link className='text-blue-500' to={'/'}>
        Back home page
      </Link>
      <h1 className=''>
        {coin ? `${coin.name} (${coin.symbol})` : 'coin Detail'}
      </h1>
      {loading && <p>Loading...</p>}
      {error && <div>{error} </div>}
      <>
        <img className='w-16 h-16' src={coin.image.large} alt={coin.name} />
        <p className='w-[400px] text-center'>
          {coin.description.en.split('.')[0] + '.'}
        </p>
        <h3 className='w-[400px] text-center font-bold'>
          Rank:#{coin.market_cap_rank}
        </h3>
        <h3 className='w-[400px] text-center  font-bold'>
          Current Price:Ksh
          {coin.market_data.current_price.usd.toLocaleString()}
        </h3>
        <h3 className='w-[400px] text-center  font-bold'>
          Market Cap:Ksh {coin.market_data.market_cap.usd.toLocaleString()}
        </h3>
        <h3 className='w-[400px] text-center  font-bold'>
          Price Change:{' '}
          {coin.market_data.price_change_percentage_24h.toFixed(2)}%
        </h3>
        <h3 className='w-[400px] text-center  font-bold'>
          High 24h:Ksh {coin.market_data.high_24h.usd.toLocaleString()}
        </h3>
        <h3 className='w-[400px] text-center  font-bold'>
          Low 24h:Ksh {coin.market_data.low_24h.usd.toLocaleString()}
        </h3>
        <h3 className='w-[400px] text-center  font-bold'>
          Total Volume:Ksh {coin.market_data.total_volume.usd.toLocaleString()}
        </h3>
        <h3 className='w-[400px] text-center  font-bold'>
          Total Supply: {coin.market_data.total_supply}
        </h3>
        <h3 className='w-[400px] text-center  font-bold'>
          Max Supply: {coin.market_data.max_supply}
        </h3>
        <h4 className='w-[400px] text-center  font-bold'>
          Last Updated: {coin.market_data.last_updated}
        </h4>

       
      </>
    </div>
  );
};

export default CoinDetailPage;
