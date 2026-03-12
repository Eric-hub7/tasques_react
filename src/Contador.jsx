import{ useState } from "react"
function Contador() {
    
    const [count, setCount] = useState(0);

    function incrementar() {
        setCount(count + 1);
    }

    function reset() {
        setCount(0);
    }

    function decrementar() {
        setCount(count -1);
    }

  return (
    <div class="quadre_blanc">
        <div>
            <h1>Comptador Interactiu</h1>
        </div>
        <div class="pantalla">
            <span id="comptador">{count}</span>
        </div>

        <div class="botons">
            <button id="decrementar" onClick={decrementar}>- Decrementar</button>
            <button id="reiniciar" onClick={reset}>Reiniciar</button>
            <button id="incrementar" onClick={incrementar}>+ Incrementar</button>
        </div>
    </div>
  )
}

export default Contador

