import {
  Grid,
  Button,
  CardActions,
  CardContent,
  Typography,
  Card,
} from "@mui/material";

import { CandidatosContext } from "../utils/CandidatosContext";
import { useContext } from "react";

export const Porcentaje = () => {
  const { candidatos, setCandidatos } = useContext(CandidatosContext);

  const total = candidatos.reduce(
    (accumulator, candidato) => accumulator + candidato.votos,
    0
  );

  return (
    <Grid container item spacing={2}>
      {candidatos.map((candidato) => {
        return (
          <Grid item xs={12} md={4} key={candidato.nombre}>
            <Card>
              <CardContent>
                <Typography>{candidato.nombre}</Typography>
              </CardContent>
              <Typography variant="h3">
                {Math.round((candidato.votos * 100) / total)} %
              </Typography>

              <CardActions>
                <p>Porcentaje</p>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
