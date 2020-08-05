import React, { useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = ({ fetchPokemon }) => {
  const [searchName, setSearchName] = useState("pikachu");

  const search = e => {
    e.preventDefault()
    fetchPokemon(searchName)
  }

  
  return (
    <nav className={styles.navbar}>
      <h1>Gotta Catch 'Em All</h1>

      <form>
        <label htmlFor="search">Who's that pokémon?</label>
        <input type="text" name="search" id="search" onInput={e => setSearchName(e.target.value.toLowerCase())} />
        <input type="submit" value="Search" onClick={search}/>
      </form>
    </nav>
  );
};

export default Navbar;
