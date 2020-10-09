import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Show = () => {
  let { id } = useParams();
  const [pokemon, setPokemon] = useState({
    name: "",
    sprites: {
      front_default: "",
    },
  });
  async function fetchPokemon() {
    const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(result.data);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <h1>Show Pokemon</h1>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default}></img>
    </>
  );
};

export default Show;
