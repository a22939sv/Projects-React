import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";



const Restaurant = (props) => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState([{}]);

    const getRestaurant = async (id) => {
        const url = `/api/v1/restaurant/id/${id}`;

        const response = await fetch(url);

        const responseJson = await response.json();

        if (responseJson.data) {
            setRestaurant(responseJson.data);
        }
    }

    useEffect(() => {
        getRestaurant(id);
    }, [id]);

    return (
        <div className="container-fluid restaurant-app">
            <div className="row">
                <h1>Pagina de Restaurant{restaurant.name}!!</h1>
            </div>
        </div>
    );
};

export default Restaurant;
