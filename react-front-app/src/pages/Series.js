import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import NavBar from "../components/NavBar";

const Series = () => {
  const [series, setSeries] = useState([]);

  const getSeries = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page=5`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.results) {
      setSeries(responseJson.results);
    }
  };

  useEffect(() => {
    getSeries();
  }, []);

  return (
    <div className="container-fluid m-0 p-0">
      <header>
        <NavBar />
      </header>
      <main className="capaContenido text-white">
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

export default Series;
