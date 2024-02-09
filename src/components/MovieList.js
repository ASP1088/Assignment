import './movielist.css';
import './movielist.css';
import { useState,useEffect } from 'react';
import { getData, searchData } from '../api';

function MoviesList({searchTerm,sortOption}){
        
    const [data, setData] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
            setIsLoading(true);
            if(searchTerm.length > 0){
                searchData(searchTerm).then(res => setData(res.data.results));
                setIsLoading(false);
            }else{
                getData().then(res => {
                    const sortedData = res.data.results.sort((a, b) => {
                        if (sortOption === 'episode_id') {
                          return a.episode_id - b.episode_id;
                        } else if (sortOption === 'release_date') {
                          return new Date(a.release_date) - new Date(b.release_date);
                        }
                        return 0;
                      });
              
                      setData(sortedData);
                      setIsLoading(false);
                    });

            }
        },[searchTerm, sortOption]);  
       
        const handleClick = (episode_id) => {
            const filteredData = data.find((newItem) => newItem.episode_id === episode_id);
            setSelectedMovie(filteredData);
        };
        
    return(
        <div className="movielist-container">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="episodes">
            {data.map((item) => (
              <div key={item.episode_id}>
                <div className='column-container' onClick={() => handleClick(item.episode_id)}>
                  <div className='col1'>Episode {item.episode_id}</div>
                  <div className='col2'>{item.title}</div>
                  <div className='col3'>{item.release_date}</div>
                </div>
                <hr className="line" />
              </div>
            ))}
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
        </>
      )}
    </div>
  );
}

export default MoviesList;