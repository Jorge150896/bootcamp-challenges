import { Elecciones } from './pages/Elecciones';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navbar } from './components/NavBar';
import { Box } from '@mui/material';
import { RegistrarCandidato } from './pages/RegistrarCandidato';
import './_App.css';
import { NotificacionesProvider } from './utils/NotificacionesContext';
import store from './redux';
import { CandidatosList } from './pages/Candidatos';
import { Votar } from './pages/Votar';

function App() {
  return (
    <Provider store={store}>
      <NotificacionesProvider>
        <BrowserRouter>
          <Navbar />
          <Box
            sx={{
              margin: 2,
            }}
          >
            <Routes>
              <Route index element={<Elecciones />}></Route>
              <Route path="registrar" element={<RegistrarCandidato />} />
              <Route path="candidatos" element={<CandidatosList />} />
              <Route path="votar" element={<Votar />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </NotificacionesProvider>
    </Provider>
  );
}

export default App;
