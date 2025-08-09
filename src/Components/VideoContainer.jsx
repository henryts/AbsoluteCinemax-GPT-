import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchVideo } from '../hooks/useFetchVideoId';

function VideoContainer({ id }) {
  const videoId = useSelector((store) => store.movies?.videoId);
  useFetchVideo({ id });

  return (
    <div className="w-full h-full">
      {videoId ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
}

export default VideoContainer;
