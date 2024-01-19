import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      <Link
        key={movie.id}
        to={`/movies/${movie.id}`}
        style={{
          display: 'block',
          marginBottom: 20,
        }}
      >
        {movie.title || movie.name}
      </Link>
    ))}
  </ul>
);

export default MovieList;
