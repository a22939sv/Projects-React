import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          key={index}
          className="image-container d-flex justify-content-start m-3"
        >
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            title="Poster Pelicula"
            alt="Poster Pelicula"
          ></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
