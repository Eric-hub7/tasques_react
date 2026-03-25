import { useState } from "react";
import Exercici1 from "./components/tasca1/exercici1";
import Exercici2 from "./components/tasca1/exercici2";
import Exercici3 from "./components/tasca1/exercici3";
import Exercici4 from "./components/tasca1/exercici4";
import Exercici5 from "./components/tasca2/exercici1";
import Exercici6 from "./components/tasca2/exercici2";
import Exercici7 from "./components/tasca3/exercici1";

function App() {
  const [exerciciActiu, setExerciciActiu] = useState(null);

  const renderExercici = () => {
    switch (exerciciActiu) {
      case 1:
        return <Exercici1 />;
      case 2:
        return <Exercici2 />;
      case 3:
        return <Exercici3 />;
      case 4:
        return <Exercici4 />;
      case 5:
        return <Exercici5 />;
      case 6:
        return <Exercici6 />;
      case 7:
        return <Exercici7 />;
      default:
        return <p>Selecciona un exercici</p>;
    }
  };

  return (
    <div>
      <h1>Menú d'exercicis</h1>

      <button onClick={() => setExerciciActiu(1)}>Tasca 1 - Exercici 1</button>
      <button onClick={() => setExerciciActiu(2)}>Tasca 1 - Exercici 2</button>
      <button onClick={() => setExerciciActiu(3)}>Tasca 1 - Exercici 3</button>
      <button onClick={() => setExerciciActiu(4)}>Tasca 1 - Exercici 4</button>
      <button onClick={() => setExerciciActiu(5)}>Tasca 2 - Exercici 1</button>
      <button onClick={() => setExerciciActiu(6)}>Tasca 2 - Exercici 2</button>
      <button onClick={() => setExerciciActiu(7)}>Tasca 3 - Exercici 1</button>
      
      <br /><br />
      <hr />
      
      {renderExercici()}
    </div>
  );
}

export default App;
