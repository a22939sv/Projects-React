import React from "react";

const StarRatings = (props) => {

  const getStars = (star) => {
    switch (star) {
        case 1:
            return("⭐")
        case 2:
            return("⭐⭐")
        case 3:
            return("⭐⭐⭐")
        case 4:
            return("⭐⭐⭐⭐")
        case 5:
            return("⭐⭐⭐⭐⭐")
        default:
            return("")
    }
  }

  return <>{getStars(props.star)}</>;
};

export default StarRatings;
