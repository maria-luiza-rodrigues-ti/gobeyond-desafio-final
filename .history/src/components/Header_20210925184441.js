import React, { useState } from "react";

import CorebizTransp from "../assets/images/logo-corebiz-global.svg";

import "../styles/header.scss";

function Header() {
  const [ mobile, setMobile] = useState(false);

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo">
          <img src={CorebizTransp} alt="Logo Corebiz" />
        </div>
        <div className="menu-container">
          <ul>
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
      <button className='menu-icon'>
        {mobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
      </button>
    </div>
  );
}

export default Header;
