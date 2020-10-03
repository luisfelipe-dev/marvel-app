import React, { useState, createContext } from "react";

const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
  const charactersState = useState([]);
  const pageState = useState(0);
  const searchState = useState("");
  const totalState = useState(0);

  return (
    <CharactersContext.Provider
      value={{
        charactersState,pageState,searchState, totalState
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersContext, CharactersProvider };
