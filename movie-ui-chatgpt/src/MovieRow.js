import React from 'react';
import MovieCard from './MovieCard';

const MovieRow = ({ movies }) => {
  return (
    <div className="movie-row">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  );
};

export default MovieRow;
