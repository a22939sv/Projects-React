import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/FoodMenu.css";
import { useParams } from "react-router-dom";

const FoodMenu = () => {
  const { id, idMenu } = useParams();
  const [restaurant, setRestaurant] = useState([{}]);
  const [menu, setMenu] = useState([{}]);

  const getRestaurant = async (id) => {
    const url = `/api/v1/restaurant/id/${id}`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.data) {
      setRestaurant(responseJson.data);
    }
  };

  const getMenu = async (idMenu) => {
    const url = `/api/v1/restaurant/menu/${idMenu}`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.data) {
      setMenu(responseJson.data);
    }
  };

  useEffect(() => {
    getRestaurant(id);
  }, [id]);

  useEffect(() => {
    getMenu(idMenu);
  }, [idMenu]);

  return (
    <>
      {restaurant.map((rest, index) => (
        <>
          <h1 className="d-flex align-items-center justify-content-center">
            {rest.name}
          </h1>
          <div className="menu-ctn">
            {menu.map((product, index) => (
              <article key={index} className="food-item-card">
                <div className="food-img-ctn">
                  <img src={product.img} alt=""></img>
                </div>
                <div className="food-desc-ctn">
                  <div className="name-and-price">
                    <h2 className="name">{product.name}</h2>
                    <span className="price">{product.price}€</span>
                  </div>
                  <div className="desc-text">{product.description}</div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <input
                    type="button"
                    className="btn-product"
                    value="Seleccionar"
                  ></input>
                </div>
              </article>
            ))}
          </div>
        </>
      ))}
    </>
  );
};

export default FoodMenu;
