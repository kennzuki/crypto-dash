const FilterInput = ({filter,onChangeFilter}) => {
    return ( 
        <div className="w-full">
       
          <input type="text" id="filter" value={filter} className="text-black bg-gray-200 p-2  w-full" placeholder="Search..." onChange={(e) => onChangeFilter(e.target.value)} />
        </div>
     );
}
 
export default FilterInput;