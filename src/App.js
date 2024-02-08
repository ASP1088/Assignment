import React from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import { getData,searchData } from "./api";
import { useState } from "react";



function App(){
    const [searchMovie, setSearchMovie] = useState('');
    
    const callFromNavbar=async(value)=>{ 
     console.log(`Value passed is ${value}`);
     const result = await searchData(value);
     setSearchMovie(result);

     return searchMovie;
    }

    return(
        <React.Fragment>
            <Navbar callback={callFromNavbar}/>
            <MovieList  searchMovie={searchMovie} key={searchMovie}/>                   
        </React.Fragment>
    )
    }
export default App;
