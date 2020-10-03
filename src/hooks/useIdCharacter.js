import { useState, useEffect } from "react";
import { getCharacterById } from "../services/Api";

export function useIdCharacter(id) {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getCharacterById(id).then((res) => {
      setCharacter(res[0]);
    });
  }, [id]);

  return {
    character,
  };
}
