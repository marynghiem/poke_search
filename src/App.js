import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import { Pokemon } from "./components/Pokemon";
import { PokemonList } from "./components/PokemonList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:pokemon" element={<Pokemon />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
