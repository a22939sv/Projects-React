import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=f88c9283`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
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
        <MovieList heading="Home" movies={movies} />
      </main>
      <footer className="pieDePagina py-3 my-4 text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
