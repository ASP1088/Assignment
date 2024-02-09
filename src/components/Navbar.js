import { FaSearch } from "react-icons/fa";
import './navbar.css';
import { useState } from "react";

function Navbar({callback, onSort}){
    const [search,setSearch]= useState('');
    //console.log(search);
    
    
    const handleChange =(e)=>{
        const value =e.target.value;
        setSearch(value);
        callback(value);
    }
    // const handleClick =(e)=>{
    //     console.log('button is clicked');
    //     const value =e.target.value;
    //     setSort(value);
    //     onSort(sort);
    // }
    
   
    return(
        <div className="container">
        <div>
        <button className="sort" >Sort by</button>
        </div>
        <div className="input-wrapper">
            <button className="search"><FaSearch id="search-icon" /></button>
            <input placeholder="Type to search..." value={search} onChange={handleChange}/>
        </div>
    </div>
    )
}
export default Navbar;