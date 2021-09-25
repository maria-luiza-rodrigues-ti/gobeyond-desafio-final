import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";

import "../styles/banner.scss";

function Banner () {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4")
      .then((res) => {
        console.log(res.data)
        setImage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="banner-container">
      <div className="left-container">
        {image.map(() => {
          <h2 className='title-content' key={image.id}>{image.title}</h2>;
        })}
        <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
          <Button />
        </a>
        <div className="thumb-container">
          <button className="button-thumb">
            <img className="thumbnail" src=''alt="" />
          </button>
        </div>
      </div>
      <div className="right-container">
        <img className="image-content" key='' src='' alt="" />
      </div>
    </div>
  );
};

export default Banner;
