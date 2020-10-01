import { useState, useEffect } from "react";
import { basicFetch } from "../../services/Api";

export function useCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    basicFetch().then((res) => {
      setCharacters(res.data.data.results);
    });
  }, []);

  return {
    characters
  }
}
