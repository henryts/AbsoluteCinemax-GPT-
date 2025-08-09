import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {
    console.log({movies});
  return (
    <div>
        <MovieCard/>
    </div>
  )
}

export default MovieList