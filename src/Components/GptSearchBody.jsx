import React from 'react'

function GptSearchBody() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="flex w-full max-w-md">
        <input
          type="text"
          placeholder="Search for movies, shows, and more..."
          className="flex-grow bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-l-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          className="bg-red-600 text-white font-semibold rounded-r-md px-6 py-3 hover:bg-red-700 transition duration-200"
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default GptSearchBody