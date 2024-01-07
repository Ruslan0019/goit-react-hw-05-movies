import React, { useState, useEffect } from 'react';

function Home() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmM4ZmNlODBkNWY2YWRhNDI2MmIyY2Q0OTQwNTY1MiIsInN1YiI6IjY1NDIzNzExMWFjMjkyMDBlMTE4NGQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z31pb3WMAG3QsgPH8x9AM27sCQZfGvUnbyhPmGdRJT0',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => setResponseData(response))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <nav>
        <button>Home</button>
        <button>Movies</button>
      </nav>
<h1>Trending today</h1>
      {responseData ? (
        <ul
        >
          {responseData.results.map(item => (
            <a key={item.id} href={`your_link_here/${item.id}`} style={{
            
                display: 'block',
                marginBottom: 20.
                
                
              }}>
            {item.title ? item.title : item.name}
          </a>
          ))}
        </ul>
      ) : (
        <p>Завантаження...</p>
      )}
    </div>
  );
}

export default Home;
