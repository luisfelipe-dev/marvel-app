import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import ItemHeroe from "../../components/ItemHeroe";

import * as Style from "./style";
import { Container } from "../../styles/Container";

import { basicFetch } from "../../services/Api";

function Home() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    basicFetch().then((res) => {
      setResponse(res.data);
    });
  }, []);

  return (
    <>
      <Header />

      <Style.listHeroes>
        <Container>
          <div className="flex">
            {response &&
              response.data.results.map((item, key) => (
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
