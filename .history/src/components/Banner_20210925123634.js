import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";

import "../styles/banner.scss";

const api = axios.create({
  baseURL: "https://e4uogumxx7.execute-api.us-east-1.amazonaws.com",
});

function Banner() {
  const [image, setImage] = useState([
    { id: "", thumbUrl: "", title: "", url: "", adress: Number },
    { id: "", thumbUrl: "", title: "", url: "", adress: Number },
    { id: "", thumbUrl: "", title: "", url: "", adress: Number },
    { id: "", thumbUrl: "", title: "", url: "", adress: Number },
  ]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function getData() {
      const res = await api.get("/items");

      setImage(res.data.Items);

      console.log(res.data.Items);
    }

    getData();
  }, []);

  return (
    <div className="banner-container">
      <div className="left-container">
        <h2>{image[index].title}</h2>
        <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
          <Button />
        </a>
        <div className="thumb-container">
          <div className="thumb-content">
            <button className="button-thumb" onClick={() => setIndex(0)}>
              <img
                className={index === 0 ? "active" : "normal"}
                src={image[0].thumbUrl}
                alt="Thumbnail 1"
              />
            </button>
            <button className="button-thumb" onClick={() => setIndex(1)}>
              <img
                className={index === 1 ? "active" : "normal"}
                src={image[1].thumbUrl}
                alt="Thumbnail 2"
              />
            </button>
            <button className="button-thumb" onClick={() => setIndex(2)}>
              <img
                className={index === 2 ? "active" : "normal"}
                src={image[2].thumbUrl}
                alt="Thumbnail 3"
              />
            </button>
            <button className="button-thumb" onClick={() => setIndex(3)}>
              <img
                className={index === 3 ? "active" : "normal"}
                src={image[3].thumbUrl}
                alt="Thumbnail 4"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="right-container">
        <img className="image-content" src={image[index].url} alt="Banner" />
      </div>
    </div>
  );
}

export default Banner;
