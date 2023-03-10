import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RestaurantList from "./components/RestaurantList";
import RestaurantListHeading from "./components/RestaurantListHeading";
import RestaurantFilter from "./components/RestaurantFilter";
import Header from "./components/Header";

const App = () => {
  const imgEstablecimientos =
    "https://res.cloudinary.com/glovoapp/w_48,h_48,f_auto,q_auto:best/CX/new_backend_driven_home_screen/newUserRecommendationsWidgetIconLight";
  const imgEstablecimientosStar =
    "https://res.cloudinary.com/glovoapp/w_48,h_48,f_auto,q_auto:best/CX/new_backend_driven_home_screen/bestInCityLight";
  const [restaurants, setRestaurants] = useState([{}]);
  const [restaurantsScore, setRestaurantsScore] = useState([{}]);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState([{}]);

  const getRestaurantsRequest = async (searchValue) => {
    var url = "";
    if (searchValue !== "") {
      url = `/api/v1/restaurant/name/${searchValue}`;
    } else {
      url = `/api/v1/restaurant`;
    }

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.data) {
      setRestaurants(responseJson.data);
    }
  };

  const getRestaurantsScoreRequest = async () => {
    const url = `/api/v1/restaurant/star`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.data) {
      setRestaurantsScore(responseJson.data);
    }
  };

  const getCategory = async () => {
    const url = `/api/v1/restaurant/category`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.data) {
      setCategory(responseJson.data);
    }
  }

  const setRestaurantCategory = async (category) => {
    var url;
    if (category !== "") {
      url = `/api/v1/restaurant/category/${category}`;
    } else {
      url = `/api/v1/restaurant`;
    }

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.data) {
      setRestaurants(responseJson.data);
    }
  }

  const setRestaurantStar = async (star) => {
    var url;
    if (star !== "") {
      url = `/api/v1/restaurant/star/${star}`;
    } else {
      url = `/api/v1/restaurant`;
    }

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.data) {
      setRestaurants(responseJson.data);
    }
  }

  useEffect(() => {
    getRestaurantsRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    getRestaurantsScoreRequest();
  }, []);

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="container-fluid restaurant-app">
      <div className="row">
        <h1>Pagina de LOGIN!!</h1>
      </div>
    </div>
  );
};

export default App;
