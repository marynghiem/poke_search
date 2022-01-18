import { Routes, Route, Navigate, NavLink } from "react-router-dom";

import "./App.css";
import { Pokemon } from "./components/Pokemon";
import { PokemonList } from "./components/PokemonList";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:pokemon" element={<Pokemon />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
