import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Profile.css";

const Profile = () => {
  const [compras, setCompras] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"))[0];

  const getCompras = async () => {
    const url = "api/v1/order/user/1";

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
          <h2>
            <b>Historial de Compras</b>
          </h2>
          {compras[0] ? (
            compras[0].order.map((ord, index) => (
              <div key={index}>
                <h3 className="texto-projectos">
                  <b>
                    Pedido {index + 1} ({ord.FECHA.substring(0, 10)})
                  </b>
                </h3>
                {compras[1].product.length !== 0
                  ? compras[1].product.map((prod, index) => (
                      <p key={index} className="ps-4">
                        - {prod.name}
                      </p>
                    ))
                  : "No hay productos"}
              </div>
            ))
          ) : (
            <p className="texto-projetos">No tienes compras efectuadas</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
