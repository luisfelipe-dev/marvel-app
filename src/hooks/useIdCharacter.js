import { useState, useContext, useCallback } from "react";
import { getCharacterById, getComicsById } from "../services/Api";

import { LoadingContext } from "../context/loadingContext";

export function useIdCharacter() {
  const loadingContext = useContext(LoadingContext);

  if (!loadingContext) {
    throw new Error("useCharacter must be used within an LoadingProvider.");
  }
  const { loadingState } = loadingContext;

  const [character, setCharacter] = useState([]);
  const [comics, setComics] = useState([]);
  const [, setLoading] = loadingState;

  const getHeroe = useCallback(
    (id) => {
      const loadAllData = async () => {
        setLoading(true);

        const [characterRes, comicsRes] = await Promise.all([
          getCharacterById(id),
          getComicsById(id),
        ]);

        setCharacter(characterRes);

        setComics(comicsRes);

        setTimeout(() => {
          setLoading(false);
        }, 900);
      };

      loadAllData();
    },
    [setLoading]
  );

  return {
    getHeroe,
    character,
    comics,
  };
}
