import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";

import "../styles/banner.scss";

function Banner() {
  const [index, setIndex] = useState(0);

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

  function buttonHandler1() {
    return
    document.getElementById("content").innerHTML = {image[1].title};
    document.getElementById("content").innerHTML = {image[1].title}
  }

  return (
    <div className="banner-container">
      <div className="left-container">
          <<div className="content" id="content"></div>
        <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
          <Button />
        </a>
        <div className="thumb-container">
            <button onClick={}>
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
