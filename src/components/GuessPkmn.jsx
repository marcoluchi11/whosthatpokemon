const GuessPkmn = ({ handleChange, getPokemon, handleGuess, guess }) => {
  return (
    <>
      <input
        value={guess}
        autoComplete="off"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
      <button onClick={() => handleGuess()}>Guess</button>
      <button className="another" onClick={() => getPokemon()}>
        Guess Another one
      </button>
    </>
  );
};

export default GuessPkmn;
