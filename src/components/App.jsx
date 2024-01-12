import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('Pages/HomePage'));
const MovieDetailsPage = lazy(() => import('Pages/MovieDetailsPage'));
const CastPage = lazy(() => import('Pages/CastPage'));
const ReviewsPage = lazy(() => import('Pages/ReviewsPage'));
const MoviesPage = lazy(() => import('Pages/MoviesPage'));
const Layout = lazy(() => import('./Layout/Layout'));

const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />

            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
