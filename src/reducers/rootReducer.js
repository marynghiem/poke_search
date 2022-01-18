import { combineReducers } from "redux";
import PokemonListReducer from "./pokemonListReducer";

const rootReducer = combineReducers({
  PokemonList: PokemonListReducer,
});

export default rootReducer;
