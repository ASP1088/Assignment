import React from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import { searchData } from "./api";
import { useState } from "react";



function App(){
    const [searchTerm, setSearchTerm] = useState('');
   
    
    const handleSearch=async(value)=>{ 
     const result = await searchData(value);
     console.log('result',result);
     setSearchTerm(value);

     return searchTerm;
    }
    // const handleSort = (sort) => {
    //     // Toggle between 'episode_id' and 'release_date' options
    //     setSortOption((sort) => (sort === 'episode_id' ? 'release_date' : 'episode_id'));

    //     return sortOption;
    // };
    
    return(
        <React.Fragment>
            <Navbar callback={handleSearch} />
            <MovieList searchTerm={searchTerm} />                   
        </React.Fragment>
    )
    }
export default App;
