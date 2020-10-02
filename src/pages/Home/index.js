import React, { useEffect } from "react";

import Header from "../../components/Header";
import ItemHeroe from "../../components/ItemHeroe";
import Pagination from "../../components/Pagination";

import * as Style from "./style";
import { Container } from "../../styles/Container";

import useCharacters from "../../hooks/useCharacters";

function Home() {
  const { characters, loadCharacters } = useCharacters();

  // useEffect(() => {
  //   loadCharacters();
  // }, [loadCharacters]);


  return (
    <>
      <Header />

      <Style.listHeroes>
        <Container>
          <div className="grid">
            {characters.map((item, key) => (
              <ItemHeroe
                key={key}
                image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                name={item.name}
              />
            ))}
          </div>

          <Pagination />
        </Container>
      </Style.listHeroes>
    </>
  );
}

export default Home;
