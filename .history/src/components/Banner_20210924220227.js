import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";

import "../styles/banner.scss";

function Banner () {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get("https://e4uogumxx7.execute-api.us-east-1.amazonaws.com/items")
      .then((res) => {
        console.log(res)
        setImage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="banner-container">
      <div className="left-container">
          <h2 key=''>''</h2>
        <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
          <Button />
        </a>
        <div className="thumb-container">
          <button className="button-thumb">
            <img className="thumbnail" src='' alt="" />
          </button>
          <button className="button-thumb">
            <img className="thumbnail" src='' alt="" />
          </button>
          <button className="button-thumb">
            <img className="thumbnail" src='' alt="" />
          </button>
          <button className="button-thumb">
            <img className="thumbnail" src='' alt="" />
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
