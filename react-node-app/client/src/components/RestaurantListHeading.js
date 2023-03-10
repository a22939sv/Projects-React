import React from "react";

const RestaurantListHeading = (props) => {
    return (
        <div className="col mt-2 d-flex">
            <img className="img-establecimientos" src={props.img}
                alt="Establecimientos"
            ></img>
            <h2>{props.heading}</h2>
        </div>
    )
}

export default RestaurantListHeading;