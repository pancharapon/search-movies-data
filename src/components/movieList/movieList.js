import React from 'react';

const movieList = React.memo((props) => {
  const configMoviePoster = props.movies.filter((movie) => {
    return movie.poster_path !== null;
  });

  const movies = configMoviePoster.map((movie) => {
    return (
      <div
        key={movie.id}
        className="group flex flex-col relative bg-gray-700 text-gray-50 m-2 md:m-4 shadow-2xl rounded"
      >
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
            alt={`poster ${movie.title}`}
            className="w-full h-full pt-2 pl-2 pr-2"
          />
        </div>
        <div className="text-center h-14 mt-1 pl-2 pr-2 pb-2">
          <span>{movie.title}</span>
        </div>
        <div className="hidden group-hover:block absolute bg-gray-50 text-black text-sm top-full transform -translate-y-full w-full p-2 h-3/4 overflow-y-auto">
          <span onClick={() => props.openVideoHandler(movie.id)} className="block cursor-pointer underline text-center text-md hover:text-green-500 font-bold mb-1">{movie.title}</span>
          <span className="antialiased lg:text-xs">{movie.overview}</span>
        </div>
      </div>
    );  
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
      {movies}
    </div>
  );
});

export default movieList;
