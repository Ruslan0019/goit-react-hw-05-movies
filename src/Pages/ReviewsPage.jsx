import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

const ReviewsPage = () => {
  const [reviewsDetails, setResponseData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmM4ZmNlODBkNWY2YWRhNDI2MmIyY2Q0OTQwNTY1MiIsInN1YiI6IjY1NDIzNzExMWFjMjkyMDBlMTE4NGQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z31pb3WMAG3QsgPH8x9AM27sCQZfGvUnbyhPmGdRJT0', 
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setResponseData(response))
      
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      {reviewsDetails && reviewsDetails.results && reviewsDetails.results.length > 0 ? (
        <div>
          {reviewsDetails.results.map(review => (
            <ul key={review.id}>
              <li>Author: {review.author}</li>
              <p>{review.content}</p>
              <hr />
            </ul>
          ))}
        </div>
      ) : (
        <ul>there are no reviews.</ul>
      )}
    </div>
  );
};

export default ReviewsPage;
