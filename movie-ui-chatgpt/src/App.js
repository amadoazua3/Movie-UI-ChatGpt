import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import ReactDOM from 'react-dom';
import MovieRow from './MovieRow';


const movies = [
  {
    title: "Black Hawk Down",
    rating: "5",
    _id: 1,
    genre: "War, Action",
    actors: "Josh Hartnett, Ewan McGregor, Tom Sizemore, Eric Bana",
    director: "Ridley Scott",
    plot: "160 elite U.S. soldiers drop into Somalia to capture two top lieutenants of a renegade warlord and find themselves in a desperate battle with a large force of heavily-armed Somalis.",
    year: "1990",
    coverArt: "https://m.media-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00YmFiLTk1YjQtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
  },
  {
    title: "Tenet",
    rating: "5",
    _id: 2,
    genre: "Action, Sci-Fi",
    actors: "Elizabeth Debicki, Robert Pattinson, John David Washington, Aaron Taylor-Johnson",
    director: "Christopher Nolan",
    plot: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    year: "1990",
    coverArt: "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg"
  },
  {
    title: "Resident Evil",
    rating: "5",
    _id: 3,
    genre: "Action, Horror, Sci-Fi",
    actors: "Ryan McCluskey, Oscar Pearce, Indra Ové, Anna Bolt",
    director: "Paul W.S. Anderson",
    plot: "A special military unit fights a powerful, out-of-control supercomputer and hundreds of scientists who have mutated into flesh-eating creatures after a laboratory accident.",
    year: "2002",
    coverArt: "https://m.media-amazon.com/images/M/MV5BZmI1ZGRhNDYtOGVjZC00MmUyLThlNTktMTQyZGE3MzE1ZTdlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
  },
  {
    title: "Kimi No Na Wa",
    rating: "5",
    _id: 4,
    genre: "Animation, Drama",
    actors: "Mone Kamishiraishi, Ryûnosuke Kamiki, Aoi Yūki",
    director: "Makoto Shinkai",
    plot: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    year: "2016",
    coverArt: "https://i.pinimg.com/originals/30/a4/65/30a465d7c817d81dcfeeb7c834d9dc1f.jpg"
  },
  {
    title: "Fight Club",
    rating: "5",
    _id: 5,
    genre: "Drama",
    actors: "Brad Pitt, Edward Norton, Meatloaf",
    director: "David Fincher",
    plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    year: "1999",
    coverArt: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    title: "Speed Racer",
    rating: "5",
    _id: 6,
    genre: "Action, Adventure, Comedy",
    actors: "Emile Hirsch, Christina Ricci, John Goodman, Susan Sarandon, Matthew Fox",
    director: "The Wachowskis",
    plot: "A young driver, Speed Racer, aspires to be champion of the racing world with the help of his family and his high-tech Mach 5 automobile.",
    year: "2008",
    coverArt: "https://michaelgiacchino.com/wp-content/uploads/2008/05/speed_racer_ver5_xlg.jpg"
  },
  {
    title: "Pootie Tang",
    rating: "5",
    _id: 7,
    genre: "Comedy, Action",
    actors: "Lance Crouther, Chris Rock, Wanda Sykes",
    director: "Louis C. K.",
    plot: "\"The Man\" is baffled by a chill hero's invincible weapon: gibberish.",
    year: "2001",
    coverArt: "https://images-na.ssl-images-amazon.com/images/I/51ahSJ4EZ5L._AC_.jpg"
  }
  // Add more movie data objects here...
];

const MovieCard = ({ movie }) => {
  const [isFlipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="movie-card" onClick={flipCard}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front of the card */}
        <div className="card-front">
          <img
            src={movie.poster}
            alt={`${movie.name} Poster`}
            width="270"
            height="400"
          />
          <h3>{movie.name}</h3>
          <p>{movie.year}</p>
        </div>

        {/* Back of the card */}
        <div className="card-back">
          <h3>{movie.name}</h3>
          <p>{movie.plot}</p>
          <p><strong>Actors:</strong> {movie.actors}</p>
          <p><strong>Directors:</strong> {movie.directors}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
        </div>
      </ReactCardFlip>
    </div>
  );
};


function App() {

    ReactDOM.render(
      <MovieRow movies={movies} />,
      document.getElementById('root')
    );


}

export default App;
