import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import Pokedex from './pages/Pokedex';
import './App.css';


function App() {
  return (

       <BrowserRouter>
          <div className="App">
          <Routes>
          <Route path="/" exact={true} element={<Pokedex/>} />
          <Route path="/pokemon/:pokemonId" exact={true} element={<PokemonPage/>} />
          <Route path="*" exact={true} element={<p>404</p>} />
          </Routes>

          </div>
       </BrowserRouter>
     

  );
}

export default App;
