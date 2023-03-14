import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page=`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  const getSeries = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page=5`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.results) {
      setSeries(responseJson.results);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getSeries();
  }, []);

  return (
    <div className="container-fluid m-0 p-0">
      <header>
        <NavBar />
      </header>
      <main className="capaContenido container-fluid text-white">
        <div className="row containerHome">
          <div className="d-flex flex-column align-items-center justify-content-end">
            <h1 className="mb-3 titleHome">THE LAST OF US</h1>
            <h1 className="ms-3 me-3 mb-5">
              En HBO Max encontrarás películas icónicas, series premiadas y
              mucho más.
            </h1>
          </div>
        </div>
        <div className="row ms-1 mt-4">
          <MovieListHeading heading="Listado de Películas" />
        </div>
        <div className="row ms-1">
          <MovieList movies={movies} />
        </div>
        <div className="row ms-1 mt-4">
          <MovieListHeading heading="Listado de Series" />
        </div>
        <div className="row ms-1">
          <MovieList movies={series} />
        </div>
      </main>
      <footer className="pieDePagina py-3 mt-4 text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
