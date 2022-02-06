import { useState } from "react";
import { Elecciones } from "./pages/Elecciones";
import { CandidatosContext } from "./utils/CandidatosContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegistrarCandidato } from "./pages/RegistrarCandidato";
import ResponsiveAppBar from "./components/NavBar/NavBar";

function App() {
  const [candidatos, setCandidatos] = useState([
    { nombre: "Hugo", votos: 0 },
    { nombre: "Paco", votos: 0 },
    { nombre: "Luis", votos: 0 },
  ]);

  return (
    <CandidatosContext.Provider value={{ candidatos, setCandidatos }}>
      <BrowserRouter>
        <ResponsiveAppBar />

        <Routes>
          <Route path="/" exact={true} element={<Elecciones />} />
          <Route path="registrar" element={<RegistrarCandidato />} />
          <Route path="/elecciones" exact={true} element={<Elecciones />} />
        </Routes>
      </BrowserRouter>
    </CandidatosContext.Provider>
  );
}

export default App;
