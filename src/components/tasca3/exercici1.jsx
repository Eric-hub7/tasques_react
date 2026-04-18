import React from 'react';
import Targeta from './Targeta';
import fotoLleo from '../../assets/lleo.jpg';
import fotoTigre from '../../assets/tigre.jpg';
import fotoPanda from '../../assets/panda.jpg';
import fotoLizard from '../../assets/lizard.png';
import fotoTortuga from '../../assets/tortuga.jpg'
function Exercici1() {
  return (
    <div>
      <h2>Tasca 3 - Exercici de Props</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        <Targeta 
          imatge={fotoLizard}
          titol="Lizard"
          text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          textBoto1="COMPARTIR"
          enllacBoto1="#share"
          textBoto2="LLEGIR MÉS"
          enllacBoto2="#learn-more"
        />
        <Targeta 
          imatge={fotoLleo}
          titol="Lleó"
          text="Els lleons són grans fèlids carnívors que viuen principalment a l'Àfrica subsahariana i en una petita regió de l'Índia."
          textBoto1="COMPARTIR"
          enllacBoto1="#compartir"
          textBoto2="SABER-NE MÉS"
          enllacBoto2="#info"
        />
        <Targeta 
          imatge={fotoTigre}
          titol="Tigre"
          text="El tigre és l'espècie de fèlid més gran del món i es reconeix fàcilment per les seves ratlles fosques verticals sobre fons taronja."
          textBoto1="VEURE FOTOS"
          enllacBoto1="#fotos"
          textBoto2="WIKIPEDIA"
          enllacBoto2="#wiki"
        />
        <Targeta 
          imatge={fotoPanda}
          titol="Panda"
          text="El panda gegant és un ós endèmic de la Xina central, conegut per les seves taques negres i la seva dieta a base de bambú."
          textBoto1="DONAR"
          enllacBoto1="#donar"
          textBoto2="LLEGIR MÉS"
          enllacBoto2="#llegir"
        />
        <Targeta 
          imatge={fotoTortuga}
          titol="Tortuga"
          text="Les tortugues marines són rèptils adaptats a la vida aquàtica que habiten gairebé totes les conques oceàniques del món."
          textBoto1="SALVAR"
          enllacBoto1="#salvar"
          textBoto2="WIKIPEDIA"
          enllacBoto2="#wiki"
        />

      </div>
    </div>
  );
}

export default Exercici1;