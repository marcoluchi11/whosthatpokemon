import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Error from "./Error";
import Success from "./Success";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  .formulary {
    display: flex;
    flex-direction: column;
  }
  input[type="text"] {
    color: #333;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 7px;
    background-color: rgb(255, 255, 255);
    border: 1px solid #ced4da;
  }
  button {
    font-size: 1.3rem;
    margin: 1rem;
    outline: 0;
    border: 0;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    max-width: 15rem;
  }
  button.another {
    background-color: #fff;
    color: #000;
    max-width: 15rem;
    border: 1px solid #000;
  }
  @media (min-width: 720px) {
    .formulary {
      flex-direction: row;
      align-items: center;
      /* margin-left: 5rem; */
    }
  }
  @media (min-width: 1800px) {
    input[type="text"] {
      font-size: 2.5rem;
    }
    button {
      font-size: 2.5rem;
    }
  }
`;
const GuessPkmn = ({
  handleChange,
  getPokemon,
  handleGuess,
  guess,
  success,
  error,
}) => {
  const inputReference = useRef(null);
  useEffect(() => {
    inputReference.current.focus();
  }, [getPokemon]);
  return (
    <Form onSubmit={handleGuess}>
      <div className="formulary">
        <input
          ref={inputReference}
          autoFocus
          placeholder="Guess Pokemon..."
          value={guess}
          autoComplete="off"
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
        />
        <button type="submit">Guess</button>
        <button type="button" className="another" onClick={() => getPokemon()}>
          Guess Next
        </button>
      </div>
      <div className="transi">
        <CSSTransition
          in={success.state}
          timeout={2000}
          classNames="appearence"
        >
          <Success message={success.message} />
        </CSSTransition>
        <CSSTransition in={error.state} timeout={2000} classNames="appearence">
          <Error message={error.message} />
        </CSSTransition>
      </div>
    </Form>
  );
};

export default GuessPkmn;
