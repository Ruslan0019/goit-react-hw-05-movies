import { Link, useParams } from 'react-router-dom';
import React, {  useEffect, useState } from 'react';


const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const TMDbURL='https://image.tmdb.org/t/p/original'
  const BaseURL ='https://api.themoviedb.org/3/'
    
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmM4ZmNlODBkNWY2YWRhNDI2MmIyY2Q0OTQwNTY1MiIsInN1YiI6IjY1NDIzNzExMWFjMjkyMDBlMTE4NGQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z31pb3WMAG3QsgPH8x9AM27sCQZfGvUnbyhPmGdRJT0',
      }
    };
    fetch(`${BaseURL}movie/${movieId}?language=en-US`, options)
      .then(response => response.json())
      .then(response => setMovieDetails(response))
      .catch(err => console.error(err));
  }, [movieId]);

  const { poster_path, title,vote_average,overview,genres} = movieDetails;
  
  return (
    <div>
      <Link to={`/`}><button>Go back</button></Link>
      <div>
        <div>{poster_path ? <img style={{ width: 300 }} src={`${TMDbURL}${poster_path}`} alt="" /> : <img style={{ width: 300 }} src={`https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`} alt="" /> }</div>
      <div><h1>{title}</h1>
      <p>IMDB {vote_average&&vote_average.toFixed(1)} </p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      {genres && genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}</div>
      </div>
      <div>Additional information</div>

      
      <nav>
        <ul>
          <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
          <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
        </ul>
      </nav>

     
      
    </div>
  );
};

export default MovieDetails;
