import React from "react";
import { Link } from "react-router-dom";

const StartBox = (props) => {
  if (localStorage.getItem("user")) {
    var user = JSON.parse(localStorage.getItem("user"))[0];
  }

  return (
    <div className="col-lg-4 col-md-3 col-sm-3 d-flex align-items-center justify-content-center">
      {localStorage.getItem("user") ? (
        <h3
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "http://localhost:3000";
          }}
        >
          {user.firstName + " " + user.lastName}
        </h3>
      ) : (
        <Link to="/login">
          <input type="button" className="startInput" value="Empezar"></input>
        </Link>
      )}
    </div>
  );
};

export default StartBox;
