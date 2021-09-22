import React from "react";

import CorebizTransp from "../assets/images/logo-corebiz-global.svg";

function Header() {
  return (
    <div>
      <div>
        <img src={CorebizTransp} alt="Logo Corebiz" />
      </div>
      <div>
          <ul>
              <li>
                  <a href='https://www.corebiz.ag/pt/about/'>a corebiz</a>
              </li>
          </ul>
      </div>
    </div>
  );
}

export default Header;
