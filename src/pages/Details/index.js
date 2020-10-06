import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BiCameraMovie } from "react-icons/bi";

import Header from "../../components/Header";
import ComicHeroe from "../../components/ComicHeroe";
import SerieHeroe from "../../components/SerieHeroe";
import { useIdCharacter } from "../../hooks/useIdCharacter";

import * as Style from "./style";
import { Container } from "../../styles/Container";

import BgMarvel from "../../util/images/bg-marvel.jpg";

function Details() {
  let { id } = useParams();

  const { character, comics, series, getHeroe } = useIdCharacter();

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
                    <div>
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
                </div>
              </Container>
            </Style.HeaderPhoto>

            <Style.ContentHero>
              <Container>
                <div className="flex">
                  <Style.ComicsContainer>
                    <div className="title">
                      <HiOutlineBookOpen size="34" />
                      <h2>Quadrinhos</h2>
                    </div>

                    <ul className="list-inline">
                      {comics &&
                        comics.map((item) => (
                          <ComicHeroe
                            key={item.id}
                            path={item.thumbnail.path}
                            extension={item.thumbnail.extension}
                            title={item.title}
                            issueNumber={item.issueNumber}
                            description={item.description}
                          />
                        ))}
                    </ul>
                  </Style.ComicsContainer>

                  <Style.SeriesContainer>
                    <div className="title">
                      <BiCameraMovie size="34" />
                      <h2>Series</h2>
                    </div>

                    <ul>
                      {series &&
                        series.map((item) => (
                          <SerieHeroe
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            path={item.thumbnail.path}
                            extension={item.thumbnail.extension}
                            creators={item.creators.items}
                          />
                        ))}
                    </ul>
                  </Style.SeriesContainer>
                </div>
              </Container>
            </Style.ContentHero>
          </div>
        ))}
    </>
  );
}

export default Details;
