import React from "react";
import styles from "./PokemonCard.module.scss";

const PokemonCard = ({ pokemon }) => {
  return (
    <article className={styles.card}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <section>
        <h2>{pokemon.name}</h2>
        {pokemon.stats.map(stat => {
          return (
            <p>
              <b>{stat.stat.name}: </b>
              <b>{stat.base_stat}</b>
            </p>
          );
        })}
      </section>
    </article>
  );
};

export default PokemonCard;
