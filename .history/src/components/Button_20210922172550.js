import React from "react";

import Arrow from "../assets/images/icon-arrow.svg";

import "../styles/button.scss";

function Button() {
  return (
    <div className="button-container">
      <h3>veja mais</h3>
      <img src={Arrow} alt="Ícone de seta" />
    </div>
  );
}

export default Button;
