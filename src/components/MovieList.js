import './movielist.css';
import { useState,useEffect, useCallback } from 'react';
import { getData } from '../api';

function MoviesList(){
        
        const [data, setData] = useState([]);

        useEffect(() => {
            getData().then( res => setData(res.data.results))
        },[]);
    
        console.log(data);
    return(
    <div className="container">
         <div className="episodes">
            {
            data.map((item) =>
            <div>
             <div>Episode {item.episode_id}      {item.title}          {item.release_date} </div> 
             <hr className="line" />   
            </div>     
            )
            }
         </div>
         <div className="partition"></div>
    </div>    
    );
}

export default MoviesList;