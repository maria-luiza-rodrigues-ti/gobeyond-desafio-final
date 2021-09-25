import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";

import "../styles/banner.scss";

function Banner() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4")
      .then((res) => {
        console.log(res);
        setImage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function thumb() {

  }

  return (
    <div className="banner-container">
      <div className="left-container">
        {image.map((image) => (
          <h2 key={image.id}>{image.title}</h2>
        ))}
        <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
          <Button />
        </a>
        <div className="thumb-container">
          <button>
            <img src={image[0].thumbnailUrl} alt='Thumbnail 1'/>
          </button>
          <button>
            <img src={image[1].thumbnailUrl} alt='Thumbnail 2'/>
          </button>
          <button>
            <img src={image[2].thumbnailUrl} alt='Thumbnail 3'/>
          </button>
          <button>
            <img src={image[3].thumbnailUrl} alt='Thumbnail 4'/>
          </button>
        </div>
      </div>
      <div className="right-container">
        {image.map((image) => (
          <img key={image.id} src={image.url} alt=""></img>
        ))}
      </div>
    </div>
  );
}

export default Banner;
