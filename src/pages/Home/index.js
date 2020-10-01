import React from "react";

import Header from "../../components/Header";
import ItemHeroe from "../../components/ItemHeroe";

import * as Style from "./style";
import { Container } from "../../styles/Container";

import { useCharacters } from "../../hooks/useCharacters";

function Home() {
  const { characters } = useCharacters();

  return (
    <>
      <Header />

      <Style.listHeroes>
        <Container>
          <div className="flex">
            {characters.map((item, key) => (
              <ItemHeroe
                key={key}
                image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                name={item.name}
              />
            ))}
          </div>
        </Container>
      </Style.listHeroes>
    </>
  );
}

export default Home;
