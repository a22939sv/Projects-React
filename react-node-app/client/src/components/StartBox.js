import React from "react";
import { Link } from "react-router-dom";

const StartBox = (props) => {
    return (
        <div className="col-lg-4 col-md-3 col-sm-3 d-flex align-items-center justify-content-center">
          <Link to="/login">
            <input type="button"
            className="startInput"
            value="Empezar">
            </input>
          </Link>
        </div>
    )
}

export default StartBox;