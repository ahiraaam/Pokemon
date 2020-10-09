import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Index = () => {
  const [pokemons, setPokemons] = useState([
    { name: "Pokemon 1", url: "2020-10-01" },
    { name: "Pokemon 2", url: "2020-10-01" },
  ]);

  useEffect(() => {
    axios("https://pokeapi.co/api/v2/pokemon/?limit=50")
      .then((result) => {
        console.log(result);
        setPokemons(result.data.results);
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
  }, []);

  return (
    <>
      <h1>Pokemon Index</h1>
      <ul>
        {pokemons.map((pokemon, iterador) => {
          const url = pokemon.url;
          const subs = url.split("/");
          var last_segment = subs[subs.length - 2];
          return (
            <Link key={iterador} to={`/pokemons/${last_segment}`}>
              <li>{pokemon.name}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Index;
