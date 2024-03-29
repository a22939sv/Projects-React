import React, { useEffect, useState } from "react";
import "../css/MenuRestaurant.css";
import { Link, useParams } from "react-router-dom";

const MenuRestaurant = () => {
  const { id } = useParams();
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
    restaurant.map((rest) => getMenu(rest.idMenu));
  }, [id, restaurant]);

  return (
    <>
      {restaurant.map((rest, index) => (
        <>
          <section
            key={index}
            id="specialssection"
            className="specials-container"
          >
            <div id="special_component" className="menuStyle">
              <h1>{rest.name}</h1>
              <div className="specials-table-container">
                {menu.map((product, index) => (
                  <table key={index}>
                    <tbody>
                      <tr className="nameandprice">
                        <td>
                          <span>{product.name}</span>
                        </td>
                        <td>
                          <span>{product.price}€</span>
                        </td>
                      </tr>
                      <tr className="description">
                        <td>{product.description}</td>
                      </tr>
                    </tbody>
                  </table>
                ))}
              </div>
            </div>
          </section>
          {localStorage.getItem("user") ? (
            <div className="d-flex align-items-center justify-content-center">
              <Link to={"/restaurant/" + rest.id + "/menu/" + rest.idMenu}>
                <input
                  type="button"
                  className="btn-product"
                  value="Realizar Compras"
                ></input>
              </Link>
            </div>
          ) : (
            ""
          )}
        </>
      ))}
    </>
  );
};

export default MenuRestaurant;
