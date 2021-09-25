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

  function changeImage1() {
    setImage(0)
  }

  function changeImage2() {
    setImage(2)
  }

  function changeImage3() {
    setImage(3)
  }

  function changeImage4() {
    setImage(4)
  }

  return (
    <div className="banner-container">
      <div className="left-container">
        <h2 key={image.id}>{image.title}</h2>
        <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
          <Button />
        </a>
        <div className="thumb-container">
            <button className='button-thumb' onClick={changeImage1}>
              <img className="thumbnail" src={image.thumbnailUrl} alt="" />
            </button>
        </div>
      </div>
      <div className="right-container">
        {image.map((image) => (
          <img className='image-content' key={image.id} src={image.url} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Banner;
