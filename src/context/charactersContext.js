import React, { useState, createContext } from "react";

const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
  const charactersState = useState([]);
  const pageState = useState(0);
  const searchState = useState("");
  const totalState = useState(0);

  // const [, setCharacters] = charactersState;
  // const [page, ] = pageState;
  // const [searchHeroe, ] = searchState;



  // useEffect(() => {
  //   basicFetch(searchHeroe, page).then((res) => {
  //     setCharacters(res.data.data.results);
  //     setTotal(res.data.data.total)
  //   });
  // }, [page, searchHeroe, setCharacters, setTotal]);

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
