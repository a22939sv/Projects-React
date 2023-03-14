import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import NavBar from "../components/NavBar";
import MovieListHeading from "../components/MovieListHeading";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page=`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container-fluid m-0 p-0">
      <header>
        <NavBar />
      </header>
      <main className="capaContenido text-white">
        <div className="row ms-1 mt-4">
          <MovieListHeading heading="Listado de Películas" />
        </div>
        <div className="row ms-1">
          <MovieList movies={movies} />
        </div>
      </main>
      <footer className="pieDePagina py-3 mt-4 text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Movies;
