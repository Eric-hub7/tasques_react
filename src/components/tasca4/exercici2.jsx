import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Targeta from '../tasca3/Targeta';
import fotoLleo from '../../assets/lleo.jpg';
import fotoTigre from '../../assets/tigre.jpg';
import fotoPanda from '../../assets/panda.jpg';
import fotoLizard from '../../assets/lizard.png';

function Exercici2() {
  const [animals] = useState([
    {
      id: 1,
      imatge: fotoLleo,
      titol: "Lleó",
      text: "El lleó és conegut com el rei de la selva i viu en grans grups familiars.",
      b1: "COMPARTIR",
      b2: "SABER-NE MÉS"
    },
    {
      id: 2,
      imatge: fotoTigre,
      titol: "Tigre",
      text: "El tigre és el fèlid més gran del món, famós per les seves ratlles negres.",
      b1: "VEURE FOTOS",
      b2: "WIKIPEDIA"
    },
    {
      id: 3,
      imatge: fotoPanda,
      titol: "Panda",
      text: "El panda gegant passa gairebé tot el dia menjant bambú a les muntanyes de la Xina.",
      b1: "DONAR",
      b2: "LLEGIR MÉS"
    },
    {
      id: 4, 
      imatge: fotoLizard,
      titol: "Lizard",
      text: "Els llangardaixos són rèptils que es troben a tots els continents excepte l'Antàrtida.",
      b1: "SHARE",
      b2: "LEARN MORE"
    }
  ]);

  return (
    <Grid container spacing={3} sx={{ padding: '20px' }}>
      {animals.map((animal) => (
        <Grid item key={animal.id} xs={12} md={6} lg={3}>
          <Targeta 
            imatge={animal.imatge}
            titol={animal.titol}
            text={animal.text}
            textBoto1={animal.b1}
            textBoto2={animal.b2}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Exercici2;