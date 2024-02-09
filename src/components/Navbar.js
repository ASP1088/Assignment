import { FaSearch } from "react-icons/fa";
import './navbar.css';
import { useState } from "react";

function Navbar({callback, onSort}){
    const [search,setSearch]= useState('');
    const [sortOption, setSortOption] = useState('episode_id');
    
    
    const handleChange =(e)=>{
        const value =e.target.value;
        setSearch(value);
        callback(value);
    }
    
    const handleSortChange = (e) => {
        const selectedOption = e.target.value;
        setSortOption(selectedOption);
        onSort(selectedOption);
      };
    return(
        <div className="container">
         <div>
            <label htmlFor="sortDropdown">Sort by:</label>
            <select id="sortDropdown" value={sortOption} onChange={handleSortChange}>
            <option value="episode_id">Episode Number</option>
             <option value="release_date">Release Date</option>
            </select>
      </div>
        
        <div className="input-wrapper">
            <button className="search"><FaSearch id="search-icon" /></button>
            <input placeholder="Type to search..." value={search} onChange={handleChange}/>
        </div>
    </div>
    )
}
export default Navbar;