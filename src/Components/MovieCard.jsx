import React from 'react';
import { imageUrl } from '../utils/constants';

function MovieCard({ imgPath }) {
  return (
    <div className="flex-shrink-0 w-40 hover:scale-105 transition-transform duration-300">
      <img
        src={imageUrl + imgPath}
        alt="Movie Poster"
        className="w-full h-auto rounded-md"
      />
    </div>
  );
}

export default MovieCard;
