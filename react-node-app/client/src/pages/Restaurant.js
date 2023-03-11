import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";

const Restaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([{}]);

  const getRestaurant = async (id) => {
    const url = `/api/v1/restaurant/id/${id}`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.data) {
      setRestaurant(responseJson.data);
    }
  };

  function getMenuRestaurant(id) {
    return "/restaurant/" + id + "/menu";
  }

  useEffect(() => {
    getRestaurant(id);
  }, [id]);

  return (
    <>
      {restaurant.map((rest, index) => (
        <div className="container-fluid restaurant-app">
          <div className="row">
            <Link to={getMenuRestaurant(rest.id)}>
              <img
                className="img-restaurant-list"
                src={rest.img}
                alt="restaurant"
              ></img>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Restaurant;
