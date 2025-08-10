import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

function SecondaryContainer() {



  const movies = useSelector((store) => store.movies);

  console.log("movies from store===>",movies);
  

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
       <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      {/* <MovieList title="Trending" movies={movies.trendingMovies} /> */}
      <MovieList title="Popular" movies={movies.popularMovies} />
     
    </div>
  );
}

export default SecondaryContainer;
