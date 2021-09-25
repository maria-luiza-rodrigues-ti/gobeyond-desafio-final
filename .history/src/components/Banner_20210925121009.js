import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";

import "../styles/banner.scss";

const api = axios.create({
  baseURL: "https://e4uogumxx7.execute-api.us-east-1.amazonaws.com",
});

function Banner() {
  const [image, setImage] = useState([
    { id: "", adress: Number, thumbUrl: "", title: "", url: "" },
    { id: "", adress: Number, thumbUrl: "", title: "", url: "" },
    { id: "", adress: Number, thumbUrl: "", title: "", url: "" },
    { id: "", adress: Number, thumbUrl: "", title: "", url: "" },
  ]);

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    async function getData() {
      const res = await api.get("/items");

      setImage(res.data.items);

      console.log(res.data.Items);
    }

    getData();
  }, []);

  return (
    <div className="banner-container">
      <div className="left-container">
        <h2>{image[indice].title}</h2>
        <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
          <Button />
        </a>
        <div className="thumb-container">
          <button className="button-thumb" onClick={() => setIndice(0)}>
            <img
              className={indice === 0 ? "active" : "normal"}
              src={image[0].thumbUrl}
              alt="Thumbnail 1"
            />
          </button>
          <button className="button-thumb" onClick={() => setIndice(1)}>
            <img
              className={indice === 1 ? "active" : "normal"}
              src={image[1].thumbUrl}
              alt="Thumbnail 2"
            />
          </button>
          <button className="button-thumb" onClick={() => setIndice(2)}>
            <img
              className={indice === 2 ? "active" : "normal"}
              src={image[2].thumbUrl}
              alt="Thumbnail 3"
            />
          </button>
          <button className="button-thumb" onClick={() => setIndice(3)}>
            <img
              className={indice === 3 ? "active" : "normal"}
              src={image[3].thumbUrl}
              alt="Thumbnail 4"
            />
          </button>
        </div>
      </div>
      <div className="right-container">
        <img className="image-content" src={image[indice].url} alt="Banner" />
      </div>
    </div>
  );
}

export default Banner;
