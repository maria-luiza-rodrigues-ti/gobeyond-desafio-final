import React from "react";

import CorebizPreto from "../assets/images/logo-corebiz-global-preto.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Linkedin from "../assets/images/icon-linkedin.svg";

function Footer() {
  return (
    <div>
      <div>
        <div>
          <img src={CorebizPreto} alt="Logo Corebiz" />
          <h4>diretos.reservados.corebiz 2021</h4>
          <div>
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
      </div>
    </div>
  );
}

export default Footer;
