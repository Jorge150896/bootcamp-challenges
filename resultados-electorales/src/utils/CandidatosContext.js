import { createContext, useState } from "react";

export const CandidatosContext = createContext();

export const CandidatosProvider = ({ children }) => {
  const [candidatos, setCandidatos] = useState([
    { nombre: "Hugo", votos: 0 },
    { nombre: "Paco", votos: 0 },
    { nombre: "Luis", votos: 0 },
  ]);

  return (
    <CandidatosContext.Provider value={{ candidatos }}>
      {children}
    </CandidatosContext.Provider>
  );
};
