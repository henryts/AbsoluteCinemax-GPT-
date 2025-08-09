import React from 'react'

import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
   
    const movies = useSelector((store)=>store.movies)

   

  return (
//movie list - trending, popular, nw playing,generes -

    <div>
        <MovieList title= {"now Playing"} movies={movies}/>
    </div>
  )
}

export default SecondaryContainer