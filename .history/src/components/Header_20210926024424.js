import React, { useState, useEffect } from "react";

import CorebizTransp from "../assets/images/logo-corebiz-global.svg";
import Bars from "../assets/images/bars-solid.svg";

import "../styles/header.scss";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo">
          <img src={CorebizTransp} alt="Logo Corebiz" />
          <button className="button">
            <img src={Bars} className="menu-icon" alt="Menu-icon" />
          </button>
        </div>
        <div className="menu-container">
          {toggleMenu && (
            <ul className="menu-list">
              <li className="menu-item">
                <a
                  href="https://www.corebiz.ag/pt/about/"
                  target="_blank"
                  rel="noreferrer"
                >
                  a corebiz
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="https://www.corebiz.ag/pt/#framework-title"
                  target="_blank"
                  rel="noreferrer"
                >
                  serviços
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="https://www.corebiz.ag/pt/cases/"
                  target="_blank"
                  rel="noreferrer"
                >
                  cases
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="https://www.corebiz.ag/pt/contato/"
                  target="_blank"
                  rel="noreferrer"
                >
                  contato
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
