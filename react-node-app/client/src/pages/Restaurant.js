import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import "../css/Restaurant.css";

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
    <div className="container-fluid">
      {restaurant.map((rest, index) => (
        <div key={index} className="row">
          <Link to={getMenuRestaurant(rest.id)}>
            <img
              className="img-restaurant-menu"
              src={rest.img}
              alt="restaurant"
            ></img>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Restaurant;
