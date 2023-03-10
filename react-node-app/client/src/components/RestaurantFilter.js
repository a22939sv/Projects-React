import React from "react";

const RestaurantFilter = (props) => {
  return (
    <div className="p-4 pb-0 mb-3">
      <div className="d-flexbox">
        <h1 className="mb-4">Filtros</h1>
        <button 
          className="closeButton"
          onClick={() => props.removeFilter()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="red"
            className="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </button>
      </div>
      <div className="pb-4 d-grid">
        <label>
          <h4>Categoria</h4>
        </label>
        <select
          id="categoryInput"
          className="categoryInput"
          onChange={(event) =>
            props.setRestaurantCategory(event.currentTarget.value)
          }
        >
          <option value=""></option>
          {props.category.map((category, index) => (
            <option key={index} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>
        <label className="mt-3">
          <h4>Estrellas</h4>
        </label>
        <div className="">
          <input
            className="me-2 starInput"
            type="button"
            value="⭐"
            onClick={() => props.setRestaurantStar("1")}
          ></input>
          <input
            className="me-2 starInput"
            type="button"
            value="⭐⭐"
            onClick={() => props.setRestaurantStar("2")}
          ></input>
          <input
            className="me-2 starInput"
            type="button"
            value="⭐⭐⭐"
            onClick={() => props.setRestaurantStar("3")}
          ></input>
          <input
            className="me-2 starInput"
            type="button"
            value="⭐⭐⭐⭐"
            onClick={() => props.setRestaurantStar("4")}
          ></input>
          <input
            className="me-2 starInput"
            type="button"
            value="⭐⭐⭐⭐⭐"
            onClick={() => props.setRestaurantStar("5")}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFilter;
