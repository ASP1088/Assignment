import './movielist.css';
import './movielist.css';
import { useState,useEffect } from 'react';
import { getData, searchData } from '../api';
import {searchMovie} from '../App';
import axios from 'axios';

function MoviesList({searchMovie}){
        
    const [data, setData] = useState([]);
        useEffect(() => {
            //if (searchMovie) {
                 console.log('hey',searchMovie)
                // let url='https://swapi.dev/api/films/?search='+searchMovie;
                // console.log('url',url);
                // axios.get(url).then( res => {console.log('hello',res);setData(res.data.results)})
                //searchData(searchMovie).then( res =>{console.log('hello',res); setData(res.data.results)})
            //}else{
                getData().then( res => setData(res.data.results))
            }
        ,[searchMovie]);
    
        console.log(data);
        
    return(
    <div className="movielist-container">
         <div className="episodes">
            {
            data.map((item) =>
            <div>
                <div className='column-container'>
                    <div className='col1'>Episode {item.episode_id}</div> 
                    <div className='col2'>{item.title}</div> 
                    <div className='col3'>{item.release_date}</div> 
                </div>
                <hr className="line" />  
            </div>       
            )
            }
         </div>
         <div className="partition"></div>
         <div className='desc'>
                 Description
        </div>     
    </div>    
    );
}

export default MoviesList;