import React, { useState, useEffect } from "react";

import Button from "./Button";

import "../styles/banner.scss";

function Banner() {
  const [index, setIndex] = useState(0);

  const [image, setImage] = useState([]);

  useEffect(() => {
    async function getPhoto() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4"
      );
      const data = await response.json();

      setImage(data);

      console.log(data);
    }

    getPhoto();
  }, []);

  return (
    <div className="banner-container">
      <div className="left-container">
        <h2>{image[index].title}</h2>
        <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
          <Button />
        </a>
        <div className="thumb-container">
          <button onClick={() => setIndex(0)}>
            <img src={image[0].thumbnailUrl} alt="Botão thumbnail 1" />
          </button>
          <button onClick={() => setIndex(1)}>
            <img src={image[1].thumbnailUrl} alt="Botão thumbnail 1" />
          </button>
          <button onClick={() => setIndex(2)}>
            <img src={image[2].thumbnailUrl} alt="Botão thumbnail 1" />
          </button>
          <button onClick={() => setIndex(3)}>
            <img src={image[3].thumbnailUrl} alt="Botão thumbnail 1" />
          </button>
        </div>
      </div>
      <div className="right-container">
          <img src={image[index].url} alt="" />
      </div>
    </div>
  );
}

export default Banner;
