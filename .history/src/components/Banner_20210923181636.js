import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";

import "../styles/banner.scss";

function Banner() {
  const [index, setIndex] = useState(0);

  const button0 = () => {setIndex(0);}
  const button1 = () => {setIndex(1);}
  const button2 = () => {setIndex(2);}
  const button3 = () => {setIndex(3);}

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
        {image.map((image) => (
          <h2 key={image.id}>{image.title}</h2>
        ))}
        <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
          <Button />
        </a>
        <div className="thumb-container">
          <button onClick={button0}>
            <img src={image.thumbnailUrl} alt="" />
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
