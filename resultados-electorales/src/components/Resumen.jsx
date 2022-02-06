import { Escrutinio } from "./Escrutinio";
import { Total } from "./Total";
import { CandidatosContext } from "../utils/CandidatosContext";
import { useContext } from "react";

export const Resumen = () => {
  const { candidatos } = useContext(CandidatosContext);

  return (
    <>
      <Total candidatos={candidatos} />
      <Escrutinio candidatos={candidatos} />
    </>
  );
};
