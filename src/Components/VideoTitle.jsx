import React from 'react';

function VideoTitle({ title, overview }) {
  return (
    <div className="pl-8 md:pl-16 text-white max-w-xl">
      <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">{title}</h1>
      <p className="mt-4 text-sm md:text-lg text-gray-200 drop-shadow-md">{overview}</p>
      <div className="mt-6 flex gap-4">
        <button className="bg-white text-black py-2 px-6 rounded font-semibold hover:bg-gray-200 transition">
          ▶ Play
        </button>
        <button className="bg-gray-700 bg-opacity-80 text-white py-2 px-6 rounded font-semibold hover:bg-gray-600 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
