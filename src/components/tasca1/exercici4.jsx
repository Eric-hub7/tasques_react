import { useState } from "react";
import "./Exercici4.css";
import imatge1 from "../../assets/imatge1.jpg";
import imatge2 from "../../assets/imatge2.jpg";

export default function Exercici4() {
  const [canvia, setCanvia] = useState(false);

  return (
    <div className="exercici4-container">
      <img 
        src={canvia ? imatge2 : imatge1} 
        alt="Imatge canviant" 
        className="imatge"
      />
      <button onClick={() => setCanvia(!canvia)}>Canvia Imatge</button>
    </div>
  );
}