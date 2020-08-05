import React, { useState } from "react";
import styles from "./App.module.scss";

import PokemonCard from "./components/PokemonCard";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

const App = () => {
  const [pokemon, setPokemon] = useState(null);


  const fetchPokemon = pokemon => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(pokemon => {
        setPokemon(pokemon);
      });
  }

  useEffect(() => {
    fetchPokemon("pikachu")
  }, []);

  return (
    <main className={styles.main}>
      <Navbar fetchPokemon={fetchPokemon} />
      <section className={styles.container}>{pokemon ? <PokemonCard pokemon={pokemon} /> : <p>loading...</p>}</section>
    </main>
  );
};

export default App;
