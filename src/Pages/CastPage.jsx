import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

const CastPage = () => {
  const [castDetails, setResponseData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmM4ZmNlODBkNWY2YWRhNDI2MmIyY2Q0OTQwNTY1MiIsInN1YiI6IjY1NDIzNzExMWFjMjkyMDBlMTE4NGQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z31pb3WMAG3QsgPH8x9AM27sCQZfGvUnbyhPmGdRJT0', 
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
      .then(response => response.json())
      .then(response => setResponseData(response))
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      {castDetails && castDetails.cast && (
        <div>
        {castDetails.cast.map(actor => (
          <ul key={actor.id}>
            <div>{actor.profile_path && <img style={{ width: 300 }} src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt="" />}</div>
           
            <li>Actor: {actor.name}</li>
            <p>Character: {actor.character}</p>
            <hr />
          </ul>
        ))}
      </div>
      )}
    </div>
  );
};

export default CastPage;
