import React from "react";

const SearchBox = () => {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        title="Buscar peliculas"
      />
      <button title="Buscar peliculas" className="btnSearch" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
