import { useContext, useCallback, useMemo } from "react";
import { basicFetch } from "../services/Api";

import { CharactersContext } from "../context/charactersContext";
import { LoadingContext } from "../context/loadingContext";

const useCharacters = () => {
  const charactersContext = useContext(CharactersContext);
  const loadingContext = useContext(LoadingContext);

  if (!charactersContext) {
    throw new Error("useCharacter must be used within an CharactersProvider.");
  }

  if (!loadingContext) {
    throw new Error("useCharacter must be used within an LoadingProvider.");
  }

  const limit = 10;

  const {
    charactersState,
    pageState,
    searchState,
    totalState,
  } = charactersContext;
  const { loadingState } = loadingContext;

  const [characters, setCharacters] = charactersState;
  const [page, setPage] = pageState;
  const [searchHeroe, setSearchHeroe] = searchState;
  const [total, setTotal] = totalState;

  const [, setLoading] = loadingState;

  const pageHeroe = useMemo(() => page / limit + 1, [page]);

  const lastPage = useMemo(() => Math.trunc(total / limit) + 1, [total]);

  const setSearch = useCallback(
    (searchValue) => {
      setSearchHeroe(searchValue);
      setPage(0);
    },
    [setPage, setSearchHeroe]
  );

  const setPageHeroe = useCallback(
    (pageNumber) => {
      const newPage = pageNumber * limit - limit;
      if (newPage < 0 || newPage > total) {
        return;
      }
      return setPage(newPage);
    },
    [setPage, total]
  );

  const handleNextPage = useCallback(() => {
    if (page + limit > total) {
      return;
    }
    setPage((prevPage) => prevPage + limit);
  }, [setPage, total, page]);

  const handlePreviousPage = useCallback(() => {
    const prev = page - limit;
    if (prev < 0) {
      return;
    }
    setPage(prev);
  }, [setPage, page]);

  const loadHeroes = useCallback(() => {
    setLoading(true);
    basicFetch(searchHeroe, page)
      .then((res) => {
        setCharacters(res.data.data.results);
        setTotal(res.data.data.total);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch(() => setLoading(false));
  }, [page, searchHeroe, setCharacters, setLoading, setTotal]);

  return {
    characters,
    setSearch,
    handleNextPage,
    handlePreviousPage,
    pageHeroe,
    setPageHeroe,
    lastPage,
    loadHeroes,
    searchHeroe,
  };
};

export default useCharacters;
