import { useState } from "react";

function Exercici1() {
  const [numero, setNumero] = useState(0);

  const incrementar = () => {
    setNumero(numero + 1);
  };

  const disminuir = () => {
    setNumero(numero - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Exercici 1</h2>
      <h1>{numero}</h1>

      <button onClick={incrementar} style={{ margin: "5px", padding: "10px" }}>
        Incrementar
      </button>

      <button onClick={disminuir} style={{ margin: "5px", padding: "10px" }}>
        Disminuir
      </button>
    </div>
  );
}

export default Exercici1;