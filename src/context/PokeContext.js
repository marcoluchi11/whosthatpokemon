import { createContext, useState } from "react";

export const PokeContext = createContext();

const PokeProvider = ({ children }) => {
  const [points, setPoints] = useState(0);
  return (
    <PokeContext.Provider value={{ points, setPoints }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
