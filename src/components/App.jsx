import React from 'react';
import Home from './Home/Home';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmM4ZmNlODBkNWY2YWRhNDI2MmIyY2Q0OTQwNTY1MiIsInN1YiI6IjY1NDIzNzExMWFjMjkyMDBlMTE4NGQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z31pb3WMAG3QsgPH8x9AM27sCQZfGvUnbyhPmGdRJT0` 
  }
};

const searchKeyword = 'dog'; 

fetch(`https://api.themoviedb.org/3/search/movie?query=${searchKeyword}&include_adult=false&language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
const App = () => {
  return (
    <>
      <div></div>
      {/* <Api/> */}
      <Home />
    </>
  );
};
export default App;
