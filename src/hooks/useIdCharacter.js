import { useState, useContext, useCallback } from "react";
import {
  getCharacterById,
  getComicsById,
  getSeriesById,
} from "../services/Api";

import { LoadingContext } from "../context/loadingContext";

export function useIdCharacter() {
  const loadingContext = useContext(LoadingContext);

  if (!loadingContext) {
    throw new Error("useCharacter must be used within an LoadingProvider.");
  }
  const { loadingState } = loadingContext;

  const [character, setCharacter] = useState([]);
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  const [, setLoading] = loadingState;

  const getHeroe = useCallback(
    (id) => {
      const loadAllData = async () => {
        setLoading(true);

        const [characterRes, comicsRes, seriesRes] = await Promise.all([
          getCharacterById(id),
          getComicsById(id),
          getSeriesById(id),
        ]);

        setCharacter(characterRes);

        setComics(comicsRes);

        setSeries(seriesRes);

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
    series,
  };
}
