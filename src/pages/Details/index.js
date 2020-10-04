import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BiCameraMovie } from "react-icons/bi";

import Header from "../../components/Header";
import { useIdCharacter } from "../../hooks/useIdCharacter";

import * as Style from "./style";
import { Container } from "../../styles/Container";

import BgMarvel from "../../util/images/bg-marvel.jpg";

function Details() {
  let { id } = useParams();

  const { character, comics, getHeroe } = useIdCharacter();

  useEffect(() => {
    getHeroe(id);
  }, [getHeroe, id]);

  return (
    <>
      <Header />
      {character &&
        character.map((item) => (
          <div key={item.id}>
            <Style.HeaderPhoto
              style={{
                background: `url(${BgMarvel}) no-repeat center center`,
              }}
            >
              <Container>
                <div className="flex">
                  <div className="photo-hero">
                    <img
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt={item.name}
                    />
                  </div>
                  <div className="info-hero">
                    <h2>{item.name}</h2>
                    <p className="tagline">{item.description}</p>

                    <hr />

                    <div className="personal">
                      {item.comics.available && (
                        <div className="item-personal">
                          <HiOutlineBookOpen size="24" />
                          <p>
                            <strong>Quadrinhos</strong>
                          </p>

                          <span>{item.comics.available}</span>
                        </div>
                      )}
                      {item.series.available && (
                        <div className="item-personal">
                          <BiCameraMovie size="24" />
                          <p>
                            <strong>Series</strong>
                          </p>

                          <span>{item.series.available}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Container>
            </Style.HeaderPhoto>

            <Style.ContentHero>
              <Container>
                <div className="comics-container">
                  <div className="title">
                    <HiOutlineBookOpen size="34" />
                    <h2>Quadrinhos</h2>
                  </div>

                  <ul className="list-inline">
                    <div className="grid">
                      {comics &&
                        comics.map((item) => (
                          <li key={item.id}>
                            <div className="book">
                              <img
                                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                alt={item.title}
                              />
                            </div>

                            <div className="comic-informations">
                              <p>{item.title}</p>
                            </div>
                          </li>
                        ))}
                    </div>
                  </ul>
                </div>
              </Container>
            </Style.ContentHero>
          </div>
        ))}
    </>
  );
}

export default Details;
