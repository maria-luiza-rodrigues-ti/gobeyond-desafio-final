import React, { useState } from "react";

import CorebizTransp from "../assets/images/logo-corebiz-global.svg";

import "../styles/header.scss";

function Header() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo">
          <img src={CorebizTransp} alt="Logo Corebiz" />
        </div>
        <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
          <div className="menu-container">
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
          </div>
        </div>
        <div className={active ? "icon iconActive" : "icon"}>
          <div className="hamburguer hamburguerIcon"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
