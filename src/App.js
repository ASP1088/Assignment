import React from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import { searchData } from "./api";
import { useState } from "react";



function App(){
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('episode_id');
   
    
    const handleSearch=async(value)=>{ 
     const result = await searchData(value);
     console.log('result',result);
     setSearchTerm(value);
     return searchTerm;
    }
    const handleSort = (sort) => {
        setSortOption(sort);
      };
    return(
        <React.Fragment>
            <Navbar callback={handleSearch} onSort={handleSort}/>
            <MovieList searchTerm={searchTerm} sortOption={sortOption}/>                   
        </React.Fragment>
    )
    }
export default App;
