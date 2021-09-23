import React from "react";

import Arrow from "../assets/images/icon-arrow.svg";

import "../styles/button.scss";

function Button() {
  return (
    <div className="button-container">
      <span>veja mais</span>
      <img src={Arrow} alt="Ícone de seta" />
    </div>
  );
}

export default Button;
