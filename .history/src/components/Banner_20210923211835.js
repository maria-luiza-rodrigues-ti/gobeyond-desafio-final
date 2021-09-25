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
