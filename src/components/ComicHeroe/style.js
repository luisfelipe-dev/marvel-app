import styled from "styled-components";
import * as C from "../../styles/Constants";

export const itemComicHero = styled.li`
  display: inline-block;
  margin-bottom: 1rem;

  .book {
    display: block;
    width: 100%;
    max-width: 150px;
    height: 220px;
    position: relative;
    background: white;
    z-index: 1;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 9px 20px 0 rgba(0, 0, 0, 0.25);
    overflow: hidden;
    -webkit-transition: box-shadow 0.3s linear;
    transition: box-shadow 0.3s linear;
    margin: 0 auto;

    img {
      width: inherit;
      height: inherit;
      -webkit-transform-origin: 0 50%;
      transform-origin: 0 50%;
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
      -webkit-transition: all 0.45s ease;
      transition: all 0.45s ease;
    }

    .read-more {
      position: absolute;
      bottom: 10px;

      left: 0;

      opacity: 0;
      visibility: hidden;
      transform: translate3d(0, 50px, 0);

      width: 100%;
      text-align: center;

      button {
        padding: 10px 15px;
        background: ${C.marvelRed};
        color: white;
        cursor: pointer;
        border: 0;
        border-radius: 8px;

        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 2px;
        font-weight: bold;

        outline: 0;
        -webkit-transform: rotateY(-25deg);
        transform: rotateY(-25deg);
        box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.2);

        transition: 0.5s all ease;

        &:hover {
          background: ${C.marvelGrey};
        }
      }
    }

    &,
    & img,
    &::after,
    &::before {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    &::after,
    &::before {
      content: "";
      display: block;
      width: inherit;
      height: inherit;
      position: absolute;
      z-index: -1;
      top: 0;
      background: white;
      border: 1px solid #d9d9d9;
    }

    &::before {
      left: -3px;
    }

    &::after {
      left: -6px;
    }
  }

  .comic-informations {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
  }

  &:hover {
    .book {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25),
        0 9px 20px 0 rgba(0, 0, 0, 0.45);

      img {
        -webkit-transform: rotateY(-25deg);
        transform: rotateY(-25deg);
        box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.2);
      }

      .read-more {
        opacity: 1;
        visibility: visible;
        transition: 0.3s;
        transform: translate3d(0px, 0, 0);
        bottom: 10px;
      }
    }

    .comic-informations {
      p {
        color: ${C.marvelRed};
      }
    }
  }
`;
