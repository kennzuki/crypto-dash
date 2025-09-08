const FilterInput = ({filter,onChangeFilter}) => {
    return ( 
        <div className="">
       
          <input type="text" id="filter" value={filter} className="text-black bg-gray-200 p-2 ml-2" placeholder="Search..." onChange={(e) => onChangeFilter(e.target.value)} />
        </div>
     );
}
 
export default FilterInput;