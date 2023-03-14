import React from "react";

const Footer = () => {
  return (
    <>
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="/" className="footer-a nav-link px-2 text-white">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/movies" className=" nav-link px-2 text-white">
            Movies
          </a>
        </li>
        <li className="nav-item">
          <a href="/series" className="footer-a nav-link px-2 text-white">
            Series
          </a>
        </li>
      </ul>
      <p className="text-center text-white">© 2023 San Valero, Carlos Crespo</p>
    </>
  );
};

export default Footer;
