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
          <div className={"item"}></div>
          <h1>Sprites</h1>
          <img src={pokeData.sprites.front_default} alt=""></img>
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
    <div>
      <h1>{pokemonName}</h1>
      {ShowData()}
    </div>
  );
};
