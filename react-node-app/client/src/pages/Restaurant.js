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
    <div className="wrapper">
      <div className="widget">
        {restaurant.map((rest, index) => (
          <div key={index}>
            <img
              className="widget__photo"
              src={rest.img}
              alt="restaurant"
            ></img>
            <Link to={getMenuRestaurant(rest.id)}>
              <div className="widget__button">Ver Menu</div>
            </Link>
            <div className="widget__details">
              <div className="widget__badges">
                <div className="widget__badge">Star</div>
                <div className="widget__badge widget__badge--rating">
                  {rest.star}
                </div>
              </div>
              <div className="widget__name">{rest.name}</div>
              <div className="widget__type">{rest.category}</div>
              <div className="widget__info">
                <span>{rest.address}</span>
              </div>
              <div className="widget__hidden">
                <table className="widget__table">
                  <tbody>
                    <tr>
                      <td>Type</td>
                      <td>{rest.type}</td>
                    </tr>
                    <tr>
                      <td>Credit-cards</td>
                      <td>{rest.credit_card === 0 ? "No" : "Yes"}</td>
                    </tr>
                    <tr>
                      <td>Wi-Fi</td>
                      <td>{rest.wifi === 0 ? "No" : "Yes"}</td>
                    </tr>
                    <tr>
                      <td>Outdoor Seating</td>
                      <td>{rest.outdoor_seating === 0 ? "No" : "Yes"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
