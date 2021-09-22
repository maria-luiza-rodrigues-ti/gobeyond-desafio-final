import React from "react";

import CorebizPreto from "../assets/images/logo-corebiz-global-preto.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Linkedin from "../assets/images/icon-linkedin.svg";

function Footer() {
  return (
    <div>
      <div>
        <div className='corebiz-container'>
          <img src={CorebizPreto} alt="Logo Corebiz" />
          <h4>diretos.reservados.corebiz 2021</h4>
          <div className='social-container'>
            <a
              href="https://www.facebook.com/corebiz.ag/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/corebizag/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/corebiz-brasil/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="Facebook" />
            </a>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <a
                href="https://www.corebiz.ag/pt/about/"
                target="_blank"
                rel="noreferrer"
              >
                a corebiz
              </a>
            </li>
            <li>
              <a
                href="https://www.corebiz.ag/pt/#framework-title"
                target="_blank"
                rel="noreferrer"
              >
                serviços
              </a>
            </li>
            <li>
              <a
                href="https://www.corebiz.ag/pt/cases/"
                target="_blank"
                rel="noreferrer"
              >
                cases
              </a>
            </li>
            <li>
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
    </div>
  );
}

export default Footer;
