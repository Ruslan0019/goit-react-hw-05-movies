const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmM4ZmNlODBkNWY2YWRhNDI2MmIyY2Q0OTQwNTY1MiIsInN1YiI6IjY1NDIzNzExMWFjMjkyMDBlMTE4NGQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z31pb3WMAG3QsgPH8x9AM27sCQZfGvUnbyhPmGdRJT0'

const fetchMovies = async (searchQuery) => {
  const options= {
    method:"GET",
    headers: {
      accept:'application/json',
      Authorization:`Bearer ${apiKey}`
    }
  };
try {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,options);
  const data = await response.json();
  return data.results
}catch (error) {
  console.log('error');
  return [];

}
};
export default fetchMovies