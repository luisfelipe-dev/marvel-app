import React, { useState, createContext, useCallback, useEffect } from "react";
import { basicFetch } from "../services/Api";

const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const [searchHeroe, setSearchHeroe] = useState("");

  const loadCharacters = useCallback(() => {
    basicFetch().then((res) => {
      setCharacters(res.data.data.results);
    });
  }, []);

  const setSearch = useCallback((searchValue) => {
    // basicFetch(searchValue, page).then((res) => {
    //   setCharacters(res.data.data.results);
    // });
    setSearchHeroe(searchValue);
    setPage(0);
  }, []);

  const setPageHeroe = useCallback((pageNumber) => {
    if (pageNumber <= 0) {
      return;
    }
    return setPage(pageNumber);
  }, []);

  useEffect(() => {
    basicFetch(searchHeroe, page).then((res) => {
      setCharacters(res.data.data.results);
    });
  }, [searchHeroe, page]);

  return (
    <CharactersContext.Provider
      value={{
        characters,
        loadCharacters,
        setSearch,
        setPageHeroe,
        page,
        searchHeroe,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersContext, CharactersProvider };
