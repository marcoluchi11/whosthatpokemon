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
  @media (min-width: 720px) {
    height: 10rem;
    width: 10rem;
    margin: 2.5rem;
  }
  margin: 0;
  height: 12rem;
  width: 12rem;
`;
const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;
const Guesser = styled.div``;
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
    console.log(response);
  };
  useEffect(() => {
    getPokemon();
  }, []);
  const handleGuess = (e) => {
    e.preventDefault();
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
    setTimeout(() => {
      setSuccess({ state: false, message: "" });
      setError({ state: false, message: "" });
    }, 2500);
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
