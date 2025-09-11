import CoinCard from '../components/CoinCard'
import LimitCard from '../components/LimitCard';
import FilterInput from '../components/FilterInput';
import SortSelector from '../components/SortSelect';
import Spinner from "../components/Spinner";

const HomePage = ({
  coins,
  loading,
  error,
  limit,
  setLimit,
  filter,
  setFilter,
  order,
  setOrder,
}) => {
  const filteredCoins = coins
    .filter((coin) => coin.name.toLowerCase().includes(filter.toLowerCase()))
    .slice()
    .sort((a, b) => {
      switch (order) {
        case 'market_cap_desc':
          return b.market_cap - a.market_cap;
        case 'market_cap_asc':
          return a.market_cap - b.market_cap;
        case 'price_desc':
          return b.current_price - a.current_price;
        case 'price_asc':
          return a.current_price - b.current_price;
        case 'change_desc':
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        case 'change_asc':
          return a.price_change_percentage_24h - b.price_change_percentage_24h;
        default:
          return 0;
      }
    });
  return (
    <>
      <div className='bg-black max-w-full flex flex-col justify-center items-center p-16'>
        <section className='flex flex-col space-y-4 w-full p-4'>
          <h1 className='text-4xl font-bold mb-8 text-white'>
            Crypto Dashboard
          </h1>
          <p className='text-white p-4 text-center'>Powered by CoinGecko API</p>
          <FilterInput filter={filter} onChangeFilter={setFilter} />
          <LimitCard limit={limit} onLimitChange={setLimit} />
          <SortSelector order={order} onChangeSort={setOrder} />
        </section>

        {loading ? (
          <Spinner color="white"/>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {filteredCoins.length > 0 ? (
              filteredCoins.map((coin) => (
                <CoinCard key={coin.id} coin={coin} />
              ))
            ) : (
              <p className='text-white font-bold'>No coins found</p>
            )}
          </div>
        )}
      </div>
      ;
    </>
  );
};

export default HomePage;
