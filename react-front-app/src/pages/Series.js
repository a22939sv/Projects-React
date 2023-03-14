import React from "react";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import NavBar from "../components/NavBar";

const Series = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <header>
        <NavBar />
      </header>
      <main className="capaContenido text-white">
        <MovieList heading="Series" />
      </main>
      <footer className="pieDePagina py-3 my-4 text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Series;
