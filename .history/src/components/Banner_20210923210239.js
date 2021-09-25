import React, { useState, useEffect } from "react";

import Button from "./Button";

import "../styles/banner.scss";

function Banner() {

  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4')
    .then((response) => response.json())
    .then((json) => console.log(json));;
  });

  return (
    <div className="banner-container">
      <div className="left-container">
        <h2 key={image.id}>{image.title}</h2>
        <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
          <Button />
        </a>
        <div className="thumb-container">
            <button>
              <img key={image.id} src={image.thumbnailUrl} alt="" />
            </button>
        </div>
      </div>
      <div className="right-container">
        {image.map((image) => (
          <img key={image.id} src={image.url} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Banner;
