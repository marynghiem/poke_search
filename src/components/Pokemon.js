import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/pokemonActions";
import _ from "lodash";
import { useParams } from "react-router";

export const Pokemon = () => {
  const params = useParams();
  const pokemonName = params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);
  React.useEffect(() => {
    console.log("use efect");
    dispatch(GetPokemon(pokemonName));
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      console.log(1);
      const pokeData = pokemonState.data[pokemonName];
      return (
        <div className={"pokemon-wrapper"}>
          <div className={"item"}>
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt=""></img>
            <img src={pokeData.sprites.back_default} alt=""></img>
            <img src={pokeData.sprites.front_shiny} alt=""></img>
            <img src={pokeData.sprites.back_shiny} alt=""></img>
          </div>
          <div className="item">
            <h1>Stats</h1>
            {pokeData.stats.map((el) => {
              return (
                <p>
                  {el.stat.name} {el.base_stat}
                </p>
              );
            })}
          </div>
          <div className="item">
            <h1>Abilities</h1>
            {pokeData.abilities.map((el) => {
              return <p>{el.ability.name}</p>;
            })}
          </div>
        </div>
      );
    }
    if (pokemonState.loading) {
      console.log(2);
      return <p>loading...</p>;
    }
    if (pokemonState.errorMsg !== "") {
      console.log(3);
      return <p>{pokemonState.errorMsg}</p>;
    }
    console.log(4);
    return <p>error getting pokemon</p>;
  };
  console.log(5);
  return (
    <div className="poke">
      <h1>{pokemonName}</h1>
      {ShowData()}
    </div>
  );
};

export default Pokemon;
