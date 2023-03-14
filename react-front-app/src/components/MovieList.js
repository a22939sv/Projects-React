import React from "react";

const MovieList = (props) => {
  return (
    <div className="container-fluid">
      <h1>Página de {props.heading}</h1>
      {props.movies.map((movie, index) => (
        <img src={movie.Poster} alt="Pelicula Poster"></img>
      ))}
    </div>
  );
};

export default MovieList;
