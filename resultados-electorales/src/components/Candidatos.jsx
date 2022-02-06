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

export const Candidatos = () => {
  const { candidatos, setCandidatos } = useContext(CandidatosContext);
  const votar = (votarPor) => {
    const nuevosVotos = votarPor.votos + 1;

    const nuevos = candidatos.map((candidato) => {
      if (candidato.nombre === votarPor.nombre) {
        return {
          ...candidato,
          votos: nuevosVotos,
        };
      }
      return { ...candidato };
    });

    setCandidatos(nuevos);
  };

  return (
    <Grid container item spacing={2}>
      {candidatos.map((candidato) => {
        return (
          <Grid item xs={12} md={4} key={candidato.nombre}>
            <Card>
              <CardContent>
                <Typography>{candidato.nombre}</Typography>
              </CardContent>
              <CardActions>
                <Button size="medium" onClick={() => votar(candidato)}>
                  Votar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
