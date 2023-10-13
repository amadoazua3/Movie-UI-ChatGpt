import React from 'react';

const MovieCard = ({ title, description, actors, directors, coverArt }) => {
  return (
    <div className="movie-card">
      <img src={coverArt} alt={`${title} Cover Art`} />
      <div className="movie-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <p><strong>Actors:</strong> {actors}</p>
        <p><strong>Directors:</strong> {directors}</p>
      </div>
    </div>
  );
};

export default MovieCard;
