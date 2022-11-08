import { useState, useEffect } from "react";
import styled from "styled-components";
import { capitalize } from "../helpers";

import GuessPkmn from "./GuessPkmn";
const Container = styled.div`
  .covered {
    transform: scale(2);
    filter: brightness(0);
  }
  .discovered {
    transform: scale(2);
    filter: brightness(1);
    transition: filter 0.5s ease-out;
  }
`;
const Image = styled.img`
  @media (min-width: 1600px) {
    height: 15rem;
    width: 15rem;
    margin: 2.5rem;
  }
  margin: 1rem;
  height: 12rem;
  width: 12rem;
`;
const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
`;
const Guesser = styled.div`
  @media (min-width: 720px) {
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Silhoutte = () => {
  const [pkmnImage, setPkmnImage] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [discover, setDiscover] = useState("covered");
  const [guess, setGuess] = useState("");
  const [success, setSuccess] = useState({ state: false, message: "" });
  const [error, setError] = useState({ state: false, message: "" });
  const getPokemon = async () => {
    setSuccess({ state: false, message: "" });
    setError({ state: false, message: "" });
    setDiscover("covered");
    setGuess("");
    const random = Math.round(Math.random() * 386);
    const url = `https://pokeapi.co/api/v2/pokemon/${random}`;
    const data = await fetch(url);
    const response = await data.json();
    setPkmnImage(response.sprites.front_default);
    setPokemon(response);
  };
  useEffect(() => {
    getPokemon();
  }, []);
  const handleGuess = (e) => {
    e.preventDefault();
    if (guess === "") {
      setError({ state: false, message: "Error! Insert a Pokemon's name" });
      return;
    }
    setError({ state: false, message: "" });
    if (guess.toLowerCase() === pokemon.name) {
      setDiscover("discovered");
      setSuccess({
        state: true,
        message: `You guess it! Pokemon's name correct is ${capitalize(
          pokemon.name
        )} `,
      });
    } else {
      setError({ state: true, message: "Ups! you didn't guess" });
    }
  };
  const handleChange = (e) => setGuess(e.target.value);
  return (
    <Container>
      <ContainerImage>
        <Image className={discover} src={pkmnImage} alt="pkmn" />
      </ContainerImage>
      <Guesser>
        <GuessPkmn
          handleChange={handleChange}
          getPokemon={getPokemon}
          handleGuess={handleGuess}
          guess={guess}
          success={success}
          error={error}
        />
      </Guesser>
    </Container>
  );
};

export default Silhoutte;
