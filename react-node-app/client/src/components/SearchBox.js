import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center justify-content-center">
      <input
        id="searchInput"
        type="text"
        className="searchInput form-control"
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Buscar en Restaurantes"
      ></input>
    </div>
  );
};

export default SearchBox;
