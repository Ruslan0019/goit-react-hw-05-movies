import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'Pages/HomePage';
import MovieDetailsPage from 'Pages/MovieDetailsPage';
import CastPage from 'Pages/CastPage';
import ReviewsPage from 'Pages/ReviewsPage';
import MoviesPage from 'Pages/MoviesPage';
import Layout from './Layout/Layout';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="movies/:movieId/cast" element={<CastPage />} />
          <Route path="movies/:movieId/reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};
export default App;
