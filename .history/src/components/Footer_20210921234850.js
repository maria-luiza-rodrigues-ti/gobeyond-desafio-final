import React from "react";

import CorebizPreto from "../assets/images/logo-corebiz-global-preto.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Linkedin from "../assets/images/icon-linkedin.svg";

import "../styles/footer.scss";

function Footer() {
  return (
    <div className='footer-container'>
      <div className='left-container'>
        <div className="corebiz-container">
          <img src={CorebizPreto} alt="Logo Corebiz" />
          <h4>diretos.reservados.corebiz 2021</h4>
          <div className="social-container">
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
      <div>
        <div>
          <h2>.Brasil</h2>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
          <p>R. Ifigenia Maria de Oliveira, 3793 Jr. Paratininga Franca SP</p>
        </div>
        <div>
          <h2>.Argentina</h2>
          <p>Soler 5518, 3 Piso C1425BYF Palermo Hollywood</p>
        </div>
        <div>
          <h2>.México</h2>
          <p>Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
        </div>
        <div>
          <h2>.Chile</h2>
          <p>Roberto del Río 1137, Providencia.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
