const LimitCard = ({limit,onLimitChange}) => {
    return ( 
        <div className="flex gap-2 place-items-center rounded-xl p-2 text-black">
          <label htmlFor="limit" className="text-white">Show: </label>
          <select id="limit" className="text-black bg-gray-200 p-2 " value={limit} onChange={(e) => onLimitChange(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </div>
     );
}
 
export default LimitCard;