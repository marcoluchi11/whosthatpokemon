import { useState, useEffect } from "react";
import styled from "styled-components";
import { capitalize } from "../helpers";
import Error from "./Error";
import GuessPkmn from "./GuessPkmn";
import Success from "./Success";
const Container = styled.div`
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
const Image = styled.img`
  @media (max-width: 720px) {
    margin: 3rem 0;
    position: static;
  }
  position: fixed;
  top: 35%;
  left: 20%;
  width: 15rem;
  height: 15rem;
`;
const Guesser = styled.div`
  @media (max-width: 720px) {
    position: static;
    margin-top: 5rem;
  }
  position: absolute;
  top: 85%;
  left: 13%;
`;
const Guess = () => {
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
    }
    setError({ state: true, message: "Ups! you didn't guess" });

    setTimeout(() => {
      setSuccess({ state: false, message: "" });
      setError({ state: false, message: "" });
    }, 3000);
  };
  const handleChange = (e) => setGuess(e.target.value);
  return (
    <Container>
      <Image className={discover} src={pkmnImage} alt="pkmn" />
      <Guesser>
        <GuessPkmn
          handleChange={handleChange}
          getPokemon={getPokemon}
          handleGuess={handleGuess}
          guess={guess}
        />

        {success.state && <Success message={success.message} />}
        {error.state && <Error message={error.message} />}
      </Guesser>
    </Container>
  );
};

export default Guess;
