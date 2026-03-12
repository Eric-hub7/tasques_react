import { useState } from "react";
import "./exercici3.css";

export default function Exercici3() {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  return (
    <div className="exercici3-container">
      <p
        style={{
          fontWeight: bold ? "bold" : "normal",
          fontStyle: italic ? "italic" : "normal",
          textDecoration: underline ? "underline" : "none",
        }}
      >
        Lorem Ipsum
      </p>

      <div className="buttons">
        <button onClick={() => setBold(!bold)}>Negreta</button>
        <button onClick={() => setItalic(!italic)}>Cursiva</button>
        <button onClick={() => setUnderline(!underline)}>Subratllat</button>
      </div>
    </div>
  );
}