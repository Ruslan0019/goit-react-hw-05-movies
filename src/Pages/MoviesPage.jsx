import fetchMovies from 'api/api';
import React, { useState } from 'react';


const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
    

  const handleSearch = async() => {
    const results  = await fetchMovies(searchQuery)
    setMovies(results);
    };
    
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <a id={movie.id}
            href={`movies/${movie.id}`}
            style={{
              display: 'block',
              marginBottom: 20,
            }}>{movie.title}</a>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
