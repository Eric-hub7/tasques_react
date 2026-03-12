import { useState } from "react";


export default function Exercici2() {
  const [color, setColor] = useState("grey"); 

  return (
    <div className="exercici2-container">
      <div className="circle" style={{ backgroundColor: color }}></div>
      <div className="buttons">
        <button onClick={() => setColor("red")}>Vermell</button>
        <button onClick={() => setColor("green")}>Verd</button>
        <button onClick={() => setColor("blue")}>Blau</button>
      </div>
    </div>
  );
}