import "./exercici1_tasca2.css"

function Galeria() {

  const images = [
    "https://picsum.photos/200/300?1",
    "https://picsum.photos/200/300?2",
    "https://picsum.photos/200/300?3",
    "https://picsum.photos/200/300?4"
  ];

  return (
    <div className="galeria-container">

      <h2>Galeria d'imatges</h2>

      <div className="galeria">
        {images.map((image, index) => (
          <img key={index} src={image} alt="imatge" />
        ))}
      </div>

    </div>
  );
}

export default Galeria;