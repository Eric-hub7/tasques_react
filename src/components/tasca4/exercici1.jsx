import React from 'react';
import { Grid, Box } from '@mui/material';
import Targeta from '../tasca3/Targeta';
import fotoLleo from "../../assets/lleo.jpg";
import fotoLizard from "../../assets/lizard.png"
function Exercici1() {
  return (
    <Box sx={{ width: '100%', padding: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Targeta 
            imatge={fotoLizard}
            titol="Lizard"
            text="Lizards are a widespread group of squamate reptiles..."
            textBoto1="COMPARTIR"
            textBoto2="LLEGIR MÉS"
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Targeta 
            imatge={fotoLleo}
            titol="Lleó"
            text="El lleó és el rei de la selva i el tens guardat a la teva carpeta assets."
            textBoto1="COMPARTIR"
            textBoto2="SABER-NE MÉS"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Exercici1;