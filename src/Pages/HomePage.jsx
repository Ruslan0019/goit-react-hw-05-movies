import { fetchTrendingMovies } from 'api/api';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const HomePages = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    fetchTrendingMovies()
      .then(response => setResponseData(response))
      .catch(err => console.error(err));
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      {responseData ? (
        <ul>
          {responseData.results.map(item => (
            <li key={item.id} style={{ marginBottom: 20 }}>
              <NavLink to={`movies/${item.id}`} style={{ display: 'block' }}>
                {item.title ? item.title : item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePages;
