import { useState, useEffect } from "react";
import styled from "styled-components";
import GuessPkmn from "./GuessPkmn";
const Image = styled.img`
  position: fixed;
  top: 35%;
  left: 20%;
  width: 15rem;
  height: 15rem;
`;
const Guesser = styled.div`
  position: fixed;
  top: 85%;
  left: 20%;
  input[type="text"] {
    outline: 0;
    border-radius: 5px;
    border: 1px solid #b2b2b2;
    padding: 0.5rem 0;
    margin: 0 1rem;
  }
  button {
    margin: 1rem;
    outline: 0;
    border: 0;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
  }
  button.another {
    background-color: #fff;
    color: #000;
  }
`;
const Guess = () => {
  const [pkmnImage, setPkmnImage] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [discover, setDiscover] = useState("covered");
  const [guess, setGuess] = useState("");
  const getPokemon = async () => {
    setDiscover("covered");
    setGuess("");
    const random = Math.round(Math.random() * 386);
    const url = `https://pokeapi.co/api/v2/pokemon/${random}`;
    const data = await fetch(url);
    const response = await data.json();
    setPkmnImage(response.sprites.front_default);
    setPokemon(response);
    console.log(response);
  };
  useEffect(() => {
    getPokemon();
  }, []);
  const handleGuess = () => {
    if (guess.toLowerCase() === pokemon.name) {
      setDiscover("discovered");
      console.log(`You guess Pokemon's name correct is ${pokemon.name} `);
      return;
    }
    console.log("Ups! you didn't guess");
  };
  const handleChange = (e) => setGuess(e.target.value);
  return (
    <div>
      <Image className={discover} src={pkmnImage} alt="pkmn" />
      <Guesser>
        <GuessPkmn
          handleChange={handleChange}
          getPokemon={getPokemon}
          handleGuess={handleGuess}
          guess={guess}
        />
      </Guesser>
    </div>
  );
};

export default Guess;
