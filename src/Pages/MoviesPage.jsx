import fetchMovies from 'api/api';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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
            <Link key={movie.id}
            to={`/movies/${movie.id}`}
            style={{
              display: 'block',
              marginBottom: 20,
            }}>{movie.title}</Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
