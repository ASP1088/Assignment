import './movielist.css';
import './movielist.css';
import { useState,useEffect } from 'react';
import { getData, searchData } from '../api';

function MoviesList({searchTerm,sortOption}){
        
    const [data, setData] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

        useEffect(() => {
            //console.log('searchMovie',searchTerm);
            //console.log('data',data);
            if(searchTerm.length > 0){
                //console.log('in if');
                searchData(searchTerm).then(res => setData(res.data.results));
            }else{
                //console.log('in else');
                getData().then(res => setData(res.data.results));
            }
        }
        ,[searchTerm]);  
       
        const handleClick = (episode_id) => {
            const filteredData = data.find((newItem) => newItem.episode_id === episode_id);
            setSelectedMovie(filteredData);
        };
        
    return(
    <div className="movielist-container">
         <div className="episodes">
            {
            data.map((item) =>
            <div key={item.episode_id}> 
                <div
                 className='column-container' 
                 onClick={() => handleClick(item.episode_id)}>
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
         {selectedMovie ? (
                    <>
                        <h2>{selectedMovie.title}</h2>
                        <p>{selectedMovie.opening_crawl}</p>
                    </>
                ) : (
                    <p>Select a movie to see the description</p>
                )}
            </div>
    </div>    
    );
}

export default MoviesList;