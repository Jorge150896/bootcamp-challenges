import { Grid } from "@mui/material";
import { Candidatos } from "../components/Candidatos";
import { Resumen } from "../components/Resumen";

import { Porcentaje } from "../components/Porcentaje";

export const Elecciones = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Candidatos />

        <Grid container item spacing={2}>
          <Resumen></Resumen>
        </Grid>
        <Porcentaje />
      </Grid>
    </>
  );
};
