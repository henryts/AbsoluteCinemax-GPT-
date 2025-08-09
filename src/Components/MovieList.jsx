import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ title, movies }) {
  return (
    <div className="mb-10">
      {/* Title with Netflix-like style */}
      <h1 className="text-2xl font-bold text-white mb-4 relative inline-block">
        {title}
        <span className="absolute left-0 -bottom-1 w-12 h-1 bg-red-600"></span>
      </h1>

      {/* Horizontal scroll row */}
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} imgPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
