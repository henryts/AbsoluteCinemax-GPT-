import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Trending" movies={movies.trendingMovies} />
      <MovieList title="Popular" movies={movies.popularMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
    </div>
  );
}

export default SecondaryContainer;
