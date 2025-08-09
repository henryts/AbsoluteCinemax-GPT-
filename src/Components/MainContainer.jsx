import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoContainer from './VideoContainer';

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  const mainMovie = movies[0];
  const { original_title, overview } = mainMovie;

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <VideoContainer id={mainMovie?.id} />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black z-10 flex items-center">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
}

export default MainContainer;
