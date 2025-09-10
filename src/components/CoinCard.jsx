import { Link } from "react-router";


const CoinCard = ({ coin }) => {
  return (
      
     
    <Link to={`/coin/${coin.id}`}>
         <div className="">
             <div  className='bg-gray-800 p-4 rounded-lg shadow-md space-y-2'>
              
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
      </div>
      </Link>
    
      );
}
 
export default CoinCard;