import React, { useState } from "react";
import "./exercici2_tasca2.css"

function Carrusel() {

  const images = [
    "https://picsum.photos/300/200?1",
    "https://picsum.photos/300/200?2",
    "https://picsum.photos/300/200?3"
  ];

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div>
      <h2>Carrusel</h2>

      <img src={images[index]} alt="carrusel" width="300" />

      <div>
        <button onClick={prevImage}>Anterior</button>
        <button onClick={nextImage}>Següent</button>
      </div>
    </div>
  );
}

export default Carrusel;