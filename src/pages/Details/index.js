import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import { useIdCharacter } from "../../hooks/useIdCharacter";

import * as Style from "./style";

function Details() {
  let { id } = useParams();

  const { character } = useIdCharacter(id);

  return (
    <>
      <Header />
      <Style.HeaderPhoto>
        <h1>{character && character.name}</h1>
      </Style.HeaderPhoto>
    </>
  );
}

export default Details;
