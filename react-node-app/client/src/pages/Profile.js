import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Profile.css";

const Profile = () => {
  if (localStorage.getItem("user")) {
    var user = JSON.parse(localStorage.getItem("user"))[0];
  }

  const [compras, setCompras] = useState([]);

  const getCompras = async () => {
    const url = "/order/user/:idUser/";

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.data) {
      setCompras(responseJson.data);
    }
  };

  useEffect(() => {
    getCompras();
  }, []);

  return (
    <div className="container-profile">
      <header className="perfil">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="160"
          fill="currentColor"
          role="button"
          className="bi bi-person-circle perfil-foto"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
        <div className="titulo">
          <h1>{user.firstName + " " + user.lastName}</h1>
          <h3>{user.email}</h3>
          <p>{user.address}</p>
        </div>
      </header>

      <main className="projetos">
        <div className="container-projetos">
          <h3>
            <b>Historial de Compras</b>
          </h3>
          {compras ? (
            compras.line_order.map((order, index) => {
              <p className="texto-projectos">{order.FECHA}</p>;
            })
          ) : (
            <p className="texto-projetos">No tienes compras efectuadas</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
