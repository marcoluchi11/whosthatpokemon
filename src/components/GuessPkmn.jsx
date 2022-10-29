import styled from "styled-components";
const Form = styled.form`
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  input[type="text"] {
    @media (max-width: 720px) {
    }
    outline: 0;
    border-radius: 5px;
    border: 1px solid #b2b2b2;
    padding: 0.5rem 0.3rem;
    margin: 0 1rem;
  }
  button {
    @media (max-width: 720px) {
      font-size: 1.3rem;
    }

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
const GuessPkmn = ({ handleChange, getPokemon, handleGuess, guess }) => {
  return (
    <Form onSubmit={handleGuess}>
      <input
        value={guess}
        autoComplete="off"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
      <button type="submit">Guess</button>
      <button type="button" className="another" onClick={() => getPokemon()}>
        Guess Another one
      </button>
    </Form>
  );
};

export default GuessPkmn;
