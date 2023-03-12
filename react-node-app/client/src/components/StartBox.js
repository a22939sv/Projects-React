import React from "react";
import { Link } from "react-router-dom";

const StartBox = (props) => {
  if (localStorage.getItem("user")) {
    var user = JSON.parse(localStorage.getItem("user"))[0];
  }

  return (
    <div className="col-lg-4 col-md-3 col-sm-3 d-flex align-items-center justify-content-center">
      {localStorage.getItem("user") ? (
        <>
          <div className="me-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              role="button"
              className="bi bi-person-circle ms-3"
              viewBox="0 0 16 16"
              onClick={() => {
                window.location.href = "http://localhost:3000/profile";
              }}
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <h3>{user.firstName}</h3>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            role="button"
            className="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "http://localhost:3000";
            }}
          >
            <path
              fillRule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
            />
            <path
              fillRule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>
        </>
      ) : (
        <Link to="/login">
          <input type="button" className="startInput" value="Empezar"></input>
        </Link>
      )}
    </div>
  );
};

export default StartBox;
