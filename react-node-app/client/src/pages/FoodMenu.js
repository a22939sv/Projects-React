import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/FoodMenu.css";
import { useParams } from "react-router-dom";

const FoodMenu = () => {
  const { id, idMenu } = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const [menu, setMenu] = useState([]);
  const [compras, setCompras] = useState([]);

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

  useEffect(() => {
    if (localStorage.getItem("compras")) {
      const compr = JSON.parse(localStorage.getItem("compras"));
      setCompras(compr);
    } else {
      const compr = [];
      localStorage.setItem("compras", JSON.stringify(compr));
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("compras", JSON.stringify(items));
  };

  const addCompra = (product) => {
    var addProduct = true;
    compras.forEach((producto) => {
      if (product.id === producto.id) {
        addProduct = false;
      }
    });

    if (addProduct) {
      const newCompras = [...compras, product];
      setCompras(newCompras);
      saveToLocalStorage(newCompras);
    }
  };

  const removeCompra = (product) => {
    const newCompras = compras.filter((compra) => compra.id !== product.id);

    setCompras(newCompras);
    saveToLocalStorage(newCompras);
  };

  const insertOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user"))[0];

    // crea un nuevo objeto `Date`
    var today = new Date();
    // `getDate()` devuelve el día del mes (del 1 al 31)
    var day = today.getDate();
    // `getMonth()` devuelve el mes (de 0 a 11)
    var month = today.getMonth() + 1;
    // `getFullYear()` devuelve el año completo
    var year = today.getFullYear();
    // muestra la fecha de hoy en formato `YYYY-MM-DD`
    const date = `${year}-${month}-${day}`;

    const compras = JSON.parse(localStorage.getItem("compras"));

    const url = `/api/v1/order/${user.id}/${date}`;

    const response = await fetch(url);

    const responseJson = await response.json();

    var insertId = responseJson.data.insertId;

    if (responseJson.data) {
      console.log(responseJson.data);
    } else {
      console.log(responseJson);
    }

    compras.forEach(async (product) => {
      const url = `/api/v1/lineorder/${insertId}/${product.id}/1`;

      const response = await fetch(url);

      const responseJson = await response.json();

      if (responseJson.data) {
        console.log(responseJson.data);
      } else {
        console.log(responseJson);
      }
    });

    localStorage.removeItem("compras");
    alert("Pedido realizado correctamente");
    window.location.href = `http://localhost:3000/restaurant/${restaurant[0].id}/menu/${menu[0].id}`;
  };

  return (
    <>
      {restaurant.map((rest, index) => (
        <div key={index}>
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
                    onClick={() => addCompra(product)}
                  ></input>
                </div>
              </article>
            ))}
          </div>
          <h1 className="d-flex align-items-center justify-content-center">
            Carrito de la compra
          </h1>
          <div className="d-grid align-items-center justify-content-center">
            {compras
              ? compras.map((producto, index) => (
                  <div key={index} className="container-compras">
                    <img src={producto.img} alt="producto-compras"></img>
                    <h4 className="m-auto me-4 ms-4">
                      <b>{producto.name}</b>
                      <p className="h6">
                        <i>{producto.description}</i>
                      </p>
                    </h4>
                    <button
                      className="close-button"
                      onClick={() => removeCompra(producto)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="red"
                        className="bi bi-x-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                      </svg>
                    </button>
                  </div>
                ))
              : ""}
          </div>
          {compras && compras.length !== 0 ? (
            <div className="d-flex mt-3 align-items-center justify-content-center">
              <input
                type="button"
                className="btn-product w-25"
                value="Aceptar Compra"
                onClick={insertOrder}
              ></input>
            </div>
          ) : (
            <h5 className="d-flex mt-3 align-items-center justify-content-center">
              No hay productos...
            </h5>
          )}
        </div>
      ))}
    </>
  );
};

export default FoodMenu;
