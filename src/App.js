import React from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

function App(){
    return(
        <React.Fragment>
            <Navbar />
            <MovieList />
        </React.Fragment>
    )
}
export default App;