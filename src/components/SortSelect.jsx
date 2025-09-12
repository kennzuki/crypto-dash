const SortSelector = ({ order, onChangeSort }) => {
  return (
    <div className='w-1/2 flex gap-2 place-items-center'>
      <select
        name=''
        id=''
        value={order}
        onChange={(e) => onChangeSort(e.target.value)}
        className='text-black bg-gray-200 p-2 w-full'
      >
        <option value='market_cap_desc'>Market Cap(high to low)</option>
        <option value='market_cap_desc'>Market Cap(low to high)</option>
        <option value='price_desc'>Price: (high to low)</option>
        <option value='price_asc'>Price: (low to high)</option>
        <option value='change_desc'>24hr Volume: (high to low)</option>
        <option value='change_asc'>24hr Volume: (low to high)</option>
      </select>
    </div>
  );
};

export default SortSelector;
