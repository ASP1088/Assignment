import React from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieDesc from "./components/MovieDesc";

function App(){
    return(
        <React.Fragment>
            <Navbar />

            <React.Fragment>
                <MovieList />
                <MovieDesc />
            </React.Fragment>
        </React.Fragment>
    )
}
export default App;